dojo.declare("i_ui_digit", null, {
    constructor: function(options) {
    },
    debugtest: function() {
        console.log("helloworld")
    },
    urldecode: function(str) {
        return decodeURIComponent((str + '').replace(/\+/g, '%20'));
    },
    number: function(inter) {
        if (inter < 10) return ("0" + inter);
        else return inter;
    },
    buchange: function(bu) {
        switch (bu) {
            case "inc":
                return "ABCUniversal Inc.";
                break;
            case "inc_foo":
                return "ABCUniversal Inc.";
                break;
            case "usa":
                return "www.ABCUniversal.com";
                break;
            case "b2b":
                return "www.ABCUniversalbusiness.com";
                break;
            case "can":
                return "www.ABCUniversal.ca";
                break;
            case "mkt":
                return "marketplace";
                break;
            case "vf":
                return "Virtual Fulfillment";
                break;
            case "ABCUniversalflash":
                return "ABCUniversalflash";
                break;
            case "ebay":
                return "eBay Sales";
                break;
            case "international":
                return "International";
                break;
            case "smb":
                return "B2B SMB";
                break;
            case "wholesale":
                return "B2B Wholesale";
                break;
            case "incex":
                return "Inc.(exclude recertified)";
                break;
            case "mktb2b":
                return "(marketplace) biz.ABCUniversal.com";
                break;
            case "mktusa":
                return "(marketplace) www.ABCUniversal.com";
                break;
            case "mktcan":
                return "(marketplace) www.ABCUniversal.ca";
                break;
            case "increc":
                return "Inc.(recertified)";
                break;
            case "ebayusa":
                return "(eBay) www.ABCUniversal.com";
                break;
            case "ebaycan":
                return "(eBay) www.ABCUniversal.ca";
                break;
            case "jet":
                return "Jet.com";
                break;
            case "3rd":
                return "3rd Party Channel";
                break;
            case "intaus":
                return "Australia";
                break;
            case "intind":
                return "India";
                break;
            case "intirl":
                return "Ireland";
                break;
            case "intnld":
                return "Netherlands";
                break;
            case "intnzl":
                return "New Zealand";
                break;
            case "intpol":
                return "Poland";
                break;
            case "intsgp":
                return "Singapore";
                break;
            case "intgbr":
                return "United Kingdom";
                break;
            default:
                break;
        }
    },
    money: function(valor) {
        if (!valor) return "$0";
        return dojo.currency.format(parseFloat(valor), { currency: "USD", places: 0 });
    },
    replace_minus_sign: function(data) {
        if (!data) return "0.0%";
        data = dojo.number.format(parseFloat(data), { pattern: "#%", places: 2 });
        var new_data = (data) ? data.replace(/^-/g, "($')!") : "0.0%";
        var datareuse = new_data.split("!");
        if (datareuse.length > 1) return datareuse[0];
        else return new_data;
    },
    show_overview_history: function() {
        var interval = ["today,Today:", "l1d,Yesterday:", "l7d,7 Days Ago:", "l14d,14 Days Ago:", "l28d,1 Month Ago:", "lyd,1 Year Ago:"];
        try {
            var allhtml = "<table border='1' style='width:1300px; border-left: 2px solid black;border-right: 2px solid black;border-top: 2px solid black;border-bottom: 2px solid black'>";
            allhtml += "<tr style='font-weight:bold;'>";
            allhtml += "<td align='center' style='background:#fb9b04;border-right: 2px solid black;width:180px;' rowspan='3' colspan='2'>Day</td>";
            allhtml += "</tr>";
            allhtml += "<tr style='font-weight:bold;'>";
            allhtml += "<td align='center' style='background:#fb9b04;border-top: 2px solid black;border-right: 2px solid black;' colspan='12' >Valid SO</td>";
            allhtml += "<td align='center' style='background:#FFFFCC;border-top: 2px solid black;' colspan='3' >Void SO</td>";
            allhtml += "</tr>";
            allhtml += "<tr style='border-top: 2px solid black;border-bottom: 2px solid black;font-weight:bold;left:15px;bottom:15px'>";
            allhtml += "<td align='center' style='background:#fb9b04; padding:2px 5px 2px 5px;'> Sales   <br> Revenue </td>";
            allhtml += "<td align='center' style='background:#fb9b04; padding:2px 5px 2px 5px;'> Growth   <br> % </td>";
            allhtml += "<td align='center' style='background:#fb9b04; padding:2px 5px 2px 5px;'> Discount<br> &nbsp;  </td>";
            allhtml += "<td align='center' style='background:#fb9b04; padding:2px 5px 2px 5px;'> Product <br> Margin  </td>";
            allhtml += "<td align='center' style='background:#fb9b04; padding:2px 5px 2px 5px;'> Product <br> Margin% </td>";
            allhtml += "<td align='center' style='background:#fb9b04; padding:2px 5px 2px 5px;'> Approved    <br> EIMS  </td>";
            allhtml += "<td align='center' style='background:#fb9b04; padding:2px 5px 2px 5px;'> Pending    <br> EIMS  </td>";
            allhtml += "<td align='center' style='background:#fb9b04; padding:2px 5px 2px 5px;'> Total Margin    <br> With Approved + Pending EIMS  </td>";
            allhtml += "<td align='center' style='background:#fb9b04; padding:2px 5px 2px 5px;'> Total Margin    <br> With Approved + Pending EIMS%  </td>";
            allhtml += "<td align='center' style='background:#fb9b04; padding:2px 5px 2px 5px;'> Order   <br> Count   </td>";
            allhtml += "<td align='center' style='background:#fb9b04; padding:2px 5px 2px 5px;'> Quantity<br> Sold    </td>";
            allhtml += "<td align='center' style='background:#fb9b04; padding:2px 5px 2px 5px;border-right: 2px solid black;'> Shipping<br> Revenue </td>";
            allhtml += "<td align='center' style='background:#FFFFCC; padding:2px 5px 2px 5px;'> Sales   <br> Revenue </td>";
            allhtml += "<td align='center' style='background:#FFFFCC; padding:2px 5px 2px 5px;'> Quantity<br> Sold    </td>";
            allhtml += "<td align='center' style='background:#FFFFCC; padding:2px 5px 2px 5px;'> Order   <br> Count   </td>";
            allhtml += "</tr>";
            for (var i = 0; i < interval.length; i++) {
                allhtml += "<tr>";
                allhtml += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;width:100px;font-weight:bold;'>" + interval[i].split(",")[1] + "</td>";
                allhtml += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;border-right: 2px solid black;font-weight:bold;' > <span id='t_" + interval[i].split(",")[0] + "_date_value'></span></td>";
                allhtml += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;' > <span id='t_" + interval[i].split(",")[0] + "_valid_soamount'>0.0</span></td>";
                allhtml += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;' > <span id='t_" + interval[i].split(",")[0] + "_valid_growth'>0.00%</span></td>";
                allhtml += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;' > <span id='t_" + interval[i].split(",")[0] + "_valid_discount'>0.0</span></td>";
                allhtml += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;' > <span id='t_" + interval[i].split(",")[0] + "_valid_margin'>0.0</span></td>";
                allhtml += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;' > <span id='t_" + interval[i].split(",")[0] + "_valid_marginrate'>0.0</span></td>";
                allhtml += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;' > <span id='t_" + interval[i].split(",")[0] + "_valid_eims'>0.0</span></td>";
                allhtml += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;' > <span id='t_" + interval[i].split(",")[0] + "_valid_drafteims'>$0</span></td>";
                allhtml += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;' > <span id='t_" + interval[i].split(",")[0] + "_valid_totalmargin_witheims'>0.0</span></td>";
                allhtml += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;' > <span id='t_" + interval[i].split(",")[0] + "_valid_totalmargin_witheimsrate'>0.00%</span></td>";
                allhtml += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;' > <span id='t_" + interval[i].split(",")[0] + "_valid_orders'>0</span></td>";
                allhtml += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;' > <span id='t_" + interval[i].split(",")[0] + "_valid_quantity'>0</span></td>";
                allhtml += "<td align='right' style='padding:2px 5px 2px 5px; border-right: 2px solid black;border-bottom: 1px dashed;' > <span id='t_" + interval[i].split(",")[0] + "_valid_shipping'>0.0</span></td>";
                allhtml += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;' > <span id='t_" + interval[i].split(",")[0] + "_void_soamount'>0.0</span></td>";
                allhtml += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;' > <span id='t_" + interval[i].split(",")[0] + "_void_quantity'>0</span></td>";
                allhtml += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;' > <span id='t_" + interval[i].split(",")[0] + "_void_orders'>0</span></td>";
                allhtml += "</tr>";
            }

            allhtml += "</table>";
        } catch (e) { }
        if ($("lbl_overall_history")) $("lbl_overall_history").innerHTML = allhtml;
    },
    report: function(div, classify, el, bu, ca, l1d, lyd, se) {
        var props;
        var cate;
        var mktseller;
        if (!div) div = "";
        if (!classify) classify = "Category";
        if (el) props = el;
        if (!bu) bu = "inc";
        if (!l1d) l1d = "";
        if (!lyd) lyd = "";
        var relyd = lyd.replace(/-/g, "/");
        var rel1d = l1d.replace(/-/g, "/");
        if (ca) cate = ca;
        if (se) mktseller = se;
        var name = classify;
        var reportbu = bu;
        var allhtml = div;
        var sumrevenue = 0;
        var suml1d = 0;
        var sumlyd = 0;
        var sumdiscount = 0;
        var sumpm = 0;
        var sumeims = 0;
        var sumdrafteims = 0;
        var sumorder = 0;
        var sumqs = 0;
        var sumsr = 0;
        var sumexrevenue = 0;
        var sumexqs = 0;
        if (name == "Overall") {
            allhtml += "<table border=1 style=';width=90%; border-left: 2px solid black;border-right: 2px solid black;border-top: 2px solid black;border-bottom: 2px solid black;font-size:9pt;'>";
            allhtml += "<tr style='font-weight:bold;'>";
            allhtml += "<td align='center' style='background:#ccffff;border-right: 2px solid black;width:280px;' rowspan='3'><span style='font-weight:bold;'>" + ((BUAbbreviation == "mkt" || BUAbbreviation == "mktb2b" || BUAbbreviation == "mktusa" || BUAbbreviation == "mktcan") ? "Seller" : classify) + "</span></td>";
            allhtml += "<td align='center' style='background:#ccffff;border-right: 2px solid black;width:180px;' rowspan='3' nowrap><span style='font-weight:bold;'>Platform</span></td>";
            allhtml += "</tr>";
            allhtml += "<tr style='font-weight:bold;'>";
            allhtml += "<td align='center' style='background:#ccffff;border-top: 2px solid black;border-right: 2px solid black;' colspan='11' >Valid SO</td>";
            allhtml += "<td align='center' style='background:#FFFFCC;border-top: 2px solid black;' colspan='3' >Void SO</td>";
            allhtml += "</tr>";
            allhtml += "<tr style='border-top: 2px solid black;border-bottom: 2px solid black;font-weight:bold;left:15px;bottom:15px'>";
            allhtml += "<td align='center' style='background:#ccffff; padding:2px 5px 2px 5px;'> Sales   <br> Revenue </td>";
            allhtml += "<td align='center' style='background:#ccffff; padding:2px 5px 2px 5px;'> Discount<br> &nbsp;  </td>";
            allhtml += "<td align='center' style='background:#ccffff; padding:2px 5px 2px 5px;'> Product <br> Margin  </td>";
            allhtml += "<td align='center' style='background:#ccffff; padding:2px 5px 2px 5px;'> Product <br> Margin% </td>";
            allhtml += "<td align='center' style='background:#ccffff; padding:2px 5px 2px 5px;'> Approved    <br> EIMS  </td>";
            allhtml += "<td align='center' style='background:#ccffff; padding:2px 5px 2px 5px;'> Pending    <br> EIMS  </td>";
            allhtml += "<td align='center' style='background:#ccffff; padding:2px 5px 2px 5px;'> Total Margin    <br> With Approved + Pending EIMS  </td>";
            allhtml += "<td align='center' style='background:#ccffff; padding:2px 5px 2px 5px;'> Total Margin <br> With Approved <br>+ Pending EIMS% </td>";
            allhtml += "<td align='center' style='background:#ccffff; padding:2px 5px 2px 5px;'> Order   <br> Count   </td>";
            allhtml += "<td align='center' style='background:#ccffff; padding:2px 5px 2px 5px;'> Quantity<br> Sold    </td>";
            allhtml += "<td align='center' style='background:#ccffff; padding:2px 5px 2px 5px;border-right: 2px solid black;'> Shipping<br> Revenue </td>";
            allhtml += "<td align='center' style='background:#FFFFCC; padding:2px 5px 2px 5px;'> Sales   <br> Revenue </td>";
            allhtml += "<td align='center' style='background:#FFFFCC; padding:2px 5px 2px 5px;'> Quantity<br> Sold    </td>";
            allhtml += "<td align='center' style='background:#FFFFCC; padding:2px 5px 2px 5px;'> Order   <br> Count   </td>";
            allhtml += "</tr>";
        }
        if (name == "Category") {
            allhtml += "<table border=1 style=';width=90%; border-left: 2px solid black;border-right: 2px solid black;border-top: 2px solid black;border-bottom: 2px solid black;font-size:9pt;'>";
            allhtml += "<tr style='font-weight:bold;'>";
            if (BUAbbreviation != "mkt" && BUAbbreviation != "mktb2b" && BUAbbreviation != "mktusa" && BUAbbreviation != "mktcan") allhtml += "<td align='center' style='background:#ccffff;border-right: 2px solid black;width:180px;' rowspan='3' nowrap><span style='font-weight:bold;'>Domain</span></td>";
            allhtml += "<td align='center' style='background:#ccffff;border-right: 2px solid black;width:280px;' rowspan='3'><span style='font-weight:bold;'>" + ((BUAbbreviation == "mkt" || BUAbbreviation == "mktb2b" || BUAbbreviation == "mktusa" || BUAbbreviation == "mktcan") ? "Industry" : classify) + "</span></td>";
            allhtml += "</tr>";
            allhtml += "<tr style='font-weight:bold;'>";
            allhtml += "<td align='center' style='background:#ccffff;border-top: 2px solid black;border-right: 2px solid black;' colspan='13' >Valid SO</td>";
            allhtml += "<td align='center' style='background:#FFFFCC;border-top: 2px solid black;' colspan='3' >Void SO</td>";
            allhtml += "</tr>";
            allhtml += "<tr style='border-top: 2px solid black;border-bottom: 2px solid black;font-weight:bold;left:15px;bottom:15px'>";
            allhtml += "<td align='center' style='background:#ccffff; padding:2px 5px 2px 5px;'> Sales   <br> Revenue </td>";
            allhtml += "<td align='center' style='background:#ccffff; padding:2px 5px 2px 5px;' id='cate_l1d'> Growth%  <br> Yesterday<br><span style='font-size:11px;'>" + rel1d + "</span></td>";
            allhtml += "<td align='center' style='background:#ccffff; padding:2px 5px 2px 5px;' id='cate_lyd'> Growth%  <br> LastYear<br><span style='font-size:10px;'>" + relyd + "</span></td>";
            allhtml += "<td align='center' style='background:#ccffff; padding:2px 5px 2px 5px;'> Discount<br> &nbsp;  </td>";
            allhtml += "<td align='center' style='background:#ccffff; padding:2px 5px 2px 5px;'> Product <br> Margin  </td>";
            allhtml += "<td align='center' style='background:#ccffff; padding:2px 5px 2px 5px;'> Product <br> Margin% </td>";
            allhtml += "<td align='center' style='background:#ccffff; padding:2px 5px 2px 5px;'> Approved    <br> EIMS  </td>";
            allhtml += "<td align='center' style='background:#ccffff; padding:2px 5px 2px 5px;'> Pending    <br> EIMS  </td>";
            allhtml += "<td align='center' style='background:#ccffff; padding:2px 5px 2px 5px;'> Total Margin <br> With Approved <br>+ Pending EIMS </td>";
            allhtml += "<td align='center' style='background:#ccffff; padding:2px 5px 2px 5px;'> Total Margin <br> With Approved <br>+ Pending EIMS%  </td>";
            allhtml += "<td align='center' style='background:#ccffff; padding:2px 5px 2px 5px;'> Order   <br> Count   </td>";
            allhtml += "<td align='center' style='background:#ccffff; padding:2px 5px 2px 5px;'> Quantity<br> Sold    </td>";
            allhtml += "<td align='center' style='background:#ccffff; padding:2px 5px 2px 5px;border-right: 2px solid black;'> Shipping<br> Revenue </td>";
            allhtml += "<td align='center' style='background:#FFFFCC; padding:2px 5px 2px 5px;'> Sales   <br> Revenue </td>";
            allhtml += "<td align='center' style='background:#FFFFCC; padding:2px 5px 2px 5px;'> Quantity<br> Sold    </td>";
            allhtml += "<td align='center' style='background:#FFFFCC; padding:2px 5px 2px 5px;'> Order   <br> Count   </td>";
            allhtml += "</tr>";
        }
        if (name == "Subcategory") {
            allhtml += "<table border=1 style=';width=90%; border-left: 2px solid black;border-right: 2px solid black;border-top: 2px solid black;border-bottom: 2px solid black;font-size:9pt;>";
            allhtml += "<tr style='font-weight:bold;'>";
            allhtml += "<td align='center' style='background:#ccffff;border-right: 2px solid black;width:320px;' rowspan='3'><span style='font-weight:bold;'>" + classify + "</span></td>";
            allhtml += "</tr>";
            allhtml += "<tr style='font-weight:bold;'>";
            allhtml += "<td align='center' style='background:#ccffff;border-top: 2px solid black;border-right: 2px solid black;' colspan='13' >Valid SO</td>";
            allhtml += "<td align='center' style='background:#FFFFCC;border-top: 2px solid black;' colspan='3' >Void SO</td>";
            allhtml += "</tr>";
            allhtml += "<tr style='border-top: 2px solid black;border-bottom: 2px solid black;font-weight:bold;left:15px;bottom:15px'>";
            allhtml += "<td align='center' style='background:#ccffff; padding:2px 5px 2px 5px;'> Sales   <br> Revenue </td>";
            allhtml += "<td align='center' style='background:#ccffff; padding:2px 5px 2px 5px;' id='cate_l1d'> Growth%  <br> Yesterday<br><span style='font-size:11px;'>" + rel1d + "</span></td>";
            allhtml += "<td align='center' style='background:#ccffff; padding:2px 5px 2px 5px;' id='cate_lyd'> Growth%  <br> LastYear<br><span style='font-size:10px;'>" + relyd + "</span></td>";
            allhtml += "<td align='center' style='background:#ccffff; padding:2px 5px 2px 5px;'> Discount<br> &nbsp;  </td>";
            allhtml += "<td align='center' style='background:#ccffff; padding:2px 5px 2px 5px;'> Product <br> Margin  </td>";
            allhtml += "<td align='center' style='background:#ccffff; padding:2px 5px 2px 5px;'> Product <br> Margin% </td>";
            allhtml += "<td align='center' style='background:#ccffff; padding:2px 5px 2px 5px;'> Approved    <br> EIMS  </td>";
            allhtml += "<td align='center' style='background:#ccffff; padding:2px 5px 2px 5px;'> Pending    <br> EIMS  </td>";
            allhtml += "<td align='center' style='background:#ccffff; padding:2px 5px 2px 5px;'> Total Margin <br> With Approved <br>+ Pending EIMS </td>";
            allhtml += "<td align='center' style='background:#ccffff; padding:2px 5px 2px 5px;'> Total Margin <br> With Approved <br>+ Pending EIMS% </td>";
            allhtml += "<td align='center' style='background:#ccffff; padding:2px 5px 2px 5px;'> Order   <br> Count   </td>";
            allhtml += "<td align='center' style='background:#ccffff; padding:2px 5px 2px 5px;'> Quantity<br> Sold    </td>";
            allhtml += "<td align='center' style='background:#ccffff; padding:2px 5px 2px 5px;border-right: 2px solid black;'> Shipping<br> Revenue </td>";
            allhtml += "<td align='center' style='background:#FFFFCC; padding:2px 5px 2px 5px;'> Sales   <br> Revenue </td>";
            allhtml += "<td align='center' style='background:#FFFFCC; padding:2px 5px 2px 5px;'> Quantity<br> Sold    </td>";
            allhtml += "<td align='center' style='background:#FFFFCC; padding:2px 5px 2px 5px;'> Order   <br> Count   </td>";
            allhtml += "</tr>";
        }
        if (name == "Item") {
            var d = new Date();
            var localTime = d.getTime();
            var localOffset = d.getTimezoneOffset() * 60000;
            var utc = localTime + localOffset;
            var offset = -8;
            var us = utc + (3600000 * offset);
            var today = new Date(us);
            this.tostr = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
            var calmonthago = today.setMonth((today.getMonth() - 1));
            this.monthago = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
            allhtml += "<table border=1 style=';width=1200px; border-left: 2px solid black;border-right: 2px solid black;border-top: 2px solid black;border-bottom: 2px solid black;font-size:9pt;'>";
            allhtml += "<tr style='font-weight:bold;'>";
            allhtml += "<td align='center' style='background:#ccffff;border-right: 2px solid black;width:100px;' rowspan='3'><span style='font-weight:bold;'>" + classify + "</span></td>";
            allhtml += "<td align='center' style='background:#ccffff;border-right: 2px solid black;width:240px;' rowspan='3'><span style='font-weight:bold;'>Item Description</span></td>";
            allhtml += "<td align='center' style='background:#ccffff;border-right: 2px solid black;' rowspan='3' colspan='4'><span style='font-weight:bold;'>Link</span></td>";
            allhtml += "</tr>";
            allhtml += "<tr style='font-weight:bold;'>";
            allhtml += "<td align='center' style='background:#ccffff;border-top: 2px solid black;border-right: 2px solid black;' colspan='11' >Valid SO</td>";
            allhtml += "<td align='center' style='background:#FFFFCC;border-top: 2px solid black;' colspan='3' >Void SO</td>";
            allhtml += "</tr>";
            allhtml += "<tr style='border-top: 2px solid black;border-bottom: 2px solid black;font-weight:bold;left:15px;bottom:15px'>";
            allhtml += "<td align='center' style='background:#ccffff; padding:2px 5px 2px 5px;'> Sales   <br> Revenue </td>";
            allhtml += "<td align='center' style='background:#ccffff; padding:2px 5px 2px 5px;'> Discount<br> &nbsp;  </td>";
            allhtml += "<td align='center' style='background:#ccffff; padding:2px 5px 2px 5px;'> Product <br> Margin  </td>";
            allhtml += "<td align='center' style='background:#ccffff; padding:2px 5px 2px 5px;'> Product <br> Margin% </td>";
            allhtml += "<td align='center' style='background:#ccffff; padding:2px 5px 2px 5px;'> Approved    <br> EIMS  </td>";
            allhtml += "<td align='center' style='background:#ccffff; padding:2px 5px 2px 5px;'> Pending    <br> EIMS  </td>";
            allhtml += "<td align='center' style='background:#ccffff; padding:2px 5px 2px 5px;'> Total Margin <br> With Approved <br>+ Pending EIMS </td>";
            allhtml += "<td align='center' style='background:#ccffff; padding:2px 5px 2px 5px;'> Total Margin <br> With Approved <br>+ Pending EIMS% </td>";
            allhtml += "<td align='center' style='background:#ccffff; padding:2px 5px 2px 5px;'> Order   <br> Count   </td>";
            allhtml += "<td align='center' style='background:#ccffff; padding:2px 5px 2px 5px;'> Quantity<br> Sold    </td>";
            allhtml += "<td align='center' style='background:#ccffff; padding:2px 5px 2px 5px;border-right: 2px solid black;'> Shipping<br> Revenue </td>";
            allhtml += "<td align='center' style='background:#FFFFCC; padding:2px 5px 2px 5px;'> Sales   <br> Revenue </td>";
            allhtml += "<td align='center' style='background:#FFFFCC; padding:2px 5px 2px 5px;'> Quantity<br> Sold    </td>";
            allhtml += "<td align='center' style='background:#FFFFCC; padding:2px 5px 2px 5px;'> Order   <br> Count   </td>";
            allhtml += "</tr>";
        }

        for (var i = 0; i < props.length; i++) {
            allhtml += this.report_addrow(name, props[i], reportbu, cate, mktseller);
            suml1d += props[i].l1d;
            sumlyd += props[i].lyd;
            sumrevenue += props[i].soamount;
            sumdiscount += props[i].discount;
            sumpm += props[i].grossproductmargin;
            sumeims += props[i].eims;
            sumdrafteims += props[i].drafteims;
            sumqs += props[i].quantity;
            sumsr += props[i].shippingrevenue;
            sumexrevenue += props[i].ex_soamount;
            sumexqs += props[i].ex_quantity;
        }
        var sumgrowl1d = (sumrevenue - suml1d) / suml1d;
        var sumgrowlyd = (sumrevenue - sumlyd) / sumlyd;
        var sumpmr = sumpm / sumrevenue;
        allhtml += "<tr style='border-top: 2px solid black;border-bottom: 2px solid black;font-weight:bold;left:15px;bottom:15px'>";
        if (name == "Overall") allhtml += "<td align='right' style='background:#ffff99; padding:2px 5px 2px 5px;border-right: 2px solid black;'colspan='2'>Total:</td>";
        else if (BUAbbreviation == "mkt" || BUAbbreviation == "mktusa" || BUAbbreviation == "mktb2b" || BUAbbreviation == "mktcan" || name != "Category") allhtml += "<td align='right' style='background:#ffff99; padding:2px 5px 2px 5px;border-right: 2px solid black;'colspan=" + ((name == "Item") ? 6 : 1) + "'>Total:</td>";
        else allhtml += "<td align='right' style='background:#ffff99; padding:2px 5px 2px 5px;border-right: 2px solid black;'colspan='2'>Total:</td>";
        allhtml += "<td align='right' style='background:#ffff99; padding:2px 5px 2px 5px;'>" + "<font class='" + ((sumrevenue >= 0) ? "tablenumber-possitive" : "tablenumber-negative") + "'>" + this.money(sumrevenue) + "</font></td>";
        if (name == "Category" || name == "Subcategory") allhtml += "<td align='right' style='background:#ffff99; padding:2px 5px 2px 5px;'>" + "<font class='" + ((sumgrowl1d >= 0) ? "tablenumber-possitive" : "tablenumber-negative") + "'>" + this.replace_minus_sign(sumgrowl1d) + "</font></td>";
        if (name == "Category"||name == "Subcategory") allhtml += "<td align='right' style='background:#ffff99; padding:2px 5px 2px 5px;'>" + "<font class='" + ((sumgrowlyd >= 0) ? "tablenumber-possitive" : "tablenumber-negative") + "'>" + this.replace_minus_sign(sumgrowlyd) + "</font></td>";
        allhtml += "<td align='right' style='background:#ffff99; padding:2px 5px 2px 5px;'>" + "<font class='" + ((sumdiscount >= 0) ? "tablenumber-possitive" : "tablenumber-negative") + "'>" + this.money(sumdiscount) + "</font></td>";
        allhtml += "<td align='right' style='background:#ffff99; padding:2px 5px 2px 5px;'>" + "<font class='" + ((sumpm >= 0) ? "tablenumber-possitive" : "tablenumber-negative") + "'>" + this.money(sumpm) + "</font></td>";
        allhtml += "<td align='right' style='background:#ffff99; padding:2px 5px 2px 5px;'>" + "<font class='" + ((sumpmr >= 0) ? "tablenumber-possitive" : "tablenumber-negative") + "'>" + this.replace_minus_sign(sumpmr) + "</font></td>";
        allhtml += "<td align='right' style='background:#ffff99; padding:2px 5px 2px 5px;'>" + "<font class='" + ((sumeims >= 0) ? "tablenumber-possitive" : "tablenumber-negative") + "'>" + this.money(sumeims) + "</font></td>";
        allhtml += "<td align='right' style='background:#ffff99; padding:2px 5px 2px 5px;'>" + "<font class='" + ((sumdrafteims >= 0) ? "tablenumber-possitive" : "tablenumber-negative") + "'>" + this.money(sumdrafteims) + "</font></td>";
        allhtml += "<td align='right' style='background:#ffff99; padding:2px 5px 2px 5px;'>" + "<font class='" + (((sumpm + sumeims + sumdrafteims) >= 0) ? "tablenumber-possitive" : "tablenumber-negative") + "'>" + this.money(sumpm + sumeims + sumdrafteims) + "</font></td>";
        allhtml += "<td align='right' style='background:#ffff99; padding:2px 5px 2px 5px;'>" + "<font class='" + (((sumpm + sumeims + sumdrafteims) / sumrevenue >= 0) ? "tablenumber-possitive" : "tablenumber-negative") + "'>" + this.replace_minus_sign((sumpm + sumeims + sumdrafteims) / sumrevenue) + "</font></td>";
        allhtml += "<td align='right' style='background:#ffff99; padding:2px 5px 2px 5px;'> </td>";
        allhtml += "<td align='right' style='background:#ffff99; padding:2px 5px 2px 5px;'>" + dojo.number.format(sumqs) + "</td>";
        allhtml += "<td align='right' style='background:#ffff99; padding:2px 5px 2px 5px;border-right: 2px solid black;'>" + "<font class='" + ((sumsr >= 0) ? "tablenumber-possitive" : "tablenumber-negative") + "'>" + this.money(sumsr) + "</font></td>";
        allhtml += "<td align='right' style='background:#ffff99; padding:2px 5px 2px 5px;'>" + this.money(sumexrevenue) + "</td>";
        allhtml += "<td align='right' style='background:#ffff99; padding:2px 5px 2px 5px;'>" + dojo.number.format(sumexqs) + "</td>";
        allhtml += "<td align='right' style='background:#ffff99; padding:2px 5px 2px 5px;'></td>";
        allhtml += "</tr>";
        allhtml += "</table>";
        return allhtml;

    },
    report_addrow: function(classify, el, BUAbbreviation, category, seller) {
        var url = "";
        var html = "<tr>";
        if (classify == "Overall") {
            var elseller = el.seller.replace(/\ /g, '%20');
            url = "../so_bybu/index.html?bu=" + BUAbbreviation + "&seller=" + elseller + "&id=" + $random(10000000, 90000000);
            html += "<td align='left ' style='padding:2px 5px 2px 5px; border-right: 2px solid black;border-bottom: 1px dashed;'><a href=" + url + ">" + this.urldecode(el.sellername) + "</a></td>";
            html += "<td align='left' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;border-right: 2px solid black;'>" + el.platform + "</td>";
            html += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'>" + this.money(el.soamount) + "</td>";
            html += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'>" + "<font class='" + ((el.discount >= 0) ? "tablenumber-possitive" : "tablenumber-negative") + "'>" + this.money(el.discount) + "</font></td>";
            html += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'>" + "<font class='" + ((el.grossproductmargin >= 0) ? "tablenumber-possitive" : "tablenumber-negative") + "'>" + this.money(el.grossproductmargin) + "</font></td>";
            html += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'>" + "<font class='" + ((el.grossproductmargin >= 0) ? "tablenumber-possitive" : "tablenumber-negative") + "'>" + this.replace_minus_sign(el.grossproductmargin / el.soamount) + "</font></td>";
            html += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'>" + this.money(el.eims) + "</td>";
            html += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'>" + this.money(el.drafteims) + "</td>";
            html += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'>" + "<font class='" + (((el.grossproductmargin + el.eims) >= 0) ? "tablenumber-possitive" : "tablenumber-negative") + "'>" + this.money(el.grossproductmargin + el.eims) + "</font></td>";
            html += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'>" + "<font class='" + (((el.grossproductmargin + el.eims) >= 0) ? "tablenumber-possitive" : "tablenumber-negative") + "'>" + this.replace_minus_sign((el.grossproductmargin + el.eims) / el.soamount) + "</font></td>";
            html += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'>" + el.orders + "</td>";
            html += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'>" + el.quantity + "</td>";
            html += "<td align='right' style='padding:2px 5px 2px 5px; border-right: 2px solid black;border-bottom: 1px dashed;'>" + this.money(el.shippingrevenue) + "</td>";
            html += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'>" + this.money(el.ex_soamount) + "</td>";
            html += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'>" + el.ex_quantity + "</td>";
            html += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'>" + el.ex_orders + "</td>";
            html += "</tr>";
        }
        if (classify == "Category") {
            var elcategory = el.category.replace(/\ /g, '%20');
            url = "../so_bysubcategory/index.html?bu=" + BUAbbreviation + "&category=" + elcategory + "&seller=" + seller + "&id=" + $random(10000000, 90000000);
            if (BUAbbreviation != "mkt" && BUAbbreviation != "mktusa" && BUAbbreviation != "mktb2b" && BUAbbreviation != "mktcan") html += "<td align='left' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;border-right: 2px solid black;'>" + el.domain + "</td>";
            html += "<td align='left ' style='padding:2px 5px 2px 5px; border-right: 2px solid black;border-bottom: 1px dashed;'><a href=" + url + ">" + el.category + "</a></td>";
            html += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'>" + this.money(el.soamount) + "</td>";
            html += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'><font class='" + ((el.growl1d >= 0) ? "tablenumber-possitive" : "tablenumber-negative") + "'>" + this.replace_minus_sign(el.growl1d) + "</font></td>";
            html += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'><font class='" + ((el.growlyd >= 0) ? "tablenumber-possitive" : "tablenumber-negative") + "'>" + this.replace_minus_sign(el.growlyd) + "</font></td>";
            html += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'>" + "<font class='" + ((el.discount >= 0) ? "tablenumber-possitive" : "tablenumber-negative") + "'>" + this.money(el.discount) + "</font></td>";
            html += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'>" + "<font class='" + ((el.grossproductmargin >= 0) ? "tablenumber-possitive" : "tablenumber-negative") + "'>" + this.money(el.grossproductmargin) + "</font></td>";
            html += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'>" + "<font class='" + ((el.grossproductmargin >= 0) ? "tablenumber-possitive" : "tablenumber-negative") + "'>" + this.replace_minus_sign(el.grossproductmargin / el.soamount) + "</font></td>";
            html += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'>" + this.money(el.eims) + "</td>";
            html += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'>" + this.money(el.drafteims) + "</td>";
            html += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'>" + "<font class='" + (((el.grossproductmargin + el.eims + el.drafteims) >= 0) ? "tablenumber-possitive" : "tablenumber-negative") + "'>" + this.money(el.grossproductmargin + el.eims + el.drafteims) + "</font></td>";
            html += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'>" + "<font class='" + (((el.grossproductmargin + el.eims + el.drafteims) >= 0) ? "tablenumber-possitive" : "tablenumber-negative") + "'>" + this.replace_minus_sign((el.grossproductmargin + el.eims + el.drafteims) / el.soamount) + "</font></td>";
            html += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'>" + el.orders + "</td>";
            html += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'>" + el.quantity + "</td>";
            html += "<td align='right' style='padding:2px 5px 2px 5px; border-right: 2px solid black;border-bottom: 1px dashed;'>" + this.money(el.shippingrevenue) + "</td>";
            html += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'>" + this.money(el.ex_soamount) + "</td>";
            html += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'>" + el.ex_quantity + "</td>";
            html += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'>" + el.ex_orders + "</td>";
            html += "</tr>";
        }

        if (classify == "Subcategory") {
            var subcategory = el.subcategory.replace(/\ /g, '%20');
            var su_category = category.replace(/\ /g, '%20');
            url = "../so_byitem/index.html?bu=" + BUAbbreviation + "&category=" + su_category + "&subcategory=" + subcategory + "&seller=" + seller + "&id=" + $random(10000000, 90000000);
            html += "<td align='left ' style='padding:2px 5px 2px 5px; border-right: 2px solid black;border-bottom: 1px dashed;'><a href=" + url + ">" + el.subcategory + "</a></td>";
            html += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'>" + this.money(el.soamount) + "</td>";
            html += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'><font class='" + ((el.growl1d >= 0) ? "tablenumber-possitive" : "tablenumber-negative") + "'>" + this.replace_minus_sign(el.growl1d) + "</font></td>";
            html += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'><font class='" + ((el.growlyd >= 0) ? "tablenumber-possitive" : "tablenumber-negative") + "'>" + this.replace_minus_sign(el.growlyd) + "</font></td>";
            html += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'>" + "<font class='" + ((el.discount >= 0) ? "tablenumber-possitive" : "tablenumber-negative") + "'>" + this.money(el.discount) + "</font></td>";
            html += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'>" + "<font class='" + ((el.grossproductmargin >= 0) ? "tablenumber-possitive" : "tablenumber-negative") + "'>" + this.money(el.grossproductmargin) + "</font></td>";
            html += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'>" + "<font class='" + ((el.grossproductmarginr >= 0) ? "tablenumber-possitive" : "tablenumber-negative") + "'>" + this.replace_minus_sign(el.grossproductmarginr) + "</font></td>";
            html += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'>" + this.money(el.eims) + "</td>";
            html += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'>" + this.money(el.drafteims) + "</td>";
            html += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'>" + "<font class='" + (((el.totalmwitheims) >= 0) ? "tablenumber-possitive" : "tablenumber-negative") + "'>" + this.money(el.totalmwitheims) + "</font></td>";
            html += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'>" + "<font class='" + (((el.totalmwitheimsr) >= 0) ? "tablenumber-possitive" : "tablenumber-negative") + "'>" + this.replace_minus_sign(el.totalmwitheimsr) + "</font></td>";
            html += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'>" + el.orders + "</td>";
            html += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'>" + el.quantity + "</td>";
            html += "<td align='right' style='padding:2px 5px 2px 5px; border-right: 2px solid black;border-bottom: 1px dashed;'>" + this.money(el.shippingrevenue) + "</td>";
            html += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'>" + this.money(el.ex_soamount) + "</td>";
            html += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'>" + el.ex_quantity + "</td>";
            html += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'>" + el.ex_orders + "</td>";
            html += "</tr>";
        }
        if (classify == "Item") {
            

            var lnk_pdt;
            var lnk_im;
            var lnk_pr;
            var lnk_so;
            switch (BUAbbreviation) {
                case "can":
                    lnk_pdt = "http://www.ABCUniversal.ca/Product/Product.aspx?Item=" + el.item;
                    lnk_im = "http://central.ABCUniversal.org/portal/default.aspx#/ABCUniversalCentral.ItemMaintain.SL.Product/ItemUpdateView?country=" + BUAbbreviation.toUpperCase() + "&ItemNumber=" + el.item;
                    lnk_pr = "http://central2.ABCUniversal.org/ap-report/90dtrend/CAN/" + el.grp + "/" + category + "/" + el.item;
                    lnk_so = "http://central.ABCUniversal.org/portal/default.aspx#/ABCUniversalCentral.NESO.Item/SOHistory?ItemNumber=" + el.item + "&CompanyCode=1003&CountryCode=CAN&FromDate=" + this.monthago + "&ToDate=" + this.tostr;
                    break;
                case "b2b": case "smb": case "wholesale":
                    lnk_pdt = "http://www.ABCUniversalbusiness.com/product/product.aspx?item=" + el.item;
                    lnk_im = "http://central.ABCUniversal.org/portal/default.aspx#/ABCUniversalCentral.ItemMaintain.SL.Product/ItemUpdateView?country=USB&ItemNumber=" + el.item;
                    lnk_pr = "http://central2.ABCUniversal.org/ap-report/90dtrend/USB/" + el.grp + "/" + category + "/" + el.item;
                    lnk_so = "http://central.ABCUniversal.org/portal/default.aspx#/ABCUniversalCentral.NESO.Item/SOHistory?ItemNumber=9b" + el.item + "&CompanyCode=1003&CountryCode=USB&FromDate=" + this.monthago + "&ToDate=" + this.tostr;
                    if (el.item.toLowerCase().startsWith("snet")) lnk_so = "http://central.ABCUniversal.org/portal/default.aspx#/ABCUniversalCentral.NESO.Item/SOHistory?ItemNumber=" + el.item + "&CompanyCode=1003&CountryCode=USB&FromDate=" + this.monthago + "&ToDate=" + this.tostr;
                    if (el.item.toLowerCase().startsWith("ewra")) lnk_so = "http://central.ABCUniversal.org/portal/default.aspx#/ABCUniversalCentral.NESO.Item/SOHistory?ItemNumber=" + el.item + "&CompanyCode=1003&CountryCode=USB&FromDate=" + this.monthago + "&ToDate=" + this.tostr;
                    if (el.item.toLowerCase().startsWith("gc")) lnk_so = "http://central.ABCUniversal.org/portal/default.aspx#/ABCUniversalCentral.NESO.Item/SOHistory?ItemNumber=" + el.item + "&CompanyCode=1003&CountryCode=USB&FromDate=" + this.monthago + "&ToDate=" + this.tostr;
                    if (el.item.toLowerCase().startsWith("com")) lnk_so = "http://central.ABCUniversal.org/portal/default.aspx#/ABCUniversalCentral.NESO.Item/SOHistory?ItemNumber=" + el.item + "&CompanyCode=1003&CountryCode=USB&FromDate=" + this.monthago + "&ToDate=" + this.tostr;
                    if (el.item.toLowerCase().startsWith("note")) lnk_so = "http://central.ABCUniversal.org/portal/default.aspx#/ABCUniversalCentral.NESO.Item/SOHistory?ItemNumber=" + el.item + "&CompanyCode=1003&CountryCode=USB&FromDate=" + this.monthago + "&ToDate=" + this.tostr;
                    if (el.item == "99-993-001") lnk_so = "http://central.ABCUniversal.org/portal/default.aspx#/ABCUniversalCentral.NESO.Item/SOHistory?ItemNumber=" + el.item + "&CompanyCode=1003&CountryCode=USB&FromDate=" + this.monthago + "&ToDate=" + this.tostr;
                    if (el.item == "00-999-157") lnk_so = "http://central.ABCUniversal.org/portal/default.aspx#/ABCUniversalCentral.NESO.Item/SOHistory?ItemNumber=" + el.item + "&CompanyCode=1003&CountryCode=USB&FromDate=" + this.monthago + "&ToDate=" + this.tostr;
                    break;
                case "inc": case "incex": case "increc":
                    lnk_pdt = "";
                    lnk_im = "http://central.ABCUniversal.org/portal/default.aspx#/ABCUniversalCentral.ItemMaintain.SL.Product/ItemUpdateView?country=USA&ItemNumber=" + el.item;
                    lnk_pr = "http://central2.ABCUniversal.org/ap-report/90dtrend/USA/" + el.grp + "/" + category + "/" + el.item;
                    lnk_so = "";
                    break;
                case "mkt": case "mktusa": case "mktb2b":
                    lnk_pdt = "http://www.ABCUniversal.com/Product/Product.aspx?Item=" + el.item;
                    lnk_im = "http://central.ABCUniversal.org/portal/default.aspx#/ABCUniversalCentral.ItemMaintain.SL.Product/ItemUpdateView?country=USA&ItemNumber=" + el.item;
                    lnk_pr = "http://central2.ABCUniversal.org/ap-report/90dtrend/USA/" + el.grp + "/" + category + "/" + el.item;
                    lnk_so = "";
                    break;
                default:
                    lnk_pdt = "http://www.ABCUniversal.com/Product/Product.aspx?Item=" + el.item;
                    lnk_im = "http://central.ABCUniversal.org/portal/default.aspx#/ABCUniversalCentral.ItemMaintain.SL.Product/ItemUpdateView?country=USA&ItemNumber=" + el.item;
                    lnk_pr = "http://central2.ABCUniversal.org/ap-report/90dtrend/USA/" + el.grp + "/" + category + "/" + el.item;
                    lnk_so = "http://central.ABCUniversal.org/portal/default.aspx#/ABCUniversalCentral.NESO.Item/SOHistory?ItemNumber=" + el.item + "&CompanyCode=1003&CountryCode=USA&FromDate=" + this.monthago + "&ToDate=" + this.tostr;
            }
            if (el.item.toLowerCase().startsWith("9siv")) lnk_pdt = "http://www.ABCUniversalbusiness.com/product/product.aspx?item=" + el.item;
           
            if (lnk_pdt == "") {
                lnk_pdt = "<span style='color:gray;'>PdtPage</span>";
            } else {
                lnk_pdt = "<a href='" + lnk_pdt + "' target='_blank'>PdtPage</a>";
            }
            if (lnk_so == "") {
                lnk_so = "<span style='color:gray;font-size:8pt;'>SO History</span>";
            } else {
            lnk_so = "<a href='" + lnk_so + "' target='_blank'><span style='font-size:8pt;'>SO History</span></a>";
            }


            html += "<td align='left ' style='padding:2px 5px 2px 5px; border-right: 2px solid black;border-bottom: 1px dashed;'>" + el.item + "</td>";
            html += "<td align='left' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;border-right: 2px solid black;border-bottom: 1px dashed;font-size:8pt;' nowrap>" + el.itemdes + "</td>";
            html += "<td align='left' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;border-right: 1px solid black;border-bottom: 1px dashed;'>" + lnk_pdt + "</td>";
            html += "<td align='left' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;border-right: 1px solid black;border-bottom: 1px dashed;'><a href='" + lnk_im + "' target='_blank'>IM</a> </td>";
            html += "<td align='left' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;border-right: 1px solid black;border-bottom: 1px dashed;'><a href='" + lnk_pr + "' target='_blank'>Price</a></td>";
            html += "<td nowrap='nowrap' align='left' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;border-right: 2px solid black;border-bottom: 1px dashed;'>" + lnk_so + "</td>";
            html += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'>" + this.money(el.soamount) + "</td>";
            html += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'>" + "<font class='" + ((el.discount >= 0) ? "tablenumber-possitive" : "tablenumber-negative") + "'>" + this.money(el.discount) + "</font></td>";
            html += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'>" + "<font class='" + ((el.grossproductmargin >= 0) ? "tablenumber-possitive" : "tablenumber-negative") + "'>" + this.money(el.grossproductmargin) + "</font></td>";
            html += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'>" + "<font class='" + ((el.grossproductmarginr >= 0) ? "tablenumber-possitive" : "tablenumber-negative") + "'>" + this.replace_minus_sign(el.grossproductmarginr) + "</font></td>";
            html += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'>" + this.money(el.eims) + "</td>";
            html += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'>" + this.money(el.drafteims) + "</td>";
            html += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'>" + "<font class='" + ((el.totalmwitheims >= 0) ? "tablenumber-possitive" : "tablenumber-negative") + "'>" + this.money(el.totalmwitheims) + "</font></td>";
            html += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'>" + "<font class='" + ((el.totalmwitheimsr >= 0) ? "tablenumber-possitive" : "tablenumber-negative") + "'>" + this.replace_minus_sign(el.totalmwitheimsr) + "</font></td>";
            html += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'>" + el.orders + "</td>";
            html += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'>" + el.quantity + "</td>";
            html += "<td align='right' style='padding:2px 5px 2px 5px; border-right: 2px solid black;border-bottom: 1px dashed;'>" + this.money(el.shippingrevenue) + "</td>";
            html += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'>" + this.money(el.ex_soamount) + "</td>";
            html += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'>" + el.ex_quantity + "</td>";
            html += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'>" + el.ex_orders + "</td>";
            html += "</tr>";
        }

        return html;

        // change color html += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'>" + "<font class='" + ((el.discount >= 0) ? "tablenumber-possitive" : "tablenumber-negative") + "'>" + this.digit.money(el.discount) + "</font></td>";
    },   
    show_overview_hour: function(classify) {
        try {
            var colspan = '11';
            if (classify == "bybu") colspan = '13'
            var allhtml = "<table border='1' style='width:1300px; border-left: 2px solid black;border-right: 2px solid black;border-top: 2px solid black;;border-bottom: 2px solid black'>";
            /* title *///border-right: 2px solid black;border-bottom: 2px solid black;border-left: 2px solid black;
            allhtml += "<tr style='font-weight:bold;'>";
            allhtml += "<td align='center' style='background:#ff99ff;border-right: 2px solid black;width:70px;' rowspan='3' >Hour</td>";
            allhtml += "</tr>";
            allhtml += "<tr style='font-weight:bold;'>";
            allhtml += "<td align='center' style='background:#ff99ff;border-top: 2px solid black;border-right: 2px solid black;' colspan=" + colspan + " >Valid SO</td>";
            allhtml += "<td align='center' style='background:#FFFFCC;border-top: 2px solid black;' colspan='3' >Void SO</td>";
            allhtml += "</tr>";
            allhtml += "<tr style='border-top: 2px solid black;border-bottom: 2px solid black;font-weight:bold;left:15px;bottom:15px'>";
            allhtml += "<td align='center' style='background:#ff99ff; padding:2px 5px 2px 5px;'> Sales   <br> Revenue </td>";
            if (classify == "bybu") allhtml += "<td align='center' style='background:#ff99ff; padding:2px 5px 2px 5px;'> Growth%   <br> Yesterday </td>";
            if (classify == "bybu") allhtml += "<td align='center' style='background:#ff99ff; padding:2px 5px 2px 5px;'> Growth%   <br> LastYear </td>";
            allhtml += "<td align='center' style='background:#ff99ff; padding:2px 5px 2px 5px;'> Discount<br> &nbsp;  </td>";
            allhtml += "<td align='center' style='background:#ff99ff; padding:2px 5px 2px 5px;'> Product <br> Margin  </td>";
            allhtml += "<td align='center' style='background:#ff99ff; padding:2px 5px 2px 5px;'> Product <br> Margin% </td>";
            allhtml += "<td align='center' style='background:#ff99ff; padding:2px 5px 2px 5px;'> Approved    <br> EIMS  </td>";
            allhtml += "<td align='center' style='background:#ff99ff; padding:2px 5px 2px 5px;'> Pending    <br> EIMS  </td>";
            allhtml += "<td align='center' style='background:#ff99ff; padding:2px 5px 2px 5px;'> Total Margin    <br> With Approved + <br>Pending EIMS  </td>";
            allhtml += "<td align='center' style='background:#ff99ff; padding:2px 5px 2px 5px;'> Total Margin    <br> With Approved + <br>Pending EIMS%  </td>";
            allhtml += "<td align='center' style='background:#ff99ff; padding:2px 5px 2px 5px;'> Order   <br> Count   </td>";
            allhtml += "<td align='center' style='background:#ff99ff; padding:2px 5px 2px 5px;'> Quantity<br> Sold    </td>";
            allhtml += "<td align='center' style='background:#ff99ff; padding:2px 5px 2px 5px;border-right: 2px solid black;'> Shipping<br> Revenue </td>";
            allhtml += "<td align='center' style='background:#FFFFCC; padding:2px 5px 2px 5px;'> Sales   <br> Revenue </td>";
            allhtml += "<td align='center' style='background:#FFFFCC; padding:2px 5px 2px 5px;'> Quantity<br> Sold    </td>";
            allhtml += "<td align='center' style='background:#FFFFCC; padding:2px 5px 2px 5px;'> Order   <br> Count   </td>";
            allhtml += "</tr>";

            for (var i = 0; i < 24; i++) {

                allhtml += "<tr>";
                allhtml += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;border-right: 2px solid black;'><span style='font-weight: bold;'>" + i + "</span></td>";
                if (i.toString().length < 2) i = '0' + i;
                allhtml += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'><span id='hr_" + i + "_valid_soamount'>$0</span></td>";
                if (classify == "bybu") allhtml += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'><span id='hr_" + i + "_valid_l1dr'>0.0%</span></td>";
                if (classify == "bybu") allhtml += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'><span id='hr_" + i + "_valid_lydr'>0.0%</span></td>";
                allhtml += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'><span id='hr_" + i + "_valid_discount'>$0</span></td>";
                allhtml += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'><span id='hr_" + i + "_valid_margin'>$0</span></td>";
                allhtml += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'><span id='hr_" + i + "_valid_marginrate'>0.0%</span></td>";
                allhtml += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'><span id='hr_" + i + "_valid_eims'>$0</span></td>";
                allhtml += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'><span id='hr_" + i + "_valid_drafteims'>$0</span></td>";
                allhtml += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'><span id='hr_" + i + "_valid_totalmargin_witheims'>$0</span></td>";
                allhtml += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'><span id='hr_" + i + "_valid_totalmargin_witheimsrate'>0.00%</span></td>";
                allhtml += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'><span id='hr_" + i + "_valid_orders'>0</span></td>";
                allhtml += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'><span id='hr_" + i + "_valid_quantity'>0</span></td>";
                allhtml += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;;border-right: 2px solid black;'><span id='hr_" + i + "_valid_shipping'>$0</span></td>";
                allhtml += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'><span id='hr_" + i + "_void_soamount'>$0</span></td>";
                allhtml += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'><span id='hr_" + i + "_void_quantity'>0</span></td>";
                allhtml += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'><span id='hr_" + i + "_void_orders'>0</span></td>";

                allhtml += "</tr>";
            }
            /*    ------overall
            allhtml += "<tr>";
            allhtml += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;border-right: 2px solid black;'><span style='font-weight: bold;'>Total:</span></td>";
            if (i.toString().length < 2) i = '0' + i;
            allhtml += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'><span id='hr_total_valid_soamount'>$0</span></td>";
            if (classify == "bybu") allhtml += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'><span id='hr_total_valid_l1dr'>0.0%</span></td>";
            if (classify == "bybu") allhtml += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'><span id='hr_total_valid_lydr'>0.0%</span></td>";
            allhtml += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'><span id='hr_total_valid_discount'>$0</span></td>";
            allhtml += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'><span id='hr_total_valid_margin'>$0</span></td>";
            allhtml += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'><span id='hr_total_valid_marginrate'>0.0%</span></td>";
            allhtml += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'><span id='hr_total_valid_eims'>$0</span></td>";
            allhtml += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'><span id='hr_total_valid_totalmargin_witheims'>$0</span></td>";
            allhtml += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'><span id='hr_total_valid_totalmargin_witheimsrate'>0.00%</span></td>";
            allhtml += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'><span id='hr_total_valid_orders'>0</span></td>";
            allhtml += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'><span id='hr_total_valid_quantity'>0</span></td>";
            allhtml += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;;border-right: 2px solid black;'><span id='hr_total_valid_shipping'>$0</span></td>";
            allhtml += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'><span id='hr_total_void_soamount'>$0</span></td>";
            allhtml += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'><span id='hr_total_void_quantity'>0</span></td>";
            allhtml += "<td align='right' style='padding:2px 5px 2px 5px;border-bottom: 1px dashed;'><span id='hr_total_void_orders'>0</span></td>";
            allhtml += "</tr>";
            */
            allhtml += "</table>";
        } catch (e) { }
        if ($("lbl_overall_hour")) $("lbl_overall_hour").innerHTML = allhtml;
    },
    dashboard_report: function() {
        var bu = ["inc, ABCUniversal Inc.", "incex,  Inc.(exclude recertified)", "increc,Inc.(recertified)", "usa,www.ABCUniversal.com", "b2b, B2B", "smb,B2B(SMB)", "wholesale,B2B(Wholesale)", "can,Canada","3rd, 3rd Party Channel", "ebay, eBay Sales", "ebayusa,USA", "ebaycan,Canada", "jet,Jet.com", "international, International", "intaus,Australia", "intind,India", "intirl,Ireland", "intnld,Netherlands", "intnzl,New Zealand", "intpol,Poland", "intsgp,Singapore", "intgbr,United Kingdom", "mkt, Marketplace", "mktusa,USA", "mktb2b,B2B", "mktcan,Canada","ABCUniversalflash,ABCUniversalflash", "vf,Virtual Fulfillment"];
        var html = "<table border='0' style='width:99%; border-collapse:collapse;line-height:24px;' id='tbl_bu_sales'>";
        html += "<tr style='background: #fff;left:15px;bottom:15px;line-height:30px;'>";
        html += "<td align='center' class='Table_Header Table_Header_FirstCol'rowspan='2'>Business Unit</td>";
        html += "<td align='center'class='Table_Header'colspan='12'style='border-right: 2px solid lightgray;' >Valid SO</td>";
        html += "<td align='center'class='Table_Header'colspan='3' >Void SO</td>";
        html += "</tr>";
        html += "<tr>"
        html += "<td align='center' class='Table_Header' >BU <br/>Share%</td>";
        html += " <td align='center' class='Table_Header' >GMV</td>";
        html += " <td align='center' class='Table_Header' >Discount</td>";
        html += "<td align='right' class='Table_Header' >Product Margin</td>";
        html += "<td align='right' class='Table_Header' >Product Margin%</td>";
        html += "<td align='center' class='Table_Header' >Approved EIMS</td>";
        html += "<td align='center' class='Table_Header' >Pending EIMS</td>";
        html += "<td align='center' class='Table_Header ' >Product Margin<br>With Approved + <br>Pending EIMS</td>";
        html += "<td align='center' class='Table_Header ' >Product Margin<br>With Approved + <br>Pending EIMS%</td>";
        html += "<td align='right' class='Table_Header' >Order Count</td>";
        html += "<td align='right' class='Table_Header' >Quantity Sold</td>";
        html += "<td align='right' class='Table_Header' style='border-right: 2px solid lightgray;'>Shipping Revenue</td>";
        html += " <td align='center' class='Table_Header' >GMV</td>";
        html += "<td align='right' class='Table_Header' >Quantity Sold</td>";
        html += "<td align='right' class='Table_Header' >Order Count</td>";
        html += "</tr>";
        for (var i = 0; i < bu.length; i++) {
            if (bu[i].split(",")[0] == "smb" || bu[i].split(",")[0] == "wholesale" || bu[i].split(",")[0] == "mktcan" || bu[i].split(",")[0] == "mktusa" || bu[i].split(",")[0] == "mktb2b" || bu[i].split(",")[0] == "ebayusa" || bu[i].split(",")[0] == "ebaycan"
                || bu[i].split(",")[0] == "intaus" || bu[i].split(",")[0] == "intgbr" || bu[i].split(",")[0] == "intind" || bu[i].split(",")[0] == "intirl" || bu[i].split(",")[0] == "intnld" || bu[i].split(",")[0] == "intnzl" || bu[i].split(",")[0] == "intpol" || bu[i].split(",")[0] == "intsgp") {
                html += "<tr id='" + bu[i].split(",")[0] + "'style='display: none;'>";
                html += "<td align='left' class='Table_Row_Cell Table_Row_FirstCol' nowrap='nowrap' style='padding-left:60px;'><a class='bu-link' BU=" + bu[i].split(",")[0] + ">" + bu[i].split(",")[1] + "</a></td>";
            }
            else if (bu[i].split(",")[0] == "incex") {
                html += "<tr id='" + bu[i].split(",")[0] + "'style='display: none;'>";
                html += "<td align='left' class='Table_Row_Cell Table_Row_FirstCol' nowrap='nowrap'style='padding-left:60px;'><a class='bu-link' BU=" + bu[i].split(",")[0] + " >Inc.<span style='font-size:10pt;'>(exclude recertified)</span></a></td>";
            }
            else if (bu[i].split(",")[0] == "increc") {
                html += "<tr id='" + bu[i].split(",")[0] + "'style='display: none;'>";
                html += "<td align='left' class='Table_Row_Cell Table_Row_FirstCol' nowrap='nowrap'style='padding-left:60px;'><a class='bu-link' BU=" + bu[i].split(",")[0] + " >Inc.<span style='font-size:10pt;'>(recertified)</span></a></td>";
            }
            else if (bu[i].split(",")[0] == "inc" || bu[i].split(",")[0] == "b2b" || bu[i].split(",")[0] == "international" || bu[i].split(",")[0] == "3rd") {
                html += "<tr id='" + bu[i].split(",")[0] + "'>";
                html += "<td align='left' class='Table_Row_Cell Table_Row_FirstCol' nowrap='nowrap'><input id='button_" + bu[i].split(",")[0] + "' type='button' class='plusIcon'></input><a class='bu-link' BU=" + bu[i].split(",")[0] + " >" + bu[i].split(",")[1] + "</a></td>";
            }
            else if (bu[i].split(",")[0] == "mkt") {
                html += "<tr id='" + bu[i].split(",")[0] + "'>";
                html += "<td align='left' class='Table_Row_Cell Table_Row_FirstCol' nowrap='nowrap'><input id='button_" + bu[i].split(",")[0] + "' type='button' class='plusIcon'></input><a class='bu-link' BU=" + bu[i].split(",")[0] + " >" + bu[i].split(",")[1] + "</a></td>";
            }
            else if (bu[i].split(",")[0] == "ebay") {
                html += "<tr id='" + bu[i].split(",")[0] + "'style='display: none;'>";
                html += "<td align='left' class='Table_Row_Cell Table_Row_FirstCol' nowrap='nowrap' style='padding-left:30px;'><input id='button_" + bu[i].split(",")[0] + "' type='button' class='plusIcon'></input><a class='bu-link' BU=" + bu[i].split(",")[0] + " >" + bu[i].split(",")[1] + "</a></td>";
            }
            else if (bu[i].split(",")[0] == "jet") {
                html += "<tr id='" + bu[i].split(",")[0] + "'style='display: none;'>";
                html += "<td align='left' class='Table_Row_Cell Table_Row_FirstCol' nowrap='nowrap' style='padding-left:30px;'><a class='bu-link' BU=" + bu[i].split(",")[0] + " >" + bu[i].split(",")[1] + "</a></td>";
            }
            else {
                html += "<tr id='" + bu[i].split(",")[0] + "'>";
                html += "<td align='left' class='Table_Row_Cell Table_Row_FirstCol' nowrap='nowrap'><a class='bu-link' BU=" + bu[i].split(",")[0] + " >" + bu[i].split(",")[1] + "</a></td>";
            }
            if (bu[i].split(",")[0] == "mkt" || bu[i].split(",")[0] == "mktb2b" || bu[i].split(",")[0] == "mktcan" || bu[i].split(",")[0] == "mktusa") {
                html += "<td align='right' class='Table_Row_Cell'><span class='number_1' id='table_share_" + bu[i].split(",")[0] + "'></span></td>";
                html += "<td align='right' class='Table_Row_Cell'><div class='number_1' id='table_gps_" + bu[i].split(",")[0] + "'>$0</div></td>";
                html += "<td align='right' class='Table_Row_Cell'></td>";
                html += "<td align='right' class='Table_Row_Cell'></td>";
                html += "<td align='right' class='Table_Row_Cell'></td>";
                html += "<td align='right' class='Table_Row_Cell'></td>";
                html += "<td align='right' class='Table_Row_Cell'></td>";
                html += "<td align='right' class='Table_Row_Cell'></td>";
                html += "<td align='right' class='Table_Row_Cell'></td>";
                html += "<td align='right' class='Table_Row_Cell'><div class='number_2' id='table_orders_" + bu[i].split(",")[0] + "'>0</div></td>";
                html += "<td align='right' class='Table_Row_Cell'><div class='number_2' id='table_quantity_" + bu[i].split(",")[0] + "'>0</div></td>";
                html += "<td align='right' class='Table_Row_Cell Table_Row_FirstCol'><div class='number_2' id='table_shipping_" + bu[i].split(",")[0] + "'>$0</div></td>";
                html += "<td align='right' class='Table_Row_Cell'><div class='number_1' id='table_voidgps_" + bu[i].split(",")[0] + "'>$0</div></td>";
                html += "<td align='right' class='Table_Row_Cell'><div class='number_2' id='table_voidquantity_" + bu[i].split(",")[0] + "'>0</div></td>";
                html += "<td align='right' class='Table_Row_Cell'><div class='number_2' id='table_voidorders_" + bu[i].split(",")[0] + "'>0</div></td>";
                html += "</tr>";
            }
            else {
                html += "<td align='right' class='Table_Row_Cell'><span class='number_1' id='table_share_" + bu[i].split(",")[0] + "'></span></td>";
                html += "<td align='right' class='Table_Row_Cell'><div class='number_1' id='table_gps_" + bu[i].split(",")[0] + "'>$0</div></td>";
                html += "<td align='right' class='Table_Row_Cell'><span class='number_2' id='table_ds_" + bu[i].split(",")[0] + "'>$0</span></td>";
                html += "<td align='right' class='Table_Row_Cell'><span class='number_2' id='table_gpm_" + bu[i].split(",")[0] + "'>$0</span></td>";
                html += "<td align='right' class='Table_Row_Cell'><span class='number_2' id='table_gpmr_" + bu[i].split(",")[0] + "'>0.00%</span></td>";
                html += "<td align='right' class='Table_Row_Cell'><span class='number_2' id='table_eims_" + bu[i].split(",")[0] + "'>$0</span></td>";
                html += "<td align='right' class='Table_Row_Cell'><span class='number_2' id='table_drafteims_" + bu[i].split(",")[0] + "'>$0</span></td>";
                html += "<td align='right' class='Table_Row_Cell'><div class='number_2' id='table_pmwitheims_" + bu[i].split(",")[0] + "'>$0</div></td>";
                html += "<td align='right' class='Table_Row_Cell'><div class='number_2' id='table_pmwitheimsr_" + bu[i].split(",")[0] + "'>0.00%</div></td>";
                html += "<td align='right' class='Table_Row_Cell'><div class='number_2' id='table_orders_" + bu[i].split(",")[0] + "'>0</div></td>";
                html += "<td align='right' class='Table_Row_Cell'><div class='number_2' id='table_quantity_" + bu[i].split(",")[0] + "'>0</div></td>";
                html += "<td align='right' class='Table_Row_Cell Table_Row_FirstCol'><div class='number_2' id='table_shipping_" + bu[i].split(",")[0] + "'>$0</div></td>";
                html += "<td align='right' class='Table_Row_Cell'><div class='number_1' id='table_voidgps_" + bu[i].split(",")[0] + "'>$0</div></td>";
                html += "<td align='right' class='Table_Row_Cell'><div class='number_2' id='table_voidquantity_" + bu[i].split(",")[0] + "'>0</div></td>";
                html += "<td align='right' class='Table_Row_Cell'><div class='number_2' id='table_voidorders_" + bu[i].split(",")[0] + "'>0</div></td>";
                html += "</tr>";
            }
        }
        html += "</table>";
        if ($("lbl_bu_sales")) $("lbl_bu_sales").innerHTML = html;
    }

});

