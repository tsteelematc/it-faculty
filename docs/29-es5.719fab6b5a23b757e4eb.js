function asyncGeneratorStep(e,t,n,r,a,i,c){try{var o=e[i](c),s=o.value}catch(l){return void n(l)}o.done?t(s):Promise.resolve(s).then(r,a)}function _asyncToGenerator(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function c(e){asyncGeneratorStep(i,r,a,c,o,"next",e)}function o(e){asyncGeneratorStep(i,r,a,c,o,"throw",e)}c(void 0)}))}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{V0P2:function(e,t,n){"use strict";n.r(t),n.d(t,"amplify_s3_image_picker",(function(){return u}));var r=n("bRKV"),a=n("Nt7R"),i=n("JIIv"),c=n("H8iN"),o=n("yMAf"),s=(n("/vcS"),n("l1VB"),n("Yn1A")),l=new a.a("S3ImagePicker"),u=function(){function e(t){var n=this;_classCallCheck(this,e),Object(r.k)(this,t),this.contentType="binary/octet-stream",this.level=c.a.Public,this.headerTitle=o.a.IMAGE_PICKER_TITLE,this.headerHint=o.a.IMAGE_PICKER_HINT,this.placeholderHint=o.a.IMAGE_PICKER_PLACEHOLDER_HINT,this.buttonText=o.a.IMAGE_PICKER_BUTTON_TEXT,this.handlePick=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(t){var r,a,i,c,o,u,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.path,a=void 0===r?"":r,i=n.level,c=n.track,o=n.identityId,u=n.fileToKey,h=a+Object(s.b)(t,u),e.prev=1,e.next=4,Object(s.e)(h,t,i,c,t.type,l);case 4:return e.next=6,Object(s.c)(h,i,c,o,l);case 6:n.src=e.sent,e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(1),l.error(e.t0),new Error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()}return _createClass(e,[{key:"render",value:function(){return Object(r.i)(r.b,null,Object(r.i)("slot",{name:"photo-picker"},Object(r.i)("amplify-photo-picker",{previewSrc:this.src,handleClick:this.handlePick,headerTitle:i.a.get(this.headerTitle),headerHint:i.a.get(this.headerHint),placeholderHint:i.a.get(this.placeholderHint),buttonText:i.a.get(this.buttonText)})))}}]),e}()}}]);