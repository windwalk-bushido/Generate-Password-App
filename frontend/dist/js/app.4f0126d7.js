(function(e){function t(t){for(var s,a,r=t[0],o=t[1],i=t[2],d=0,b=[];d<r.length;d++)a=r[d],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&b.push(n[a][0]),n[a]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);u&&u(t);while(b.length)b.shift()();return l.push.apply(l,i||[]),c()}function c(){for(var e,t=0;t<l.length;t++){for(var c=l[t],s=!0,r=1;r<c.length;r++){var o=c[r];0!==n[o]&&(s=!1)}s&&(l.splice(t--,1),e=a(a.s=c[0]))}return e}var s={},n={app:0},l=[];function a(t){if(s[t])return s[t].exports;var c=s[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,a),c.l=!0,c.exports}a.m=e,a.c=s,a.d=function(e,t,c){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(a.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)a.d(c,s,function(t){return e[t]}.bind(null,s));return c},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=t,r=r.slice();for(var i=0;i<r.length;i++)t(r[i]);var u=o;l.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},"56d7":function(e,t,c){"use strict";c.r(t);c("e260"),c("e6cf"),c("cca6"),c("a79d");var s=c("7a23"),n={class:"flex flex-row flex-wrap justify-center w-full bg-gray-800"};function l(e,t,c,l,a,r){var o=Object(s["r"])("Home");return Object(s["n"])(),Object(s["c"])("div",n,[Object(s["e"])(o)])}var a={class:"flex flex-row flex-wrap justify-center items-start w-screen h-screen"},r={class:"flex flex-row flex-wrap justify-center items-start w-full p-4 m-4 mb-12 rounded-xl shadow-lg border-2 border-blue-600 bg-blue-900 lg:m-12 lg:p-8 PASS_GEN"},o=Object(s["d"])("h3",{class:"text-2xl mb-8"},"Password generator",-1),i={class:"flex justify-between items-center w-full mt-2 mb-2"},u=Object(s["d"])("p",null,"Uppercase letters",-1),d={class:"flex justify-between items-center w-full mt-2 mb-2"},b=Object(s["d"])("p",null,"Lowercase letters",-1),p={class:"flex justify-between items-center w-full mt-2 mb-2"},h=Object(s["d"])("p",null,"Numbers",-1),f={class:"flex justify-between items-center w-full mt-2 mb-2"},w=Object(s["d"])("p",null,"Special characters",-1),g={class:"flex flex-row flex-wrap justify-center w-full mt-2"},m={class:"flex flex-row"},j=Object(s["d"])("p",null,"Length:",-1),O={class:"ml-1 font-bold"},x=["value"],y={class:"mt-8 mb-4 lg:mb-0"},v={class:"flex flex-row flex-wrap justify-center items-start w-full p-4 m-4 mb-12 rounded-xl shadow-lg border-2 border-blue-600 bg-blue-900 lg:m-12 lg:p-8 PASS_GEN"},_=Object(s["d"])("h3",{class:"text-2xl mb-8"},"Hash text",-1),k=Object(s["d"])("div",{class:"w-full"},[Object(s["d"])("p",{class:"mb-2"},"Input text"),Object(s["d"])("textarea",{class:"w-full mb-8 textarea bg-white text-black",placeholder:"I will never serve...",rows:"1",warp:"soft",id:"text_field"})],-1),S={class:"w-full"},P=Object(s["d"])("p",{class:"mb-2"},"Hash",-1),C=["value"],H={class:"mt-8 mb-4 lg:mb-0"};function I(e,t,c,n,l,I){var T=Object(s["r"])("Icon");return Object(s["n"])(),Object(s["c"])("div",a,[Object(s["d"])("div",r,[o,Object(s["d"])("div",i,[u,Object(s["d"])("input",{type:"checkbox",class:"toggle toggle-lg",checked:"",onClick:t[0]||(t[0]=function(e){return I.ToggleSwitch(0)})})]),Object(s["d"])("div",d,[b,Object(s["d"])("input",{type:"checkbox",class:"toggle toggle-lg",checked:"",onClick:t[1]||(t[1]=function(e){return I.ToggleSwitch(1)})})]),Object(s["d"])("div",p,[h,Object(s["d"])("input",{type:"checkbox",class:"toggle toggle-lg",checked:"",onClick:t[2]||(t[2]=function(e){return I.ToggleSwitch(2)})})]),Object(s["d"])("div",f,[w,Object(s["d"])("input",{type:"checkbox",class:"toggle toggle-lg",onClick:t[3]||(t[3]=function(e){return I.ToggleSwitch(3)})})]),Object(s["d"])("div",g,[Object(s["d"])("div",m,[j,Object(s["d"])("p",O,Object(s["t"])(l.password_length),1)]),Object(s["d"])("input",{class:"range range-lg mt-2 mb-8",type:"range",min:"16",max:"32",value:"password_length",id:"slider",onChange:t[4]||(t[4]=function(e){return I.ToggleSlider()})},null,32)]),Object(s["d"])("textarea",{class:"w-full textarea bg-white text-black",placeholder:"Password will show up here...",rows:"1",warp:"hard",readonly:"",value:this.password,id:"password_field"},null,8,x),Object(s["d"])("div",y,[(Object(s["n"])(),Object(s["c"])("button",{key:1,class:"btn mr-2 bg-blue-600",onClick:t[5]||(t[5]=function(e){return I.CopyPassword()})},[Object(s["e"])(T,{icon:["fas","copy"],class:"text-xl"})])),Object(s["d"])("button",{class:"btn ml-2 bg-blue-600",onClick:t[6]||(t[6]=function(e){return I.FetchPassword()})},[Object(s["e"])(T,{icon:["fas","plus"],class:"text-xl"})])])]),Object(s["d"])("div",v,[_,k,Object(s["d"])("div",S,[P,Object(s["d"])("textarea",{class:"w-full textarea bg-white text-black",placeholder:"Hash will show up here...",rows:"2",warp:"hard",readonly:"",value:this.hash,id:"hash_field"},null,8,C)]),Object(s["d"])("div",H,[(Object(s["n"])(),Object(s["c"])("button",{key:1,class:"btn mr-2 bg-blue-600",onClick:t[7]||(t[7]=function(e){return I.CopyHash()})},[Object(s["e"])(T,{icon:["fas","copy"],class:"text-xl"})])),Object(s["d"])("button",{class:"btn ml-2 bg-blue-600",onClick:t[8]||(t[8]=function(e){return I.FetchHash()})},[Object(s["e"])(T,{icon:["fas","plus"],class:"text-xl"})])])])])}var T=c("bc3a"),E=c.n(T),B={name:"Home",data:function(){return{password:"",switch_uppercase:!0,switch_lowercase:!0,switch_numbers:!0,switch_specials:!1,password_length:24,textarea_empty:!0,hash:"",hash_field_empty:!0}},methods:{ToggleSwitch:function(e){switch(e){case 0:this.switch_uppercase=!this.switch_uppercase;break;case 1:this.switch_lowercase=!this.switch_lowercase;break;case 2:this.switch_numbers=!this.switch_numbers;break;case 3:this.switch_specials=!this.switch_specials;break}},ToggleSlider:function(){this.password_length=document.getElementById("slider").value},FetchPassword:function(){var e=this,t={gen_uppercase:this.switch_uppercase},c={gen_lowercase:this.switch_lowercase},s={gen_numbers:this.switch_numbers},n={gen_specials:this.switch_specials},l={pass_len:this.password_length};E.a.put("https://generate-password-api.herokuapp.com/password",{arg1:t,arg2:c,arg3:s,arg4:n,arg5:l}).then((function(t){e.password=t["data"],e.textarea_empty=!1}))["catch"]((function(e){alert(e)}))},CopyPassword:function(){document.getElementById("password_field").select(),document.getElementById("password_field").setSelectionRange(0,255),document.execCommand("copy")},FetchHash:function(){var e=this,t=document.getElementById("text_field").value;E.a.put("https://generate-password-api.herokuapp.com/hash",{arg1:t}).then((function(t){e.hash=t["data"],e.hash_field_empty=!1}))["catch"]((function(e){alert(e)}))},CopyHash:function(){document.getElementById("hash_field").select(),document.getElementById("hash_field").setSelectionRange(0,255),document.execCommand("copy")}}},F=(c("b2b6"),c("6b0d")),M=c.n(F);const N=M()(B,[["render",I]]);var A=N,G={name:"App",components:{Home:A}};const J=M()(G,[["render",l]]);var L=J,R=c("6c02"),U={class:""},q=Object(s["d"])("p",null,"404!",-1),z=[q];function D(e,t,c,n,l,a){return Object(s["n"])(),Object(s["c"])("div",U,z)}var K={name:"404"};const Q=M()(K,[["render",D]]);var V=Q,W=[{path:"/",name:"Home",component:A},{path:"/:pathMatch(.*)*",name:"PageNotFound",component:V}],X=Object(R["a"])({history:Object(R["b"])("/"),routes:W}),Y=X,Z=c("130e"),$=(c("ba8c"),c("d940"),c("ecee")),ee=c("ad3d"),te=c("c074"),ce=c("f2d1"),se=c("b702");$["c"].add(te["a"],ce["a"],se["a"]),Object(s["b"])(L).use(Y).use(Z["a"],E.a).component("Icon",ee["a"]).mount("#app")},7153:function(e,t,c){},b2b6:function(e,t,c){"use strict";c("7153")},ba8c:function(e,t,c){},d940:function(e,t,c){}});
//# sourceMappingURL=app.4f0126d7.js.map