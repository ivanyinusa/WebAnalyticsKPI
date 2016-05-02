/*! Magnific Popup - v0.8.9 - 2013-06-04
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2013 Dmitry Semenov; */
(function(e){var t,i,n,a,r,o,s,l="Close",c="AfterClose",d="BeforeAppend",p="MarkupParse",u="Open",f="Change",m="mfp",g="."+m,v="mfp-ready",h="mfp-removing",C="mfp-prevent-close",y=function(){},w=!!window.jQuery,b=e(window),I=function(e,i){t.ev.on(m+e+g,i)},x=function(t,i,n,a){var r=document.createElement("div");return r.className="mfp-"+t,n&&(r.innerHTML=n),a?i&&i.appendChild(r):(r=e(r),i&&r.appendTo(i)),r},k=function(i,n){t.ev.triggerHandler(m+i,n),t.st.callbacks&&(i=i.charAt(0).toLowerCase()+i.slice(1),t.st.callbacks[i]&&t.st.callbacks[i].apply(t,e.isArray(n)?n:[n]))},S=function(){(t.st.focus?t.content.find(t.st.focus).eq(0):t.wrap).focus()},P=function(i){return i===s&&t.currTemplate.closeBtn||(t.currTemplate.closeBtn=e(t.st.closeMarkup.replace("%title%",t.st.tClose)),s=i),t.currTemplate.closeBtn},E=function(){e.magnificPopup.instance||(t=new y,t.init(),e.magnificPopup.instance=t)},T=function(i){if(!e(i).hasClass(C)){var n=t.st.closeOnContentClick,a=t.st.closeOnBgClick;if(n&&a)return!0;if(!t.content||e(i).hasClass("mfp-close")||t.preloader&&i===t.preloader[0])return!0;if(i===t.content[0]||e.contains(t.content[0],i)){if(n)return!0}else if(a)return!0;return!1}};y.prototype={constructor:y,init:function(){var i=navigator.appVersion;t.isIE7=-1!==i.indexOf("MSIE 7."),t.isIE8=-1!==i.indexOf("MSIE 8."),t.isLowIE=t.isIE7||t.isIE8,t.isAndroid=/android/gi.test(i),t.isIOS=/iphone|ipad|ipod/gi.test(i),t.probablyMobile=t.isAndroid||t.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),n=e(document.body),a=e(document),t.popupsCache={}},open:function(i){var r;if(i.isObj===!1){t.items=i.items.toArray(),t.index=0;var s,l=i.items;for(r=0;l.length>r;r++)if(s=l[r],s.parsed&&(s=s.el[0]),s===i.el[0]){t.index=r;break}}else t.items=e.isArray(i.items)?i.items:[i.items],t.index=i.index||0;if(t.isOpen)return t.updateItemHTML(),void 0;t.types=[],o="",t.ev=i.mainEl||a,i.key?(t.popupsCache[i.key]||(t.popupsCache[i.key]={}),t.currTemplate=t.popupsCache[i.key]):t.currTemplate={},t.st=e.extend(!0,{},e.magnificPopup.defaults,i),t.fixedContentPos="auto"===t.st.fixedContentPos?!t.probablyMobile:t.st.fixedContentPos,t.bgOverlay||(t.bgOverlay=x("bg").on("click"+g,function(){t.close()}),t.wrap=x("wrap").attr("tabindex",-1).on("click"+g,function(e){T(e.target)&&t.close()}),t.container=x("container",t.wrap)),t.contentContainer=x("content"),t.st.preloader&&(t.preloader=x("preloader",t.container,t.st.tLoading));var c=e.magnificPopup.modules;for(r=0;c.length>r;r++){var d=c[r];d=d.charAt(0).toUpperCase()+d.slice(1),t["init"+d].call(t)}k("BeforeOpen"),t.st.closeBtnInside?(I(p,function(e,t,i,n){i.close_replaceWith=P(n.type)}),o+=" mfp-close-btn-in"):t.wrap.append(P()),t.st.alignTop&&(o+=" mfp-align-top"),t.fixedContentPos?t.wrap.css({overflow:t.st.overflowY,overflowX:"hidden",overflowY:t.st.overflowY}):t.wrap.css({top:b.scrollTop(),position:"absolute"}),(t.st.fixedBgPos===!1||"auto"===t.st.fixedBgPos&&!t.fixedContentPos)&&t.bgOverlay.css({height:a.height(),position:"absolute"}),a.on("keyup"+g,function(e){27===e.keyCode&&t.close()}),b.on("resize"+g,function(){t.updateSize()}),t.st.closeOnContentClick||(o+=" mfp-auto-cursor"),o&&t.wrap.addClass(o);var f=t.wH=b.height(),m={};if(t.fixedContentPos&&t._hasScrollBar(f)){var h=t._getScrollbarSize();h&&(m.paddingRight=h)}t.fixedContentPos&&(t.isIE7?e("body, html").css("overflow","hidden"):m.overflow="hidden");var C=t.st.mainClass;t.isIE7&&(C+=" mfp-ie7"),C&&t._addClassToMFP(C),t.updateItemHTML(),k("BuildControls"),n.css(m),t.bgOverlay.add(t.wrap).prependTo(document.body),t._lastFocusedEl=document.activeElement,setTimeout(function(){t.content?(t._addClassToMFP(v),S()):t.bgOverlay.addClass(v),a.on("focusin"+g,function(i){return i.target===t.wrap[0]||e.contains(t.wrap[0],i.target)?void 0:(S(),!1)})},16),t.isOpen=!0,t.updateSize(f),k(u)},close:function(){t.isOpen&&(t.isOpen=!1,t.st.removalDelay&&!t.isLowIE?(t._addClassToMFP(h),setTimeout(function(){t._close()},t.st.removalDelay)):t._close())},_close:function(){k(l);var i=h+" "+v+" ";if(t.bgOverlay.detach(),t.wrap.detach(),t.container.empty(),t.st.mainClass&&(i+=t.st.mainClass+" "),t._removeClassFromMFP(i),t.fixedContentPos){var r={paddingRight:""};t.isIE7?e("body, html").css("overflow",""):r.overflow="",n.css(r)}a.off("keyup"+g+" focusin"+g),t.ev.off(g),t.wrap.attr("class","mfp-wrap").removeAttr("style"),t.bgOverlay.attr("class","mfp-bg"),t.container.attr("class","mfp-container"),t.st.closeBtnInside&&t.currTemplate[t.currItem.type]!==!0||t.currTemplate.closeBtn&&t.currTemplate.closeBtn.detach(),t._lastFocusedEl&&e(t._lastFocusedEl).focus(),t.currItem=null,t.content=null,t.currTemplate=null,t.prevHeight=0,k(c)},updateSize:function(e){if(t.isIOS){var i=document.documentElement.clientWidth/window.innerWidth,n=window.innerHeight*i;t.wrap.css("height",n),t.wH=n}else t.wH=e||b.height();t.fixedContentPos||t.wrap.css("height",t.wH),k("Resize")},updateItemHTML:function(){var i=t.items[t.index];t.contentContainer.detach(),t.content&&t.content.detach(),i.parsed||(i=t.parseEl(t.index));var n=i.type;if(k("BeforeChange",[t.currItem?t.currItem.type:"",n]),t.currItem=i,!t.currTemplate[n]){var a=t.st[n]?t.st[n].markup:!1;k("FirstMarkupParse",a),t.currTemplate[n]=a?e(a):!0}r&&r!==i.type&&t.container.removeClass("mfp-"+r+"-holder");var o=t["get"+n.charAt(0).toUpperCase()+n.slice(1)](i,t.currTemplate[n]);t.appendContent(o,n),i.preloaded=!0,k(f,i),r=i.type,t.container.prepend(t.contentContainer),k("AfterChange")},appendContent:function(e,i){t.content=e,e?t.st.closeBtnInside&&t.currTemplate[i]===!0?t.content.find(".mfp-close").length||t.content.append(P()):t.content=e:t.content="",k(d),t.container.addClass("mfp-"+i+"-holder"),t.contentContainer.append(t.content)},parseEl:function(i){var n=t.items[i],a=n.type;if(n=n.tagName?{el:e(n)}:{data:n,src:n.src},n.el){for(var r=t.types,o=0;r.length>o;o++)if(n.el.hasClass("mfp-"+r[o])){a=r[o];break}n.src=n.el.attr("data-mfp-src"),n.src||(n.src=n.el.attr("href"))}return n.type=a||t.st.type||"inline",n.index=i,n.parsed=!0,t.items[i]=n,k("ElementParse",n),t.items[i]},addGroup:function(e,i){var n=function(n){n.mfpEl=this,t._openClick(n,e,i)};i||(i={});var a="click.magnificPopup";i.mainEl=e,i.items?(i.isObj=!0,e.off(a).on(a,n)):(i.isObj=!1,i.delegate?e.off(a).on(a,i.delegate,n):(i.items=e,e.off(a).on(a,n)))},_openClick:function(i,n,a){var r=void 0!==a.midClick?a.midClick:e.magnificPopup.defaults.midClick;if(r||2!==i.which){var o=void 0!==a.disableOn?a.disableOn:e.magnificPopup.defaults.disableOn;if(o)if(e.isFunction(o)){if(!o.call(t))return!0}else if(o>b.width())return!0;i.type&&(i.preventDefault(),t.isOpen&&i.stopPropagation()),a.el=e(i.mfpEl),a.delegate&&(a.items=n.find(a.delegate)),t.open(a)}},updateStatus:function(e,n){if(t.preloader){i!==e&&t.container.removeClass("mfp-s-"+i),n||"loading"!==e||(n=t.st.tLoading);var a={status:e,text:n};k("UpdateStatus",a),e=a.status,n=a.text,t.preloader.html(n),t.preloader.find("a").click(function(e){e.stopImmediatePropagation()}),t.container.addClass("mfp-s-"+e),i=e}},_addClassToMFP:function(e){t.bgOverlay.addClass(e),t.wrap.addClass(e)},_removeClassFromMFP:function(e){this.bgOverlay.removeClass(e),t.wrap.removeClass(e)},_hasScrollBar:function(e){return(t.isIE7?a.height():document.body.scrollHeight)>(e||b.height())},_parseMarkup:function(t,i,n){var a;n.data&&(i=e.extend(n.data,i)),k(p,[t,i,n]),e.each(i,function(e,i){if(void 0===i||i===!1)return!0;if(a=e.split("_"),a.length>1){var n=t.find(g+"-"+a[0]);if(n.length>0){var r=a[1];"replaceWith"===r?n[0]!==i[0]&&n.replaceWith(i):"img"===r?n.is("img")?n.attr("src",i):n.replaceWith('<img src="'+i+'" class="'+n.attr("class")+'" />'):n.attr(a[1],i)}}else t.find(g+"-"+e).html(i)})},_getScrollbarSize:function(){if(void 0===t.scrollbarSize){var e=document.createElement("div");e.id="mfp-sbm",e.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e),t.scrollbarSize=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return t.scrollbarSize}},e.magnificPopup={instance:null,proto:y.prototype,modules:[],open:function(e,t){return E(),e||(e={}),e.isObj=!0,e.index=t||0,this.instance.open(e)},close:function(){return e.magnificPopup.instance.close()},registerModule:function(t,i){i.options&&(e.magnificPopup.defaults[t]=i.options),e.extend(this.proto,i.proto),this.modules.push(t)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,alignTop:!1,removalDelay:0,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&times;</button>',tClose:"Close (Esc)",tLoading:"Loading..."}},e.fn.magnificPopup=function(i){E();var n=e(this);if("string"==typeof i)if("open"===i){var a,r=w?n.data("magnificPopup"):n[0].magnificPopup,o=parseInt(arguments[1],10)||0;r.items?a=r.items[o]:(a=n,r.delegate&&(a=a.find(r.delegate)),a=a.eq(o)),t._openClick({mfpEl:a},n,r)}else t.isOpen&&t[i].apply(t,Array.prototype.slice.call(arguments,1));else w?n.data("magnificPopup",i):n[0].magnificPopup=i,t.addGroup(n,i);return n};var M,O,_,z="inline",B=function(){_&&(O.after(_.addClass(M)).detach(),_=null)};e.magnificPopup.registerModule(z,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){t.types.push(z),I(l+"."+z,function(){B()})},getInline:function(i,n){if(B(),i.src){var a=t.st.inline,r=e(i.src);if(r.length){var o=r[0].parentNode;o&&o.tagName&&(O||(M=a.hiddenClass,O=x(M),M="mfp-"+M),_=r.after(O).detach().removeClass(M)),t.updateStatus("ready")}else t.updateStatus("error",a.tNotFound),r=e("<div>");return i.inlineElement=r,r}return t.updateStatus("ready"),t._parseMarkup(n,{},i),n}}});var H,F="ajax",L=function(){H&&n.removeClass(H)};e.magnificPopup.registerModule(F,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){t.types.push(F),H=t.st.ajax.cursor,I(l+"."+F,function(){L(),t.req&&t.req.abort()})},getAjax:function(i){H&&n.addClass(H),t.updateStatus("loading");var a=e.extend({url:i.src,success:function(n,a,r){var o={data:n,xhr:r};k("ParseAjax",o),t.appendContent(e(o.data),F),i.finished=!0,L(),S(),setTimeout(function(){t.wrap.addClass(v)},16),t.updateStatus("ready"),k("AjaxContentAdded")},error:function(){L(),i.finished=i.loadError=!0,t.updateStatus("error",t.st.ajax.tError.replace("%url%",i.src))}},t.st.ajax.settings);return t.req=e.ajax(a),""}}});var A,j=function(i){if(i.data&&void 0!==i.data.title)return i.data.title;var n=t.st.image.titleSrc;if(n){if(e.isFunction(n))return n.call(t,i);if(i.el)return i.el.attr(n)||""}return""};e.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><div class="mfp-img"></div><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var e=t.st.image,i=".image";t.types.push("image"),I(u+i,function(){"image"===t.currItem.type&&e.cursor&&n.addClass(e.cursor)}),I(l+i,function(){e.cursor&&n.removeClass(e.cursor),b.off("resize"+g)}),I("Resize"+i,t.resizeImage),t.isLowIE&&I("AfterChange",t.resizeImage)},resizeImage:function(){var e=t.currItem;if(e.img&&t.st.image.verticalFit){var i=0;t.isLowIE&&(i=parseInt(e.img.css("padding-top"),10)+parseInt(e.img.css("padding-bottom"),10)),e.img.css("max-height",t.wH-i)}},_onImageHasSize:function(e){e.img&&(e.hasSize=!0,A&&clearInterval(A),e.isCheckingImgSize=!1,k("ImageHasSize",e),e.imgHidden&&(t.content&&t.content.removeClass("mfp-loading"),e.imgHidden=!1))},findImageSize:function(e){var i=0,n=e.img[0],a=function(r){A&&clearInterval(A),A=setInterval(function(){return n.naturalWidth>0?(t._onImageHasSize(e),void 0):(i>200&&clearInterval(A),i++,3===i?a(10):40===i?a(50):100===i&&a(500),void 0)},r)};a(1)},getImage:function(i,n){var a=0,r=function(){i&&(i.img[0].complete?(i.img.off(".mfploader"),i===t.currItem&&(t._onImageHasSize(i),t.updateStatus("ready")),i.hasSize=!0,i.loaded=!0):(a++,200>a?setTimeout(r,100):o()))},o=function(){i&&(i.img.off(".mfploader"),i===t.currItem&&(t._onImageHasSize(i),t.updateStatus("error",s.tError.replace("%url%",i.src))),i.hasSize=!0,i.loaded=!0,i.loadError=!0)},s=t.st.image,l=n.find(".mfp-img");if(l.length){var c=new Image;c.className="mfp-img",i.img=e(c).on("load.mfploader",r).on("error.mfploader",o),c.src=i.src,l.is("img")&&(i.img=i.img.clone())}return t._parseMarkup(n,{title:j(i),img_replaceWith:i.img},i),t.resizeImage(),i.hasSize?(A&&clearInterval(A),i.loadError?(n.addClass("mfp-loading"),t.updateStatus("error",s.tError.replace("%url%",i.src))):(n.removeClass("mfp-loading"),t.updateStatus("ready")),n):(t.updateStatus("loading"),i.loading=!0,i.hasSize||(i.imgHidden=!0,n.addClass("mfp-loading"),t.findImageSize(i)),n)}}});var N="iframe",W="//about:blank",R=function(e){if(t.currTemplate[N]){var i=t.currTemplate[N].find("iframe");i.length&&(e||(i[0].src=W),t.isIE8&&i.css("display",e?"block":"none"))}};e.magnificPopup.registerModule(N,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){t.types.push(N),I("BeforeChange",function(e,t,i){t!==i&&(t===N?R():i===N&&R(!0))}),I(l+"."+N,function(){R()})},getIframe:function(i,n){var a=i.src,r=t.st.iframe;e.each(r.patterns,function(){return a.indexOf(this.index)>-1?(this.id&&(a="string"==typeof this.id?a.substr(a.lastIndexOf(this.id)+this.id.length,a.length):this.id.call(this,a)),a=this.src.replace("%id%",a),!1):void 0});var o={};return r.srcAction&&(o[r.srcAction]=a),t._parseMarkup(n,o,i),t.updateStatus("ready"),n}}});var Y=function(e){var i=t.items.length;return e>i-1?e-i:0>e?i+e:e},q=function(e,t,i){return e.replace("%curr%",t+1).replace("%total%",i)};e.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var i=t.st.gallery,n=".mfp-gallery",r=Boolean(e.fn.mfpFastClick);return t.direction=!0,i&&i.enabled?(o+=" mfp-gallery",I(u+n,function(){i.navigateByImgClick&&t.wrap.on("click"+n,".mfp-img",function(){return t.items.length>1?(t.next(),!1):void 0}),a.on("keydown"+n,function(e){37===e.keyCode?t.prev():39===e.keyCode&&t.next()})}),I("UpdateStatus"+n,function(e,i){i.text&&(i.text=q(i.text,t.currItem.index,t.items.length))}),I(p+n,function(e,n,a,r){var o=t.items.length;a.counter=o>1?q(i.tCounter,r.index,o):""}),I("BuildControls"+n,function(){if(t.items.length>1&&i.arrows&&!t.arrowLeft){var n=i.arrowMarkup,a=t.arrowLeft=e(n.replace("%title%",i.tPrev).replace("%dir%","left")).addClass(C),o=t.arrowRight=e(n.replace("%title%",i.tNext).replace("%dir%","right")).addClass(C),s=r?"mfpFastClick":"click";a[s](function(){t.prev()}),o[s](function(){t.next()}),t.isIE7&&(x("b",a[0],!1,!0),x("a",a[0],!1,!0),x("b",o[0],!1,!0),x("a",o[0],!1,!0)),t.container.append(a.add(o))}}),I(f+n,function(){t._preloadTimeout&&clearTimeout(t._preloadTimeout),t._preloadTimeout=setTimeout(function(){t.preloadNearbyImages(),t._preloadTimeout=null},16)}),I(l+n,function(){a.off(n),t.wrap.off("click"+n),t.arrowLeft&&r&&t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(),t.arrowRight=t.arrowLeft=null}),void 0):!1},next:function(){t.direction=!0,t.index=Y(t.index+1),t.updateItemHTML()},prev:function(){t.direction=!1,t.index=Y(t.index-1),t.updateItemHTML()},goTo:function(e){t.direction=e>=t.index,t.index=e,t.updateItemHTML()},preloadNearbyImages:function(){var e,i=t.st.gallery.preload,n=Math.min(i[0],t.items.length),a=Math.min(i[1],t.items.length);for(e=1;(t.direction?a:n)>=e;e++)t._preloadItem(t.index+e);for(e=1;(t.direction?n:a)>=e;e++)t._preloadItem(t.index-e)},_preloadItem:function(i){if(i=Y(i),!t.items[i].preloaded){var n=t.items[i];n.parsed||(n=t.parseEl(i)),k("LazyLoad",n),"image"===n.type&&(n.img=e('<img class="mfp-img" />').on("load.mfploader",function(){n.hasSize=!0}).on("error.mfploader",function(){n.hasSize=!0,n.loadError=!0}).attr("src",n.src)),n.preloaded=!0}}}});var D="retina";e.magnificPopup.registerModule(D,{options:{replaceSrc:function(e){return e.src.replace(/\.\w+$/,function(e){return"@2x"+e})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var e=t.st.retina,i=e.ratio;i=isNaN(i)?i():i,i>1&&(I("ImageHasSize."+D,function(e,t){t.img.css({"max-width":t.img[0].naturalWidth/i,width:"100%"})}),I("ElementParse."+D,function(t,n){n.src=e.replaceSrc(n,i)}))}}}}),function(){var t=1e3,i="ontouchstart"in window,n=function(){b.off("touchmove"+r+" touchend"+r)},a="mfpFastClick",r="."+a;e.fn.mfpFastClick=function(a){return e(this).each(function(){var o,s=e(this);if(i){var l,c,d,p,u,f;s.on("touchstart"+r,function(e){p=!1,f=1,u=e.originalEvent?e.originalEvent.touches[0]:e.touches[0],c=u.clientX,d=u.clientY,b.on("touchmove"+r,function(e){u=e.originalEvent?e.originalEvent.touches:e.touches,f=u.length,u=u[0],(Math.abs(u.clientX-c)>10||Math.abs(u.clientY-d)>10)&&(p=!0,n())}).on("touchend"+r,function(e){n(),p||f>1||(o=!0,e.preventDefault(),clearTimeout(l),l=setTimeout(function(){o=!1},t),a())})})}s.on("click"+r,function(){o||a()})})},e.fn.destroyMfpFastClick=function(){e(this).off("touchstart"+r+" click"+r),i&&b.off("touchmove"+r+" touchend"+r)}}()})(window.jQuery||window.Zepto);
;
(function(a){a.isScrollToFixed=function(b){return !!a(b).data("ScrollToFixed")};a.ScrollToFixed=function(d,h){var k=this;k.$el=a(d);k.el=d;k.$el.data("ScrollToFixed",k);var c=false;var F=k.$el;var G;var D;var p;var C=0;var q=0;var i=-1;var e=-1;var t=null;var y;var f;function u(){F.trigger("preUnfixed.ScrollToFixed");j();F.trigger("unfixed.ScrollToFixed");e=-1;C=F.offset().top;q=F.offset().left;if(k.options.offsets){q+=(F.offset().left-F.position().left)}if(i==-1){i=q}G=F.css("position");c=true;if(k.options.bottom!=-1){F.trigger("preFixed.ScrollToFixed");w();F.trigger("fixed.ScrollToFixed")}}function m(){var H=k.options.limit;if(!H){return 0}if(typeof(H)==="function"){return H.apply(F)}return H}function o(){return G==="fixed"}function x(){return G==="absolute"}function g(){return !(o()||x())}function w(){if(!o()){t.css({display:F.css("display"),width:F.outerWidth(true),height:F.outerHeight(true),"float":F.css("float")});cssOptions={position:"fixed",top:k.options.bottom==-1?s():"",bottom:k.options.bottom==-1?"":k.options.bottom,"margin-left":"0px"};if(!k.options.dontSetWidth){cssOptions.width=F.width()}F.css(cssOptions);F.addClass("scroll-to-fixed-fixed");if(k.options.className){F.addClass(k.options.className)}G="fixed"}}function b(){var I=m();var H=q;if(k.options.removeOffsets){H=0;I=I-C}cssOptions={position:"absolute",top:I,left:H,"margin-left":"0px",bottom:""};if(!k.options.dontSetWidth){cssOptions.width=F.width()}F.css(cssOptions);G="absolute"}function j(){if(!g()){e=-1;t.css("display","none");F.css({width:"",position:D,left:"",top:p.top,"margin-left":""});F.removeClass("scroll-to-fixed-fixed");if(k.options.className){F.removeClass(k.options.className)}G=null}}function v(H){if(H!=e){F.css("left",q-H);e=H}}function s(){var H=k.options.marginTop;if(!H){return 0}if(typeof(H)==="function"){return H.apply(F)}return H}function z(){if(!a.isScrollToFixed(F)){return}var J=c;if(!c){u()}var H=a(window).scrollLeft();var K=a(window).scrollTop();var I=m();if(k.options.minWidth&&a(window).width()<k.options.minWidth){if(!g()||!J){n();F.trigger("preUnfixed.ScrollToFixed");j();F.trigger("unfixed.ScrollToFixed")}}else{if(k.options.bottom==-1){if(I>0&&K>=I-s()){if(!x()||!J){n();F.trigger("preAbsolute.ScrollToFixed");b();F.trigger("unfixed.ScrollToFixed")}}else{if(K>=C-s()){if(!o()||!J){n();F.trigger("preFixed.ScrollToFixed");w();e=-1;F.trigger("fixed.ScrollToFixed")}v(H)}else{if(!g()||!J){n();F.trigger("preUnfixed.ScrollToFixed");j();F.trigger("unfixed.ScrollToFixed")}}}}else{if(I>0){if(K+a(window).height()-F.outerHeight(true)>=I-(s()||-l())){if(o()){n();F.trigger("preUnfixed.ScrollToFixed");if(D==="absolute"){b()}else{j()}F.trigger("unfixed.ScrollToFixed")}}else{if(!o()){n();F.trigger("preFixed.ScrollToFixed");w()}v(H);F.trigger("fixed.ScrollToFixed")}}else{v(H)}}}}function l(){if(!k.options.bottom){return 0}return k.options.bottom}function n(){var H=F.css("position");if(H=="absolute"){F.trigger("postAbsolute.ScrollToFixed")}else{if(H=="fixed"){F.trigger("postFixed.ScrollToFixed")}else{F.trigger("postUnfixed.ScrollToFixed")}}}var B=function(H){if(F.is(":visible")){c=false;z()}};var E=function(H){z()};var A=function(){var I=document.body;if(document.createElement&&I&&I.appendChild&&I.removeChild){var K=document.createElement("div");if(!K.getBoundingClientRect){return null}K.innerHTML="x";K.style.cssText="position:fixed;top:100px;";I.appendChild(K);var L=I.style.height,M=I.scrollTop;I.style.height="3000px";I.scrollTop=500;var H=K.getBoundingClientRect().top;I.style.height=L;var J=(H===100);I.removeChild(K);I.scrollTop=M;return J}return null};var r=function(H){H=H||window.event;if(H.preventDefault){H.preventDefault()}H.returnValue=false};k.init=function(){k.options=a.extend({},a.ScrollToFixed.defaultOptions,h);k.$el.css("z-index",k.options.zIndex);t=a("<div />");G=F.css("position");D=F.css("position");p=a.extend({},F.offset());if(g()){k.$el.after(t)}a(window).bind("resize.ScrollToFixed",B);a(window).bind("scroll.ScrollToFixed",E);if(k.options.preFixed){F.bind("preFixed.ScrollToFixed",k.options.preFixed)}if(k.options.postFixed){F.bind("postFixed.ScrollToFixed",k.options.postFixed)}if(k.options.preUnfixed){F.bind("preUnfixed.ScrollToFixed",k.options.preUnfixed)}if(k.options.postUnfixed){F.bind("postUnfixed.ScrollToFixed",k.options.postUnfixed)}if(k.options.preAbsolute){F.bind("preAbsolute.ScrollToFixed",k.options.preAbsolute)}if(k.options.postAbsolute){F.bind("postAbsolute.ScrollToFixed",k.options.postAbsolute)}if(k.options.fixed){F.bind("fixed.ScrollToFixed",k.options.fixed)}if(k.options.unfixed){F.bind("unfixed.ScrollToFixed",k.options.unfixed)}if(k.options.spacerClass){t.addClass(k.options.spacerClass)}F.bind("resize.ScrollToFixed",function(){t.height(F.height())});F.bind("scroll.ScrollToFixed",function(){F.trigger("preUnfixed.ScrollToFixed");j();F.trigger("unfixed.ScrollToFixed");z()});F.bind("detach.ScrollToFixed",function(H){r(H);F.trigger("preUnfixed.ScrollToFixed");j();F.trigger("unfixed.ScrollToFixed");a(window).unbind("resize.ScrollToFixed",B);a(window).unbind("scroll.ScrollToFixed",E);F.unbind(".ScrollToFixed");k.$el.removeData("ScrollToFixed")});B()};k.init()};a.ScrollToFixed.defaultOptions={marginTop:0,limit:0,bottom:-1,zIndex:1000};a.fn.scrollToFixed=function(b){return this.each(function(){(new a.ScrollToFixed(this,b))})}})(jQuery);
;
/*
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);;
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// CommonJS
		factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write

		if (arguments.length > 1 && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setTime(+t + days * 864e+5);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {};

		// To prevent the for loop in the first place assign an empty array
		// in case there are no cookies at all. Also prevents odd result when
		// calling $.cookie().
		var cookies = document.cookie ? document.cookie.split('; ') : [];

		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = parts.join('=');

			if (key && key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) === undefined) {
			return false;
		}

		// Must not alter options, thus extending a fresh object...
		$.cookie(key, '', $.extend({}, options, { expires: -1 }));
		return !$.cookie(key);
	};

}));
;

var slider = false;

(function ($) {
    Drupal.behaviors.klipfolioJS = {
        attach: function() {
            $("#navbar").scrollToFixed({
                zIndex:100
            });

            setSecondaryNav();
            setSideBars();
            resizeContainer();


            $(window).resize($.debounce(200, onWindowResize));


            

        }
    };

    var onWindowResize = function() {
        if (slider) slider.reloadSlider();

        setSecondaryNav();
        setSideBars();
        resizeContainer();
    };

    var setSecondaryNav = function() {
        var $secondNavBar = $("#second-navbar");

        if ($secondNavBar.length > 0) {
            var respColour = $(".responsive-indicator").css("background-color");
            var isScrollToFixed = $.isScrollToFixed("#second-navbar");

            if (isScrollToFixed) {
                $secondNavBar.trigger("detach.ScrollToFixed");
            }

            if (respColour != "rgb(0, 0, 0)") {
                $secondNavBar.scrollToFixed({
                    marginTop:$("#navbar").outerHeight(true),
                    zIndex:99
                });
            }
        }

    };

    var setSideBars = function() {
        var $sideBars = $(".kf-sidebar");

        if ($sideBars.length > 0) {
            var isScrollToFixed = $.isScrollToFixed(".kf-sidebar");

            if (isScrollToFixed) {
                $sideBars.trigger("detach.ScrollToFixed");
            }

            $sideBars.scrollToFixed({
                marginTop: $("#navbar").outerHeight(true) + $("#second-navbar").outerHeight(true),
                limit: function() {
                    var limit = $("#footer").offset().top - $(this).outerHeight(true) - 20;
                    return limit;
                },
                zIndex: 98,
                removeOffsets:true
            });
        }
    };

    var resizeContainer = function() {
        
        //OnePageScroll plugin
        var $h = $('#OnePageContainer');
        $h.each(function(){
            $(this).css({
               'height':(($(window).height())-71)+'px' 
            });
        })
    };


}(jQuery));
;
