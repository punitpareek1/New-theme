function NpSlideshow_HideAllSlides(){$(".np-slideshow .np-slideshow-slide").hide()}function NpSlideshow_DisplayFirstSlide(){$(".np-slideshow .np-slideshow-slide:first").show().addClass("active")}function NpSlideshow_ChangeSlide(){var e=$(".np-slideshow .active"),t=e.next(".np-slideshow-slide");void 0===t.attr("class")&&(t=$(".np-slideshow .np-slideshow-slide:first")),e.removeClass("active").fadeOut(function(){t.addClass("active").fadeIn("fast")})}$(document).ready(function(){NpSlideshow_HideAllSlides(),NpSlideshow_DisplayFirstSlide();var e=$("np-slideshow").attr("data-duration");void 0===e&&(e=5e3),setInterval("NpSlideshow_ChangeSlide()",e)});var YoutubePopup={Open:function(e){e.preventDefault(),console.log("opening popup"),popupOpen("#popup-window");var t='<iframe id="video-about" width="560" height="315" src="https://www.youtube.com/embed/'+$(this).attr("data-video")+'?rel=0&autoplay=1" frameborder="0"  allowfullscreen></iframe>';$("#popup-window .popup-body").html(t)},Close:function(e){e.preventDefault(),$("#popup-window .popup-body").html(""),popupClose()}};$(document).ready(function(){$(".play-youtube-popup").on("click",YoutubePopup.Open),$(".play-youtube-popup-close").on("click",YoutubePopup.Close)});var VimeoPopup={Open:function(e){e.preventDefault(),console.log("opening popup"),popupOpen("#popup-window");var t='<iframe id="video-about" width="560" height="315" src="https://player.vimeo.com/video/'+$(this).attr("data-video")+'?autoplay=1" frameborder="0"  allowfullscreen></iframe>';$("#popup-window .popup-body").html(t)},Close:function(e){e.preventDefault(),$("#popup-window .popup-body").html(""),popupClose()}};function getCart_Success(e){}function getCart_Fail(e){}function page_HideWrapperElements(){$(".header").hide(),$("#shopify-section-general-newsletter").hide(),$("#shopify-section-general-footer").hide(),$(".template-social").hide(),$("#chatra").hide()}function popupOpen(e,t){void 0===t&&(t={}),"true"!=t.hideScreen&&$(".popup-screen").show(),$(e).show(),$("body").css({"overflow-y":"scroll",width:"100%"}),$(e+" :input:enabled:visible:first").focus()}function popupClose(){$(".popup-screen").hide(),$(".popup").hide(),$("body").css({position:"static","overflow-y":"auto"})}function SlideToggle(e){e.preventDefault(),$(".layer-slidetoggle-target").slideUp();var t=$(this).attr("data-target"),o=$("#"+t);o.is(":visible")||(o.slideDown(),$(".layer-slidetoggle-open").toggle(),$(".layer-slidetoggle-closed").toggle())}function ScrollTo_Click(e){e.preventDefault();var t=$(this).attr("href"),o=$("a[name="+t+"]"),i=$(this).attr("data-offset");void 0===i&&(i=0),ScrollTo_Go(o,!0,i)}function ScrollTo_Go(e,t,o){if(void 0===o&&(o=0),void 0===t&&(t=!0),e){$(document).height();var i=$(window).scrollTop(),n=$(e).offset();if(n){var a=n.top,r=a+parseInt(o);1==t?$("html, body").animate({scrollTop:r},400):(a<i||a>i+$(window).height())&&$("html, body").animate({scrollTop:r},400)}}}$(document).ready(function(){$(".play-vimeo-popup").on("click",VimeoPopup.Open),$(".play-vimeo-popup-close").on("click",VimeoPopup.Close)}),$(document).ready(function(){var e=$("#cookie-message"),t=function(e){for(var t="accepted-cookie-message=",o=document.cookie.split(";"),i=0;i<o.length;i++){for(var n=o[i];" "==n.charAt(0);)n=n.substring(1,n.length);if(0==n.indexOf(t))return n.substring(t.length,n.length)}return null}();null!=t&&"yes"==t?e.hide():e.show();var o=e.attr("data-cookie-expiry");null==o&&(o=30),cookiePath="/",$(document).on("click",".js-accept-cookies",function(e){e.preventDefault(),function(e,t,o,i){if(o){var n=new Date;n.setTime(n.getTime()+24*o*60*60*1e3);var a="; expires="+n.toGMTString()}else a="";document.cookie="accepted-cookie-message=yes"+a+"; path="+i}(0,0,o,cookiePath),$("#cookie-message").hide()})}),$(document).ready(function(){var e=window.location.pathname+window.location.search;$(".lazy").lazy(),e.includes("nowrapper")&&page_HideWrapperElements(),e.includes("/cart")&&$.ajax({url:"cart.js",type:"GET",async:!0,dataType:"json",data:void 0,success:getCart_Success,error:getCart_Fail})}),$(document).ready(function(){$(".hero-selector a, .selector-tile").click(function(e){e.preventDefault();var t=$(this).attr("data-target");$(".layer-slidetoggle-target").hide(),$("#"+t).show(),ScrollTo_Go("#"+t,!0,0)})}),$(document).ready(function(){$("body").on("click",'[name="checkout"], [name="goto_pp"], [name="goto_gc"]',function(){if(!$("#agree").is(":checked"))return $("#cart-box-alert-wrapper").show(),!1;$(this).submit()})}),$(document).ready(function(){$(document).on("click",".plan-heading",function(e){$(this).find(".fa").toggle(),$(this).nextAll(".plan-body").slideToggle()})}),$(function(){$(document).on("click",".popup-link",function(e){e.preventDefault();var t="#"+$(this).attr("data-target"),o=$(this).attr("data-hidescreen"),i={};i.hideScreen=o,popupOpen(t,i)}),$(document).on("click",".popup-close",function(e){e.preventDefault(),popupClose()}),$(document).on("keyup",function(e){27==e.keyCode&&$(".popup").is(":visible")&&popupClose()})}),$(document).ready(function(){$(".layer-slidetoggle-open").hide(),$(document).on("click",".layer-slidetoggle",SlideToggle)}),$(document).ready(function(){$(document).on("click",".scrollto",ScrollTo_Click)});var toggle=function(e){function t(e){e.preventDefault(),console.log($(e.target).attr("id"));var t=$("#"+$(this).attr("data-target")),o=$(this).attr("data-trigger-hide");o||(o=!1),o="true"==o,$(e.target).children(".toggle-on-trigger").toggle(),t.toggle(),1==o&&$(this).hide()}$(document).ready(function(e){$(document).on("click",".toggle-trigger",t)})}();function atmousepopup_close_fromlink(e){e.preventDefault();var t=jQuery(this).attr("data-target");void 0!==t&&"#"!=t.charAt(0)&&(t="#"+t),t?atmousepopup_close(t):console.log("Error: No target popup given")}function atmousepopup_close(e){jQuery(".popup-screen").hide(),jQuery(e).hide()}function atmousepopup_open(e,t,o=""){var i=(o=o||{})||{};if(i.bottomBuffer)i.bottomBuffer;else;var n,a,r=jQuery(t),l=r.width()+parseInt(r.css("padding-left"))+parseInt(r.css("padding-right")),u=r.height(),s=parseInt(r.css("marginTop")),c=jQuery(window).width(),p=jQuery(window).height(),d=jQuery(document).scrollTop();if("atmouse"==o.positioning){(n="center"==o["position-x"]?e.clientX-l/2:e.clientX+10)+l>c&&(n=c-l),n<0&&(n=e.clientX),n+l>c&&(n=10,l=c-20);a="top"==o["position-y"]?e.clientY:"bottom"==o["position-y"]?e.clientY-u:e.clientY-u/2;a+u/2>p&&(a=e.clientY-u),a+s<0&&(a=30,s=0),o&&1==o.useScreen&&jQuery(".popup-screen").show(),jQuery(t).css({left:n,top:a,marginTop:s,marginLeft:"0",width:l}).show()}else jQuery(t).show()}!function(e,t){"use strict";var o=e.jQuery||e.Zepto,i=0,n=!1;function a(i,a,r,l,u){var s=0,c=-1,p=-1,d=!1,f="afterLoad",h="load",g="error",m="img",v="src",y="srcset",$="sizes",w="background-image";function b(){var t,n,s,f;d=1<e.devicePixelRatio,r=A(r),0<=a.delay&&setTimeout(function(){k(!0)},a.delay),(a.delay<0||a.combined)&&(l.e=(t=a.throttle,n=function(e){"resize"===e.type&&(c=p=-1),k(e.all)},f=0,function(e,o){var r=+new Date-f;function l(){f=+new Date,n.call(i,e)}s&&clearTimeout(s),t<r||!a.enableThrottle||o?l():s=setTimeout(l,t-r)}),l.a=function(e){e=A(e),r.push.apply(r,e)},l.g=function(){return r=o(r).filter(function(){return!o(this).data(a.loadedName)})},l.f=function(e){for(var t=0;t<e.length;t++){var o=r.filter(function(){return this===e[t]});o.length&&k(!1,o)}},k(),o(a.appendScroll).on("scroll."+u+" resize."+u,l.e))}function A(e){for(var n=a.defaultImage,r=a.placeholder,l=a.imageBase,u=a.srcsetAttribute,s=a.loaderAttribute,c=a._f||{},p=0,d=(e=o(e).filter(function(){var e=o(this),i=T(this);return!e.data(a.handledName)&&(e.attr(a.attribute)||e.attr(u)||e.attr(s)||c[i]!==t)}).data("plugin_"+a.name,i)).length;p<d;p++){var f=o(e[p]),h=T(e[p]),g=f.attr(a.imageBaseAttribute)||l;h===m&&g&&f.attr(u)&&f.attr(u,C(f.attr(u),g)),c[h]===t||f.attr(s)||f.attr(s,c[h]),h===m&&n&&!f.attr(v)?f.attr(v,n):h===m||!r||f.css(w)&&"none"!==f.css(w)||f.css(w,"url('"+r+"')")}return e}function k(e,t){if(r.length){for(var n=t||r,l=!1,u=a.imageBase||"",s=a.srcsetAttribute,c=a.handledName,p=0;p<n.length;p++)if(e||t||S(n[p])){var d=o(n[p]),f=T(n[p]),h=d.attr(a.attribute),g=d.attr(a.imageBaseAttribute)||u,$=d.attr(a.loaderAttribute);d.data(c)||a.visibleOnly&&!d.is(":visible")||!((h||d.attr(s))&&(f===m&&(g+h!==d.attr(v)||d.attr(s)!==d.attr(y))||f!==m&&g+h!==d.css(w))||$)||(l=!0,d.data(c,!0),_(d,f,g,$))}l&&(r=o(r).filter(function(){return!o(this).data(c)}))}else a.autoDestroy&&i.destroy()}function _(e,t,i,n){++s;var r=function(){j("onError",e),D(),r=o.noop};j("beforeLoad",e);var l=a.attribute,u=a.srcsetAttribute,c=a.sizesAttribute,p=a.retinaAttribute,b=a.removeAttribute,A=a.loadedName,k=e.attr(p);if(n){var _=function(){b&&e.removeAttr(a.loaderAttribute),e.data(A,!0),j(f,e),setTimeout(D,1),_=o.noop};e.off(g).one(g,r).one(h,_),j(n,e,function(t){t?(e.off(h),_()):(e.off(g),r())})||e.trigger(g)}else{var S=o(new Image);S.one(g,r).one(h,function(){e.hide(),t===m?e.attr($,S.attr($)).attr(y,S.attr(y)).attr(v,S.attr(v)):e.css(w,"url('"+S.attr(v)+"')"),e[a.effect](a.effectTime),b&&(e.removeAttr(l+" "+u+" "+p+" "+a.imageBaseAttribute),c!==$&&e.removeAttr(c)),e.data(A,!0),j(f,e),S.remove(),D()});var T=(d&&k?k:e.attr(l))||"";S.attr($,e.attr(c)).attr(y,e.attr(u)).attr(v,T?i+T:null),S.complete&&S.trigger(h)}}function S(t){var i=t.getBoundingClientRect(),n=a.scrollDirection,r=a.threshold,l=(0<=p?p:p=o(e).height())+r>i.top&&-r<i.bottom,u=(0<=c?c:c=o(e).width())+r>i.left&&-r<i.right;return"vertical"===n?l:"horizontal"===n?u:l&&u}function T(e){return e.tagName.toLowerCase()}function C(e,t){if(t){var o=e.split(",");e="";for(var i=0,n=o.length;i<n;i++)e+=t+o[i].trim()+(i!==n-1?",":"")}return e}function D(){--s,r.length||s||j("onFinishedAll")}function j(e,t,o){return!!(e=a[e])&&(e.apply(i,[].slice.call(arguments,1)),!0)}"event"===a.bind||n?b():o(e).on(h+"."+u,b)}function r(n,r){var l=this,u=o.extend({},l.config,r),s={},c=u.name+"-"+ ++i;return l.config=function(e,o){return o===t?u[e]:(u[e]=o,l)},l.addItems=function(e){return s.a&&s.a("string"===o.type(e)?o(e):e),l},l.getItems=function(){return s.g?s.g():{}},l.update=function(e){return s.e&&s.e({},!e),l},l.force=function(e){return s.f&&s.f("string"===o.type(e)?o(e):e),l},l.loadAll=function(){return s.e&&s.e({all:!0},!0),l},l.destroy=function(){return o(u.appendScroll).off("."+c,s.e),o(e).off("."+c),s={},t},a(l,u,n,s,c),u.chainable?n:l}o.fn.Lazy=o.fn.lazy=function(e){return new r(this,e)},o.Lazy=o.lazy=function(e,i,n){if(o.isFunction(i)&&(n=i,i=[]),o.isFunction(n)){e=o.isArray(e)?e:[e],i=o.isArray(i)?i:[i];for(var a=r.prototype.config,l=a._f||(a._f={}),u=0,s=e.length;u<s;u++)(a[e[u]]===t||o.isFunction(a[e[u]]))&&(a[e[u]]=n);for(var c=0,p=i.length;c<p;c++)l[i[c]]=e[0]}},r.prototype.config={name:"lazy",chainable:!0,autoDestroy:!0,bind:"load",threshold:500,visibleOnly:!1,appendScroll:e,scrollDirection:"both",imageBase:null,defaultImage:"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",placeholder:null,delay:-1,combined:!1,attribute:"data-src",srcsetAttribute:"data-srcset",sizesAttribute:"data-sizes",retinaAttribute:"data-retina",loaderAttribute:"data-loader",imageBaseAttribute:"data-imagebase",removeAttribute:!0,handledName:"handled",loadedName:"loaded",effect:"show",effectTime:0,enableThrottle:!0,throttle:250,beforeLoad:t,afterLoad:t,onError:t,onFinishedAll:t},o(e).on("load",function(){n=!0})}(window),(window.jQuery||window.Zepto).lazy("vimeo",function(e,t){"iframe"===e[0].tagName.toLowerCase()?(e.attr("src","https://player.vimeo.com/video/"+e.attr("data-src")),this.config("removeAttribute")&&e.removeAttr("data-src")):t(!1)}),jQuery(document).ready(function(){jQuery(document).on("click",".popup-close-link",atmousepopup_close_fromlink),$(document).mouseup(function(e){var t=$(".atmousepopup-target");t.is(e.target)||0!==t.has(e.target).length||t.hide()})}),jQuery(document).on("click",".atmousepopup-link",function(e){e.preventDefault();var t="#"+jQuery(this).attr("data-target"),o=jQuery(this).attr("data-position-x"),i=jQuery(this).attr("data-position-y");popupOptions={"position-x":o,"position-y":i,positioning:"page"},atmousepopup_open(e,t,popupOptions)});