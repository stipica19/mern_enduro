"use strict";(self.webpackChunkenduro_drift=self.webpackChunkenduro_drift||[]).push([[495],{8843:function(e,s,t){var r=t(9439),n=t(2791),i=(t(3508),t(184)),a=(0,n.forwardRef)((function(e,s){var t=(0,n.useState)(!1),a=(0,r.Z)(t,2),c=a[0],o=a[1],l=(0,n.useRef)(null);return(0,n.useImperativeHandle)(s,(function(){return{show:function(){o(!0),l.current=setTimeout((function(){o(!1)}),3e3)}}})),(0,n.useEffect)((function(){return function(){l.current&&clearTimeout(l.current)}}),[]),(0,i.jsxs)("div",{className:"toast-bar",id:c?"show":"hide",style:{backgroundColor:e.notification.success?"#3fff14":"#FF0033"},children:[(0,i.jsx)("div",{className:"message",children:e.notification.message}),(0,i.jsxs)("div",{className:"symbol",children:[(0,i.jsx)("div",{className:"line"}),(0,i.jsx)("div",{className:"line"})]})]})}));s.Z=a},4495:function(e,s,t){t.r(s),t.d(s,{default:function(){return d}});var r=t(9439),n=t(2791),i=t(7530),a=t(3168),c=t(184),o=function(){return(0,c.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2340.0423321158173!2d17.57719339184553!3d43.938046234877554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475f0cb0e6289ca7%3A0x664f75f0c1ac1a20!2sSilvija+Strahimira+Kranj%C4%8Devi%C4%87a%2C+Gornji+Vakuf-Uskoplje!5e1!3m2!1sbs!2sba!4v1539322571930",width:"600",height:"450",style:{border:0},allowFullScreen:"","aria-hidden":"false",tabIndex:"0",loading:"lazy"})},l=t(8843),d=function(){var e=(0,a.$)().t,s=(0,n.useState)({message:"",success:""}),t=(0,r.Z)(s,2),d=t[0],m=t[1],u=(0,n.useRef)(null),f=(0,n.useRef)();return(0,c.jsxs)("section",{className:"docs-main contact",children:[u?(0,c.jsx)(l.Z,{ref:u,notification:d}):"",(0,c.jsxs)("div",{className:"grid-2 ",children:[(0,c.jsx)("div",{className:"card flex",children:(0,c.jsx)(o,{})}),(0,c.jsx)("div",{className:"card flex",children:(0,c.jsxs)("div",{className:"form card",children:[(0,c.jsxs)("h1",{children:[" ",e("contact_title")]}),(0,c.jsxs)("p",{children:["Mladen Brnas,",(0,c.jsx)("br",{})," Silvija Strahimira Kranj\u010devi\u0107a,",(0,c.jsx)("br",{})," Gornji Vakuf-Uskoplje,",(0,c.jsx)("br",{}),"Bosnia and Herzegovina, ",(0,c.jsx)("br",{}),"Phone: +387 63 136 095",(0,c.jsx)("br",{})," E-mail: endurodriftbosnien@gmail.com"]}),(0,c.jsxs)("form",{ref:f,onSubmit:function(e){e.preventDefault(),i.ZP.sendForm("service_16jrpmf","template_cghrzj5",f.current,"MKqmCNsRzPJ8a6r_E").then((function(e){console.log(e.text),m({success:!0,message:"Successfully sent an email"}),u.current.show()}),(function(e){console.log(e.text),u.current.show(),m({message:"Error sending email",success:!1})}))},children:[(0,c.jsxs)("div",{className:"form-date",children:[" ",(0,c.jsx)("div",{className:"date-form",children:(0,c.jsxs)("div",{className:"form-control ",children:[(0,c.jsx)("label",{htmlFor:"NAME AND SURNAME",children:e("contact_name")}),(0,c.jsx)("input",{type:"text",name:"user_name",required:!0})]})}),(0,c.jsx)("div",{className:"date-form",children:(0,c.jsxs)("div",{className:"form-control",children:[(0,c.jsx)("label",{htmlFor:"email",children:"EMAIL"}),(0,c.jsx)("input",{type:"email",name:"user_email",required:!0})]})})]}),(0,c.jsxs)("div",{className:"date-form",children:[(0,c.jsx)("label",{htmlFor:"message",children:e("contact_msg")}),(0,c.jsx)("div",{className:"form-control",children:(0,c.jsx)("textarea",{name:"message",id:"message"})})]}),(0,c.jsx)("div",{className:"date-form",children:(0,c.jsx)("input",{type:"submit",value:e("contact_btn"),className:"btn btn-primary"})})]})]})})]})]})}},7530:function(e,s,t){t.d(s,{ZP:function(){return l}});var r={_origin:"https://api.emailjs.com"},n=function(e,s,t){if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!s)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!t)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0},i=t(3144),a=t(5671),c=(0,i.Z)((function e(s){(0,a.Z)(this,e),this.status=s.status,this.text=s.responseText})),o=function(e,s){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(n,i){var a=new XMLHttpRequest;a.addEventListener("load",(function(e){var s=e.target,t=new c(s);200===t.status||"OK"===t.text?n(t):i(t)})),a.addEventListener("error",(function(e){var s=e.target;i(new c(s))})),a.open("POST",r._origin+e,!0),Object.keys(t).forEach((function(e){a.setRequestHeader(e,t[e])})),a.send(s)}))},l={init:function(e){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"https://api.emailjs.com";r._userID=e,r._origin=s},send:function(e,s,t,i){var a=i||r._userID;n(a,e,s);var c={lib_version:"3.6.2",user_id:a,service_id:e,template_id:s,template_params:t};return o("/api/v1.0/email/send",JSON.stringify(c),{"Content-type":"application/json"})},sendForm:function(e,s,t,i){var a=i||r._userID,c=function(e){var s;if(!(s="string"===typeof e?document.querySelector(e):e)||"FORM"!==s.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return s}(t);n(a,e,s);var l=new FormData(c);return l.append("lib_version","3.6.2"),l.append("service_id",e),l.append("template_id",s),l.append("user_id",a),o("/api/v1.0/email/send-form",l)}}}}]);
//# sourceMappingURL=495.e7a94537.chunk.js.map