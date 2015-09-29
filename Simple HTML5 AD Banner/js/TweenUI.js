(function(tweenui) {
var timeline;
function startPlaying() { timeline.play(0); }
function g(name) { name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]"); var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"); var results = regex.exec(window.location.search); if(results == null) return ""; else return decodeURIComponent(results[1].replace(/\+/g, " ")); }
var res = function() { var bd = document.getElementsByTagName('body')[0];bd.style.webkitTransform = 'scale(' + window.innerWidth/460 + ')';bd.style.transform = 'scale(' + window.innerWidth/460 + ')';}
if (g('s')==1) { window.onresize = res; }
var loadcnt = 3;
function tui_go() {
--loadcnt; if (loadcnt==0) {
var l = g("l"); var ctl = document.getElementById("tui-ctl");
if (l!="" && ctl) { if (g('a')==1) { l = l + encodeURIComponent(ctl.href) } ctl.href=l; }
if (typeof(tweenui.exp) == "function") { tweenui.exp(); }
TweenLite.set(document.getElementById("tui-ct"), {css: {alpha: 0}});
if (g('s')==1) { res(); }
startPlaying();
}
}
tweenui.init = function() {
timeline = new TimelineLite({paused:true, onComplete:startPlaying});
TweenLite.defaultOverwrite = "none";
timeline.insert(new TweenLite({}, 0.0, {}), 10.0);
var layer_1 = document.getElementById("tui-1");
timeline.insert(TweenLite.to(layer_1, 0.9218, {css: {scale: 1.0}, ease: Elastic.easeOut}), 0.16);
timeline.insert(TweenLite.to(layer_1, 0.18, {css: {autoAlpha: 0.0}, ease: Power1.easeOut}), 2.0);
timeline.insert(TweenLite.to(layer_1, 0.2, {css: {scale: 3.829}, ease: Power2.easeOut}), 2.0);
TweenLite.set(layer_1, {css: {autoAlpha: 1.0, x: 66, y: 56, scale: 0.0, rotationX: 0.0, rotationY: 0.0, rotationZ: 0.0}});
var layer_2 = document.getElementById("tui-2");
timeline.insert(TweenLite.to(layer_2, 0.3807, {css: {y: 21, x: 134}, ease: Power1.easeOut}), 2.2044);
timeline.insert(TweenLite.to(layer_2, 0.2404, {css: {autoAlpha: 1.0}, ease: Power1.easeOut}), 2.3647);
timeline.insert(TweenLite.to(layer_2, 0.5, {css: {y: 130, x: 29}, ease: Power1.easeOut}), 6.4929);
timeline.insert(TweenLite.to(layer_2, 0.8817, {css: {scale: 4.0}, ease: Power1.easeOut}), 6.492985971943887);
timeline.insert(TweenLite.to(layer_2, 0.4408, {css: {rotationX: 0.0, rotationY: 0.0,rotationZ: 700.0}, ease: Power1.easeOut}), 6.492985971943887);
timeline.insert(TweenLite.to(layer_2, 0.3206, {css: {autoAlpha: 0.0}, ease: Power1.easeOut}), 6.51302);
TweenLite.set(layer_2, {css: {autoAlpha: 0.0, x: -360, y: 21, scale: 1.0, rotationX: 0.0, rotationY: 0.0, rotationZ: 0.0}});
var layer_3 = document.getElementById("tui-3");
timeline.insert(TweenLite.to(layer_3, 0.3, {css: {y: 64, x: 288}, ease: Power1.easeOut}), 3.046);
timeline.insert(TweenLite.to(layer_3, 0.1803, {css: {autoAlpha: 1.0}, ease: Power1.easeOut}), 3.0661);
timeline.insert(TweenLite.to(layer_3, 0.5, {css: {y: 143, x: 288}, ease: Power1.easeOut}), 6.4929);
timeline.insert(TweenLite.to(layer_3, 0.9218, {css: {scale: 4.0}, ease: Power1.easeOut}), 6.492985971943887);
timeline.insert(TweenLite.to(layer_3, 0.4408, {css: {rotationX: 0.0, rotationY: 0.0,rotationZ: 1000.0}, ease: Power1.easeOut}), 6.492985971943887);
timeline.insert(TweenLite.to(layer_3, 0.3206, {css: {autoAlpha: 0.0}, ease: Power1.easeOut}), 6.533);
TweenLite.set(layer_3, {css: {autoAlpha: 0.0, x: 588, y: 64, scale: 1.0, rotationX: 0.0, rotationY: 0.0, rotationZ: 0.0}});
var layer_4 = document.getElementById("tui-4");
timeline.insert(TweenLite.to(layer_4, 0.3, {css: {y: 107, x: 289}, ease: Power1.easeOut}), 3.7875);
timeline.insert(TweenLite.to(layer_4, 0.1803, {css: {autoAlpha: 1.0}, ease: Power1.easeOut}), 3.8877);
timeline.insert(TweenLite.to(layer_4, 0.5, {css: {y: 127, x: 288}, ease: Power1.easeOut}), 6.4929);
timeline.insert(TweenLite.to(layer_4, 0.7815, {css: {scale: 2.9401}, ease: Power1.easeOut}), 6.492985971943887);
timeline.insert(TweenLite.to(layer_4, 0.4408, {css: {rotationX: 0.0, rotationY: 0.0,rotationZ: 600.0}, ease: Power1.easeOut}), 6.492985971943887);
timeline.insert(TweenLite.to(layer_4, 0.3807, {css: {autoAlpha: 0.0}, ease: Power1.easeOut}), 6.4929);
TweenLite.set(layer_4, {css: {autoAlpha: 0.0, x: 289, y: 64, scale: 1.0, rotationX: 0.0, rotationY: 0.0, rotationZ: 0.0}});
var layer_5 = document.getElementById("tui-5");
timeline.insert(TweenLite.to(layer_5, 0.3607, {css: {y: 150, x: 176}, ease: Power1.easeOut}), 4.6292);
timeline.insert(TweenLite.to(layer_5, 0.2004, {css: {autoAlpha: 1.0}, ease: Power1.easeOut}), 4.7494);
timeline.insert(TweenLite.to(layer_5, 0.5, {css: {y: 71, x: 176}, ease: Power1.easeOut}), 6.4929);
timeline.insert(TweenLite.to(layer_5, 0.6813, {css: {scale: 2.769}, ease: Power1.easeOut}), 6.492985971943887);
timeline.insert(TweenLite.to(layer_5, 0.4008, {css: {rotationX: 0.0, rotationY: 0.0,rotationZ: 800.0}, ease: Power1.easeOut}), 6.492985971943887);
timeline.insert(TweenLite.to(layer_5, 0.4008, {css: {autoAlpha: 0.0}, ease: Power1.easeOut}), 6.4929);
TweenLite.set(layer_5, {css: {autoAlpha: 0.0, x: 176, y: 247, scale: 1.0, rotationX: 0.0, rotationY: 0.0, rotationZ: 0.0}});
var layer_6 = document.getElementById("tui-6");
timeline.insert(TweenLite.to(layer_6, 1.2, {css: {y: 73, x: 123}, ease: Elastic.easeOut}), 7.07);
timeline.insert(TweenLite.to(layer_6, 0.501, {css: {autoAlpha: 1.0}, ease: Power1.easeOut}), 7.05);
timeline.insert(TweenLite.to(layer_6, 0.42, {css: {rotationX: 0.0, rotationY: 0.0,rotationZ: 0.0}, ease: Power1.easeOut}), 7.11);
TweenLite.set(layer_6, {css: {autoAlpha: 0.0, x: 123, y: -117, scale: 1.0, rotationX: 0.0, rotationY: 90.0, rotationZ: 0.0}});
tui_go();
}
WebFontConfig = {google: { families: ['Lora', 'Cookie'] }, active: function() { tui_go(); },inactive: function() { tui_go(); } };(function() {var wf = document.createElement('script');wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +'://ajax.googleapis.com/ajax/libs/webfont/1.0.31/webfont.js';wf.type = 'text/javascript';wf.async = 'true';var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(wf, s);})();
tui_go();
}(window.tweenui = window.tweenui || {}));