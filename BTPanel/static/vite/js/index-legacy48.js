System.register(["./index-legacy.js?v=1723125373998","./index-legacy77.js?v=1723125373998","./index-legacy73.js?v=1723125373998","./useTableData-legacy.js?v=1723125373998","./useTableColumns-legacy.js?v=1723125373998","./useLoading-legacy.js?v=1723125373998","./index.vue_vue_type_script_setup_true_lang-legacy.js?v=1723125373998","./index.vue_vue_type_script_setup_true_lang-legacy2.js?v=1723125373998","./vue-legacy.js?v=1723125373998","./pinia-legacy.js?v=1723125373998","./index.vue_vue_type_script_setup_true_lang-legacy6.js?v=1723125373998","./Image-legacy.js?v=1723125373998","./Switch-legacy.js?v=1723125373998","./Tabs-legacy.js?v=1723125373998","./omit-legacy.js?v=1723125373998","./data-legacy.js?v=1723125373998","./Skeleton-legacy.js?v=1723125373998","./DataTable-legacy.js?v=1723125373998","./Checkbox-legacy.js?v=1723125373998","./Ellipsis-legacy.js?v=1723125373998","./Select-legacy.js?v=1723125373998","./Tag-legacy.js?v=1723125373998","./Empty-legacy.js?v=1723125373998","./Progress-legacy.js?v=1723125373998","./index.vue_vue_type_script_setup_true_lang-legacy5.js?v=1723125373998","./_createCompounder-legacy.js?v=1723125373998"],(function(e,t){"use strict";var a,s,l,i,n,o,u,c,r,d,p,y,g,_,m,x,v,h,w,b,k,f,S,j,I,A,P,T,C,U,O,R,z,$,q,L,M,D,W,E,K,F,B,G,H,Q,V,Z,J,N,X,Y,ee,te,ae,se,le;return{setters:[e=>{a=e.aw,s=e.ax,l=e.j,i=e.m,n=e.cP,o=e.g,u=e.k,c=e.n,r=e.q,d=e.ae,p=e.h,y=e.B,g=e.b8,_=e._,m=e.r,x=e.a,v=e.au,h=e.cQ,w=e.p,b=e.G},e=>{k=e._},e=>{f=e._},e=>{S=e.u,j=e._},e=>{I=e.h,A=e.b},e=>{P=e.u},e=>{T=e._},e=>{C=e._},e=>{U=e.l,O=e.ad,R=e.f,z=e.S,$=e.Z,q=e.P,L=e.V,M=e.W,D=e.b,W=e.w,E=e._,K=e.a3,F=e.F,B=e.r,G=e.q,H=e.U,Q=e.ag,V=e.B,Z=e.M,J=e.a5,N=e.a6,X=e.aj,Y=e.k},e=>{ee=e.s},e=>{te=e._,ae=e.a},e=>{se=e._},e=>{le=e._},null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var t=document.createElement("style");t.textContent=".ul-style[data-v-e7a4054e]{margin:0 auto;display:flex;align-items:center;justify-content:center;gap:48px;font-size:16px}.ul-style li[data-v-e7a4054e]{display:flex;align-items:center}.item[data-v-e7a4054e]{border-left:3px solid #def2e2}.item li[data-v-e7a4054e]{width:180px;margin-left:-3px;font-size:14px;line-height:36px;padding:0 20px;cursor:pointer}.item .active[data-v-e7a4054e]{border-left:3px solid #20a53a;color:#20a53a;font-weight:700;font-size:16px}\n",document.head.appendChild(t);const{t:ie}=a.global,ne=e=>s.post("/plugin?action=a&name=bt_security&s=start_user_security",e,{requestOptions:{loading:ie("Security.Api.Index_1"),successMessage:!0}}),oe=e=>s.post("/plugin?action=a&name=bt_security&s=stop_user_security",e,{requestOptions:{loading:ie("Security.Api.Index_2"),successMessage:!0}}),ue=e=>s.post("/plugin?action=a&name=bt_security&s=start_user_log",e,{requestOptions:{loading:ie("Security.Api.Index_1"),successMessage:!0}}),ce=e=>s.post("/plugin?action=a&name=bt_security&s=stop_user_log",e,{requestOptions:{loading:ie("Security.Api.Index_2"),successMessage:!0}}),re=e=>s.post("/plugin?action=a&name=bt_security&s=del_porcess_log",e,{requestOptions:{loading:ie("Security.Api.Index_3"),successMessage:!0}}),de=e=>s.post("/plugin?action=a&name=bt_security&s=add_porcess_log",e,{requestOptions:{loading:ie("Security.Api.Index_4"),successMessage:!0}}),pe=e=>s.post("/plugin?action=a&name=bt_security&s=get_log",e),ye={class:"p-20px"},ge=U({__name:"log",props:{data:{}},setup(e,{expose:t}){const{t:a}=O(),s=e;console.log(s);const{keys:n,table:o,columns:u}=S([{key:"log",title:a("Public.Table.Operation")},{key:"addtime",align:"right",title:a("Public.Table.Date")}]),c=R({p:1,limit:10}),{loading:r,setLoading:d}=P(),p=async()=>{try{d(!0);const{message:e}=await pe(c);l(e)&&(o.data=e.data,o.total=i(e.page))}finally{n.value=[],d(!1)}};return p(),t({init:p}),(e,t)=>{const a=j,s=C,l=T;return z(),$("div",ye,[q(l,{feedback:!0},{table:L((()=>[q(a,{"checked-row-keys":M(n),"onUpdate:checkedRowKeys":t[0]||(t[0]=e=>D(n)?n.value=e:null),"row-key":"log",loading:M(r),data:M(o).data,columns:M(u)},null,8,["checked-row-keys","loading","data","columns"])])),pageRight:L((()=>[q(s,{page:M(c).p,"onUpdate:page":t[1]||(t[1]=e=>M(c).p=e),"page-size":M(c).limit,"onUpdate:pageSize":t[2]||(t[2]=e=>M(c).limit=e),"item-count":M(o).total,"store-key":"security-anti",onRefresh:p},null,8,["page","page-size","item-count"])])),_:1})])}}}),_e=U({__name:"index",setup(e,{expose:t}){const{t:a}=O(),i=n(),{antiForm:d}=ee(i),p=o(a("Site.Proxy.index_51")),{keys:y,table:g,columns:_}=S([{key:"user",title:a("Site.Lable.User"),width:"20%"},{key:"total",title:a("Security.Anti.Index_7")},{key:"today",title:a("Public.Time.Today")},I({key:"protection",title:a("WP.TableRow.Protection"),minWidth:60,onClick:async(e,t)=>{e?await ne({user:t.user}):await oe({user:t.user})}}),I({key:"log",title:a("Security.Anti.Index_8"),minWidth:60,onClick:async(e,t)=>{e?await ue({uid:t.uid}):await ce({uid:t.uid})}}),{key:"remark",title:a("Site.Proxy.index_3")},A({width:130,title:a("Public.Table.Operation"),options:e=>[{label:a("Site.Proxy.index_51"),onClick:async()=>{const{message:t}=await(l={user:e.user},s.post("/plugin?action=a&name=bt_security&s=get_logs_list",l));var l;!u(t)||t.length||c.error(a("Security.Anti.Index_44"))}}]})]);W((()=>i.isRefresh),(e=>{e&&(i.setRefresh(!1),v())}));const{loading:m,setLoading:x}=P(),v=async()=>{try{x(!0);const{message:e}=await s.post("/plugin?action=a&name=bt_security&s=get_total_all");l(e)&&(d.value.switch=e.open,d.value.times=e.totla_times,d.value.days=e.totla_days,g.data=e.system_user.map((e=>({user:e[0],total:e[4].totla,today:e[4].day_totla,protection:e[3],log:e[5],remark:e[6],uid:e[1]}))))}finally{y.value=[],x(!1)}};return v(),t({init:v}),(e,t)=>{const a=j,s=f,l=r;return z(),$(F,null,[q(a,{"checked-row-keys":M(y),"onUpdate:checkedRowKeys":t[0]||(t[0]=e=>D(y)?y.value=e:null),"row-key":"user","max-height":750,loading:M(m),data:M(g).data,columns:M(_)},null,8,["checked-row-keys","loading","data","columns"]),q(s,{class:"mt-16px"},{default:L((()=>[E("li",null,K(e.$t("Security.Anti.Index_4")),1),E("li",null,K(e.$t("Security.Anti.Index_5")),1),E("li",null,K(e.$t("Security.Anti.Index_6")),1)])),_:1}),q(l,{show:M(p).show,"onUpdate:show":t[1]||(t[1]=e=>M(p).show=e),title:M(p).title,data:M(p).data,width:640,"min-height":268,footer:!1,component:ge},null,8,["show","title","data"])],64)}}}),me={class:"p-20px"},xe={class:"w-280px"},ve={class:"color-#ff3333"},he=U({__name:"form",props:{data:{}},setup(e,{expose:t}){const{t:a}=O(),s=e,{getList:l}=s.data,i=B(null),n=R({name:""}),o={name:{required:!0,message:a("Security.Conf.Index_28"),trigger:["blur","input"]}};return t({onConfirm:async({hide:e})=>{await(i.value?.validate()),await de({cmd:n.name}),l?.(),e()}}),(e,t)=>{const a=d,s=te,l=ae,u=f;return z(),$("div",me,[q(l,{ref_key:"formRef",ref:i,model:M(n),rules:o},{default:L((()=>[q(s,{label:e.$t("Home.index_24"),path:"name"},{default:L((()=>[E("div",xe,[q(a,{type:"text",value:M(n).name,"onUpdate:value":t[0]||(t[0]=e=>M(n).name=e),placeholder:"e.g:/bin/bash"},null,8,["value"])])])),_:1},8,["label"])])),_:1},8,["model"]),q(u,{class:"mt-4px"},{default:L((()=>[E("li",ve,K(e.$t("Security.Anti.Index_9")),1)])),_:1})])}}}),we=U({__name:"index",setup(e,{expose:t}){const{t:a}=O(),{loading:l,setLoading:i}=P(),{keys:n,table:c,columns:d}=S([{key:"whitelist",title:a("Security.Anti.Index_11")},A({width:130,options:e=>[{label:a("Site.TableOP.Del"),onClick:()=>{p({title:`${a("Security.Anti.Index_12")} [${e.whitelist}]`,content:a("Security.Anti.Index_13"),onConfirm:async({hide:t})=>{await re({cmd:e.whitelist}),g(),t()}})}}]})]),g=async()=>{try{i(!0);const{message:e}=await s.post("/plugin?action=a&name=bt_security&s=porcess_set_up_log");u(e)&&(c.data=e.map((e=>({whitelist:e}))))}finally{n.value=[],i(!1)}};g(),t({init:g});const _=()=>{m.show=!0},m=o(a("Security.Anti.Index_10"),{getList:g});return(e,t)=>{const a=y,s=j,i=T,o=r;return z(),$("div",null,[q(i,null,{toolsLeft:L((()=>[q(a,{type:"primary",onClick:_},{default:L((()=>[G(K(e.$t("Security.Anti.Index_10")),1)])),_:1})])),table:L((()=>[q(s,{"checked-row-keys":M(n),"onUpdate:checkedRowKeys":t[0]||(t[0]=e=>D(n)?n.value=e:null),"row-key":"whitelist",loading:M(l),"max-height":440,data:M(c).data,columns:M(d)},null,8,["checked-row-keys","loading","data","columns"])])),_:1}),q(o,{show:M(m).show,"onUpdate:show":t[1]||(t[1]=e=>M(m).show=e),title:M(m).title,data:M(m).data,width:480,footer:!0,component:he},null,8,["show","title","data"])])}}}),be=U({__name:"index",setup(e,{expose:t}){const{t:a}=O(),{keys:s,table:n,columns:o}=S([{key:"log",title:a("Public.Table.Operation")},{key:"addtime",align:"right",title:a("Public.Table.Date")}]),u=R({p:1,limit:10}),{loading:c,setLoading:r}=P(),d=async()=>{try{r(!0);const{message:e}=await pe(u);l(e)&&(n.data=e.data,n.total=i(e.page))}finally{s.value=[],r(!1)}};return d(),t({init:d}),(e,t)=>{const a=j,l=C,i=T;return z(),H(i,{feedback:!0},{table:L((()=>[q(a,{"checked-row-keys":M(s),"onUpdate:checkedRowKeys":t[0]||(t[0]=e=>D(s)?s.value=e:null),"row-key":"log",loading:M(c),data:M(n).data,columns:M(o)},null,8,["checked-row-keys","loading","data","columns"])])),pageRight:L((()=>[q(l,{page:M(u).p,"onUpdate:page":t[1]||(t[1]=e=>M(u).p=e),"page-size":M(u).limit,"onUpdate:pageSize":t[2]||(t[2]=e=>M(u).limit=e),"item-count":M(n).total,"store-key":"security-anti",onRefresh:d},null,8,["page","page-size","item-count"])])),_:1})}}}),ke=U({__name:"index",setup(e){const{t:t}=O(),a=B("overview"),s=[{key:"overview",label:t("Security.Tabs.Index_5"),component:_e},{key:"whitelist",label:t("Security.Tabs.Index_6"),component:we},{key:"operation",label:t("Security.Tabs.Index_7"),component:be}];return(e,t)=>{const l=k;return z(),H(l,{value:M(a),"onUpdate:value":t[0]||(t[0]=e=>D(a)?a.value=e:null),options:s},null,8,["value"])}}}),fe=e=>(J("data-v-e7a4054e"),e=e(),N(),e),Se={class:"pt-40px pb-40px"},je=fe((()=>E("div",{class:"mb-24px text-center text-22px font-bold"},"Anti Intrusion prevention features",-1))),Ie={class:"mb-16px"},Ae={class:"ul-style"},Pe=fe((()=>E("span",{class:"ml-4px"},"Prevents the program from hanging",-1))),Te=fe((()=>E("span",{class:"ml-4px"},"Stop the mining virus",-1))),Ce=fe((()=>E("span",null,"Prevent Privilege Escalation Attacks",-1))),Ue={class:"text-center my-24px"},Oe={class:"flex justify-center"},Re={class:"item"},ze=["onClick"],$e=x(U({__name:"conversion",setup(e){const t=B(0),a=["Overview","Process whitelist","Operation logs"],s=()=>{g({source:105})};return(e,l)=>{const i=_,n=y,o=se,u=m;return z(),H(u,null,{default:L((()=>[E("div",Se,[je,E("div",Ie,[E("ul",Ae,[E("li",null,[q(i,{name:"security-lixian",size:"22"}),Pe]),E("li",null,[q(i,{name:"security-sanfang",size:"20"}),Te]),E("li",null,[q(i,{name:"security-webshell",size:"26"}),Ce])])]),E("div",Ue,[q(n,{type:"primary",class:"h-36px text-14px",onClick:s},{default:L((()=>[G(K(e.$t("WP.Transition.index_7")),1)])),_:1})]),E("div",Oe,[E("div",Re,[E("ul",null,[(z(),$(F,null,Q(a,((e,a)=>E("li",{class:X({active:M(t)==a}),key:a,onClick:e=>t.value=a},K(e),11,ze))),64))])]),V(q(o,{width:"100%",src:M("/static/vite/images/overview.png")},null,8,["src"]),[[Z,0==M(t)]]),V(q(o,{width:"100%",src:M("/static/vite/images/whitelist.png")},null,8,["src"]),[[Z,1==M(t)]]),V(q(o,{width:"100%",src:M("/static/vite/images/logs.png")},null,8,["src"]),[[Z,2==M(t)]])])])])),_:1})}}}),[["__scopeId","data-v-e7a4054e"]]),qe={key:0};e("default",U({__name:"index",setup(e){const t=v(),{isPro:a}=ee(t),l=n(),{antiForm:i}=ee(l),o=B(i.value.switch),u=Y((()=>i.value.switch));W(u,(e=>{o.value=e}));const c=Y((()=>i.value.times)),r=Y((()=>i.value.days)),d=async e=>{e?await s.post("/plugin?action=a&name=bt_security&s=start_bt_security",{},{requestOptions:{loading:ie("Security.Api.Index_1"),successMessage:!0}}):await s.post("/plugin?action=a&name=bt_security&s=stop_bt_security",{},{requestOptions:{loading:ie("Security.Api.Index_2"),successMessage:!0}}),await l.setRefresh(!0)};return(async()=>{a.value&&await h("bt_security")})(),(e,t)=>{const s=le,l=w,i=b,n=m;return M(a)?(z(),$("div",qe,[q(n,{class:"my-15px"},{default:L((()=>[q(i,{class:"p-15px items-center"},{default:L((()=>[E("span",null,K(e.$t("Security.Anti.Index_1")),1),q(s,{value:M(o),"onUpdate:value":[t[0]||(t[0]=e=>D(o)?o.value=e:null),d],"rubber-band":!1},null,8,["value"]),q(l,{vertical:""}),E("span",null,K(e.$t("Security.Anti.Index_2"))+": "+K(M(c)),1),q(l,{vertical:""}),E("span",null,K(e.$t("Security.Anti.Index_3"))+": "+K(M(r)),1)])),_:1})])),_:1}),q(n,{class:"p-15px"},{default:L((()=>[q(ke)])),_:1})])):(z(),H($e,{key:1}))}}}))}}}));
