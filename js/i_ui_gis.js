dojo.declare("i_ui_gis", null, {
    constructor: function(options) {
        this.width = 500;
        this.height = 260;
        this.ls_w = 20;
        this.ls_h = 20;
        this.initialized = 0;
        this.scale_width = 460;
        this.map_instance = d3.map();
        this.init_map();
        this.get_map_json();
    },
    init_map: function() {
        var range = [0, 270000];
        this.scale_for_map = d3.scale.ordinal()
            .domain(d3.range(9))
            .rangeBands([range[0], range[1]]).range();

        this.scale_for_legend = d3.scale.ordinal()   //scale for legend
            .domain(d3.range(9))
            .rangeBands([range[1], range[0]]).range();

        this.gis_color = d3.scale.threshold()
            .domain(this.scale_for_map)
            .range(d3.range(12).map(function(i) { return "q" + i.toString() + "-13"; }));

        var projection = d3.geo.albersUsa()
            .scale(this.scale_width)
            .translate([(this.width * 0.45), (this.height * 0.50)]);

        this.path = d3.geo.path()
            .projection(projection);

        this.gis_tip = d3.tip()
            .attr('class', 'd3-tip')
            .offset([6, 0])
            .html(function(d, i) {
                return "<b>State:</b>" + d.properties.name
                    + "<br>Revenue:loading....";
            });

        this.svg = d3.selectAll("#mapcounty").append("svg")
            .attr("width", this.width)
            .attr("height", this.height)
            .call(this.gis_tip);

        this.g_background = this.svg.append("g");
        this.g_background.append("rect")
            .attr("class", "background")
            .attr("width", this.width)
            .attr("height", this.height);
    },
    get_map_json: function() {
        dojo.xhrGet({
            url: "us-states.json",
            handleAs: "json",
            load: dojo.hitch(this, this.draw_map)
        });
    },
    to_county: function() {
        document.location.href = "gis/index.html";
    },
    draw_map: function(us) {
        var ls_h = this.ls_h;
        var height = this.height;
        var gis_color = this.gis_color;

        this.map_counties = this.g_background.append("g")
            .attr("id", "counties")
            .selectAll("path")
            .data(topojson.feature(us, us.objects.states).features)
            .enter().append("path")
            .attr("d", this.path)
            .style("cursor", "hand")
            .on('mouseover', this.gis_tip.show)
            .on('mouseout', this.gis_tip.hide)
            .on('click', this.to_county);

        var labelStartCoodinates = [510, 130];
        var path = this.path;
        var g_back = this.g_background;
        this.g_background.selectAll("shortnameview")
        .data(topojson.feature(us, us.objects.states).features)
        .enter()
        .append("g")
        .attr("draw-shortname", function(d) {
            var center = path.centroid(d);
            if (isNaN(center[0])) return;
            var xOffset = 7.5, yOffset = 5;

            if (["FL", "KY", "MI"].indexOf(d.properties.state) > -1) xOffset = -2.5;
            if (d.properties.state === "NY") {
                xOffset = 6;
                yOffset = 1;
            }
            if (d.properties.state === "MI") yOffset = 18;
            if (d.properties.state === "LA") xOffset = 13;

            var x = 0;
            var y = 0;

            x = center[0] - xOffset;
            y = center[1] + yOffset;
            var yStart = labelStartCoodinates[1];

            var smallStateIndex = ["VT", "NH", "MA", "RI", "CT", "NJ", "DE", "MD", "DC"].indexOf(d.properties.state);
            if (smallStateIndex > -1) {
                x = labelStartCoodinates[0] - 100;
                y = yStart + (smallStateIndex * (2 + 12)) - 60;
                g_back.append("line")
                .attr("x1", x - 3)
                .attr("y1", y - 5)
                .attr("x2", center[0])
                .attr("y2", center[1])
                .style("stroke", "#000")
                .style("stroke-width", 1);
            }
            //  if (x = "NaN") { console.log(d.properties.state) }

            g_back.append("text")
                .attr("x", x)
                .attr("y", y)
                .style("font-size", '10px')
                .style("font-family", "Verdana")
                .style("fill", "#000")
                .style("pointer-events", "none")
                .text(d.properties.state);

        });


        this.legend = this.svg.selectAll("g.legend")
            .data(this.scale_for_legend)
            .enter().append("g")
            .attr("class", "legend");

        this.legendimage = this.legend.append("rect")
            .attr("x", 0)
            .attr("y", function(d, i) { return ((i + 1) * ls_h); })
            .attr("width", this.ls_w)
            .attr("height", this.ls_h)
            .attr("class", function(d, i) { return gis_color(d); });

        this.legendtext = this.legend.append("text")
            .attr("x", 30)
            .attr("y", function(d, i) { return ((i + 1) * ls_h) + 24; })
            .text(function count(d, i) {
                if (i == 0) {
                    return ">" + d3.format("s")(d).toString();
                }
                else {
                    return d3.format("s")(d).toString();
                }
            });
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

