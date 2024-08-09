System.register(["./index-legacy.js?v=1723125373998","./index-legacy73.js?v=1723125373998","./useTableData-legacy.js?v=1723125373998","./useLoading-legacy.js?v=1723125373998","./mail-legacy.js?v=1723125373998","./index.vue_vue_type_script_setup_true_lang-legacy6.js?v=1723125373998","./vue-legacy.js?v=1723125373998","./index-legacy145.js?v=1723125373998","./useLoop-legacy.js?v=1723125373998","./pinia-legacy.js?v=1723125373998","./data-legacy.js?v=1723125373998","./Skeleton-legacy.js?v=1723125373998","./DataTable-legacy.js?v=1723125373998","./Checkbox-legacy.js?v=1723125373998","./Ellipsis-legacy.js?v=1723125373998","./Select-legacy.js?v=1723125373998","./Tag-legacy.js?v=1723125373998","./Empty-legacy.js?v=1723125373998","./omit-legacy.js?v=1723125373998","./Spin-legacy.js?v=1723125373998"],(function(e,a){"use strict";var t,l,s,n,i,o,r,c,u,d,m,p,y,h,g,f,v,w,_,x,b,j,k,P,R,C,S,D,E,B,L,z,N,T,U,q;return{setters:[e=>{t=e.ae,l=e.j,s=e.g,n=e.h,i=e.n,o=e.q,r=e.B,c=e.eE},e=>{u=e._},e=>{d=e.u,m=e._},e=>{p=e.u},e=>{y=e.a8,h=e.a9,g=e.aa,f=e.ab,v=e.ac},e=>{w=e._,_=e.a},e=>{x=e.l,b=e.r,j=e.f,k=e.S,P=e.Z,R=e.P,C=e.V,S=e._,D=e.W,E=e.t,B=e.ae,L=e.U,z=e.ad,N=e.q,T=e.a3},e=>{U=e._},e=>{q=e.u},null,null,null,null,null,null,null,null,null,null,null],execute:function(){const a={class:"p-20px"},$={class:"w-260px"},F=S("li",null,"Please enter the FQDN (Fully Qualified Domain Name e.g mail.aapanel.com)",-1),H=x({__name:"hostname",emits:["refresh"],setup(e,{expose:l,emit:s}){const n=s,i=b(null),o=j({hostname:""}),r={hostname:{trigger:["input","blur"],validator:()=>""!==o.hostname.trim()||new Error("Please enter the domain name")}};return l({onConfirm:async()=>{await(i.value?.validate()),await y(E(o)),n("refresh")}}),(e,l)=>{const s=t,n=w,c=_,d=u;return k(),P("div",a,[R(c,{ref_key:"formRef",ref:i,model:D(o),rules:r},{default:C((()=>[R(n,{label:"Domain name",path:"hostname"},{default:C((()=>[S("div",$,[R(s,{value:D(o).hostname,"onUpdate:value":l[0]||(l[0]=e=>D(o).hostname=e)},null,8,["value"])])])),_:1})])),_:1},8,["model"]),R(d,{class:"mt-8px"},{default:C((()=>[F])),_:1})])}}}),I=x({__name:"log",emits:["close","close-env"],setup(e,{emit:a}){const t=a,s=b("Log is empty"),n=async()=>{const{message:e}=await h();l(e)&&(s.value=e.result||"Log is empty")},{loop:i}=q((async()=>{await n()}),1),o=B();return(async()=>{(async()=>{await g(),t("close"),t("close-env"),o.push("/mail/domain")})(),await n(),i()})(),(e,a)=>{const t=U;return k(),L(t,{log:D(s)},null,8,["log"])}}}),O={class:"flex flex-col h-full overflow-hidden"},Q={class:"flex-1 p-20px overflow-auto"},V=S("li",null," If the mail server environment is abnormal, rectify the fault first. Go to the next step only after all exceptions are repaired ",-1);e("default",x({__name:"index",emits:["close"],setup(e,{emit:a}){const t=a,{t:y}=z(),h=["Redis-install","Redis-Passwd","SElinux"],{table:g,columns:w}=d([{key:"env",title:"The mail server env",width:150},{key:"details",title:"Details",ellipsis:{tooltip:!0},render:e=>{let a="";const{env:t,status:l,details:s}=e,n=h.includes(t);return a=s&&n?l?"Ready":s:l?"Ready":""!=s?s:"Abnormity",R("span",{class:l?"text-primary":"text-error"},[a])}},{key:"action",title:"Operation",width:120,render:e=>{const{env:a,status:t,details:l}=e;return h.includes(a)||!l||t?"no-operation":R("a",{class:"bt-link",href:"javascript:;",onClick:()=>{"HostName"===e.env?x(e):b(e)}},[y("Public.Btn.Repair")])}}]),_=s("Repair HostName",{onRefresh:()=>{B()}}),x=e=>{_.data.row=e,_.show=!0},b=e=>{n({title:"Repair the environment",content:"Whether to repair the mail server environment?",onConfirm:async()=>{const{env:a}=e;let t="";switch(a){case"Postfix-Version":case"Postfix-install":case"Sqlite-support":t="repair_postfix";break;case"Rspamd-install":t="install_rspamd";break;case"Dovecot-install":t="repair_dovecot"}await f(a,t),B()}})},{loading:j,setLoading:E}=p(),B=async()=>{try{E(!0);const{message:e}=await v();l(e)&&(g.data=Object.entries(e).map((([e,a])=>({env:e,details:a.msg,status:a.status}))))}finally{E(!1)}},L=()=>{t("close")},U=s("Initialization log",{onCloseEnv:()=>{L()}}),q=async()=>{g.data.every((e=>e.status))?U.show=!0:i.error("Please fix all exceptions and click submit")};return B(),(e,a)=>{const t=m,l=u,s=o,n=r,i=c;return k(),P("div",O,[S("div",Q,[R(t,{"max-height":364,"single-line":!1,loading:D(j),data:D(g).data,columns:D(w)},null,8,["loading","data","columns"]),R(l,{class:"mt-20px"},{default:C((()=>[V])),_:1}),R(s,{show:D(_).show,"onUpdate:show":a[0]||(a[0]=e=>D(_).show=e),title:D(_).title,data:D(_).data,width:500,footer:!0,component:H},null,8,["show","title","data"]),R(s,{show:D(U).show,"onUpdate:show":a[1]||(a[1]=e=>D(U).show=e),title:D(U).title,data:D(U).data,"hide-close":!0,width:700,height:490,component:I},null,8,["show","title","data"])]),R(i,null,{default:C((()=>[R(n,{class:"cancel-btn",color:"#cbcbcb",size:"small",onClick:L},{default:C((()=>[N(T(e.$t("Public.Btn.Cancel")),1)])),_:1}),R(n,{type:"primary",size:"small",onClick:B},{default:C((()=>[N(T(e.$t("Public.Btn.Refresh")),1)])),_:1}),R(n,{type:"primary",size:"small",onClick:q},{default:C((()=>[N(T(e.$t("Public.Btn.Submit")),1)])),_:1})])),_:1})])}}}))}}}));
