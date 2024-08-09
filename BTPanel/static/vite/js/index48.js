import{aw as e,ax as t,j as a,m as s,cP as i,g as n,k as l,n as o,q as r,ae as u,h as c,B as p,b8 as d,_ as m,r as _,a as y,au as g,cQ as x,p as v,G as h}from"./index.js?v=1723125373998";import{_ as w}from"./index77.js?v=1723125373998";import{_ as b}from"./index73.js?v=1723125373998";import{u as k,_ as f}from"./useTableData.js?v=1723125373998";import{h as S,b as I}from"./useTableColumns.js?v=1723125373998";import{u as j}from"./useLoading.js?v=1723125373998";import{_ as A}from"./index.vue_vue_type_script_setup_true_lang.js?v=1723125373998";import{_ as P}from"./index.vue_vue_type_script_setup_true_lang2.js?v=1723125373998";import{l as T,ad as U,f as C,S as O,Z as R,P as q,V as $,W as z,b as L,w as M,_ as D,a3 as W,F as K,r as E,q as F,U as B,ag as G,B as H,M as Q,a5 as V,a6 as Z,aj as J,k as N}from"./vue.js?v=1723125373998";import{s as X}from"./pinia.js?v=1723125373998";import{_ as Y,a as ee}from"./index.vue_vue_type_script_setup_true_lang6.js?v=1723125373998";import{_ as te}from"./Image.js?v=1723125373998";import{_ as ae}from"./Switch.js?v=1723125373998";import"./Tabs.js?v=1723125373998";import"./omit.js?v=1723125373998";import"./data.js?v=1723125373998";import"./Skeleton.js?v=1723125373998";import"./DataTable.js?v=1723125373998";import"./Checkbox.js?v=1723125373998";import"./Ellipsis.js?v=1723125373998";import"./Select.js?v=1723125373998";import"./Tag.js?v=1723125373998";import"./Empty.js?v=1723125373998";import"./Progress.js?v=1723125373998";import"./index.vue_vue_type_script_setup_true_lang5.js?v=1723125373998";import"./_createCompounder.js?v=1723125373998";const{t:se}=e.global,ie=e=>t.post("/plugin?action=a&name=bt_security&s=get_log",e),ne={class:"p-20px"},le=T({__name:"log",props:{data:{}},setup(e,{expose:t}){const{t:i}=U(),n=e;console.log(n);const{keys:l,table:o,columns:r}=k([{key:"log",title:i("Public.Table.Operation")},{key:"addtime",align:"right",title:i("Public.Table.Date")}]),u=C({p:1,limit:10}),{loading:c,setLoading:p}=j(),d=async()=>{try{p(!0);const{message:e}=await ie(u);a(e)&&(o.data=e.data,o.total=s(e.page))}finally{l.value=[],p(!1)}};return d(),t({init:d}),(e,t)=>{const a=f,s=P,i=A;return O(),R("div",ne,[q(i,{feedback:!0},{table:$((()=>[q(a,{"checked-row-keys":z(l),"onUpdate:checkedRowKeys":t[0]||(t[0]=e=>L(l)?l.value=e:null),"row-key":"log",loading:z(c),data:z(o).data,columns:z(r)},null,8,["checked-row-keys","loading","data","columns"])])),pageRight:$((()=>[q(s,{page:z(u).p,"onUpdate:page":t[1]||(t[1]=e=>z(u).p=e),"page-size":z(u).limit,"onUpdate:pageSize":t[2]||(t[2]=e=>z(u).limit=e),"item-count":z(o).total,"store-key":"security-anti",onRefresh:d},null,8,["page","page-size","item-count"])])),_:1})])}}}),oe=T({__name:"index",setup(e,{expose:s}){const{t:u}=U(),c=i(),{antiForm:p}=X(c),d=n(u("Site.Proxy.index_51")),{keys:m,table:_,columns:y}=k([{key:"user",title:u("Site.Lable.User"),width:"20%"},{key:"total",title:u("Security.Anti.Index_7")},{key:"today",title:u("Public.Time.Today")},S({key:"protection",title:u("WP.TableRow.Protection"),minWidth:60,onClick:async(e,a)=>{var s;e?await(s={user:a.user},t.post("/plugin?action=a&name=bt_security&s=start_user_security",s,{requestOptions:{loading:se("Security.Api.Index_1"),successMessage:!0}})):await(e=>t.post("/plugin?action=a&name=bt_security&s=stop_user_security",e,{requestOptions:{loading:se("Security.Api.Index_2"),successMessage:!0}}))({user:a.user})}}),S({key:"log",title:u("Security.Anti.Index_8"),minWidth:60,onClick:async(e,a)=>{var s;e?await(s={uid:a.uid},t.post("/plugin?action=a&name=bt_security&s=start_user_log",s,{requestOptions:{loading:se("Security.Api.Index_1"),successMessage:!0}})):await(e=>t.post("/plugin?action=a&name=bt_security&s=stop_user_log",e,{requestOptions:{loading:se("Security.Api.Index_2"),successMessage:!0}}))({uid:a.uid})}}),{key:"remark",title:u("Site.Proxy.index_3")},I({width:130,title:u("Public.Table.Operation"),options:e=>[{label:u("Site.Proxy.index_51"),onClick:async()=>{const{message:a}=await(s={user:e.user},t.post("/plugin?action=a&name=bt_security&s=get_logs_list",s));var s;!l(a)||a.length||o.error(u("Security.Anti.Index_44"))}}]})]);M((()=>c.isRefresh),(e=>{e&&(c.setRefresh(!1),v())}));const{loading:g,setLoading:x}=j(),v=async()=>{try{x(!0);const{message:e}=await t.post("/plugin?action=a&name=bt_security&s=get_total_all");a(e)&&(p.value.switch=e.open,p.value.times=e.totla_times,p.value.days=e.totla_days,_.data=e.system_user.map((e=>({user:e[0],total:e[4].totla,today:e[4].day_totla,protection:e[3],log:e[5],remark:e[6],uid:e[1]}))))}finally{m.value=[],x(!1)}};return v(),s({init:v}),(e,t)=>{const a=f,s=b,i=r;return O(),R(K,null,[q(a,{"checked-row-keys":z(m),"onUpdate:checkedRowKeys":t[0]||(t[0]=e=>L(m)?m.value=e:null),"row-key":"user","max-height":750,loading:z(g),data:z(_).data,columns:z(y)},null,8,["checked-row-keys","loading","data","columns"]),q(s,{class:"mt-16px"},{default:$((()=>[D("li",null,W(e.$t("Security.Anti.Index_4")),1),D("li",null,W(e.$t("Security.Anti.Index_5")),1),D("li",null,W(e.$t("Security.Anti.Index_6")),1)])),_:1}),q(i,{show:z(d).show,"onUpdate:show":t[1]||(t[1]=e=>z(d).show=e),title:z(d).title,data:z(d).data,width:640,"min-height":268,footer:!1,component:le},null,8,["show","title","data"])],64)}}}),re={class:"p-20px"},ue={class:"w-280px"},ce={class:"color-#ff3333"},pe=T({__name:"form",props:{data:{}},setup(e,{expose:a}){const{t:s}=U(),i=e,{getList:n}=i.data,l=E(null),o=C({name:""}),r={name:{required:!0,message:s("Security.Conf.Index_28"),trigger:["blur","input"]}};return a({onConfirm:async({hide:e})=>{var a,s;await(null==(a=l.value)?void 0:a.validate()),await(s={cmd:o.name},t.post("/plugin?action=a&name=bt_security&s=add_porcess_log",s,{requestOptions:{loading:se("Security.Api.Index_4"),successMessage:!0}})),null==n||n(),e()}}),(e,t)=>{const a=u,s=Y,i=ee,n=b;return O(),R("div",re,[q(i,{ref_key:"formRef",ref:l,model:z(o),rules:r},{default:$((()=>[q(s,{label:e.$t("Home.index_24"),path:"name"},{default:$((()=>[D("div",ue,[q(a,{type:"text",value:z(o).name,"onUpdate:value":t[0]||(t[0]=e=>z(o).name=e),placeholder:"e.g:/bin/bash"},null,8,["value"])])])),_:1},8,["label"])])),_:1},8,["model"]),q(n,{class:"mt-4px"},{default:$((()=>[D("li",ce,W(e.$t("Security.Anti.Index_9")),1)])),_:1})])}}}),de=T({__name:"index",setup(e,{expose:a}){const{t:s}=U(),{loading:i,setLoading:o}=j(),{keys:u,table:d,columns:m}=k([{key:"whitelist",title:s("Security.Anti.Index_11")},I({width:130,options:e=>[{label:s("Site.TableOP.Del"),onClick:()=>{c({title:"".concat(s("Security.Anti.Index_12")," [").concat(e.whitelist,"]"),content:s("Security.Anti.Index_13"),onConfirm:async({hide:a})=>{var s;await(s={cmd:e.whitelist},t.post("/plugin?action=a&name=bt_security&s=del_porcess_log",s,{requestOptions:{loading:se("Security.Api.Index_3"),successMessage:!0}})),_(),a()}})}}]})]),_=async()=>{try{o(!0);const{message:e}=await t.post("/plugin?action=a&name=bt_security&s=porcess_set_up_log");l(e)&&(d.data=e.map((e=>({whitelist:e}))))}finally{u.value=[],o(!1)}};_(),a({init:_});const y=()=>{g.show=!0},g=n(s("Security.Anti.Index_10"),{getList:_});return(e,t)=>{const a=p,s=f,n=A,l=r;return O(),R("div",null,[q(n,null,{toolsLeft:$((()=>[q(a,{type:"primary",onClick:y},{default:$((()=>[F(W(e.$t("Security.Anti.Index_10")),1)])),_:1})])),table:$((()=>[q(s,{"checked-row-keys":z(u),"onUpdate:checkedRowKeys":t[0]||(t[0]=e=>L(u)?u.value=e:null),"row-key":"whitelist",loading:z(i),"max-height":440,data:z(d).data,columns:z(m)},null,8,["checked-row-keys","loading","data","columns"])])),_:1}),q(l,{show:z(g).show,"onUpdate:show":t[1]||(t[1]=e=>z(g).show=e),title:z(g).title,data:z(g).data,width:480,footer:!0,component:pe},null,8,["show","title","data"])])}}}),me=T({__name:"index",setup(e,{expose:t}){const{t:i}=U(),{keys:n,table:l,columns:o}=k([{key:"log",title:i("Public.Table.Operation")},{key:"addtime",align:"right",title:i("Public.Table.Date")}]),r=C({p:1,limit:10}),{loading:u,setLoading:c}=j(),p=async()=>{try{c(!0);const{message:e}=await ie(r);a(e)&&(l.data=e.data,l.total=s(e.page))}finally{n.value=[],c(!1)}};return p(),t({init:p}),(e,t)=>{const a=f,s=P,i=A;return O(),B(i,{feedback:!0},{table:$((()=>[q(a,{"checked-row-keys":z(n),"onUpdate:checkedRowKeys":t[0]||(t[0]=e=>L(n)?n.value=e:null),"row-key":"log",loading:z(u),data:z(l).data,columns:z(o)},null,8,["checked-row-keys","loading","data","columns"])])),pageRight:$((()=>[q(s,{page:z(r).p,"onUpdate:page":t[1]||(t[1]=e=>z(r).p=e),"page-size":z(r).limit,"onUpdate:pageSize":t[2]||(t[2]=e=>z(r).limit=e),"item-count":z(l).total,"store-key":"security-anti",onRefresh:p},null,8,["page","page-size","item-count"])])),_:1})}}}),_e=T({__name:"index",setup(e){const{t:t}=U(),a=E("overview"),s=[{key:"overview",label:t("Security.Tabs.Index_5"),component:oe},{key:"whitelist",label:t("Security.Tabs.Index_6"),component:de},{key:"operation",label:t("Security.Tabs.Index_7"),component:me}];return(e,t)=>{const i=w;return O(),B(i,{value:z(a),"onUpdate:value":t[0]||(t[0]=e=>L(a)?a.value=e:null),options:s},null,8,["value"])}}}),ye=e=>(V("data-v-e7a4054e"),e=e(),Z(),e),ge={class:"pt-40px pb-40px"},xe=ye((()=>D("div",{class:"mb-24px text-center text-22px font-bold"},"Anti Intrusion prevention features",-1))),ve={class:"mb-16px"},he={class:"ul-style"},we=ye((()=>D("span",{class:"ml-4px"},"Prevents the program from hanging",-1))),be=ye((()=>D("span",{class:"ml-4px"},"Stop the mining virus",-1))),ke=ye((()=>D("span",null,"Prevent Privilege Escalation Attacks",-1))),fe={class:"text-center my-24px"},Se={class:"flex justify-center"},Ie={class:"item"},je=["onClick"],Ae=y(T({__name:"conversion",setup(e){const t=E(0),a=["Overview","Process whitelist","Operation logs"],s=()=>{d({source:105})};return(e,i)=>{const n=m,l=p,o=te,r=_;return O(),B(r,null,{default:$((()=>[D("div",ge,[xe,D("div",ve,[D("ul",he,[D("li",null,[q(n,{name:"security-lixian",size:"22"}),we]),D("li",null,[q(n,{name:"security-sanfang",size:"20"}),be]),D("li",null,[q(n,{name:"security-webshell",size:"26"}),ke])])]),D("div",fe,[q(l,{type:"primary",class:"h-36px text-14px",onClick:s},{default:$((()=>[F(W(e.$t("WP.Transition.index_7")),1)])),_:1})]),D("div",Se,[D("div",Ie,[D("ul",null,[(O(),R(K,null,G(a,((e,a)=>D("li",{class:J({active:z(t)==a}),key:a,onClick:e=>t.value=a},W(e),11,je))),64))])]),H(q(o,{width:"100%",src:z("/static/vite/images/overview.png")},null,8,["src"]),[[Q,0==z(t)]]),H(q(o,{width:"100%",src:z("/static/vite/images/whitelist.png")},null,8,["src"]),[[Q,1==z(t)]]),H(q(o,{width:"100%",src:z("/static/vite/images/logs.png")},null,8,["src"]),[[Q,2==z(t)]])])])])),_:1})}}}),[["__scopeId","data-v-e7a4054e"]]),Pe={key:0},Te=T({__name:"index",setup(e){const a=g(),{isPro:s}=X(a),n=i(),{antiForm:l}=X(n),o=E(l.value.switch),r=N((()=>l.value.switch));M(r,(e=>{o.value=e}));const u=N((()=>l.value.times)),c=N((()=>l.value.days)),p=async e=>{e?await t.post("/plugin?action=a&name=bt_security&s=start_bt_security",{},{requestOptions:{loading:se("Security.Api.Index_1"),successMessage:!0}}):await t.post("/plugin?action=a&name=bt_security&s=stop_bt_security",{},{requestOptions:{loading:se("Security.Api.Index_2"),successMessage:!0}}),await n.setRefresh(!0)};return(async()=>{s.value&&await x("bt_security")})(),(e,t)=>{const a=ae,i=v,n=h,l=_;return z(s)?(O(),R("div",Pe,[q(l,{class:"my-15px"},{default:$((()=>[q(n,{class:"p-15px items-center"},{default:$((()=>[D("span",null,W(e.$t("Security.Anti.Index_1")),1),q(a,{value:z(o),"onUpdate:value":[t[0]||(t[0]=e=>L(o)?o.value=e:null),p],"rubber-band":!1},null,8,["value"]),q(i,{vertical:""}),D("span",null,W(e.$t("Security.Anti.Index_2"))+": "+W(z(u)),1),q(i,{vertical:""}),D("span",null,W(e.$t("Security.Anti.Index_3"))+": "+W(z(c)),1)])),_:1})])),_:1}),q(l,{class:"p-15px"},{default:$((()=>[q(_e)])),_:1})])):(O(),B(Ae,{key:1}))}}});export{Te as default};
