System.register(["./index.vue_vue_type_script_setup_true_lang-legacy6.js?v=1723125373998","./index-legacy.js?v=1723125373998","./vue-legacy.js?v=1723125373998","./pinia-legacy.js?v=1723125373998"],(function(e,a){"use strict";var n,r,l,t,i,u,s,o,d,c,m,_,p,v,f,x;return{setters:[e=>{n=e._,r=e.a},e=>{l=e.M,t=e.e0,i=e.ae},e=>{u=e.l,s=e.ad,o=e.d,d=e.r,c=e.f,m=e.S,_=e.Z,p=e.P,v=e.V,f=e._,x=e.W},null],execute:function(){const a={class:"p-20px"},g={class:"w-200px"};e("default",u({__name:"index",props:{row:{}},setup(e,{expose:u}){const w=e,{t:y}=s(),b=o(w,"row"),h=l(),k=d(null),j=c({name:b.value.name}),C={name:{trigger:["blur","input"],validator:()=>""!==j.name.trim()||new Error(y("Docker.Container.rename.index_3"))}};return u({onConfirm:async()=>{await(k.value?.validate()),await t({id:b.value.id,name:j.name}),h.setRefresh(!0)}}),(e,l)=>{const t=i,u=n,s=r;return m(),_("div",a,[p(s,{ref_key:"formRef",ref:k,model:x(j),rules:C,"label-width":"150"},{default:v((()=>[p(u,{label:e.$t("Docker.Container.rename.index_1"),"show-feedback":!1},{default:v((()=>[f("div",g,[p(t,{value:x(j).name,"onUpdate:value":l[0]||(l[0]=e=>x(j).name=e),placeholder:e.$t("Docker.Container.rename.index_2")},null,8,["value","placeholder"])])])),_:1},8,["label"])])),_:1},8,["model"])])}}}))}}}));
