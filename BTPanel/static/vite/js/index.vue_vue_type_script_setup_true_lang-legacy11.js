System.register(["./index-legacy.js?v=1723125373998","./mail-legacy.js?v=1723125373998","./vue-legacy.js?v=1723125373998","./Select-legacy.js?v=1723125373998"],(function(e,a){"use strict";var s,l,t,u,n,i,r,o,c,v;return{setters:[e=>{s=e.k},e=>{l=e.r},e=>{t=e.l,u=e.ah,n=e.ai,i=e.r,r=e.S,o=e.U,c=e.W},e=>{v=e._}],execute:function(){e("_",t({__name:"index",props:u({isInit:{type:Boolean,default:!1}},{value:{},valueModifiers:{}}),emits:["update:value"],setup(e,{expose:a}){const t=e,u=n(e,"value"),p=i([]),m=async()=>{const{message:e}=await l();s(e)&&(p.value=e.map((e=>({label:e.username,value:e.username}))),u.value=e[0].username)};return t.isInit&&m(),a({getList:m}),(e,a)=>{const s=v;return r(),o(s,{value:u.value,"onUpdate:value":a[0]||(a[0]=e=>u.value=e),filterable:!0,options:c(p),placeholder:"Please choose"},null,8,["value","options"])}}}))}}}));
