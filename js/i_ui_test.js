dojo.declare("i_ui_test", null, {
    constructor: function (options) {
        this.width = 500;
        this.height = 300;
        this.active = d3.select(null);
        this.ls_w = 20;
        this.ls_h = 20;
        this.initialized = 0;
        this.scale_width = 500;
        this.map_instance = d3.map();
        this.duration = 750;
        this.projection = d3.geo.albersUsa()
            .scale(this.scale_width)
            .translate([this.width / 2, this.height / 2]);
        this.path = d3.geo.path()
            .projection(this.projection);
        this.init_map();
    },
    init_map: function () {
        var projection = d3.geo.albersUsa()
            .scale(scale_width)
            .translate([width / 2, height / 2]);

        var zoom = d3.behavior.zoom()
            .translate([0, 0])
            .scale(1)
            .scaleExtent([1, 8])
            .on("zoom", zoomed);

        var path = d3.geo.path()
            .projection(projection);

        //Define quantize scale to sort data values into buckets of color
        var color = d3.scale.quantize()
            .range(["rgb(237,248,233)","rgb(186,228,179)","rgb(116,196,118)","rgb(49,163,84)","rgb(0,109,44)"]);
        //Colors taken from colorbrewer.js, included in the D3 download

        var gis_tip = d3.tip()
            .attr('class', 'd3-tip')
            .offset([6, 0])
            .html(function(d, i) {
                return "<b>State:</b>" + d.properties.name
                    + "<br>Revenue:loading....";
            });

        var svg = d3.select("#mapcounty").append("svg")
            .attr("width", width)
            .attr("height", height)
            .on("click", stopped, true)
            .call(gis_tip);

        svg.append("rect")
                .attr("class", "background")
                .attr("width", this.width)
                .attr("height", this.height)
                .on("click", reset);

            var g = svg.append("g")
                .style("stroke-width", "1.5px");

            svg
                .call(zoom) // delete this line to disable free zooming
                .call(zoom.event);

        d3.csv("data/us-ag-productivity-2004.csv", function(data){
            color.domain([
                d3.min(data, function(d) { return d.value; }),
                d3.max(data, function(d) { return d.value; })
            ]);

            d3.json("map/usa/state/states.json", function (error, json) {
                if (error) throw error;

                // 混合农业生产力数据和Geojson
                // 循环农业生产力数据集中每个值
                for (var i = 0; i < data.length; i++) {
                    // 取得州名
                    var dataState = data[i].state;
                    // 取得数据值，并从字符串转换成浮点数
                    var dataValue = parseFloat(data[i].value);
                    // 在Geojson 中找到相应的州
                    for (var j = 0; j < json.features.length; j++) {
                        var jsonState = json.features[j].properties.name;
                        if (dataState == jsonState) {
                            // 把数据值复制到json 中
                            json.features[j].properties.value = dataValue;
                            // 停止循环json
                            break;
                        }
                    }
                };

                g.selectAll("path")
                    .data(json.features)
                    .enter().append("path")
                    .attr("d", path)
                    .attr("class", "feature")
                    .style("cursor", "hand")
                    .style("fill", function(d) {
                        // 取得数据值
                        var value = d.properties.value;
                        if (value) {
                            // 如果值存在……
                            return color(value);
                        } else {
                            // 如果值不存在……
                            return "#ccc";
                        }
                    })
                    .on('mouseover', gis_tip.show)
                    .on('mouseout', gis_tip.hide)
                    .on("click", clicked);

                g.append("path")
                    .datum(topojson.mesh(json, json.features, function (a, b) {
                        return a !== b;
                    }))
                    .attr("class", "mesh")
                    .attr("d", path);

                //Load in cities data
                d3.csv("data/us-cities.csv", function(data) {

                    g.selectAll("circle")
                        .data(data)
                        .enter()
                        .append("circle")
                        .attr("cx", function(d) {
                            return projection([d.lon, d.lat])[0];
                        })
                        .attr("cy", function(d) {
                            return projection([d.lon, d.lat])[1];
                        })
                        .attr("r", function(d) {
                            return Math.sqrt(parseInt(d.population) * 0.00004);})
                        .style("fill", "yellow")
                        .style("opacity", 0.75);

                });
            })
        });

        function clicked(d) {
            if (active.node() === this) return reset();
            active.classed("active", false);
            active = d3.select(this).classed("active", true);

            var bounds = path.bounds(d),
                dx = bounds[1][0] - bounds[0][0],
                dy = bounds[1][1] - bounds[0][1],
                x = (bounds[0][0] + bounds[1][0]) / 2,
                y = (bounds[0][1] + bounds[1][1]) / 2,
                scale = .9 / Math.max(dx / width, dy / height),
                translate = [width / 2 - scale * x, height / 2 - scale * y];

            svg.transition()
                .duration(750)
                .call(zoom.translate(translate).scale(scale).event);
        }
        function reset() {
            active.classed("active", false);
            active = d3.select(null);

            svg.transition()
                .duration(750)
                .call(zoom.translate([0, 0]).scale(1).event);
        }
        function zoomed() {
            g.style("stroke-width", 1.5 / d3.event.scale + "px");
            g.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
        }
        // If the drag behavior prevents the default click,
        // also stop propagation so we don’t click-to-zoom.
        function stopped() {
            if (d3.event.defaultPrevented) d3.event.stopPropagation();
        }
        dojo.publish("on_mapready", {});
        if (gis_data && !this.initialized) this.on_gisdata();
    },
    on_gisdata: function() {
        if (!gis_data) return;
        //var m = "client:dashboard:gis:usa:{'37059,356.93;12111,3638.77;23003,120000.44;26037,1093.47;34023,15510.36;35013,2357.17;27027,2416.38;48477,693.92;47157,8119.78;39105,29.95;2290,140000.22;23001,1783.90;49005,3980.74;53031,279.98;13299,7363.44;48345,119.99;46035,844.96;09009,11668.42;56001,2113.75;00000,18249.78;06105,11.51;20031,39.99;54087,161.99;28149,1179.84;54021,659.98;51051,39.99;30063,3017.93;13035,29.99;39039,49.00;01089,11618.76;45045,6018.58;05115,2982.38;26103,618.09;29007,1327.34;42075,732.68;06039,1128.90;37125,1129.98;36003,39.99;36069,1736.42;21021,56.68;22011,757.41;13233,124.97;17127,157.46;16005,1022.87;05049,59.99;56035,17.94;55045,19.90;01057,59.99;54055,71.99;17029,3848.93;22111,248.49;49039,1299.97;4027,90000.45'}";
        var mi = this.map_instance; if (!mi) return;
        var gc = this.gis_color; if (!gc) return;
        var mc = this.map_counties; if (!mc) return;
        var mj = d3.map(); if (!mj) return;
        if (!mi) return;
        var ar = gis_data.split("'")[1].split(";");

        for (idx = ar.length - 1; idx >= 0; idx--) {
            mi.set(ar[idx].split(",")[0], +ar[idx].split(",")[2]);
        };
        for (idx = ar.length - 1; idx >= 0; idx--) {
            mj.set(ar[idx].split(",")[0], +ar[idx].split(",")[3]);
        };

        this.gis_tip.html(function(d, i) {
            var reveuneT;
            var orderT;
            if (mi.get(d.properties.state) == undefined || mi.get(+d.properties.id) <= 0) {
                reveuneT = 0;
            }
            else {
                reveuneT = mi.get(d.properties.state);
            }
            if (mj.get(d.properties.state) == undefined || mj.get(+d.properties.id) <= 0) {
                orderT = 0;
            }
            else {
                orderT = mj.get(d.properties.state);
            }
            return "<b>State:</b>" + d.properties.name
                + "<br>Orders:" + orderT
                + "<br>Revenue:" + dojo.currency.format(reveuneT, { currency: "USD", places: 0 });
        });

        mc.attr("class", function(d) {
            if (mi.get(d.properties.state) == undefined || mi.get(d.properties.state) <= 0) {
                return "reset";
            } else {
                return gc(mi.get(d.properties.state));
            }
        });
        this.initialized = 1;
    }
});
