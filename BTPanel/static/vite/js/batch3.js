import{_ as a,a as s}from"./index.vue_vue_type_script_setup_true_lang6.js?v=1723125373998";import{cV as e,k as t,n as l}from"./index.js?v=1723125373998";import{u as i}from"./useLoading.js?v=1723125373998";import{a as o,b3 as r}from"./site.js?v=1723125373998";import{l as n,ad as u,r as d,S as p,Z as m,P as _,V as v,_ as f,W as c,b as g}from"./vue.js?v=1723125373998";import{_ as j}from"./Select.js?v=1723125373998";import"./pinia.js?v=1723125373998";import"./Tag.js?v=1723125373998";import"./Empty.js?v=1723125373998";const b={class:"p-20px"},w={class:"w-150px"},P=n({__name:"batch",props:{data:{}},setup(n,{expose:P}){const{t:h}=u(),x=n,{rows:y}=x.data,S=e(),H=d(null),k=d([]),{loading:E,setLoading:L}=i();(async()=>{try{L(!0);const{message:a}=await o();t(a)&&a.length>0?(k.value=a.map((a=>({label:a.name,value:a.id}))),H.value=a[0].id):(H.value=null,k.value=[])}finally{L(!1)}})();return P({onConfirm:async({hide:a})=>{await r((()=>{if(null===H.value)throw l.error(h("Site.PHP.add_site_46")),new Error(h("Site.PHP.add_site_46"));return{id:H.value,site_ids:y.map((a=>a.id))}})()),S.setRefresh(!0),a()}}),(e,t)=>{const l=j,i=a,o=s;return p(),m("div",b,[_(o,null,{default:v((()=>[_(i,{label:e.$t("Site.PHP.add_site_22"),"show-feedback":!1},{default:v((()=>[f("div",w,[_(l,{value:c(H),"onUpdate:value":t[0]||(t[0]=a=>g(H)?H.value=a:null),loading:c(E),options:c(k)},null,8,["value","loading","options"])])])),_:1},8,["label"])])),_:1})])}}});export{P as default};
