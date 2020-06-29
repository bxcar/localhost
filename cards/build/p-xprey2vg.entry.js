import{r as t,c as i,h as n,H as s,g as e}from"./p-5a291771.js";var r;r={exports:{}},
/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
function(t,i,n,s){var e,h=["","webkit","Moz","MS","ms","o"],o=i.createElement("div"),u="function",c=Math.round,a=Math.abs,f=Date.now;function l(t,i,n){return setTimeout(E(t,n),i)}function v(t,i,n){return!!Array.isArray(t)&&(p(t,n[i],n),!0)}function p(t,i,n){var e;if(t)if(t.forEach)t.forEach(i,n);else if(t.length!==s)for(e=0;e<t.length;)i.call(n,t[e],e,t),e++;else for(e in t)t.hasOwnProperty(e)&&i.call(n,t[e],e,t)}function d(i,n,s){var e="DEPRECATED METHOD: "+n+"\n"+s+" AT \n";return function(){var n=new Error("get-stack-trace"),s=n&&n.stack?n.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",r=t.console&&(t.console.warn||t.console.log);return r&&r.call(t.console,e,s),i.apply(this,arguments)}}e="function"!=typeof Object.assign?function(t){if(t===s||null===t)throw new TypeError("Cannot convert undefined or null to object");for(var i=Object(t),n=1;n<arguments.length;n++){var e=arguments[n];if(e!==s&&null!==e)for(var r in e)e.hasOwnProperty(r)&&(i[r]=e[r])}return i}:Object.assign;var m=d((function(t,i,n){for(var e=Object.keys(i),r=0;r<e.length;)(!n||n&&t[e[r]]===s)&&(t[e[r]]=i[e[r]]),r++;return t}),"extend","Use `assign`."),T=d((function(t,i){return m(t,i,!0)}),"merge","Use `assign`.");function g(t,i,n){var s,r=i.prototype;(s=t.prototype=Object.create(r)).constructor=t,s._super=r,n&&e(s,n)}function E(t,i){return function(){return t.apply(i,arguments)}}function y(t,i){return typeof t==u?t.apply(i&&i[0]||s,i):t}function w(t,i){return t===s?i:t}function A(t,i,n){p(O(i),(function(i){t.addEventListener(i,n,!1)}))}function I(t,i,n){p(O(i),(function(i){t.removeEventListener(i,n,!1)}))}function S(t,i){for(;t;){if(t==i)return!0;t=t.parentNode}return!1}function b(t,i){return t.indexOf(i)>-1}function O(t){return t.trim().split(/\s+/g)}function R(t,i,n){if(t.indexOf&&!n)return t.indexOf(i);for(var s=0;s<t.length;){if(n&&t[s][n]==i||!n&&t[s]===i)return s;s++}return-1}function _(t){return Array.prototype.slice.call(t,0)}function C(t,i,n){for(var s=[],e=[],r=0;r<t.length;){var h=i?t[r][i]:t[r];R(e,h)<0&&s.push(t[r]),e[r]=h,r++}return n&&(s=i?s.sort((function(t,n){return t[i]>n[i]})):s.sort()),s}function D(t,i){for(var n,e,r=i[0].toUpperCase()+i.slice(1),o=0;o<h.length;){if((e=(n=h[o])?n+r:i)in t)return e;o++}return s}var M=1;function N(i){var n=i.ownerDocument||i;return n.defaultView||n.parentWindow||t}var P="ontouchstart"in t,x=D(t,"PointerEvent")!==s,L=P&&/mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),j=25,z=1,F=2,H=4,U=8,X=1,Y=2,W=4,k=8,q=16,G=Y|W,$=k|q,B=G|$,Z=["x","y"],V=["clientX","clientY"];function J(t,i){var n=this;this.manager=t,this.callback=i,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(i){y(t.options.enable,[t])&&n.handler(i)},this.init()}function K(t,i,n){var e=n.pointers.length,r=n.changedPointers.length,h=i&z&&e-r==0,o=i&(H|U)&&e-r==0;n.isFirst=!!h,n.isFinal=!!o,h&&(t.session={}),n.eventType=i,function(t,i){var n=t.session,e=i.pointers,r=e.length;n.firstInput||(n.firstInput=Q(i)),r>1&&!n.firstMultiple?n.firstMultiple=Q(i):1===r&&(n.firstMultiple=!1);var h=n.firstInput,o=n.firstMultiple,u=o?o.center:h.center,c=i.center=tt(e);i.timeStamp=f(),i.deltaTime=i.timeStamp-h.timeStamp,i.angle=et(u,c),i.distance=st(u,c),function(t,i){var n=i.center,s=t.offsetDelta||{},e=t.prevDelta||{},r=t.prevInput||{};i.eventType!==z&&r.eventType!==H||(e=t.prevDelta={x:r.deltaX||0,y:r.deltaY||0},s=t.offsetDelta={x:n.x,y:n.y}),i.deltaX=e.x+(n.x-s.x),i.deltaY=e.y+(n.y-s.y)}(n,i),i.offsetDirection=nt(i.deltaX,i.deltaY);var l,v,p=it(i.deltaTime,i.deltaX,i.deltaY);i.overallVelocityX=p.x,i.overallVelocityY=p.y,i.overallVelocity=a(p.x)>a(p.y)?p.x:p.y,i.scale=o?(l=o.pointers,st((v=e)[0],v[1],V)/st(l[0],l[1],V)):1,i.rotation=o?function(t,i){return et(i[1],i[0],V)+et(t[1],t[0],V)}(o.pointers,e):0,i.maxPointers=n.prevInput?i.pointers.length>n.prevInput.maxPointers?i.pointers.length:n.prevInput.maxPointers:i.pointers.length,function(t,i){var n,e,r,h,o=t.lastInterval||i,u=i.timeStamp-o.timeStamp;if(i.eventType!=U&&(u>j||o.velocity===s)){var c=i.deltaX-o.deltaX,f=i.deltaY-o.deltaY,l=it(u,c,f);e=l.x,r=l.y,n=a(l.x)>a(l.y)?l.x:l.y,h=nt(c,f),t.lastInterval=i}else n=o.velocity,e=o.velocityX,r=o.velocityY,h=o.direction;i.velocity=n,i.velocityX=e,i.velocityY=r,i.direction=h}(n,i);var d=t.element;S(i.srcEvent.target,d)&&(d=i.srcEvent.target),i.target=d}(t,n),t.emit("hammer.input",n),t.recognize(n),t.session.prevInput=n}function Q(t){for(var i=[],n=0;n<t.pointers.length;)i[n]={clientX:c(t.pointers[n].clientX),clientY:c(t.pointers[n].clientY)},n++;return{timeStamp:f(),pointers:i,center:tt(i),deltaX:t.deltaX,deltaY:t.deltaY}}function tt(t){var i=t.length;if(1===i)return{x:c(t[0].clientX),y:c(t[0].clientY)};for(var n=0,s=0,e=0;e<i;)n+=t[e].clientX,s+=t[e].clientY,e++;return{x:c(n/i),y:c(s/i)}}function it(t,i,n){return{x:i/t||0,y:n/t||0}}function nt(t,i){return t===i?X:a(t)>=a(i)?t<0?Y:W:i<0?k:q}function st(t,i,n){n||(n=Z);var s=i[n[0]]-t[n[0]],e=i[n[1]]-t[n[1]];return Math.sqrt(s*s+e*e)}function et(t,i,n){return n||(n=Z),180*Math.atan2(i[n[1]]-t[n[1]],i[n[0]]-t[n[0]])/Math.PI}J.prototype={handler:function(){},init:function(){this.evEl&&A(this.element,this.evEl,this.domHandler),this.evTarget&&A(this.target,this.evTarget,this.domHandler),this.evWin&&A(N(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&I(this.element,this.evEl,this.domHandler),this.evTarget&&I(this.target,this.evTarget,this.domHandler),this.evWin&&I(N(this.element),this.evWin,this.domHandler)}};var rt={mousedown:z,mousemove:F,mouseup:H},ht="mousedown",ot="mousemove mouseup";function ut(){this.evEl=ht,this.evWin=ot,this.pressed=!1,J.apply(this,arguments)}g(ut,J,{handler:function(t){var i=rt[t.type];i&z&&0===t.button&&(this.pressed=!0),i&F&&1!==t.which&&(i=H),this.pressed&&(i&H&&(this.pressed=!1),this.callback(this.manager,i,{pointers:[t],changedPointers:[t],pointerType:"mouse",srcEvent:t}))}});var ct={pointerdown:z,pointermove:F,pointerup:H,pointercancel:U,pointerout:U},at={2:"touch",3:"pen",4:"mouse",5:"kinect"},ft="pointerdown",lt="pointermove pointerup pointercancel";function vt(){this.evEl=ft,this.evWin=lt,J.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}t.MSPointerEvent&&!t.PointerEvent&&(ft="MSPointerDown",lt="MSPointerMove MSPointerUp MSPointerCancel"),g(vt,J,{handler:function(t){var i=this.store,n=!1,s=t.type.toLowerCase().replace("ms",""),e=ct[s],r=at[t.pointerType]||t.pointerType,h="touch"==r,o=R(i,t.pointerId,"pointerId");e&z&&(0===t.button||h)?o<0&&(i.push(t),o=i.length-1):e&(H|U)&&(n=!0),o<0||(i[o]=t,this.callback(this.manager,e,{pointers:i,changedPointers:[t],pointerType:r,srcEvent:t}),n&&i.splice(o,1))}});var pt={touchstart:z,touchmove:F,touchend:H,touchcancel:U},dt="touchstart",mt="touchstart touchmove touchend touchcancel";function Tt(){this.evTarget=dt,this.evWin=mt,this.started=!1,J.apply(this,arguments)}function gt(t,i){var n=_(t.touches),s=_(t.changedTouches);return i&(H|U)&&(n=C(n.concat(s),"identifier",!0)),[n,s]}g(Tt,J,{handler:function(t){var i=pt[t.type];if(i===z&&(this.started=!0),this.started){var n=gt.call(this,t,i);i&(H|U)&&n[0].length-n[1].length==0&&(this.started=!1),this.callback(this.manager,i,{pointers:n[0],changedPointers:n[1],pointerType:"touch",srcEvent:t})}}});var Et={touchstart:z,touchmove:F,touchend:H,touchcancel:U},yt="touchstart touchmove touchend touchcancel";function wt(){this.evTarget=yt,this.targetIds={},J.apply(this,arguments)}function At(t,i){var n=_(t.touches),s=this.targetIds;if(i&(z|F)&&1===n.length)return s[n[0].identifier]=!0,[n,n];var e,r,h=_(t.changedTouches),o=[],u=this.target;if(r=n.filter((function(t){return S(t.target,u)})),i===z)for(e=0;e<r.length;)s[r[e].identifier]=!0,e++;for(e=0;e<h.length;)s[h[e].identifier]&&o.push(h[e]),i&(H|U)&&delete s[h[e].identifier],e++;return o.length?[C(r.concat(o),"identifier",!0),o]:void 0}g(wt,J,{handler:function(t){var i=Et[t.type],n=At.call(this,t,i);n&&this.callback(this.manager,i,{pointers:n[0],changedPointers:n[1],pointerType:"touch",srcEvent:t})}});var It=2500,St=25;function bt(){J.apply(this,arguments);var t=E(this.handler,this);this.touch=new wt(this.manager,t),this.mouse=new ut(this.manager,t),this.primaryTouch=null,this.lastTouches=[]}function Ot(t,i){t&z?(this.primaryTouch=i.changedPointers[0].identifier,Rt.call(this,i)):t&(H|U)&&Rt.call(this,i)}function Rt(t){var i=t.changedPointers[0];if(i.identifier===this.primaryTouch){var n={x:i.clientX,y:i.clientY};this.lastTouches.push(n);var s=this.lastTouches;setTimeout((function(){var t=s.indexOf(n);t>-1&&s.splice(t,1)}),It)}}function _t(t){for(var i=t.srcEvent.clientX,n=t.srcEvent.clientY,s=0;s<this.lastTouches.length;s++){var e=this.lastTouches[s],r=Math.abs(i-e.x),h=Math.abs(n-e.y);if(r<=St&&h<=St)return!0}return!1}g(bt,J,{handler:function(t,i,n){var s="mouse"==n.pointerType;if(!(s&&n.sourceCapabilities&&n.sourceCapabilities.firesTouchEvents)){if("touch"==n.pointerType)Ot.call(this,i,n);else if(s&&_t.call(this,n))return;this.callback(t,i,n)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var Ct=D(o.style,"touchAction"),Dt=Ct!==s,Mt=function(){if(!Dt)return!1;var i={},n=t.CSS&&t.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach((function(s){i[s]=!n||t.CSS.supports("touch-action",s)})),i}();function Nt(t,i){this.manager=t,this.set(i)}Nt.prototype={set:function(t){"compute"==t&&(t=this.compute()),Dt&&this.manager.element.style&&Mt[t]&&(this.manager.element.style[Ct]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return p(this.manager.recognizers,(function(i){y(i.options.enable,[i])&&(t=t.concat(i.getTouchAction()))})),function(t){if(b(t,"none"))return"none";var i=b(t,"pan-x"),n=b(t,"pan-y");return i&&n?"none":i||n?i?"pan-x":"pan-y":b(t,"manipulation")?"manipulation":"auto"}(t.join(" "))},preventDefaults:function(t){var i=t.srcEvent,n=t.offsetDirection;if(this.manager.session.prevented)i.preventDefault();else{var s=this.actions,e=b(s,"none")&&!Mt.none,r=b(s,"pan-y")&&!Mt["pan-y"],h=b(s,"pan-x")&&!Mt["pan-x"];if(e&&1===t.pointers.length&&t.distance<2&&t.deltaTime<250)return;if(!h||!r)return e||r&&n&G||h&&n&$?this.preventSrc(i):void 0}},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};var Pt=1,xt=2,Lt=4,jt=8,zt=jt,Ft=16;function Ht(t){this.options=e({},this.defaults,t||{}),this.id=M++,this.manager=null,this.options.enable=w(this.options.enable,!0),this.state=Pt,this.simultaneous={},this.requireFail=[]}function Ut(t){return t&Ft?"cancel":t&jt?"end":t&Lt?"move":t&xt?"start":""}function Xt(t){return t==q?"down":t==k?"up":t==Y?"left":t==W?"right":""}function Yt(t,i){var n=i.manager;return n?n.get(t):t}function Wt(){Ht.apply(this,arguments)}function kt(){Wt.apply(this,arguments),this.pX=null,this.pY=null}function qt(){Wt.apply(this,arguments)}function Gt(){Ht.apply(this,arguments),this._timer=null,this._input=null}function $t(){Wt.apply(this,arguments)}function Bt(){Wt.apply(this,arguments)}function Zt(){Ht.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function Vt(t,i){return(i=i||{}).recognizers=w(i.recognizers,Vt.defaults.preset),new Jt(t,i)}function Jt(t,i){var n;this.options=e({},Vt.defaults,i||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=new((n=this).options.inputClass||(x?vt:L?wt:P?bt:ut))(n,K),this.touchAction=new Nt(this,this.options.touchAction),Kt(this,!0),p(this.options.recognizers,(function(t){var i=this.add(new t[0](t[1]));t[2]&&i.recognizeWith(t[2]),t[3]&&i.requireFailure(t[3])}),this)}function Kt(t,i){var n,s=t.element;s.style&&(p(t.options.cssProps,(function(e,r){n=D(s.style,r),i?(t.oldCssProps[n]=s.style[n],s.style[n]=e):s.style[n]=t.oldCssProps[n]||""})),i||(t.oldCssProps={}))}Ht.prototype={defaults:{},set:function(t){return e(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(v(t,"recognizeWith",this))return this;var i=this.simultaneous;return i[(t=Yt(t,this)).id]||(i[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return v(t,"dropRecognizeWith",this)?this:(t=Yt(t,this),delete this.simultaneous[t.id],this)},requireFailure:function(t){if(v(t,"requireFailure",this))return this;var i=this.requireFail;return-1===R(i,t=Yt(t,this))&&(i.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(v(t,"dropRequireFailure",this))return this;t=Yt(t,this);var i=R(this.requireFail,t);return i>-1&&this.requireFail.splice(i,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){var i=this,n=this.state;function s(n){i.manager.emit(n,t)}n<jt&&s(i.options.event+Ut(n)),s(i.options.event),t.additionalEvent&&s(t.additionalEvent),n>=jt&&s(i.options.event+Ut(n))},tryEmit:function(t){if(this.canEmit())return this.emit(t);this.state=32},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(this.requireFail[t].state&(32|Pt)))return!1;t++}return!0},recognize:function(t){var i=e({},t);if(!y(this.options.enable,[this,i]))return this.reset(),void(this.state=32);this.state&(zt|Ft|32)&&(this.state=Pt),this.state=this.process(i),this.state&(xt|Lt|jt|Ft)&&this.tryEmit(i)},process:function(){},getTouchAction:function(){},reset:function(){}},g(Wt,Ht,{defaults:{pointers:1},attrTest:function(t){var i=this.options.pointers;return 0===i||t.pointers.length===i},process:function(t){var i=this.state,n=t.eventType,s=i&(xt|Lt),e=this.attrTest(t);return s&&(n&U||!e)?i|Ft:s||e?n&H?i|jt:i&xt?i|Lt:xt:32}}),g(kt,Wt,{defaults:{event:"pan",threshold:10,pointers:1,direction:B},getTouchAction:function(){var t=this.options.direction,i=[];return t&G&&i.push("pan-y"),t&$&&i.push("pan-x"),i},directionTest:function(t){var i=this.options,n=!0,s=t.distance,e=t.direction,r=t.deltaX,h=t.deltaY;return e&i.direction||(i.direction&G?(e=0===r?X:r<0?Y:W,n=r!=this.pX,s=Math.abs(t.deltaX)):(e=0===h?X:h<0?k:q,n=h!=this.pY,s=Math.abs(t.deltaY))),t.direction=e,n&&s>i.threshold&&e&i.direction},attrTest:function(t){return Wt.prototype.attrTest.call(this,t)&&(this.state&xt||!(this.state&xt)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var i=Xt(t.direction);i&&(t.additionalEvent=this.options.event+i),this._super.emit.call(this,t)}}),g(qt,Wt,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return["none"]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&xt)},emit:function(t){1!==t.scale&&(t.additionalEvent=this.options.event+(t.scale<1?"in":"out")),this._super.emit.call(this,t)}}),g(Gt,Ht,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return["auto"]},process:function(t){var i=this.options,n=t.pointers.length===i.pointers,s=t.distance<i.threshold,e=t.deltaTime>i.time;if(this._input=t,!s||!n||t.eventType&(H|U)&&!e)this.reset();else if(t.eventType&z)this.reset(),this._timer=l((function(){this.state=zt,this.tryEmit()}),i.time,this);else if(t.eventType&H)return zt;return 32},reset:function(){clearTimeout(this._timer)},emit:function(t){this.state===zt&&(t&&t.eventType&H?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=f(),this.manager.emit(this.options.event,this._input)))}}),g($t,Wt,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return["none"]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&xt)}}),g(Bt,Wt,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:G|$,pointers:1},getTouchAction:function(){return kt.prototype.getTouchAction.call(this)},attrTest:function(t){var i,n=this.options.direction;return n&(G|$)?i=t.overallVelocity:n&G?i=t.overallVelocityX:n&$&&(i=t.overallVelocityY),this._super.attrTest.call(this,t)&&n&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers==this.options.pointers&&a(i)>this.options.velocity&&t.eventType&H},emit:function(t){var i=Xt(t.offsetDirection);i&&this.manager.emit(this.options.event+i,t),this.manager.emit(this.options.event,t)}}),g(Zt,Ht,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return["manipulation"]},process:function(t){var i=this.options,n=t.pointers.length===i.pointers,s=t.distance<i.threshold,e=t.deltaTime<i.time;if(this.reset(),t.eventType&z&&0===this.count)return this.failTimeout();if(s&&e&&n){if(t.eventType!=H)return this.failTimeout();var r=!this.pTime||t.timeStamp-this.pTime<i.interval,h=!this.pCenter||st(this.pCenter,t.center)<i.posThreshold;if(this.pTime=t.timeStamp,this.pCenter=t.center,h&&r?this.count+=1:this.count=1,this._input=t,0==this.count%i.taps)return this.hasRequireFailures()?(this._timer=l((function(){this.state=zt,this.tryEmit()}),i.interval,this),xt):zt}return 32},failTimeout:function(){return this._timer=l((function(){this.state=32}),this.options.interval,this),32},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==zt&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),Vt.VERSION="2.0.7",Vt.defaults={domEvents:!1,touchAction:"compute",enable:!0,inputTarget:null,inputClass:null,preset:[[$t,{enable:!1}],[qt,{enable:!1},["rotate"]],[Bt,{direction:G}],[kt,{direction:G},["swipe"]],[Zt],[Zt,{event:"doubletap",taps:2},["tap"]],[Gt]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}},Jt.prototype={set:function(t){return e(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?2:1},recognize:function(t){var i=this.session;if(!i.stopped){var n;this.touchAction.preventDefaults(t);var s=this.recognizers,e=i.curRecognizer;(!e||e&&e.state&zt)&&(e=i.curRecognizer=null);for(var r=0;r<s.length;)n=s[r],2===i.stopped||e&&n!=e&&!n.canRecognizeWith(e)?n.reset():n.recognize(t),!e&&n.state&(xt|Lt|jt)&&(e=i.curRecognizer=n),r++}},get:function(t){if(t instanceof Ht)return t;for(var i=this.recognizers,n=0;n<i.length;n++)if(i[n].options.event==t)return i[n];return null},add:function(t){if(v(t,"add",this))return this;var i=this.get(t.options.event);return i&&this.remove(i),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(v(t,"remove",this))return this;if(t=this.get(t)){var i=this.recognizers,n=R(i,t);-1!==n&&(i.splice(n,1),this.touchAction.update())}return this},on:function(t,i){if(t!==s&&i!==s){var n=this.handlers;return p(O(t),(function(t){n[t]=n[t]||[],n[t].push(i)})),this}},off:function(t,i){if(t!==s){var n=this.handlers;return p(O(t),(function(t){i?n[t]&&n[t].splice(R(n[t],i),1):delete n[t]})),this}},emit:function(t,n){this.options.domEvents&&function(t,n){var s=i.createEvent("Event");s.initEvent(t,!0,!0),s.gesture=n,n.target.dispatchEvent(s)}(t,n);var s=this.handlers[t]&&this.handlers[t].slice();if(s&&s.length){n.type=t,n.preventDefault=function(){n.srcEvent.preventDefault()};for(var e=0;e<s.length;)s[e](n),e++}},destroy:function(){this.element&&Kt(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},e(Vt,{INPUT_START:z,INPUT_MOVE:F,INPUT_END:H,INPUT_CANCEL:U,STATE_POSSIBLE:Pt,STATE_BEGAN:xt,STATE_CHANGED:Lt,STATE_ENDED:jt,STATE_RECOGNIZED:zt,STATE_CANCELLED:Ft,STATE_FAILED:32,DIRECTION_NONE:X,DIRECTION_LEFT:Y,DIRECTION_RIGHT:W,DIRECTION_UP:k,DIRECTION_DOWN:q,DIRECTION_HORIZONTAL:G,DIRECTION_VERTICAL:$,DIRECTION_ALL:B,Manager:Jt,Input:J,TouchAction:Nt,TouchInput:wt,MouseInput:ut,PointerEventInput:vt,TouchMouseInput:bt,SingleTouchInput:Tt,Recognizer:Ht,AttrRecognizer:Wt,Tap:Zt,Pan:kt,Swipe:Bt,Pinch:qt,Rotate:$t,Press:Gt,on:A,off:I,each:p,merge:T,extend:m,assign:e,inherit:g,bindFn:E,prefixed:D}),(void 0!==t?t:"undefined"!=typeof self?self:{}).Hammer=Vt,"function"==typeof s&&s.amd?s((function(){return Vt})):r.exports?r.exports=Vt:t.Hammer=Vt}(window,document);const h=class{constructor(n){t(this,n),this.scSwipeRight=i(this,"scSwipeRight",7),this.scSwipeLeft=i(this,"scSwipeLeft",7)}componentWillLoad(){this.cardState=Object.assign(Object.assign({},this.cardState),{offsetX:0,offsetY:0,isMoving:!1})}componentDidLoad(){this.hammertime=new Hammer(this.eventOverlayElement),this.hammertime.on("pan",t=>{this.cardState=Object.assign(Object.assign({},this.cardState),{offsetX:t.deltaX,velocityX:t.velocityX,offsetY:t.deltaY,velocityY:t.velocityY,rotation:.03*t.deltaX*t.deltaY/80,isMoving:!0,isSwiped:!1})}),this.hammertime.on("panend",t=>{let i=0,n=0,s=0,e=!1;t.velocityX>1&&(this.scSwipeRight.emit(),s=30,i=document.body.clientWidth+500,e=!0),t.velocityX<-1&&(this.scSwipeLeft.emit(),s=-30,i=-document.body.clientWidth-500,n=-100,e=!0),this.cardState=Object.assign(Object.assign({},this.cardState),{offsetX:i,offsetY:n,rotation:s,isSwiped:e,isMoving:!1})})}render(){return n(s,{style:{pointerEvents:this.cardState.isSwiped?"none":"all",borderColor:this.cardState.isMoving?"rgba(255,255,255,.6)":"transparent"}},n("div",{class:"card",style:{transform:`translate(${this.cardState.offsetX}px, ${this.cardState.offsetY}px) rotate(${this.cardState.rotation}deg)`,cursor:this.cardState.isMoving?"grabbing":"grab",transition:this.cardState.isMoving?"all 0s linear":"all 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275), opacity 0.5s ease-out, top 0.5s ease-in-out",borderBottomColor:this.cardState.isMoving?this.cardState.offsetX<0?this.leftColor:this.rightColor:"transparent"}},n("div",{ref:t=>this.eventOverlayElement=t,class:"event-overlay"}),n("slot",null)))}get el(){return e(this)}static get style(){return".card{cursor:-webkit-grab;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;color:#5e6680;background-color:#fff;-webkit-box-shadow:rgba(0,0,0,.1) 0 10px 10px;box-shadow:0 10px 10px rgba(0,0,0,.1);font-family:Nunito,sans-serif;position:relative;cursor:grab;padding:2em;padding-left:1em;padding-right:1em;padding-bottom:0;border-radius:20px;border-bottom:4px solid transparent;height:420px;-ms-flex-pack:justify;justify-content:space-between}.event-overlay{position:absolute;width:100%;height:100%;top:0;left:0}"}},o=class{constructor(n){t(this,n),this.stackOffsetY=.4,this.stackFinish=i(this,"stackFinish",7),this.childrenSwipe=i(this,"childrenSwipe",7)}componentWillLoad(){this.currentCard=0,this.children=this.el.querySelectorAll("rg-swipi-card"),this.children.forEach(t=>{t.addEventListener("scSwipeLeft",()=>this.onChildrenSwipe()),t.addEventListener("scSwipeRight",()=>this.onChildrenSwipe())})}onChildrenSwipe(){this.currentCard+=1,this.childrenSwipe.emit(this.children.length-this.currentCard),this.currentCard===this.children.length&&this.stackFinish.emit()}render(){return this.children.forEach((t,i)=>{t.style.top=this.stackOffsetY*(i-this.currentCard)+"em",t.style.position="absolute",t.style.borderBottom="2px solid transparent",t.style.transitionDelay=50*(i-this.currentCard)+"ms",t.style.zIndex=(this.children.length-i).toString(),t.style.opacity=(1-(i-this.currentCard)/6).toString(),t.style.transition="all 0.5s ease-in-out"}),n("slot",null)}get el(){return e(this)}static get style(){return":host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;position:relative}"}};export{h as rg_swipi_card,o as rg_swipi_cards};