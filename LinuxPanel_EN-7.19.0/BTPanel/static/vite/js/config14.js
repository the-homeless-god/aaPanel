import{_ as a}from"./index96.js?v=1732601582185";import{_ as t}from"./index.vue_vue_type_script_setup_true_lang6.js?v=1732601582185";import{d as e,W as n,r as o,O as l,P as i,Q as s,M as r,R as c,ac as u,am as f,Y as d,c as p,Z as m}from"./vue.js?v=1732601582185";import{f as _,m as g,dz as v}from"./page_layout.js?v=1732601582185";import{d as x,f as y,u as w,a as j}from"./public.js?v=1732601582185";import{P as b,g as S,Q as W,R as h,S as C}from"./setting.js?v=1732601582185";import{_ as P}from"./index99.js?v=1732601582185";import{ad as $,aa as k,bh as B}from"./naive.js?v=1732601582185";import"./__commonjsHelpers__.js?v=1732601582185";import"./common.js?v=1732601582185";const U={class:"p-20px"},E={class:"flex mb-16px"},Q={class:"flex-1 mr-16px"},R=e({__name:"config",setup(e){const{t:R}=n(),z=o(""),A=async()=>{""!==z.value.trim()?(await W({text:z.value}),z.value="",O()):g.error(R("Waf.Setting.config_176"))},D=()=>{const a=o("");w({title:R("Waf.Setting.config_187"),width:440,footer:!0,content:()=>r("div",{class:"p-20px"},[r(P,{value:a.value,"onUpdate:value":t=>a.value=t,rows:14,placeholder:R("Waf.Setting.config_188")},null)]),onConfirm:async()=>{if(""===a.value.trim())return g.error(R("Waf.Setting.config_179")),!1;await h({text:a.value}),O()}})},H=()=>{const a=o(K.data.map((a=>a.word)).join("\n"));w({title:R("Waf.Setting.config_177"),width:440,footer:!0,content:()=>r("div",{class:"p-20px"},[r(P,{value:a.value,"onUpdate:value":t=>a.value=t,rows:14,readonly:!0},null)]),onConfirm:()=>(v(a.value,"".concat("body_intercept",".json")),!1)})},I=()=>{j({title:R("Waf.Setting.config_180"),content:R("Waf.Setting.config_181"),onConfirm:async()=>{await C(),O()}})},{table:K,columns:L,setLoading:M}=x([{key:"word",title:R("Waf.Setting.config_184")},y({width:80,options:a=>[{label:R("Public.Btn.Del"),onClick:async()=>{await b({text:a.word}),O()}}]})]),O=async()=>{try{M(!0);const{message:a}=await S();_(a)&&(K.data=a.body_intercept.map((a=>({word:a}))))}finally{M(!1)}};return O(),(e,n)=>{const o=$,_=k,g=t,v=B,x=a;return l(),i("div",U,[s("div",E,[s("div",Q,[r(o,{value:c(z),"onUpdate:value":n[0]||(n[0]=a=>u(z)?z.value=a:null),placeholder:e.$t("Waf.Setting.config_184"),onKeyup:f(A,["enter"])},null,8,["value","placeholder"])]),r(_,{type:"primary",onClick:A},{default:d((()=>[p(m(e.$t("Public.Btn.Add")),1)])),_:1})]),r(g,{"max-height":258,loading:c(K).loading,data:c(K).data,columns:c(L)},null,8,["loading","data","columns"]),r(v,{class:"mt-16px"},{default:d((()=>[r(_,{onClick:D},{default:d((()=>[p(m(e.$t("Public.Btn.Import")),1)])),_:1}),r(_,{onClick:H},{default:d((()=>[p(m(e.$t("Public.Btn.Export")),1)])),_:1}),r(_,{onClick:I},{default:d((()=>[p(m(e.$t("Public.Btn.Empty")),1)])),_:1})])),_:1}),r(x,{class:"mt-16px"},{default:d((()=>[s("li",null,m(e.$t("Waf.Setting.config_185")),1),s("li",null,m(e.$t("Waf.Setting.config_186")),1)])),_:1})])}}});export{R as default};