function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{TkC1:function(e,t,i){"use strict";i.r(t),i.d(t,"amplify_picker",(function(){return a}));var n=i("bRKV"),r=i("JIIv"),c=i("yMAf"),a=function(){function e(t){_classCallCheck(this,e),Object(n.k)(this,t),this.pickerText=c.a.PICKER_TEXT,this.acceptValue="*/*"}return _createClass(e,[{key:"render",value:function(){var e=this;return Object(n.i)("div",{class:"picker"},Object(n.i)("slot",{name:"picker"},Object(n.i)("amplify-button",null,r.a.get(this.pickerText))),Object(n.i)("input",{title:r.a.get(this.pickerText),type:"file",accept:this.acceptValue,onChange:function(t){return e.inputHandler(t)}}))}}]),e}();a.style=".picker{position:relative;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}input[type=file]{width:100%;height:100%;display:inline-block;position:absolute;left:0;top:0;opacity:0;cursor:pointer}"}}]);