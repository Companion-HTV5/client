(this.webpackJsonpcompanion=this.webpackJsonpcompanion||[]).push([[0],{15:function(e,t,n){},38:function(e,t,n){},40:function(e,t,n){},50:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(16),c=n.n(s),o=(n(38),n(14)),i=n(7),l=(n(15),n(13)),j=n.n(l),d=n(17),u=(n(40),n(10)),p=n(11),m=n(2);function b(e){var t,n;return Object(m.jsx)(u.a.Group,{className:"mb-2",controlId:null!==(t=e.controlId)&&void 0!==t?t:"formUsername",children:Object(m.jsx)(u.a.Control,{type:"email",placeholder:null!==(n=e.label)&&void 0!==n?n:"Email address"})})}function h(e){var t,n;return Object(m.jsx)(u.a.Group,{className:"mb-2",controlId:null!==(t=e.controlId)&&void 0!==t?t:"formPassword",children:Object(m.jsx)(u.a.Control,{type:"password",placeholder:null!==(n=e.label)&&void 0!==n?n:"Password"})})}function f(e){return Object(m.jsx)(u.a.Group,{className:"mb-2",controlId:e.controlId,children:Object(m.jsx)(u.a.Control,{type:"text",placeholder:e.label})})}var x=function(e){var t=Object(i.f)();function n(){return(n=Object(d.a)(j.a.mark((function e(n){var a,r,s,c,o,i,l;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),a=n.target,r=a.elements.formFirstName.value,s=a.elements.formLastName.value,c=a.elements.formUsername.value,o=a.elements.formPassword.value,i={firstName:r,lastName:s,email:c,password:o,logs:[]},e.next=9,fetch("".concat("https://companion-htv5.herokuapp.com/api/v1","/users"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(i)});case 9:return l=e.sent,e.t0=console,e.next=13,l.json();case 13:e.t1=e.sent,e.t0.dir.call(e.t0,e.t1),l.ok&&t.push("/reflect");case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(m.jsxs)("div",{className:"reg-container align-center",children:[Object(m.jsx)("h1",{children:"Register"}),Object(m.jsxs)(u.a,{className:"reg width-30",onSubmit:function(e){return n.apply(this,arguments)},children:[Object(m.jsx)(f,{controlId:"formFirstName",label:"First name"}),Object(m.jsx)(f,{controlId:"formLastName",label:"Last name"}),Object(m.jsx)(b,{}),Object(m.jsx)(h,{}),Object(m.jsx)(h,{controlId:"formConfirmPassword",label:"Re-enter password"}),Object(m.jsx)(p.a,{className:"wide",variant:"primary",type:"submit",children:"Register"})]}),Object(m.jsx)("div",{className:"login-link-container",children:Object(m.jsx)(p.a,{className:"wide",variant:"primary",onClick:function(){return t.push("/login")},children:"Log into existing account"})})]})};function O(e){Object(i.f)();function t(){return(t=Object(d.a)(j.a.mark((function e(t){var n,a,r,s,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=t.target,a=n.elements.formUsername.value,r=n.elements.formPassword.value,s={email:a,password:r},e.next=7,fetch("".concat("https://companion-htv5.herokuapp.com/api/v1","/verify"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(s)});case 7:return c=e.sent,e.t0=window,e.next=11,c.json();case 11:e.t1=e.sent,e.t0.alert.call(e.t0,e.t1);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(m.jsxs)("div",{className:"align-center",children:[Object(m.jsx)("h1",{children:"Log in"}),Object(m.jsxs)(u.a,{className:"width-30",onSubmit:function(e){return t.apply(this,arguments)},children:[Object(m.jsx)(b,{}),Object(m.jsx)(h,{}),Object(m.jsx)(p.a,{className:"wide",variant:"primary",type:"submit",children:"Log in"})]})]})}n(50);var v=n(33);function y(){var e=Object(i.f)();return Object(m.jsx)(v.a,{steps:[{style:{transform:"translate(0,-500px)"}},{style:{transform:"translate(0,0)"},duration:800}],children:Object(m.jsxs)("div",{className:"landing-container",children:[Object(m.jsx)("h1",{children:"Companion"}),Object(m.jsx)("h2",{children:"your mindfulness buddy"}),Object(m.jsx)(p.a,{className:"get-started",size:"lg",variant:"primary",onClick:function(){return e.push("/register")},children:"Get Started"})]})})}var g=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(o.a,{children:Object(m.jsxs)(i.c,{children:[Object(m.jsx)(i.a,{exact:!0,path:"/",children:Object(m.jsx)(y,{})}),Object(m.jsx)(i.a,{exact:!0,path:"/login",children:Object(m.jsx)(O,{})}),Object(m.jsx)(i.a,{exact:!0,path:"/register",children:Object(m.jsx)(x,{})})]})})})};c.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(g,{})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.03a84e14.chunk.js.map