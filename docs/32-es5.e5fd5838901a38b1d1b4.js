function asyncGeneratorStep(e,t,r,n,a,o,i){try{var c=e[o](i),s=c.value}catch(l){return void r(l)}c.done?t(s):Promise.resolve(s).then(n,a)}function _asyncToGenerator(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function i(e){asyncGeneratorStep(o,n,a,i,c,"next",e)}function c(e){asyncGeneratorStep(o,n,a,i,c,"throw",e)}i(void 0)}))}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{Kukj:function(e,t,r){"use strict";r.r(t),r.d(t,"amplify_s3_text",(function(){return u}));var n=r("bRKV"),a=r("Nt7R"),o=r("JIIv"),i=r("H8iN"),c=r("yMAf"),s=(r("/vcS"),r("l1VB"),r("Yn1A")),l=new a.a("S3Text"),u=function(){function e(t){_classCallCheck(this,e),Object(n.k)(this,t),this.contentType="text/*",this.level=i.a.Public,this.fallbackText=c.a.TEXT_FALLBACK_CONTENT}var t,r,a;return _createClass(e,[{key:"watchHandler",value:(a=_asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:case"end":return e.stop()}}),e,this)}))),function(){return a.apply(this,arguments)})},{key:"componentWillLoad",value:(r=_asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)})},{key:"load",value:(t=_asyncToGenerator(regeneratorRuntime.mark((function e(){var t,r,n,a,o,i,c,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.path,r=this.textKey,n=this.body,a=this.contentType,o=this.level,i=this.track,c=this.identityId,r||t){e.next=3;break}return e.abrupt("return",void l.debug("empty textKey and path"));case 3:if(u=r||t,l.debug("loading "+u+"..."),e.t0=n,!e.t0){e.next=9;break}return e.next=9,Object(s.e)(r,n,o,i,a,l);case 9:return e.prev=9,e.next=12,Object(s.a)(u,o,i,c,l);case 12:this.src=e.sent,e.next=18;break;case 15:throw e.prev=15,e.t1=e.catch(9),l.debug(e.t1),new Error(e.t1);case 18:case"end":return e.stop()}}),e,this,[[9,15]])}))),function(){return t.apply(this,arguments)})},{key:"render",value:function(){return Object(n.i)("div",null,Object(n.i)("div",{class:"text-container"},this.src?Object(n.i)("pre",null,this.src):Object(n.i)("pre",null,o.a.get(this.fallbackText))))}}],[{key:"watchers",get:function(){return{textKey:["watchHandler"],body:["watchHandler"]}}}]),e}();u.style=":host{--container-color:var(--amplify-smoke-white);--border-color:var(--amplify-light-grey);--font-size:var(--amplify-text-md);--text-color:var(--amplify-secondary-color)}.text-container{background-color:var(--container-color);border:1px solid var(--border-color);border-radius:5px;margin-bottom:10px}pre{display:block;margin:0.5rem 0;padding:0.5rem;line-height:1rem;max-height:50rem;font-size:var(--font-size);color:var(--text-color);word-break:break-all;overflow-y:scroll;overflow-x:auto}"}}]);