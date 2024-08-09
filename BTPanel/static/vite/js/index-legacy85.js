System.register(["./useTableData-legacy.js?v=1723125373998","./index-legacy.js?v=1723125373998","./file-legacy2.js?v=1723125373998","./useLoading-legacy.js?v=1723125373998","./index.vue_vue_type_script_setup_true_lang-legacy14.js?v=1723125373998","./vue-legacy.js?v=1723125373998","./Alert-legacy.js?v=1723125373998","./data-legacy.js?v=1723125373998","./Skeleton-legacy.js?v=1723125373998","./DataTable-legacy.js?v=1723125373998","./Checkbox-legacy.js?v=1723125373998","./Ellipsis-legacy.js?v=1723125373998","./Select-legacy.js?v=1723125373998","./Tag-legacy.js?v=1723125373998","./Empty-legacy.js?v=1723125373998","./omit-legacy.js?v=1723125373998","./pinia-legacy.js?v=1723125373998","./Progress-legacy.js?v=1723125373998"],(function(e,t){"use strict";var a,l,n,s,i,o,d,c,r,u,y,g,m,p,b,h,v,j,x,f,w,_,D,k;return{setters:[e=>{a=e._},e=>{l=e.u,n=e.N,s=e.dK,i=e.L,o=e.j,d=e.dL,c=e.k,r=e.dM},e=>{u=e.c},e=>{y=e.u},e=>{g=e.a,m=e._},e=>{p=e.l,b=e.r,h=e.P,v=e.q,j=e.S,x=e.Z,f=e.V,w=e.W,_=e._,D=e.af},e=>{k=e._},null,null,null,null,null,null,null,null,null,null,null],execute:function(){const t={class:"px-20px py-24px"},L=_("span",{class:"font-bold"},"Warning: ",-1),T=_("span",null," After deleting the database, all data in the database will be cleared and cannot be recovered. ",-1),C={class:"mt-16px text-error"},P=_("p",null,"Please read the above information carefully to prevent accidental deletion.",-1),S={key:0,class:"mt-4px"};e("default",p({__name:"index",props:{data:{}},emits:["close"],setup(e,{expose:p,emit:R}){const A=e,{ids:B}=A.data,E=R,M=l(),W=b(!0),q=b([]),z=e=>{let t="--";for(let a=0;a<M.remoteList.length;a++){const l=M.remoteList[a];if(l.id===e){t=l.ps||l.db_host;break}}return t},F=b([{key:"name",title:"Database name",ellipsis:{tooltip:{width:"trigger"}}},{key:"total",title:"Size",width:120,render:e=>n(e.total)},{key:"position",title:"Location"},{key:"addtime",title:"Creation time",width:160,render:e=>e.addtime},{key:"result",title:"Delete results",align:"right",width:140,render:e=>e.position!==M.remoteList[0].ps?h("div",{class:"text-error"},[v("Delete Permanently")]):h("div",{class:W.value?"":"text-error"},[W.value?"Move to recycle bin":"Delete Permanently"])}]),{loading:G,setLoading:K}=y(),N=async e=>await r(M.type,{name:e.name,id:e.id}),V=()=>{i({title:"Delete database",hideClose:!0,data:{title:"Delete database",api:N,data:q.value,callback:Z},component:g})},Z=e=>{E("close"),M.setRefresh(!0),i({title:"Batch delete database results",width:440,footer:!0,component:m,data:{title:"Delete database",data:e,status:"done",columns:[{key:"name",title:"Database name",ellipsis:{tooltip:{width:"trigger"}}}]}})};return(async()=>{await(async()=>{const{message:e}=await u();o(e)&&(W.value=e.status_db)})(),(async()=>{try{K(!0);const{message:e}=await d({ids:B});o(e)?q.value=c(e.data)?e.data.map((e=>({...e,position:z(e.sid)}))):[]:q.value=[]}finally{K(!1)}})()})(),p({onConfirm:()=>{s({text:"Delete database",title:"Two-step verification - delete database",content:W.value?"The deleted database will be moved to the Recycle Bin. Do you want to continue?":"The data will be completely deleted and cannot be recovered. Do you want to continue?",onConfirm:async({hide:e})=>{V(),e()}})}}),(e,l)=>{const n=k,s=a;return j(),x("div",t,[h(n,{type:"warning"},{default:f((()=>[L,T])),_:1}),h(s,{class:"mt-16px",loading:w(G),"loading-num":w(B).length,"max-height":300,data:w(q),columns:w(F)},null,8,["loading","loading-num","data","columns"]),_("div",C,[P,w(W)?D("",!0):(j(),x("p",S," The database recycle bin is not enabled, please operate with caution! Go to enable --\x3e File management --\x3e Recycle bin "))])])}}}))}}}));
