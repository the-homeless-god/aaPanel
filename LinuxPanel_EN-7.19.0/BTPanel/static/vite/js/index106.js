import{_ as e}from"./index.vue_vue_type_script_setup_true_lang8.js?v=1732601582185";import{_ as a}from"./index.vue_vue_type_script_setup_true_lang9.js?v=1732601582185";import{_ as t}from"./index.vue_vue_type_script_setup_true_lang6.js?v=1732601582185";import{d as n,b as s}from"./public.js?v=1732601582185";import{c as r}from"./organization.js?v=1732601582185";import{S as i,f as o,a4 as p}from"./page_layout.js?v=1732601582185";import{d as _,W as l,j as u,l as d,O as m,P as c,M as g,Y as x,R as f}from"./vue.js?v=1732601582185";import"./index.vue_vue_type_script_setup_true_lang4.js?v=1732601582185";import"./naive.js?v=1732601582185";import"./common.js?v=1732601582185";import"./__commonjsHelpers__.js?v=1732601582185";const y={class:"p-20px"},j=_({__name:"index",props:{data:{}},setup(_,{expose:j}){const{t:v}=l(),b=_,{id:h}=b.data,C=u({p:1,rows:10}),{keys:w,table:k,columns:z}=n([{key:"name",title:v("Crontab.arrange.index_5"),render:e=>d("span",{},[i(e.start_time)])},{key:"name",title:v("Crontab.arrange.index_6"),render:e=>{const a=e.end_time-e.start_time;return d("span",{},["".concat(a<1?"<1":a).concat(v("Crontab.Planned.index_45"))])}},{key:"name",title:v("Crontab.Planned.index_23"),render:function(e){return d("span",{},[e.status?d("span",{class:"text-[#20a53a]"},v("Crontab.arrange.index_35")):d("span",{class:"text-[#ef0808]"},v("Crontab.arrange.index_36"))])}},{key:"name",title:v("Crontab.arrange.index_20"),width:"50%",render:function(e){return d("pre",{class:"max-h-[14rem]",style:{"white-space":"pre-line"}},[e.status?e.result_succ:e.result_err])}}]),{loading:P,setLoading:R}=s(),S=async()=>{try{R(!0);const{message:e}=await r({...C,trigger_id:h});o(e)&&(k.data=e.data,k.total=p(e.page))}finally{w.value=[],R(!1)}};return S(),j({init:S}),(n,s)=>{const r=t,i=a,o=e;return m(),c("div",y,[g(o,null,{table:x((()=>[g(r,{loading:f(P),"max-height":420,data:f(k).data,columns:f(z)},null,8,["loading","data","columns"])])),pageRight:x((()=>[g(i,{page:f(C).p,"onUpdate:page":s[0]||(s[0]=e=>f(C).p=e),"page-size":f(C).rows,"onUpdate:pageSize":s[1]||(s[1]=e=>f(C).rows=e),"item-count":f(k).total,onRefresh:S},null,8,["page","page-size","item-count"])])),_:1})])}}});export{j as default};