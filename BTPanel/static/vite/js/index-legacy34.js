System.register(["./index-legacy.js?v=1723125373998","./index.vue_vue_type_script_setup_true_lang-legacy.js?v=1723125373998","./useTableData-legacy.js?v=1723125373998","./useTableColumns-legacy.js?v=1723125373998","./mail-legacy.js?v=1723125373998","./vue-legacy.js?v=1723125373998","./Switch-legacy.js?v=1723125373998","./pinia-legacy.js?v=1723125373998","./index.vue_vue_type_script_setup_true_lang-legacy5.js?v=1723125373998","./data-legacy.js?v=1723125373998","./Skeleton-legacy.js?v=1723125373998","./DataTable-legacy.js?v=1723125373998","./Checkbox-legacy.js?v=1723125373998","./Ellipsis-legacy.js?v=1723125373998","./Select-legacy.js?v=1723125373998","./Tag-legacy.js?v=1723125373998","./Empty-legacy.js?v=1723125373998","./omit-legacy.js?v=1723125373998","./Progress-legacy.js?v=1723125373998"],(function(e,l){"use strict";var t,a,i,s,o,n,d,c,u,r,y,g,p,m,_,w,h,j,f,k,v,b,C,x,E;return{setters:[e=>{t=e.g,a=e.h,i=e.k,s=e.r,o=e.B,n=e.q,d=e.v},e=>{c=e._},e=>{u=e.u,r=e._},e=>{y=e.b},e=>{g=e.k,p=e.m,m=e.n},e=>{_=e.l,w=e.ad,h=e.f,j=e.P,f=e.S,k=e.U,v=e.V,b=e.q,C=e.W,x=e.a1},e=>{E=e._},null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",_({__name:"index",setup(e){const _=x((()=>d((()=>l.import("./index-legacy123.js?v=1723125373998")),void 0))),{t:S}=w(),D=h({p:1,size:10}),A=t("Add Forward",{isEdit:!1,row:void 0,onRefresh:()=>{R()}}),B=()=>{A.data.isEdit=!1,A.title="Add Forward",A.show=!0},{table:P,columns:T}=u([{key:"address",title:"Address",ellipsis:{tooltip:!0}},{key:"goto",title:"Goto",ellipsis:{tooltip:!0}},{key:"domain",title:"Domain",ellipsis:{tooltip:!0}},{key:"created",title:"Created"},{key:"modified",title:"Modified"},{key:"active",title:"Status",render:e=>j(E,{value:e.active,size:"small",checkedValue:1,uncheckedValue:0,onUpdateValue:async l=>{await g({user:e.address,forward_user:e.goto,active:l}),e.active=l}},null)},y({width:150,options:e=>[{label:S("Public.Btn.Edit"),onClick:()=>{V(e)}},{label:S("Public.Btn.Del"),onClick:()=>{F(e)}}]})]),V=e=>{A.data.isEdit=!0,A.data.row=e,A.title="Edit BCC",A.show=!0},F=async e=>{a({title:"Delete mail forward",content:"Confirm to delete this mail forward?",onConfirm:async()=>{await p({user:e.address}),R()}})},R=async()=>{try{P.loading=!0;const{message:e}=await m();P.data=i(e)?e:[]}finally{P.loading=!1}},U=()=>{D.p=1,R()};return R(),(e,l)=>{const t=o,a=r,i=c,d=n,u=s;return f(),k(u,{class:"p-16px"},{default:v((()=>[j(i,null,{toolsLeft:v((()=>[j(t,{type:"primary",onClick:B},{default:v((()=>[b("Add Forward")])),_:1})])),toolsRight:v((()=>[j(t,{onClick:U},{default:v((()=>[b("Refresh")])),_:1})])),table:v((()=>[j(a,{loading:C(P).loading,data:C(P).data,columns:C(T)},null,8,["loading","data","columns"])])),_:1}),j(d,{show:C(A).show,"onUpdate:show":l[0]||(l[0]=e=>C(A).show=e),title:C(A).title,data:C(A).data,width:480,"min-height":236,footer:!0,component:C(_)},null,8,["show","title","data","component"])])),_:1})}}}))}}}));
