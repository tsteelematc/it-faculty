(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{svTr:function(i,t,e){"use strict";e.r(t),e.d(t,"amplify_form_field",(function(){return r})),e.d(t,"amplify_hint",(function(){return l})),e.d(t,"amplify_input",(function(){return s})),e.d(t,"amplify_label",(function(){return n}));var o=e("bRKV");const r=class{constructor(i){Object(o.k)(this,i),this.type="text",this.required=!1,this.placeholder=""}render(){return Object(o.i)("div",{class:"form-field"},this.label&&Object(o.i)("div",{class:"form-field-label"},Object(o.i)("amplify-label",{htmlFor:this.fieldId},this.label)),this.description&&Object(o.i)("div",{id:`${this.fieldId}-description`,class:"form-field-description","data-test":"form-field-description"},this.description),Object(o.i)("div",null,Object(o.i)("slot",{name:"input"},Object(o.i)("amplify-input",{fieldId:this.fieldId,description:this.description,type:this.type,handleInputChange:this.handleInputChange,placeholder:this.placeholder,name:this.name,value:this.value,inputProps:this.inputProps,disabled:this.disabled}))),this.hint&&Object(o.i)("amplify-hint",{id:`${this.fieldId}-hint`},this.hint))}};r.style=":host{--label-font-size:var(--amplify-text-md);--description-font-size:var(--amplify-text-sm)}.form-field{margin-bottom:15px}.form-field-label{display:block;font-size:var(--label-font-size);padding-bottom:0.5em}.form-field-description{font-size:var(--description-font-size);padding-top:0.5em}";const l=class{constructor(i){Object(o.k)(this,i)}render(){return Object(o.i)("div",{class:"hint"},Object(o.i)("slot",null))}};l.style=":host{--color:var(--amplify-grey);--font-family:var(--amplify-font-family);--font-size:var(--amplify-text-xs);--font-weight:var(--amplify-font-weight)}.hint{color:var(--color);font-family:var(--font-family);font-weight:var(--font-weight);font-size:var(--font-size);margin-bottom:2.625rem}";const s=class{constructor(i){Object(o.k)(this,i),this.type="text",this.handleInputChange=()=>{},this.placeholder="",this.formSubmit=Object(o.f)(this,"formSubmit",7)}handleKeyDown(i){"Enter"===i.key&&this.formSubmit.emit(i)}render(){return Object(o.i)(o.b,{class:"input-host"},Object(o.i)("input",Object.assign({id:this.fieldId,"aria-describedby":this.fieldId&&this.description?`${this.fieldId}-description`:null,type:this.type,onInput:i=>this.handleInputChange(i),placeholder:this.placeholder,name:this.name,class:"input",value:this.value,disabled:this.disabled},this.inputProps)))}};s.style=":host{--color:var(--amplify-secondary-color);--background-color:var(--amplify-secondary-contrast);--border-color:var(--amplify-light-grey);--border-color-focus:var(--amplify-primary-color);--border:1px solid var(--border-color);--margin:0 0 0.625rem 0}.input-host{width:100%}.input{display:block;width:100%;padding:1rem;font-size:var(--amplify-text-sm);color:var(--color);background-color:var(--background-color);background-image:none;border:var(--border);border-radius:3px;-webkit-box-sizing:border-box;box-sizing:border-box;margin:var(--margin);height:3.125rem;line-height:1.1}.input:focus{outline:none;border-color:var(--border-color-focus)}.input:disabled{opacity:0.5}";const n=class{constructor(i){Object(o.k)(this,i)}render(){return Object(o.i)("label",{class:"label",htmlFor:this.htmlFor},Object(o.i)("slot",null))}};n.style=":host{--label-color:var(--amplify-secondary-color)}.label{color:var(--label-color);font-size:var(--amplify-text-sm);margin-bottom:16px}"}}]);