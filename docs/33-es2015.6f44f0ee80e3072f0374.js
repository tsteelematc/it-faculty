(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{oogQ:function(t,e,i){"use strict";i.r(e),i.d(e,"amplify_select_mfa_type",(function(){return u}));var s=i("bRKV"),a=i("Nt7R"),n=i("JIIv"),h=i("s1tr"),l=i("v4IS"),o=i("yMAf"),T=i("/vcS");const M=new a.a("SelectMFAType"),u=class{constructor(t){Object(s.k)(this,t),this.handleSubmit=t=>this.verify(t),this.TOTPSetup=!1,this.selectMessage=null,this.MFAMethod=null,this.isTOTP=!1,this.isNoMFA=!1,this.isSMS=!1,this.loading=!1}handleRadioButtonChange(t){this.TOTPSetup=!1,this.selectMessage=null,this.isNoMFA=!1,this.isTOTP=!1,this.isSMS=!1;const{value:e,type:i,checked:s}=t.target,a=["radio","checkbox"].includes(i);e===h.c.SMS&&a&&(this.isSMS=s),e===h.c.TOTP&&a&&(this.isTOTP=s),e===h.c.NOMFA&&a&&(this.isNoMFA=s)}async verify(t){t&&t.preventDefault(),M.debug("MFA Type Values",{TOTP:this.isTOTP,SMS:this.isSMS,"No MFA":this.isNoMFA}),this.isTOTP?this.MFAMethod=h.c.TOTP:this.isSMS?this.MFAMethod=h.c.SMS:this.isNoMFA&&(this.MFAMethod=h.c.NOMFA);const e=this.authData;if(!l.a||"function"!=typeof l.a.setPreferredMFA)throw new Error(T.d);this.loading=!0;try{const t=await l.a.setPreferredMFA(e,this.MFAMethod);M.debug("Set Preferred MFA Succeeded",t),this.selectMessage=`${n.a.get(o.a.SUCCESS_MFA_TYPE)} ${this.MFAMethod}`}catch(i){const{message:t}=i;t===T.o||t===T.p?(this.TOTPSetup=!0,this.selectMessage=n.a.get(o.a.SETUP_TOTP_REQUIRED)):(M.debug("Set Preferred MFA failed",i),this.selectMessage=n.a.get(o.a.UNABLE_TO_SETUP_MFA_AT_THIS_TIME))}finally{this.loading=!1}}contentBuilder(){if(!this.MFATypes||Object.keys(this.MFATypes).length<2)return M.debug(n.a.get(o.a.LESS_THAN_TWO_MFA_VALUES_MESSAGE)),Object(s.i)("div",null,Object(s.i)("a",null,n.a.get(o.a.LESS_THAN_TWO_MFA_VALUES_MESSAGE)));const{SMS:t,TOTP:e,Optional:i}=this.MFATypes;return Object(s.i)("amplify-form-section",{submitButtonText:n.a.get(o.a.SELECT_MFA_TYPE_SUBMIT_BUTTON_TEXT),headerText:n.a.get(o.a.SELECT_MFA_TYPE_HEADER_TEXT),handleSubmit:t=>this.handleSubmit(t),loading:this.loading},t?Object(s.i)("amplify-radio-button",{key:"sms",name:"MFAType",value:"SMS",label:"SMS",handleInputChange:t=>this.handleRadioButtonChange(t)}):null,e?Object(s.i)("amplify-radio-button",{key:"totp",name:"MFAType",value:"TOTP",label:"TOTP",handleInputChange:t=>this.handleRadioButtonChange(t)}):null,i?Object(s.i)("amplify-radio-button",{key:"noMFA",name:"MFAType",value:"NOMFA",label:"No MFA",handleInputChange:t=>this.handleRadioButtonChange(t)}):null)}render(){return Object(s.i)("div",null,this.contentBuilder(),this.TOTPSetup?Object(s.i)("amplify-totp-setup",{user:this.authData}):null)}}}}]);