var i_ui_realtime_websocket;
dojo.require("dojo.date.locale");
dojo.require("https://raw.githubusercontent.com/ivanyinusa/WebKPI/gh-pages/js/dojox/timing.js");
dojo.declare("i_ui_websocket", null, {
    constructor: function(options) {
        if (options.div_spark_logo_activate) this.div_spark_logo_activate = options.div_spark_logo_activate;
        if (options.div_spark_logo_deactivate) this.div_spark_logo_deactivate = options.div_spark_logo_deactivate;
        if (options.gauge_cdc) this.gauge_cdc = new i_ui_gauge(options.gauge_cdc);
        if (options.gauge_spark) this.gauge_spark = new i_ui_gauge(options.gauge_spark);
        if (options.gauge_socket) this.gauge_socket = new i_ui_gauge(options.gauge_socket);
        if (options.gauge_d3) this.gauge_d3 = new i_ui_gauge(options.gauge_d3);
        this.lbl_proc_time = options.lbl_proc_time;
        this.lbl_proc_socket = options.lbl_proc_socket;
        this.tbl_bu_sales = options.tbl_bu_sales;

        this.status = "";
        this.datekey = "";
        if (options.push_gis) this.push_gis=options.push_gis;
        if (options.push_date) this.push_date = options.push_date;
        if (options.push_time) this.push_time = options.push_time;
        if (options.push_message) this.push_message = options.push_message;
        if (options.push_kpi) this.push_kpi = options.push_kpi;
        this.url = "websocket.html?host=" + options.arg.host + "&port=" + options.arg.port + "&channel=" + options.arg.channel;
        this.smb = "";
        this.wholesale = "";
        this.smbsafe = -1;
        this.wholesalesafe = -1;
        var el = "i_ui_realtime_websocket_if_socket";
        dojo.create("iframe", {
            id: el,
            style: "display:none;width:0px;height:0px;"
        }, dojo.body());
        this.proxy = dojo.byId(el);

        this.retry_inst = {
            status: 0,
            timer: new dojox.timing.Timer(6000)
        }

        dojo.connect(this.retry_inst.timer, "onTick", this, "call_retry");
        if (options.onMessage) this.onMessage = options.onMessage;
        i_ui_realtime_websocket = this;
        this.append_links();
        this.go();
    },
    go: function(evt) {
        this.proxy.src = this.url + "&id=" + Math.random();
    },
    call_retry: function() {
        this.retry_inst.status += 1;
        this.go();
    },
    set_status: function(status) {
        if (status == "disconnected") {
            if (!this.retry_inst.status) this.retry_inst.timer.start();
            this.lbl_proc_socket.innerHTML = "<span style='color:#CCCCCC;'>Disconnected</span>";
            this.div_spark_logo_activate.style.display = "none";
            this.div_spark_logo_deactivate.style.display = "block";
            this.lbl_proc_time.style.color = "#CCCCCC";
        } else if (status == "connected" || this.retry_inst.status == 300) {

            this.retry_inst.status = 0;
            this.retry_inst.timer.stop();
            this.lbl_proc_socket.innerHTML = "<span style='color:green;'>Connected</span>";
            this.div_spark_logo_deactivate.style.display = "none";
            this.div_spark_logo_activate.style.display = "block";
            this.lbl_proc_time.style.color = "green";
        }
    },
    set_message: function(data) {
        if (!data) return;
        if (data.startsWith("default:today:")) {
            this.datekey = data.replace("default:today:", "");
            this.push_date(new Date(this.datekey));
        } else if (data.startsWith("generator:")) {
            var e = data.replace("generator:", "").trim();
            this.set_status(e);
            this.gauge_cdc.run(100);
            if (data.startsWith("generator: From ")) {
                this.lbl_proc_time.innerHTML = data.split(" to ")[1];
                this.push_time(data.split(" to ")[1].replace(/-/g, "/"));
            }
        } else if (data.startsWith("client:status:running")) {
            //scala:running:2015-05-27
            var ar = data.split(":");
            this.gauge_spark.run(100);
            this.datekey = ar[3].replace(/-/g, "/");
            this.push_date(new Date(this.datekey));
        } else if (data.startsWith("client:overview:search:")) {
           
        }else if (data.startsWith("client:overview:")) {
            
            this.proc_scala_current(data);
            this.gauge_socket.run(100);
        } else if (data.startsWith("client:dashboard:gis:usa")) {   //"client:map:gis"
      //  console.log(data)
            gis_data = data;
            this.gauge_d3.run(100);
            if(this.push_gis) this.push_gis(data);
        }
    },
    proc_scala_current: function(source) {
        //Valid,74861.73,18049,4472747.49,224885.43,74861.73,43069,-143995.75,0.0;Void,5526.07,639,270345.97,11422.16,5526.07,1273,-2770.9,0.0
        var tag = source.split("{")[0].split(":")[2].replace("_", "");
        source = source.replace(/'/g, "\"");
        var jsData = dojoJSON.parse("{" + source.split("{")[1]);
        var data = jsData.current;
      //  if (tag == "b2b") return;
        if (data != "") {
            var r = {
                bu: tag,
                soamount: 0.0,
                orders: 0,
                shippingcharge: 0,
                grossproductmargin: 0.0,
                quantity: 0,
                discount: 0.0,
                eims: 0.0,
                ex_soamount: 0.0,
                ex_orders: 0,
                ex_grossproductmargin: 0.0,
                ex_shippingcharge: 0.0,
                ex_quantity: 0,
                drafteims:0
            }
            var c_void;
            var c_valid;
            var c_status = data.split(";");
            for (var i = 0; i < c_status.length; i++) {
                if (c_status[i].split(",")[0] == "Void") c_void = c_status[i].split(",");
                else {
                    c_valid = c_status[i].split(",");
                }
            }
            //0 status
            //1 ShippingCharge
            //2 Orders
            //3 Soamount
            //4 GrossProductMargin
            //5 ShippingMargin
            //6 Quantity
            //7 Discount
            //8 EIMS
            if (c_valid != undefined) {
                r.soamount = parseFloat(c_valid[3].trim());
                r.orders = parseInt(c_valid[2].trim());
                r.shippingcharge = parseFloat(c_valid[1].trim());
                r.grossproductmargin = parseFloat(c_valid[4].trim());
                r.quantity = parseInt(c_valid[6].trim());
                r.discount = parseFloat(c_valid[7].trim());
                r.eims = parseFloat(c_valid[8].trim());
                r.drafteims = parseFloat(c_valid[9].trim());
            }
            if (c_void != undefined) {
                r.ex_soamount = parseFloat(c_void[3].trim());
                r.ex_orders = parseInt(c_void[2].trim());
                r.ex_grossproductmargin = parseFloat(c_void[4].trim());
                r.ex_shippingcharge = parseFloat(c_void[1].trim());
                r.ex_quantity = parseInt(c_void[6].trim());
            }
//            if (r.bu == "wholesale") {
//                this.wholesale = r;
//                this.wholesalesafe = 1;
//            }
//            if (r.bu == "smb") {
//                this.smb = r;
//                this.smbsafe = 1;
//            }
//            if (this.wholesalesafe == 1 && this.smbsafe == 1 && (r.bu == "wholesale" || r.bu == "smb")) {
//                this.b2b_sum(this.wholesale, this.smb);
//            }
            if (this.push_kpi) this.push_kpi(r);
        }
    },
    b2b_sum: function(wh, sm) {
        var r = {
            bu: "b2b",
            soamount: 0.0,
            orders: 0,
            shippingcharge: 0,
            grossproductmargin: 0.0,
            quantity: 0,
            discount: 0.0,
            eims: 0.0,
            ex_soamount: 0.0,
            ex_orders: 0,
            ex_grossproductmargin: 0.0,
            ex_shippingcharge: 0.0,
            ex_quantity: 0
        }
        r.soamount = wh.soamount + sm.soamount;
        r.orders = wh.orders + sm.orders;
        r.shippingcharge = wh.shippingcharge + sm.shippingcharge;
        r.grossproductmargin = wh.grossproductmargin + sm.grossproductmargin;
        r.quantity = wh.quantity + sm.quantity;
        r.discount = wh.discount + sm.discount;
        r.eims = wh.eims + sm.eims;
        r.ex_soamount = wh.ex_soamount + sm.ex_soamount;
        r.ex_orders = wh.ex_orders + sm.ex_orders;
        r.ex_grossproductmargin = wh.ex_grossproductmargin + sm.ex_grossproductmargin;
        r.ex_shippingcharge = wh.ex_shippingcharge + sm.ex_shippingcharge;
        r.ex_quantity = wh.ex_quantity + sm.ex_quantity;
        if (this.push_kpi) this.push_kpi(r);
    },
    append_links: function() {
        var nodes3 = dojo.query(".bu-link");
        nodes3.connect("mouseenter", function() {
            if (dojo.attr(this, "BU")) this.style.color = "#FF9900";
        }).connect("mouseleave", function() {
            if (dojo.attr(this, "BU")) this.style.color = "#1A93D0";
        }).connect("click", function() {
            var BU = dojo.attr(this, "BU");
            var url = "so_bybu/index.html?bu=" + BU + "&id=" + $random(10000000, 90000000);
            window.location = url;
        });

        var nodes2 = this.tbl_bu_sales.rows;
        for (i = 1; i < nodes2.length; i++) {
            var el = nodes2[i];
            el.onmouseover = function() { this.style.backgroundColor = "#ECF0FD"; }
            el.onmouseout = function() { this.style.backgroundColor = "#fff"; }
        }
    }
});



