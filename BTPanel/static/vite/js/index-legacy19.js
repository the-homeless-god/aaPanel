System.register(["./index-legacy.js?v=1723125373998","./index.vue_vue_type_script_setup_true_lang-legacy.js?v=1723125373998","./useTableData-legacy.js?v=1723125373998","./useLoading-legacy.js?v=1723125373998","./useTableColumns-legacy.js?v=1723125373998","./vue-legacy.js?v=1723125373998","./pinia-legacy.js?v=1723125373998","./index.vue_vue_type_script_setup_true_lang-legacy5.js?v=1723125373998","./data-legacy.js?v=1723125373998","./Skeleton-legacy.js?v=1723125373998","./DataTable-legacy.js?v=1723125373998","./Checkbox-legacy.js?v=1723125373998","./Ellipsis-legacy.js?v=1723125373998","./Select-legacy.js?v=1723125373998","./Tag-legacy.js?v=1723125373998","./Empty-legacy.js?v=1723125373998","./omit-legacy.js?v=1723125373998","./Progress-legacy.js?v=1723125373998","./Switch-legacy.js?v=1723125373998"],(function(e,t){"use strict";var l,a,n,i,o,s,c,d,p,u,r,g,m,h,y,_,w,k,j,x,f,T,b,D,v,C,S,P;return{setters:[e=>{l=e.M,a=e.g,n=e.Z,i=e.a8,o=e.a9,s=e.k,c=e.r,d=e.B,p=e.q,u=e.v},e=>{r=e._},e=>{g=e.u,m=e._},e=>{h=e.u},e=>{y=e.b},e=>{_=e.l,w=e.ad,k=e.f,j=e.w,x=e.S,f=e.U,T=e.V,b=e.P,D=e.q,v=e.a3,C=e.W,S=e.b,P=e.a1},null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",_({__name:"index",setup(e){const _=P((()=>u((()=>t.import("./index-legacy101.js?v=1723125373998")),void 0))),U=P((()=>u((()=>t.import("./index-legacy102.js?v=1723125373998")),void 0))),B=P((()=>u((()=>t.import("./index-legacy103.js?v=1723125373998")),void 0))),{t:R}=w(),W=l(),E=a(R("Docker.Template.index_13"),{onRefresh:()=>{K()}}),L=()=>{E.show=!0},q=k({page:1,pageSize:10}),{keys:z,columns:A,table:M}=g([{key:"name",title:R("Docker.Template.index_4"),width:"20%",minWidth:120,ellipsis:{tooltip:!0}},{key:"path",title:R("Docker.Template.index_5"),width:"40%",minWidth:160,ellipsis:{tooltip:!0}},{key:"remark",title:R("Docker.Template.index_6"),minWidth:140,ellipsis:{tooltip:!0}},y({width:150,options:e=>[{label:R("Public.Btn.Edit"),onClick:()=>{Z(e)}},{label:R("Docker.Template.index_8"),onClick:()=>{G(e)}},{label:R("Public.Btn.Del"),onClick:()=>{H(e)}}]})]),V=a(R("Docker.Template.index_14"),{onRefresh:()=>{K()}}),Z=e=>{V.data.row=e,V.title=R("Docker.Template.index_15",[e.name]),V.show=!0},F=a(R("Docker.Template.index_16")),G=e=>{F.data.row=e,F.title=R("Docker.Template.index_17",[e.name]),F.show=!0},H=e=>{n({title:R("Docker.Template.index_18",[e.name]),content:()=>b("span",{class:"text-error"},[R("Docker.Template.index_12",[e.name])]),onConfirm:async()=>{await i({template_id:e.id}),K()}})},{loading:I,setLoading:J}=h(),K=async()=>{try{J(!0);const{message:e}=await o();M.data=s(e)?e:[],M.total=M.data.length}finally{z.value=[],J(!1)}};return j((()=>W.isRefresh),(e=>{e&&(W.setRefresh(!1),K())})),K(),(e,t)=>{const l=d,a=m,n=r,i=p,o=c;return x(),f(o,{class:"p-16px"},{default:T((()=>[b(n,null,{toolsLeft:T((()=>[b(l,{type:"primary",onClick:L},{default:T((()=>[D(v(C(R)("Public.Btn.Add")),1)])),_:1})])),table:T((()=>[b(a,{page:C(q),"onUpdate:page":t[0]||(t[0]=e=>S(q)?q.value=e:null),"is-page":!0,loading:C(I),columns:C(A),data:C(M).data},null,8,["page","loading","columns","data"])])),_:1}),b(i,{show:C(E).show,"onUpdate:show":t[1]||(t[1]=e=>C(E).show=e),title:C(E).title,data:C(E).data,width:650,"min-height":484,footer:!0,component:C(_)},null,8,["show","title","data","component"]),b(i,{show:C(V).show,"onUpdate:show":t[2]||(t[2]=e=>C(V).show=e),title:C(V).title,data:C(V).data,width:650,"min-height":436,footer:!0,component:C(U)},null,8,["show","title","data","component"]),b(i,{show:C(F).show,"onUpdate:show":t[3]||(t[3]=e=>C(F).show=e),title:C(F).title,data:C(F).data,width:640,"min-height":400,component:C(B)},null,8,["show","title","data","component"])])),_:1})}}}))}}}));
