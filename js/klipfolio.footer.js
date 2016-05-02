


// ---------------------------------------------------------
// AdRoll Pixel code
// ---------------------------------------------------------
/*adroll_adv_id = "2KKSGYPQX5FJTDOGYPS2PN";
adroll_pix_id = "VOPCLFPETJAFPIPNPILW6F";

(function ($) {
//    var oldonload = window.onload;
//    window.onload = function(){
setTimeout( function(){
        __adroll_loaded=true;
        var scr = document.createElement("script");
        var host = (("https:" == document.location.protocol) ? "https://s.adroll.com" : "http://a.adroll.com");
        scr.setAttribute('async', 'true');
        scr.type = "text/javascript";
        scr.src = host + "/j/roundtrip.js";
        ((document.getElementsByTagName('head') || [null])[0] ||
            document.getElementsByTagName('script')[0].parentNode).appendChild(scr);

        

        
},800);
//        if(oldonload){oldonload()}};
}(jQuery));*/
// ---------------------------------------------------------



(function ($) {
	//stops carousels from auto playing
	$('.carousel.slide').carousel({
        interval: 0,
        pause: "none"
    });
}(jQuery));