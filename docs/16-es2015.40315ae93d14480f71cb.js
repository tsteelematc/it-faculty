(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{VFVT:function(e,t,i){"use strict";i.r(t),i.d(t,"amplify_confirm_sign_in",(function(){return c})),i.d(t,"amplify_confirm_sign_up",(function(){return m})),i.d(t,"amplify_forgot_password",(function(){return g})),i.d(t,"amplify_require_new_password",(function(){return F})),i.d(t,"amplify_sign_in",(function(){return C})),i.d(t,"amplify_sign_up",(function(){return y})),i.d(t,"amplify_verify_contact",(function(){return I}));var a=i("bRKV"),n=i("JIIv"),s=i("Nt7R"),r=i("HzrR"),o=i("s1tr"),h=i("v4IS"),l=i("yMAf"),u=i("/vcS"),d=i("LBa2"),p=i("RzDJ");const c=class{constructor(e){Object(a.k)(this,e),this.handleSubmit=e=>this.confirm(e),this.headerText=l.a.CONFIRM_SMS_CODE,this.submitButtonText=l.a.CONFIRM,this.handleAuthStateChange=d.d,this.formFields=[{type:"code",required:!0,handleInputChange:e=>this.handleCodeChange(e)}],this.mfaOption=o.c.SMS,this.loading=!1}componentWillLoad(){this.user&&this.user.challengeName===o.b.SoftwareTokenMFA&&(this.mfaOption=o.c.TOTP,this.headerText===l.a.CONFIRM_SMS_CODE&&(this.headerText=l.a.CONFIRM_TOTP_CODE))}handleCodeChange(e){this.code=e.target.value}async confirm(e){e&&e.preventDefault();const t=this.user.challengeName===o.b.SoftwareTokenMFA?o.b.SoftwareTokenMFA:null;if(!h.a||"function"!=typeof h.a.confirmSignIn)throw new Error(u.d);this.loading=!0;try{await h.a.confirmSignIn(this.user,this.code,t),await Object(p.a)(this.user,this.handleAuthStateChange)}catch(i){Object(d.a)(i)}finally{this.loading=!1}}render(){return Object(a.i)(a.b,null,Object(a.i)("amplify-form-section",{headerText:n.a.get(this.headerText),handleSubmit:this.handleSubmit,submitButtonText:n.a.get(this.submitButtonText),loading:this.loading,secondaryFooterContent:Object(a.i)("span",null,Object(a.i)("amplify-button",{variant:"anchor",onClick:()=>this.handleAuthStateChange(o.a.SignIn)},n.a.get(l.a.BACK_TO_SIGN_IN)))},Object(a.i)("amplify-auth-fields",{formFields:this.formFields})))}},m=class{constructor(e){Object(a.k)(this,e),this.handleSubmit=e=>this.confirmSignUp(e),this.headerText=l.a.CONFIRM_SIGN_UP_HEADER_TEXT,this.submitButtonText=l.a.CONFIRM_SIGN_UP_SUBMIT_BUTTON_TEXT,this.formFields=[],this.handleAuthStateChange=d.d,this.usernameAlias="username",this.loading=!1,this.userInput=this.user?this.user.username:null,this._signUpAttrs=this.user&&this.user.signUpAttrs?this.user.signUpAttrs:null,this.newFormFields=[],this.phoneNumber={countryDialCodeValue:u.q,phoneNumberValue:null}}componentWillLoad(){Object(d.c)(this.usernameAlias),this.buildFormFields()}formFieldsHandler(){this.buildFormFields()}buildDefaultFormFields(){this.newFormFields=[{type:`${this.usernameAlias}`,required:!0,handleInputChange:this.handleFormFieldInputChange(`${this.usernameAlias}`),value:this.userInput,disabled:!!this.userInput},{type:"code",label:n.a.get(l.a.CONFIRM_SIGN_UP_CODE_LABEL),placeholder:n.a.get(l.a.CONFIRM_SIGN_UP_CODE_PLACEHOLDER),required:!0,hint:Object(a.i)("div",null,n.a.get(l.a.CONFIRM_SIGN_UP_LOST_CODE)," ",Object(a.i)("amplify-button",{variant:"anchor",onClick:()=>this.resendConfirmCode()},n.a.get(l.a.CONFIRM_SIGN_UP_RESEND_CODE))),handleInputChange:this.handleFormFieldInputChange("code")}]}buildFormFields(){if(0===this.formFields.length)this.buildDefaultFormFields();else{const e=[];this.formFields.forEach(t=>{const i=Object.assign({},t);"code"===i.type&&(i.hint=Object(d.g)(i)?Object(a.i)("div",null,n.a.get(l.a.CONFIRM_SIGN_UP_LOST_CODE)," ",Object(a.i)("amplify-button",{variant:"anchor",onClick:()=>this.resendConfirmCode()},n.a.get(l.a.CONFIRM_SIGN_UP_RESEND_CODE))):i.hint),i.handleInputChange=e=>this.handleFormFieldInputWithCallback(e,t),e.push(i)}),this.newFormFields=e}}handleFormFieldInputChange(e){switch(e){case"username":case"email":return e=>this.userInput=e.target.value;case"phone_number":return e=>Object(d.f)(e,this.phoneNumber);case"code":return e=>this.code=e.target.value;default:return}}setFieldValue(e){switch(e.type){case"username":case"email":this.userInput=void 0===e.value?"":e.value;break;case"phone_number":e.dialCode&&(this.phoneNumber.countryDialCodeValue=e.dialCode),this.phoneNumber.phoneNumberValue=e.value}}handleFormFieldInputWithCallback(e,t){(t.handleInputChange?t.handleInputChange:(e,t)=>{t(e)})(e,this.handleFormFieldInputChange(t.type).bind(this))}async resendConfirmCode(){if(event&&event.preventDefault(),!h.a||"function"!=typeof h.a.resendSignUp)throw new Error(u.d);try{if(!this.userInput)throw new Error("Username can not be empty");await h.a.resendSignUp(this.userInput),this.handleAuthStateChange(o.a.ConfirmSignUp)}catch(e){Object(d.a)(e)}}async confirmSignUp(e){if(e&&e.preventDefault(),!h.a||"function"!=typeof h.a.confirmSignUp)throw new Error(u.d);switch(this.loading=!0,this.usernameAlias){case"phone_number":try{this.userInput=Object(d.b)(this.phoneNumber)}catch(t){Object(d.a)(t)}}try{if(!(await h.a.confirmSignUp(this.userInput,this.code)))throw new Error(n.a.get(l.a.CONFIRM_SIGN_UP_FAILED));this._signUpAttrs&&this._signUpAttrs.password&&""!==this._signUpAttrs.password?await Object(p.b)(this.userInput,this._signUpAttrs.password,this.handleAuthStateChange):this.handleAuthStateChange(o.a.SignIn)}catch(t){Object(d.a)(t)}finally{this.loading=!1}}render(){return Object(a.i)(a.b,null,Object(a.i)("amplify-form-section",{headerText:n.a.get(this.headerText),submitButtonText:n.a.get(this.submitButtonText),handleSubmit:this.handleSubmit,secondaryFooterContent:Object(a.i)("div",null,Object(a.i)("span",null,Object(a.i)("amplify-button",{variant:"anchor",onClick:()=>this.handleAuthStateChange(o.a.SignIn)},n.a.get(l.a.BACK_TO_SIGN_IN))))},Object(a.i)("amplify-auth-fields",{formFields:this.newFormFields})))}static get watchers(){return{formFields:["formFieldsHandler"]}}},b=new s.a("ForgotPassword"),g=class{constructor(e){Object(a.k)(this,e),this.headerText=l.a.RESET_YOUR_PASSWORD,this.sendButtonText=l.a.SEND_CODE,this.submitButtonText=l.a.SUBMIT,this.formFields=[],this.handleSend=e=>this.send(e),this.handleSubmit=e=>this.submit(e),this.handleAuthStateChange=d.d,this.usernameAlias="username",this.delivery=null,this.loading=!1,this.phoneNumber={countryDialCodeValue:u.q,phoneNumberValue:null},this.newFormFields=[],this.forgotPasswordAttrs={userInput:"",password:"",code:""}}componentWillLoad(){Object(d.c)(this.usernameAlias),this.buildFormFields()}formFieldsHandler(){this.buildFormFields()}buildFormFields(){0===this.formFields.length?this.buildDefaultFormFields():this.formFields.forEach(e=>{const t=Object.assign({},e);t.handleInputChange=t=>this.handleFormFieldInputWithCallback(t,e),this.newFormFields.push(t)})}buildDefaultFormFields(){switch(this.usernameAlias){case"email":this.newFormFields=[{type:"email",required:!0,handleInputChange:this.handleFormFieldInputChange("email"),inputProps:{"data-test":"forgot-password-email-input"}}];break;case"phone_number":this.newFormFields=[{type:"phone_number",required:!0,handleInputChange:this.handleFormFieldInputChange("phone_number"),inputProps:{"data-test":"forgot-password-phone-number-input"}}];break;case"username":default:this.newFormFields=[{type:"username",required:!0,handleInputChange:this.handleFormFieldInputChange("username"),inputProps:{"data-test":"forgot-password-username-input"}}]}}handleFormFieldInputChange(e){switch(e){case"username":case"email":return e=>this.forgotPasswordAttrs.userInput=e.target.value;case"phone_number":return e=>Object(d.f)(e,this.phoneNumber);case"password":case"code":return t=>this.forgotPasswordAttrs[e]=t.target.value;default:return}}setFieldValue(e,t){switch(e.type){case"username":case"email":t.userInput=void 0===e.value?"":e.value;break;case"phone_number":e.dialCode&&(this.phoneNumber.countryDialCodeValue=e.dialCode),this.phoneNumber.phoneNumberValue=e.value;break;case"password":case"code":t[e.type]=void 0===e.value?"":e.value}}handleFormFieldInputWithCallback(e,t){(t.handleInputChange?t.handleInputChange:(e,t)=>{t(e)})(e,this.handleFormFieldInputChange(t.type).bind(this))}async send(e){if(e&&e.preventDefault(),!h.a||"function"!=typeof h.a.forgotPassword)throw new Error(u.d);switch(this.loading=!0,this.usernameAlias){case"phone_number":try{this.forgotPasswordAttrs.userInput=Object(d.b)(this.phoneNumber)}catch(t){Object(d.a)(t)}}try{const e=await h.a.forgotPassword(this.forgotPasswordAttrs.userInput);b.debug(e),this.newFormFields=[{type:"code",required:!0,handleInputChange:this.handleFormFieldInputChange("code"),inputProps:{"data-test":"forgot-password-code-input"}},{type:"password",required:!0,handleInputChange:this.handleFormFieldInputChange("password"),label:n.a.get(l.a.NEW_PASSWORD_LABEL),placeholder:n.a.get(l.a.NEW_PASSWORD_PLACEHOLDER)}],this.delivery=e.CodeDeliveryDetails}catch(t){Object(d.a)(t)}finally{this.loading=!1}}async submit(e){if(e&&e.preventDefault(),!h.a||"function"!=typeof h.a.forgotPasswordSubmit)throw new Error(u.d);this.loading=!0;try{const{userInput:e,code:t,password:i}=this.forgotPasswordAttrs,a=await h.a.forgotPasswordSubmit(e,t,i);b.debug(a),this.handleAuthStateChange(o.a.SignIn),this.delivery=null}catch(t){Object(d.a)(t)}finally{this.loading=!1}}render(){const e=this.delivery?e=>this.handleSubmit(e):e=>this.handleSend(e),t=this.delivery?this.submitButtonText:this.sendButtonText;return Object(a.i)(a.b,null,Object(a.i)("amplify-form-section",{headerText:n.a.get(this.headerText),handleSubmit:e,loading:this.loading,secondaryFooterContent:Object(a.i)("amplify-button",{variant:"anchor",onClick:()=>this.handleAuthStateChange(o.a.SignIn),"data-test":"forgot-password-back-to-sign-in-link"},n.a.get(l.a.BACK_TO_SIGN_IN)),testDataPrefix:"forgot-password",submitButtonText:n.a.get(t)},Object(a.i)("amplify-auth-fields",{formFields:this.newFormFields})))}static get watchers(){return{formFields:["formFieldsHandler"]}}},f=new s.a("amplify-require-new-password"),F=class{constructor(e){Object(a.k)(this,e),this.headerText=l.a.CHANGE_PASSWORD,this.submitButtonText=l.a.CHANGE_PASSWORD_ACTION,this.handleSubmit=e=>this.completeNewPassword(e),this.handleAuthStateChange=d.d,this.formFields=[{type:o.e.Password,required:!0,handleInputChange:e=>this.handlePasswordChange(e),label:n.a.get(l.a.NEW_PASSWORD_LABEL),placeholder:n.a.get(l.a.NEW_PASSWORD_PLACEHOLDER),inputProps:{"data-test":"require-new-password-password-input"}}],this.currentUser=this.user,this.loading=!1,this.requiredAttributes={},this.newFormFields=this.formFields}handleRequiredAttributeInputChange(e,t){this.requiredAttributes[e]=t.target.value}async componentWillLoad(){if(!this.user)try{const e=await h.a.currentAuthenticatedUser();e&&(this.currentUser=e)}catch(e){Object(d.a)(e)}this.currentUser&&this.currentUser.challengeParam.requiredAttributes&&this.currentUser.challengeParam.requiredAttributes.forEach(e=>{this.newFormFields.push({type:e,required:!0,label:d.i[e].label,placeholder:d.i[e].placeholder,handleInputChange:t=>this.handleRequiredAttributeInputChange(e,t),inputProps:{"data-test":`require-new-password-${e}-input`}})})}handlePasswordChange(e){this.password=e.target.value}async completeNewPassword(e){if(e&&e.preventDefault(),!h.a||"function"!=typeof h.a.completeNewPassword)throw new Error(u.d);this.loading=!0;try{const e=await h.a.completeNewPassword(this.currentUser,this.password,this.requiredAttributes);switch(f.debug("complete new password",e),e.challengeName){case o.b.SMSMFA:this.handleAuthStateChange(o.a.ConfirmSignIn,e);break;case o.b.MFASetup:f.debug("TOTP setup",e.challengeParam),this.handleAuthStateChange(o.a.TOTPSetup,e);break;default:await Object(p.a)(e,this.handleAuthStateChange)}}catch(t){Object(d.a)(t)}finally{this.loading=!1}}render(){return Object(a.i)(a.b,null,Object(a.i)("amplify-form-section",{headerText:n.a.get(this.headerText),handleSubmit:this.handleSubmit,loading:this.loading,secondaryFooterContent:Object(a.i)("amplify-button",{variant:"anchor",onClick:()=>this.handleAuthStateChange(o.a.SignIn)},n.a.get(l.a.BACK_TO_SIGN_IN)),submitButtonText:n.a.get(this.submitButtonText)},Object(a.i)("amplify-auth-fields",{formFields:this.newFormFields})))}},C=class{constructor(e){Object(a.k)(this,e),this.handleSubmit=e=>this.signIn(e),this.headerText=l.a.SIGN_IN_HEADER_TEXT,this.submitButtonText=l.a.SIGN_IN_ACTION,this.handleAuthStateChange=d.d,this.usernameAlias="username",this.formFields=[],this.hideSignUp=!1,this.newFormFields=[],this.loading=!1,this.phoneNumber={countryDialCodeValue:u.q,phoneNumberValue:null},this.signInAttributes={userInput:"",password:""}}componentWillLoad(){Object(d.c)(this.usernameAlias),this.buildFormFields()}formFieldsHandler(){this.buildFormFields()}handleFormFieldInputChange(e){switch(e){case"username":case"email":return e=>this.signInAttributes.userInput=e.target.value;case"phone_number":return e=>Object(d.f)(e,this.phoneNumber);case"password":return e=>this.signInAttributes.password=e.target.value}}handleFormFieldInputWithCallback(e,t){(t.handleInputChange?t.handleInputChange:(e,t)=>{t(e)})(e,this.handleFormFieldInputChange(t.type).bind(this))}async signIn(e){switch(e&&e.preventDefault(),this.loading=!0,this.usernameAlias){case"phone_number":try{this.signInAttributes.userInput=Object(d.b)(this.phoneNumber)}catch(t){Object(d.a)(t)}}await Object(p.b)(this.signInAttributes.userInput,this.signInAttributes.password,this.handleAuthStateChange),this.loading=!1}buildDefaultFormFields(){const e=[];switch(this.usernameAlias){case"email":e.push({type:"email",required:!0,handleInputChange:this.handleFormFieldInputChange("email"),inputProps:{"data-test":"sign-in-email-input"}});break;case"phone_number":e.push({type:"phone_number",required:!0,handleInputChange:this.handleFormFieldInputChange("phone_number"),inputProps:{"data-test":"sign-in-phone-number-input"}});break;case"username":default:e.push({type:"username",required:!0,handleInputChange:this.handleFormFieldInputChange("username"),inputProps:{"data-test":"sign-in-username-input"}})}e.push({type:"password",hint:Object(a.i)("div",null,n.a.get(l.a.FORGOT_PASSWORD_TEXT)," ",Object(a.i)("amplify-button",{variant:"anchor",onClick:()=>this.handleAuthStateChange(o.a.ForgotPassword),"data-test":"sign-in-forgot-password-link"},n.a.get(l.a.RESET_PASSWORD_TEXT))),required:!0,handleInputChange:this.handleFormFieldInputChange("password"),inputProps:{"data-test":"sign-in-password-input"}}),this.newFormFields=[...e]}buildFormFields(){if(0===this.formFields.length)this.buildDefaultFormFields();else{const e=[];this.formFields.forEach(t=>{const i=Object.assign({},t);"password"===i.type&&(i.hint=Object(d.g)(i)?Object(a.i)("div",null,n.a.get(l.a.FORGOT_PASSWORD_TEXT)," ",Object(a.i)("amplify-button",{variant:"anchor",onClick:()=>this.handleAuthStateChange(o.a.ForgotPassword),"data-test":"sign-in-forgot-password-link"},n.a.get(l.a.RESET_PASSWORD_TEXT))):i.hint),i.handleInputChange=e=>this.handleFormFieldInputWithCallback(e,t),this.setFieldValue(i,this.signInAttributes),e.push(i)}),this.newFormFields=e}}setFieldValue(e,t){switch(e.type){case"username":case"email":t.userInput=void 0===e.value?"":e.value;break;case"phone_number":e.dialCode&&(this.phoneNumber.countryDialCodeValue=e.dialCode),this.phoneNumber.phoneNumberValue=e.value;break;case"password":t.password=void 0===e.value?"":e.value}}render(){return Object(a.i)(a.b,null,Object(a.i)("amplify-form-section",{headerText:n.a.get(this.headerText),handleSubmit:this.handleSubmit,testDataPrefix:"sign-in"},Object(a.i)("div",{slot:"subtitle"},Object(a.i)("slot",{name:"header-subtitle"})),Object(a.i)("slot",{name:"federated-buttons"},Object(a.i)("amplify-federated-buttons",{handleAuthStateChange:this.handleAuthStateChange,federated:this.federated})),!Object(r.d)(this.federated)&&Object(a.i)("amplify-strike",null,"or"),Object(a.i)("amplify-auth-fields",{formFields:this.newFormFields}),Object(a.i)("div",{slot:"amplify-form-section-footer",class:"sign-in-form-footer"},Object(a.i)("slot",{name:"footer"},Object(a.i)("slot",{name:"secondary-footer-content"},this.hideSignUp?Object(a.i)("span",null):Object(a.i)("span",null,n.a.get(l.a.NO_ACCOUNT_TEXT)," ",Object(a.i)("amplify-button",{variant:"anchor",onClick:()=>this.handleAuthStateChange(o.a.SignUp),"data-test":"sign-in-create-account-link"},n.a.get(l.a.CREATE_ACCOUNT_TEXT)))),Object(a.i)("slot",{name:"primary-footer-content"},Object(a.i)("amplify-button",{type:"submit",disabled:this.loading,"data-test":"sign-in-sign-in-button"},this.loading?Object(a.i)("amplify-loading-spinner",null):Object(a.i)("span",null,n.a.get(this.submitButtonText))))))))}static get watchers(){return{formFields:["formFieldsHandler"]}}};C.style=":host{--footer-size:var(--amplify-text-sm);--footer-color:var(--amplify-grey);--footer-font-family:var(--amplify-font-family);--font-weight:var(--amplify-font-weight)}.sign-in-form-footer{font-family:var(--footer-font-family);font-size:var(--footer-size);color:var(--footer-color);font-weight:--font-weight;display:-ms-flexbox;display:flex;-ms-flex-direction:column-reverse;flex-direction:column-reverse;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around}.sign-in-form-footer amplify-button{margin-bottom:0.625rem}@media (min-width: 672px){.sign-in-form-footer{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:baseline;align-items:baseline}.sign-in-form-footer amplify-button{margin-bottom:0}}.sign-in-form-footer *+*{margin-bottom:15px}";const y=class{constructor(e){Object(a.k)(this,e),this.handleSubmit=e=>this.signUp(e),this.headerText=l.a.SIGN_UP_HEADER_TEXT,this.submitButtonText=l.a.SIGN_UP_SUBMIT_BUTTON_TEXT,this.haveAccountText=l.a.SIGN_UP_HAVE_ACCOUNT_TEXT,this.signInText=l.a.SIGN_IN_TEXT,this.formFields=[],this.handleAuthStateChange=d.d,this.usernameAlias="username",this.newFormFields=[],this.phoneNumber={countryDialCodeValue:u.q,phoneNumberValue:null},this.loading=!1,this.signUpAttributes={username:"",password:"",attributes:{}}}handleFormFieldInputChange(e){switch(e){case"username":return e=>this.signUpAttributes.username=e.target.value;case"password":return e=>this.signUpAttributes.password=e.target.value;case"email":return e=>this.signUpAttributes.attributes.email=e.target.value;case"phone_number":return e=>Object(d.f)(e,this.phoneNumber);default:return t=>this.signUpAttributes.attributes[e]=t.target.value}}handleFormFieldInputWithCallback(e,t){(t.handleInputChange?t.handleInputChange:(e,t)=>{t(e)})(e,this.handleFormFieldInputChange(t.type).bind(this))}async signUp(e){if(e&&e.preventDefault(),!h.a||"function"!=typeof h.a.signUp)throw new Error(u.d);if(this.phoneNumber.phoneNumberValue)try{this.signUpAttributes.attributes.phone_number=Object(d.b)(this.phoneNumber)}catch(t){Object(d.a)(t)}switch(this.usernameAlias){case"email":case"phone_number":this.signUpAttributes.username=this.signUpAttributes.attributes[this.usernameAlias]}try{const e=await h.a.signUp(this.signUpAttributes);if(!e)throw new Error(l.a.SIGN_UP_FAILED);if(e.userConfirmed)await Object(p.b)(this.signUpAttributes.username,this.signUpAttributes.password,this.handleAuthStateChange);else{const t=Object.assign({},this.signUpAttributes);this.handleAuthStateChange(o.a.ConfirmSignUp,Object.assign(Object.assign({},e.user),{signUpAttrs:t}))}}catch(t){Object(d.a)(t)}}buildDefaultFormFields(){switch(this.usernameAlias){case"email":this.newFormFields=[{type:"email",placeholder:n.a.get(l.a.SIGN_UP_EMAIL_PLACEHOLDER),required:!0,handleInputChange:this.handleFormFieldInputChange("email"),inputProps:{"data-test":"sign-up-email-input"}},{type:"password",placeholder:n.a.get(l.a.SIGN_UP_PASSWORD_PLACEHOLDER),required:!0,handleInputChange:this.handleFormFieldInputChange("password"),inputProps:{"data-test":"sign-up-password-input"}},{type:"phone_number",required:!0,handleInputChange:this.handleFormFieldInputChange("phone_number"),inputProps:{"data-test":"sign-up-phone-number-input"}}];break;case"phone_number":this.newFormFields=[{type:"phone_number",required:!0,handleInputChange:this.handleFormFieldInputChange("phone_number"),inputProps:{"data-test":"sign-up-phone-number-input"}},{type:"password",placeholder:n.a.get(l.a.SIGN_UP_PASSWORD_PLACEHOLDER),required:!0,handleInputChange:this.handleFormFieldInputChange("password"),inputProps:{"data-test":"sign-up-password-input"}},{type:"email",placeholder:n.a.get(l.a.SIGN_UP_EMAIL_PLACEHOLDER),required:!0,handleInputChange:this.handleFormFieldInputChange("email"),inputProps:{"data-test":"sign-up-email-input"}}];break;case"username":default:this.newFormFields=[{type:"username",placeholder:n.a.get(l.a.SIGN_UP_USERNAME_PLACEHOLDER),required:!0,handleInputChange:this.handleFormFieldInputChange("username"),inputProps:{"data-test":"sign-up-username-input"}},{type:"password",placeholder:n.a.get(l.a.SIGN_UP_PASSWORD_PLACEHOLDER),required:!0,handleInputChange:this.handleFormFieldInputChange("password"),inputProps:{"data-test":"sign-up-password-input"}},{type:"email",placeholder:n.a.get(l.a.SIGN_UP_EMAIL_PLACEHOLDER),required:!0,handleInputChange:this.handleFormFieldInputChange("email"),inputProps:{"data-test":"sign-up-email-input"}},{type:"phone_number",required:!0,handleInputChange:this.handleFormFieldInputChange("phone_number"),inputProps:{"data-test":"sign-up-phone-number-input"}}]}}buildFormFields(){if(0===this.formFields.length)this.buildDefaultFormFields();else{const e=[];this.formFields.forEach(t=>{const i=Object.assign({},t);i.handleInputChange=e=>this.handleFormFieldInputWithCallback(e,t),this.setFieldValue(t,this.signUpAttributes),e.push(i)}),this.newFormFields=e}}setFieldValue(e,t){switch(e.type){case"username":t.username=void 0===e.value?"":e.value;break;case"password":t.password=void 0===e.value?"":e.value;break;case"email":t.attributes.email=e.value;break;case"phone_number":e.dialCode&&(this.phoneNumber.countryDialCodeValue=e.dialCode),this.phoneNumber.phoneNumberValue=e.value;break;default:t.attributes[e.type]=e.value}}componentWillLoad(){Object(d.c)(this.usernameAlias),this.buildFormFields()}formFieldsHandler(){this.buildFormFields()}render(){return Object(a.i)(a.b,null,Object(a.i)("amplify-form-section",{headerText:n.a.get(this.headerText),handleSubmit:this.handleSubmit,testDataPrefix:"sign-up"},Object(a.i)("div",{slot:"subtitle"},Object(a.i)("slot",{name:"header-subtitle"})),Object(a.i)("amplify-auth-fields",{formFields:this.newFormFields}),Object(a.i)("div",{class:"sign-up-form-footer",slot:"amplify-form-section-footer"},Object(a.i)("slot",{name:"footer"},Object(a.i)("slot",{name:"secondary-footer-content"},Object(a.i)("span",null,n.a.get(this.haveAccountText)," ",Object(a.i)("amplify-button",{variant:"anchor",onClick:()=>this.handleAuthStateChange(o.a.SignIn),"data-test":"sign-up-sign-in-link"},n.a.get(this.signInText)))),Object(a.i)("slot",{name:"primary-footer-content"},Object(a.i)("amplify-button",{type:"submit","data-test":"sign-up-create-account-button"},this.loading?Object(a.i)("amplify-loading-spinner",null):Object(a.i)("span",null,n.a.get(this.submitButtonText))))))))}static get watchers(){return{formFields:["formFieldsHandler"]}}};y.style=":host{--footer-font-family:var(--amplify-font-family);--footer-font-size:var(--amplify-text-sm);--footer-color:var(--amplify-grey);--font-weight:var(--amplify-font-weight)}.sign-up-form-footer{font-family:var(--footer-font-family);font-size:var(--footer-font-size);color:var(--footer-color);font-weight:--font-weight;display:-ms-flexbox;display:flex;-ms-flex-direction:column-reverse;flex-direction:column-reverse;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around}.sign-up-form-footer amplify-button{margin-bottom:0.625rem}@media (min-width: 672px){.sign-up-form-footer{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:baseline;align-items:baseline}.sign-up-form-footer amplify-button{margin-bottom:0}}.sign-up-form-footer *+*{margin-bottom:15px}";const O=new s.a("AmplifyVerifyContact"),I=class{constructor(e){Object(a.k)(this,e),this.handleAuthStateChange=d.d,this.loading=!1}handleSubmit(e){e.preventDefault(),this.verifyAttr?this.submit(this.code):this.verify(this.contact)}async submit(e){const t=this.verifyAttr;if(!h.a||"function"!=typeof h.a.verifyCurrentUserAttributeSubmit)throw new Error(u.d);this.loading=!0;try{const i=await h.a.verifyCurrentUserAttributeSubmit(t,e);O.debug(i),this.handleAuthStateChange(o.a.SignedIn,this.user),this.verifyAttr=null}catch(i){Object(d.a)(i),O.error(i)}finally{this.loading=!1}}async verify(e){if(e){if(!h.a||"function"!=typeof h.a.verifyCurrentUserAttribute)throw new Error(u.d);this.loading=!0;try{const t=await h.a.verifyCurrentUserAttribute(e);O.debug(t),this.verifyAttr=e}catch(t){Object(d.a)(t),O.error(t)}finally{this.loading=!1}}else O.error("Neither Email nor Phone Number selected")}handleInputChange(e){const t=e.target.name;"code"===t?this.code=e.target.value:"contact"===t&&(this.contact=e.target.value)}renderSubmit(){return Object(a.i)("div",null,Object(a.i)("amplify-input",{inputProps:{autocomplete:"off","data-test":"verify-contact-code-input"},name:"code",placeholder:n.a.get(l.a.CODE_PLACEHOLDER),handleInputChange:e=>this.handleInputChange(e)}))}renderVerify(){const e=this.user;if(!e)return O.debug("No user to verify"),null;const{unverified:t}=e;if(!t)return O.debug("Unverified variable does not exist on user"),null;const{email:i,phone_number:s}=t;return Object(a.i)("div",null,i&&Object(a.i)("amplify-radio-button",{label:n.a.get(l.a.VERIFY_CONTACT_EMAIL_LABEL),key:"email",name:"contact",value:"email",handleInputChange:e=>this.handleInputChange(e),inputProps:{"data-test":"verify-contact-email-radio"}}),s&&Object(a.i)("amplify-radio-button",{label:n.a.get(l.a.VERIFY_CONTACT_PHONE_LABEL),key:"phone_number",name:"contact",value:"phone_number",handleInputChange:e=>this.handleInputChange(e),inputProps:{"data-test":"verify-contact-email-radio"}}))}render(){return Object(a.i)(a.b,null,Object(a.i)("amplify-form-section",{handleSubmit:e=>this.handleSubmit(e),headerText:n.a.get(l.a.VERIFY_CONTACT_HEADER_TEXT),loading:this.loading,secondaryFooterContent:Object(a.i)("span",null,Object(a.i)("amplify-button",{variant:"anchor",onClick:()=>this.handleAuthStateChange(o.a.SignedIn,this.user)},"Skip")),submitButtonText:n.a.get(this.verifyAttr?l.a.VERIFY_CONTACT_SUBMIT_LABEL:l.a.VERIFY_CONTACT_VERIFY_LABEL)},this.verifyAttr?this.renderSubmit():this.renderVerify()))}}}}]);