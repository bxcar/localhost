System.register(["./p-06f45502.system.js"],(function(t){"use strict";var e,i,n,r,s;return{setters:[function(t){e=t.r;i=t.c;n=t.h;r=t.H;s=t.g}],execute:function(){function o(t,e){return e={exports:{}},t(e,e.exports),e.exports}var a=o((function(t){
/*! Hammer.JS - v2.0.7 - 2016-04-22
                 * http://hammerjs.github.io/
                 *
                 * Copyright (c) 2016 Jorik Tangelder;
                 * Licensed under the MIT license */
(function(e,i,n,r){var s=["","webkit","Moz","MS","ms","o"];var o=i.createElement("div");var a="function";var u=Math.round;var h=Math.abs;var c=Date.now;function l(t,e,i){return setTimeout(T(t,i),e)}function f(t,e,i){if(Array.isArray(t)){p(t,i[e],i);return true}return false}function p(t,e,i){var n;if(!t){return}if(t.forEach){t.forEach(e,i)}else if(t.length!==r){n=0;while(n<t.length){e.call(i,t[n],n,t);n++}}else{for(n in t){t.hasOwnProperty(n)&&e.call(i,t[n],n,t)}}}function v(t,i,n){var r="DEPRECATED METHOD: "+i+"\n"+n+" AT \n";return function(){var i=new Error("get-stack-trace");var n=i&&i.stack?i.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace";var s=e.console&&(e.console.warn||e.console.log);if(s){s.call(e.console,r,n)}return t.apply(this,arguments)}}var d;if(typeof Object.assign!=="function"){d=function t(e){if(e===r||e===null){throw new TypeError("Cannot convert undefined or null to object")}var i=Object(e);for(var n=1;n<arguments.length;n++){var s=arguments[n];if(s!==r&&s!==null){for(var o in s){if(s.hasOwnProperty(o)){i[o]=s[o]}}}}return i}}else{d=Object.assign}var m=v((function t(e,i,n){var s=Object.keys(i);var o=0;while(o<s.length){if(!n||n&&e[s[o]]===r){e[s[o]]=i[s[o]]}o++}return e}),"extend","Use `assign`.");var g=v((function t(e,i){return m(e,i,true)}),"merge","Use `assign`.");function y(t,e,i){var n=e.prototype,r;r=t.prototype=Object.create(n);r.constructor=t;r._super=n;if(i){d(r,i)}}function T(t,e){return function i(){return t.apply(e,arguments)}}function E(t,e){if(typeof t==a){return t.apply(e?e[0]||r:r,e)}return t}function S(t,e){return t===r?e:t}function b(t,e,i){p(_(e),(function(e){t.addEventListener(e,i,false)}))}function w(t,e,i){p(_(e),(function(e){t.removeEventListener(e,i,false)}))}function C(t,e){while(t){if(t==e){return true}t=t.parentNode}return false}function I(t,e){return t.indexOf(e)>-1}function _(t){return t.trim().split(/\s+/g)}function A(t,e,i){if(t.indexOf&&!i){return t.indexOf(e)}else{var n=0;while(n<t.length){if(i&&t[n][i]==e||!i&&t[n]===e){return n}n++}return-1}}function O(t){return Array.prototype.slice.call(t,0)}function P(t,e,i){var n=[];var r=[];var s=0;while(s<t.length){var o=e?t[s][e]:t[s];if(A(r,o)<0){n.push(t[s])}r[s]=o;s++}if(i){if(!e){n=n.sort()}else{n=n.sort((function t(i,n){return i[e]>n[e]}))}}return n}function x(t,e){var i,n;var o=e[0].toUpperCase()+e.slice(1);var a=0;while(a<s.length){i=s[a];n=i?i+o:e;if(n in t){return n}a++}return r}var D=1;function X(){return D++}function Y(t){var i=t.ownerDocument||t;return i.defaultView||i.parentWindow||e}var M=/mobile|tablet|ip(ad|hone|od)|android/i;var R="ontouchstart"in e;var z=x(e,"PointerEvent")!==r;var L=R&&M.test(navigator.userAgent);var N="touch";var F="pen";var W="mouse";var j="kinect";var k=25;var H=1;var q=2;var U=4;var V=8;var B=1;var G=2;var Z=4;var $=8;var J=16;var K=G|Z;var Q=$|J;var tt=K|Q;var et=["x","y"];var it=["clientX","clientY"];function nt(t,e){var i=this;this.manager=t;this.callback=e;this.element=t.element;this.target=t.options.inputTarget;this.domHandler=function(e){if(E(t.options.enable,[t])){i.handler(e)}};this.init()}nt.prototype={handler:function(){},init:function(){this.evEl&&b(this.element,this.evEl,this.domHandler);this.evTarget&&b(this.target,this.evTarget,this.domHandler);this.evWin&&b(Y(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&w(this.element,this.evEl,this.domHandler);this.evTarget&&w(this.target,this.evTarget,this.domHandler);this.evWin&&w(Y(this.element),this.evWin,this.domHandler)}};function rt(t){var e;var i=t.options.inputClass;if(i){e=i}else if(z){e=It}else if(L){e=Yt}else if(!R){e=Et}else{e=Lt}return new e(t,st)}function st(t,e,i){var n=i.pointers.length;var r=i.changedPointers.length;var s=e&H&&n-r===0;var o=e&(U|V)&&n-r===0;i.isFirst=!!s;i.isFinal=!!o;if(s){t.session={}}i.eventType=e;ot(t,i);t.emit("hammer.input",i);t.recognize(i);t.session.prevInput=i}function ot(t,e){var i=t.session;var n=e.pointers;var r=n.length;if(!i.firstInput){i.firstInput=ht(e)}if(r>1&&!i.firstMultiple){i.firstMultiple=ht(e)}else if(r===1){i.firstMultiple=false}var s=i.firstInput;var o=i.firstMultiple;var a=o?o.center:s.center;var u=e.center=ct(n);e.timeStamp=c();e.deltaTime=e.timeStamp-s.timeStamp;e.angle=vt(a,u);e.distance=pt(a,u);at(i,e);e.offsetDirection=ft(e.deltaX,e.deltaY);var l=lt(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=l.x;e.overallVelocityY=l.y;e.overallVelocity=h(l.x)>h(l.y)?l.x:l.y;e.scale=o?mt(o.pointers,n):1;e.rotation=o?dt(o.pointers,n):0;e.maxPointers=!i.prevInput?e.pointers.length:e.pointers.length>i.prevInput.maxPointers?e.pointers.length:i.prevInput.maxPointers;ut(i,e);var f=t.element;if(C(e.srcEvent.target,f)){f=e.srcEvent.target}e.target=f}function at(t,e){var i=e.center;var n=t.offsetDelta||{};var r=t.prevDelta||{};var s=t.prevInput||{};if(e.eventType===H||s.eventType===U){r=t.prevDelta={x:s.deltaX||0,y:s.deltaY||0};n=t.offsetDelta={x:i.x,y:i.y}}e.deltaX=r.x+(i.x-n.x);e.deltaY=r.y+(i.y-n.y)}function ut(t,e){var i=t.lastInterval||e,n=e.timeStamp-i.timeStamp,s,o,a,u;if(e.eventType!=V&&(n>k||i.velocity===r)){var c=e.deltaX-i.deltaX;var l=e.deltaY-i.deltaY;var f=lt(n,c,l);o=f.x;a=f.y;s=h(f.x)>h(f.y)?f.x:f.y;u=ft(c,l);t.lastInterval=e}else{s=i.velocity;o=i.velocityX;a=i.velocityY;u=i.direction}e.velocity=s;e.velocityX=o;e.velocityY=a;e.direction=u}function ht(t){var e=[];var i=0;while(i<t.pointers.length){e[i]={clientX:u(t.pointers[i].clientX),clientY:u(t.pointers[i].clientY)};i++}return{timeStamp:c(),pointers:e,center:ct(e),deltaX:t.deltaX,deltaY:t.deltaY}}function ct(t){var e=t.length;if(e===1){return{x:u(t[0].clientX),y:u(t[0].clientY)}}var i=0,n=0,r=0;while(r<e){i+=t[r].clientX;n+=t[r].clientY;r++}return{x:u(i/e),y:u(n/e)}}function lt(t,e,i){return{x:e/t||0,y:i/t||0}}function ft(t,e){if(t===e){return B}if(h(t)>=h(e)){return t<0?G:Z}return e<0?$:J}function pt(t,e,i){if(!i){i=et}var n=e[i[0]]-t[i[0]],r=e[i[1]]-t[i[1]];return Math.sqrt(n*n+r*r)}function vt(t,e,i){if(!i){i=et}var n=e[i[0]]-t[i[0]],r=e[i[1]]-t[i[1]];return Math.atan2(r,n)*180/Math.PI}function dt(t,e){return vt(e[1],e[0],it)+vt(t[1],t[0],it)}function mt(t,e){return pt(e[0],e[1],it)/pt(t[0],t[1],it)}var gt={mousedown:H,mousemove:q,mouseup:U};var yt="mousedown";var Tt="mousemove mouseup";function Et(){this.evEl=yt;this.evWin=Tt;this.pressed=false;nt.apply(this,arguments)}y(Et,nt,{handler:function t(e){var i=gt[e.type];if(i&H&&e.button===0){this.pressed=true}if(i&q&&e.which!==1){i=U}if(!this.pressed){return}if(i&U){this.pressed=false}this.callback(this.manager,i,{pointers:[e],changedPointers:[e],pointerType:W,srcEvent:e})}});var St={pointerdown:H,pointermove:q,pointerup:U,pointercancel:V,pointerout:V};var bt={2:N,3:F,4:W,5:j};var wt="pointerdown";var Ct="pointermove pointerup pointercancel";if(e.MSPointerEvent&&!e.PointerEvent){wt="MSPointerDown";Ct="MSPointerMove MSPointerUp MSPointerCancel"}function It(){this.evEl=wt;this.evWin=Ct;nt.apply(this,arguments);this.store=this.manager.session.pointerEvents=[]}y(It,nt,{handler:function t(e){var i=this.store;var n=false;var r=e.type.toLowerCase().replace("ms","");var s=St[r];var o=bt[e.pointerType]||e.pointerType;var a=o==N;var u=A(i,e.pointerId,"pointerId");if(s&H&&(e.button===0||a)){if(u<0){i.push(e);u=i.length-1}}else if(s&(U|V)){n=true}if(u<0){return}i[u]=e;this.callback(this.manager,s,{pointers:i,changedPointers:[e],pointerType:o,srcEvent:e});if(n){i.splice(u,1)}}});var _t={touchstart:H,touchmove:q,touchend:U,touchcancel:V};var At="touchstart";var Ot="touchstart touchmove touchend touchcancel";function Pt(){this.evTarget=At;this.evWin=Ot;this.started=false;nt.apply(this,arguments)}y(Pt,nt,{handler:function t(e){var i=_t[e.type];if(i===H){this.started=true}if(!this.started){return}var n=xt.call(this,e,i);if(i&(U|V)&&n[0].length-n[1].length===0){this.started=false}this.callback(this.manager,i,{pointers:n[0],changedPointers:n[1],pointerType:N,srcEvent:e})}});function xt(t,e){var i=O(t.touches);var n=O(t.changedTouches);if(e&(U|V)){i=P(i.concat(n),"identifier",true)}return[i,n]}var Dt={touchstart:H,touchmove:q,touchend:U,touchcancel:V};var Xt="touchstart touchmove touchend touchcancel";function Yt(){this.evTarget=Xt;this.targetIds={};nt.apply(this,arguments)}y(Yt,nt,{handler:function t(e){var i=Dt[e.type];var n=Mt.call(this,e,i);if(!n){return}this.callback(this.manager,i,{pointers:n[0],changedPointers:n[1],pointerType:N,srcEvent:e})}});function Mt(t,e){var i=O(t.touches);var n=this.targetIds;if(e&(H|q)&&i.length===1){n[i[0].identifier]=true;return[i,i]}var r,s,o=O(t.changedTouches),a=[],u=this.target;s=i.filter((function(t){return C(t.target,u)}));if(e===H){r=0;while(r<s.length){n[s[r].identifier]=true;r++}}r=0;while(r<o.length){if(n[o[r].identifier]){a.push(o[r])}if(e&(U|V)){delete n[o[r].identifier]}r++}if(!a.length){return}return[P(s.concat(a),"identifier",true),a]}var Rt=2500;var zt=25;function Lt(){nt.apply(this,arguments);var t=T(this.handler,this);this.touch=new Yt(this.manager,t);this.mouse=new Et(this.manager,t);this.primaryTouch=null;this.lastTouches=[]}y(Lt,nt,{handler:function t(e,i,n){var r=n.pointerType==N,s=n.pointerType==W;if(s&&n.sourceCapabilities&&n.sourceCapabilities.firesTouchEvents){return}if(r){Nt.call(this,i,n)}else if(s&&Wt.call(this,n)){return}this.callback(e,i,n)},destroy:function t(){this.touch.destroy();this.mouse.destroy()}});function Nt(t,e){if(t&H){this.primaryTouch=e.changedPointers[0].identifier;Ft.call(this,e)}else if(t&(U|V)){Ft.call(this,e)}}function Ft(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var i={x:e.clientX,y:e.clientY};this.lastTouches.push(i);var n=this.lastTouches;var r=function(){var t=n.indexOf(i);if(t>-1){n.splice(t,1)}};setTimeout(r,Rt)}}function Wt(t){var e=t.srcEvent.clientX,i=t.srcEvent.clientY;for(var n=0;n<this.lastTouches.length;n++){var r=this.lastTouches[n];var s=Math.abs(e-r.x),o=Math.abs(i-r.y);if(s<=zt&&o<=zt){return true}}return false}var jt=x(o.style,"touchAction");var kt=jt!==r;var Ht="compute";var qt="auto";var Ut="manipulation";var Vt="none";var Bt="pan-x";var Gt="pan-y";var Zt=Kt();function $t(t,e){this.manager=t;this.set(e)}$t.prototype={set:function(t){if(t==Ht){t=this.compute()}if(kt&&this.manager.element.style&&Zt[t]){this.manager.element.style[jt]=t}this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];p(this.manager.recognizers,(function(e){if(E(e.options.enable,[e])){t=t.concat(e.getTouchAction())}}));return Jt(t.join(" "))},preventDefaults:function(t){var e=t.srcEvent;var i=t.offsetDirection;if(this.manager.session.prevented){e.preventDefault();return}var n=this.actions;var r=I(n,Vt)&&!Zt[Vt];var s=I(n,Gt)&&!Zt[Gt];var o=I(n,Bt)&&!Zt[Bt];if(r){var a=t.pointers.length===1;var u=t.distance<2;var h=t.deltaTime<250;if(a&&u&&h){return}}if(o&&s){return}if(r||s&&i&K||o&&i&Q){return this.preventSrc(e)}},preventSrc:function(t){this.manager.session.prevented=true;t.preventDefault()}};function Jt(t){if(I(t,Vt)){return Vt}var e=I(t,Bt);var i=I(t,Gt);if(e&&i){return Vt}if(e||i){return e?Bt:Gt}if(I(t,Ut)){return Ut}return qt}function Kt(){if(!kt){return false}var t={};var i=e.CSS&&e.CSS.supports;["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach((function(n){t[n]=i?e.CSS.supports("touch-action",n):true}));return t}var Qt=1;var te=2;var ee=4;var ie=8;var ne=ie;var re=16;var se=32;function oe(t){this.options=d({},this.defaults,t||{});this.id=X();this.manager=null;this.options.enable=S(this.options.enable,true);this.state=Qt;this.simultaneous={};this.requireFail=[]}oe.prototype={defaults:{},set:function(t){d(this.options,t);this.manager&&this.manager.touchAction.update();return this},recognizeWith:function(t){if(f(t,"recognizeWith",this)){return this}var e=this.simultaneous;t=he(t,this);if(!e[t.id]){e[t.id]=t;t.recognizeWith(this)}return this},dropRecognizeWith:function(t){if(f(t,"dropRecognizeWith",this)){return this}t=he(t,this);delete this.simultaneous[t.id];return this},requireFailure:function(t){if(f(t,"requireFailure",this)){return this}var e=this.requireFail;t=he(t,this);if(A(e,t)===-1){e.push(t);t.requireFailure(this)}return this},dropRequireFailure:function(t){if(f(t,"dropRequireFailure",this)){return this}t=he(t,this);var e=A(this.requireFail,t);if(e>-1){this.requireFail.splice(e,1)}return this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){var e=this;var i=this.state;function n(i){e.manager.emit(i,t)}if(i<ie){n(e.options.event+ae(i))}n(e.options.event);if(t.additionalEvent){n(t.additionalEvent)}if(i>=ie){n(e.options.event+ae(i))}},tryEmit:function(t){if(this.canEmit()){return this.emit(t)}this.state=se},canEmit:function(){var t=0;while(t<this.requireFail.length){if(!(this.requireFail[t].state&(se|Qt))){return false}t++}return true},recognize:function(t){var e=d({},t);if(!E(this.options.enable,[this,e])){this.reset();this.state=se;return}if(this.state&(ne|re|se)){this.state=Qt}this.state=this.process(e);if(this.state&(te|ee|ie|re)){this.tryEmit(e)}},process:function(t){},getTouchAction:function(){},reset:function(){}};function ae(t){if(t&re){return"cancel"}else if(t&ie){return"end"}else if(t&ee){return"move"}else if(t&te){return"start"}return""}function ue(t){if(t==J){return"down"}else if(t==$){return"up"}else if(t==G){return"left"}else if(t==Z){return"right"}return""}function he(t,e){var i=e.manager;if(i){return i.get(t)}return t}function ce(){oe.apply(this,arguments)}y(ce,oe,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return e===0||t.pointers.length===e},process:function(t){var e=this.state;var i=t.eventType;var n=e&(te|ee);var r=this.attrTest(t);if(n&&(i&V||!r)){return e|re}else if(n||r){if(i&U){return e|ie}else if(!(e&te)){return te}return e|ee}return se}});function le(){ce.apply(this,arguments);this.pX=null;this.pY=null}y(le,ce,{defaults:{event:"pan",threshold:10,pointers:1,direction:tt},getTouchAction:function(){var t=this.options.direction;var e=[];if(t&K){e.push(Gt)}if(t&Q){e.push(Bt)}return e},directionTest:function(t){var e=this.options;var i=true;var n=t.distance;var r=t.direction;var s=t.deltaX;var o=t.deltaY;if(!(r&e.direction)){if(e.direction&K){r=s===0?B:s<0?G:Z;i=s!=this.pX;n=Math.abs(t.deltaX)}else{r=o===0?B:o<0?$:J;i=o!=this.pY;n=Math.abs(t.deltaY)}}t.direction=r;return i&&n>e.threshold&&r&e.direction},attrTest:function(t){return ce.prototype.attrTest.call(this,t)&&(this.state&te||!(this.state&te)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX;this.pY=t.deltaY;var e=ue(t.direction);if(e){t.additionalEvent=this.options.event+e}this._super.emit.call(this,t)}});function fe(){ce.apply(this,arguments)}y(fe,ce,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[Vt]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&te)},emit:function(t){if(t.scale!==1){var e=t.scale<1?"in":"out";t.additionalEvent=this.options.event+e}this._super.emit.call(this,t)}});function pe(){oe.apply(this,arguments);this._timer=null;this._input=null}y(pe,oe,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[qt]},process:function(t){var e=this.options;var i=t.pointers.length===e.pointers;var n=t.distance<e.threshold;var r=t.deltaTime>e.time;this._input=t;if(!n||!i||t.eventType&(U|V)&&!r){this.reset()}else if(t.eventType&H){this.reset();this._timer=l((function(){this.state=ne;this.tryEmit()}),e.time,this)}else if(t.eventType&U){return ne}return se},reset:function(){clearTimeout(this._timer)},emit:function(t){if(this.state!==ne){return}if(t&&t.eventType&U){this.manager.emit(this.options.event+"up",t)}else{this._input.timeStamp=c();this.manager.emit(this.options.event,this._input)}}});function ve(){ce.apply(this,arguments)}y(ve,ce,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[Vt]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&te)}});function de(){ce.apply(this,arguments)}y(de,ce,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:K|Q,pointers:1},getTouchAction:function(){return le.prototype.getTouchAction.call(this)},attrTest:function(t){var e=this.options.direction;var i;if(e&(K|Q)){i=t.overallVelocity}else if(e&K){i=t.overallVelocityX}else if(e&Q){i=t.overallVelocityY}return this._super.attrTest.call(this,t)&&e&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers==this.options.pointers&&h(i)>this.options.velocity&&t.eventType&U},emit:function(t){var e=ue(t.offsetDirection);if(e){this.manager.emit(this.options.event+e,t)}this.manager.emit(this.options.event,t)}});function me(){oe.apply(this,arguments);this.pTime=false;this.pCenter=false;this._timer=null;this._input=null;this.count=0}y(me,oe,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[Ut]},process:function(t){var e=this.options;var i=t.pointers.length===e.pointers;var n=t.distance<e.threshold;var r=t.deltaTime<e.time;this.reset();if(t.eventType&H&&this.count===0){return this.failTimeout()}if(n&&r&&i){if(t.eventType!=U){return this.failTimeout()}var s=this.pTime?t.timeStamp-this.pTime<e.interval:true;var o=!this.pCenter||pt(this.pCenter,t.center)<e.posThreshold;this.pTime=t.timeStamp;this.pCenter=t.center;if(!o||!s){this.count=1}else{this.count+=1}this._input=t;var a=this.count%e.taps;if(a===0){if(!this.hasRequireFailures()){return ne}else{this._timer=l((function(){this.state=ne;this.tryEmit()}),e.interval,this);return te}}}return se},failTimeout:function(){this._timer=l((function(){this.state=se}),this.options.interval,this);return se},reset:function(){clearTimeout(this._timer)},emit:function(){if(this.state==ne){this._input.tapCount=this.count;this.manager.emit(this.options.event,this._input)}}});function ge(t,e){e=e||{};e.recognizers=S(e.recognizers,ge.defaults.preset);return new Ee(t,e)}ge.VERSION="2.0.7";ge.defaults={domEvents:false,touchAction:Ht,enable:true,inputTarget:null,inputClass:null,preset:[[ve,{enable:false}],[fe,{enable:false},["rotate"]],[de,{direction:K}],[le,{direction:K},["swipe"]],[me],[me,{event:"doubletap",taps:2},["tap"]],[pe]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var ye=1;var Te=2;function Ee(t,e){this.options=d({},ge.defaults,e||{});this.options.inputTarget=this.options.inputTarget||t;this.handlers={};this.session={};this.recognizers=[];this.oldCssProps={};this.element=t;this.input=rt(this);this.touchAction=new $t(this,this.options.touchAction);Se(this,true);p(this.options.recognizers,(function(t){var e=this.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]);t[3]&&e.requireFailure(t[3])}),this)}Ee.prototype={set:function(t){d(this.options,t);if(t.touchAction){this.touchAction.update()}if(t.inputTarget){this.input.destroy();this.input.target=t.inputTarget;this.input.init()}return this},stop:function(t){this.session.stopped=t?Te:ye},recognize:function(t){var e=this.session;if(e.stopped){return}this.touchAction.preventDefaults(t);var i;var n=this.recognizers;var r=e.curRecognizer;if(!r||r&&r.state&ne){r=e.curRecognizer=null}var s=0;while(s<n.length){i=n[s];if(e.stopped!==Te&&(!r||i==r||i.canRecognizeWith(r))){i.recognize(t)}else{i.reset()}if(!r&&i.state&(te|ee|ie)){r=e.curRecognizer=i}s++}},get:function(t){if(t instanceof oe){return t}var e=this.recognizers;for(var i=0;i<e.length;i++){if(e[i].options.event==t){return e[i]}}return null},add:function(t){if(f(t,"add",this)){return this}var e=this.get(t.options.event);if(e){this.remove(e)}this.recognizers.push(t);t.manager=this;this.touchAction.update();return t},remove:function(t){if(f(t,"remove",this)){return this}t=this.get(t);if(t){var e=this.recognizers;var i=A(e,t);if(i!==-1){e.splice(i,1);this.touchAction.update()}}return this},on:function(t,e){if(t===r){return}if(e===r){return}var i=this.handlers;p(_(t),(function(t){i[t]=i[t]||[];i[t].push(e)}));return this},off:function(t,e){if(t===r){return}var i=this.handlers;p(_(t),(function(t){if(!e){delete i[t]}else{i[t]&&i[t].splice(A(i[t],e),1)}}));return this},emit:function(t,e){if(this.options.domEvents){be(t,e)}var i=this.handlers[t]&&this.handlers[t].slice();if(!i||!i.length){return}e.type=t;e.preventDefault=function(){e.srcEvent.preventDefault()};var n=0;while(n<i.length){i[n](e);n++}},destroy:function(){this.element&&Se(this,false);this.handlers={};this.session={};this.input.destroy();this.element=null}};function Se(t,e){var i=t.element;if(!i.style){return}var n;p(t.options.cssProps,(function(r,s){n=x(i.style,s);if(e){t.oldCssProps[n]=i.style[n];i.style[n]=r}else{i.style[n]=t.oldCssProps[n]||""}}));if(!e){t.oldCssProps={}}}function be(t,e){var n=i.createEvent("Event");n.initEvent(t,true,true);n.gesture=e;e.target.dispatchEvent(n)}d(ge,{INPUT_START:H,INPUT_MOVE:q,INPUT_END:U,INPUT_CANCEL:V,STATE_POSSIBLE:Qt,STATE_BEGAN:te,STATE_CHANGED:ee,STATE_ENDED:ie,STATE_RECOGNIZED:ne,STATE_CANCELLED:re,STATE_FAILED:se,DIRECTION_NONE:B,DIRECTION_LEFT:G,DIRECTION_RIGHT:Z,DIRECTION_UP:$,DIRECTION_DOWN:J,DIRECTION_HORIZONTAL:K,DIRECTION_VERTICAL:Q,DIRECTION_ALL:tt,Manager:Ee,Input:nt,TouchAction:$t,TouchInput:Yt,MouseInput:Et,PointerEventInput:It,TouchMouseInput:Lt,SingleTouchInput:Pt,Recognizer:oe,AttrRecognizer:ce,Tap:me,Pan:le,Swipe:de,Pinch:fe,Rotate:ve,Press:pe,on:b,off:w,each:p,merge:g,extend:m,assign:d,inherit:y,bindFn:T,prefixed:x});var we=typeof e!=="undefined"?e:typeof self!=="undefined"?self:{};we.Hammer=ge;if(typeof r==="function"&&r.amd){r((function(){return ge}))}else if(t.exports){t.exports=ge}else{e[n]=ge}})(window,document,"Hammer")}));var u=t("rg_swipi_card",function(){function t(t){e(this,t);this.scSwipeRight=i(this,"scSwipeRight",7);this.scSwipeLeft=i(this,"scSwipeLeft",7)}t.prototype.componentWillLoad=function(){this.cardState=Object.assign(Object.assign({},this.cardState),{offsetX:0,offsetY:0,isMoving:false})};t.prototype.componentDidLoad=function(){var t=this;this.hammertime=new Hammer(this.eventOverlayElement);this.hammertime.on("pan",(function(e){t.cardState=Object.assign(Object.assign({},t.cardState),{offsetX:e.deltaX,velocityX:e.velocityX,offsetY:e.deltaY,velocityY:e.velocityY,rotation:e.deltaX*.03*e.deltaY/80,isMoving:true,isSwiped:false})}));this.hammertime.on("panend",(function(e){var i=0;var n=0;var r=0;var s=false;if(e.velocityX>1){t.scSwipeRight.emit();r=30;i=document.body.clientWidth+500;s=true}if(e.velocityX<-1){t.scSwipeLeft.emit();r=-30;i=-document.body.clientWidth-500;n=-100;s=true}t.cardState=Object.assign(Object.assign({},t.cardState),{offsetX:i,offsetY:n,rotation:r,isSwiped:s,isMoving:false})}))};t.prototype.render=function(){var t=this;return n(r,{style:{pointerEvents:this.cardState.isSwiped?"none":"all",borderColor:this.cardState.isMoving?"rgba(255,255,255,.6)":"transparent"}},n("div",{class:"card",style:{transform:"translate("+this.cardState.offsetX+"px, "+this.cardState.offsetY+"px) rotate("+this.cardState.rotation+"deg)",cursor:this.cardState.isMoving?"grabbing":"grab",transition:this.cardState.isMoving?"all 0s linear":"all 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275), opacity 0.5s ease-out, top 0.5s ease-in-out",borderBottomColor:this.cardState.isMoving?this.cardState.offsetX<0?this.leftColor:this.rightColor:"transparent"}},n("div",{ref:function(e){return t.eventOverlayElement=e},class:"event-overlay"}),n("slot",null)))};Object.defineProperty(t.prototype,"el",{get:function(){return s(this)},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return".card{cursor:-webkit-grab;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;color:#5e6680;background-color:#fff;-webkit-box-shadow:rgba(0,0,0,.1) 0 10px 10px;box-shadow:0 10px 10px rgba(0,0,0,.1);font-family:Nunito,sans-serif;position:relative;cursor:grab;padding:2em;padding-left:1em;padding-right:1em;padding-bottom:0;border-radius:20px;border-bottom:4px solid transparent;height:420px;-ms-flex-pack:justify;justify-content:space-between}.event-overlay{position:absolute;width:100%;height:100%;top:0;left:0}"},enumerable:true,configurable:true});return t}());var h=t("rg_swipi_cards",function(){function t(t){e(this,t);this.stackOffsetY=.4;this.stackFinish=i(this,"stackFinish",7);this.childrenSwipe=i(this,"childrenSwipe",7)}t.prototype.componentWillLoad=function(){var t=this;this.currentCard=0;this.children=this.el.querySelectorAll("rg-swipi-card");this.children.forEach((function(e){e.addEventListener("scSwipeLeft",(function(){return t.onChildrenSwipe()}));e.addEventListener("scSwipeRight",(function(){return t.onChildrenSwipe()}))}))};t.prototype.onChildrenSwipe=function(){this.currentCard+=1;this.childrenSwipe.emit(this.children.length-this.currentCard);if(this.currentCard===this.children.length){this.stackFinish.emit()}};t.prototype.render=function(){var t=this;this.children.forEach((function(e,i){e.style.top=t.stackOffsetY*(i-t.currentCard)+"em",e.style.position="absolute";e.style.borderBottom="2px solid transparent";e.style.transitionDelay=50*(i-t.currentCard)+"ms";e.style.zIndex=(t.children.length-i).toString();e.style.opacity=(1-(i-t.currentCard)/6).toString();e.style.transition="all 0.5s ease-in-out"}));return n("slot",null)};Object.defineProperty(t.prototype,"el",{get:function(){return s(this)},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return":host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;position:relative}"},enumerable:true,configurable:true});return t}())}}}));