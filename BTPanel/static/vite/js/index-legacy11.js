System.register(["./index-legacy.js?v=1723125373998","./index.vue_vue_type_script_setup_true_lang-legacy.js?v=1723125373998","./index.vue_vue_type_script_setup_true_lang-legacy2.js?v=1723125373998","./index.vue_vue_type_script_setup_true_lang-legacy3.js?v=1723125373998","./useTableData-legacy.js?v=1723125373998","./index.vue_vue_type_script_setup_true_lang-legacy4.js?v=1723125373998","./index-legacy77.js?v=1723125373998","./useLoading-legacy.js?v=1723125373998","./useTableColumns-legacy.js?v=1723125373998","./index-legacy69.js?v=1723125373998","./vue-legacy.js?v=1723125373998","./Ellipsis-legacy.js?v=1723125373998","./capitalize-legacy.js?v=1723125373998","./Tabs-legacy.js?v=1723125373998","./pinia-legacy.js?v=1723125373998","./index.vue_vue_type_script_setup_true_lang-legacy5.js?v=1723125373998","./DataTable-legacy.js?v=1723125373998","./Checkbox-legacy.js?v=1723125373998","./Select-legacy.js?v=1723125373998","./Tag-legacy.js?v=1723125373998","./Empty-legacy.js?v=1723125373998","./omit-legacy.js?v=1723125373998","./data-legacy.js?v=1723125373998","./Skeleton-legacy.js?v=1723125373998","./Progress-legacy.js?v=1723125373998","./Switch-legacy.js?v=1723125373998","./index-legacy70.js?v=1723125373998"],(function(e,t){"use strict";var a,l,i,d,n,s,o,u,c,r,y,p,g,h,m,_,v,w,x,b,f,k,j,C,R,D,U,E,S,K,L,I,B,P,T,W,z,$,A,q,F,H,V,G,Z,J,M,N,O,Q,X,Y,ee,te,ae,le;return{setters:[e=>{a=e.n,l=e._,i=e.u,d=e.g,n=e.C,s=e.h,o=e.D,u=e.E,c=e.k,r=e.F,y=e.j,p=e.m,g=e.l,h=e.B,m=e.p,_=e.G,v=e.q,w=e.r,x=e.v},e=>{b=e._},e=>{f=e._},e=>{k=e._},e=>{j=e.u,C=e._},e=>{R=e._},e=>{D=e._},e=>{U=e.u},e=>{E=e.c,S=e.b},e=>{K=e.g,L=e._,I=e.e},e=>{B=e.l,P=e.ad,T=e.S,W=e.Z,z=e._,$=e.P,A=e.V,q=e.q,F=e.a3,H=e.r,V=e.H,G=e.f,Z=e.w,J=e.U,M=e.W,N=e.b,O=e.ag,Q=e.F,X=e.af,Y=e.a1,ee=e.t},e=>{te=e._},e=>{ae=e.c},e=>{le=e._},null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){const ie={class:"flex"},de={class:"w-0 flex-1 flex items-center"},ne={style:{minWidth:0}},se=B({__name:"index",props:{value:{default:""}},setup(e){const{t:t}=P(),i=e,{toClipboard:d}=E(),n=async()=>{try{await d(`${i.value}`),a.success(t("Public.Components.index_4"))}catch(e){a.success(t("Public.Components.index_5"))}};return(e,t)=>{const a=te,i=l;return T(),W("div",ie,[z("div",de,[z("div",ne,[$(a,{class:"max-w-full",tooltip:{width:"trigger",scrollable:!0,contentStyle:{maxHeight:"360px",overflow:"auto"}}},{default:A((()=>[q(F(e.value),1)])),_:1})]),z("button",{class:"reset mx-8px text-15px cursor-pointer text-#333",title:"Copy",onClick:n},[$(i,{name:"common-copy"})])])])}}}),oe={class:"p-16px"},ue={class:"flex flex-wrap justify-between mb-12px"},ce={class:"flex items-center text-warning"},re=z("span",{class:"ml-4px"},"All current action items are associated with",-1),ye=z("div",null,null,-1);e("default",B({__name:"index",setup(e){const a=Y((()=>x((()=>t.import("./index-legacy74.js?v=1723125373998")),void 0))),E=Y((()=>x((()=>t.import("./index-legacy75.js?v=1723125373998")),void 0))),B=Y((()=>x((()=>t.import("./index-legacy76.js?v=1723125373998")),void 0))),P=i(),F=H(null),te=V([]),ie=d("",{row:void 0,sid:null,dbIdx:0,isEdit:!1}),de=()=>{ie.data.dbIdx=me.db_idx,ie.data.row=void 0,ie.data.sid=F.value,ie.data.isEdit=!1,ie.title="Add Key",ie.show=!0},ne=d("Redis Backup list",{sid:null}),pe=()=>{ne.data.sid=F.value,ne.show=!0},ge=d("Example Clear database",{sid:null,databaseList:[]}),he=()=>{ge.data.sid=F.value,ge.data.databaseList=te.value,ge.show=!0},me=G({db_idx:-1,db_type:0,p:1,limit:20,search:""}),{keys:_e,table:ve,columns:we}=j([{type:"selection",width:40},{key:"name",title:"Key",width:"20%",minWidth:120,ellipsis:{tooltip:{width:"trigger"}}},{key:"val",title:"Value",render:e=>$(se,{value:e.val},null)},{key:"type",title:"Data type",width:"10%",minWidth:100,render:e=>ae(e.type)},{key:"len",title:"Data length",width:"10%",minWidth:100},{key:"endtime",title:"Term of validity",width:"10%",minWidth:100,render:e=>0===e.endtime?"Permanent":n(e.endtime)},S({width:100,options:e=>[{label:"Edit",onClick:()=>{(e=>{ie.data.dbIdx=me.db_idx,ie.data.row=e,ie.data.sid=F.value,ie.data.isEdit=!0,ie.title=`Edit Key [${e.name}]`,ie.show=!0})(e)}},{label:"Del",onClick:()=>{s({title:"Delete the key value",content:`Do you really want to delete [${e.name}]?`,onConfirm:async({hide:t})=>{null!==F.value&&-1!==me.db_idx&&(await o({sid:F.value,key:e.name,db_idx:me.db_idx}),1===ve.data.length&&(me.db_idx=-1),Ce(),t())}})}}]})]),xe=[{key:"del",type:"confirm",label:"Please choose del",confirm:{title:"Batch delete Key",desc:"Delete selected keys in batches. Do you want to continue?",columns:[{key:"name",title:"Key",ellipsis:{tooltip:{width:"trigger"}}}],api:async e=>{null!==F.value&&-1!==me.db_idx&&await o({sid:F.value,key:e.name,db_idx:me.db_idx},!1)},done:e=>{ve.total===e.length&&(me.db_idx=-1),Ce()}}}],be=async()=>{if(null===F.value)return;const{message:e}=await u({sid:F.value});c(e)&&e.length>0?(te.value=e,-1===me.db_idx&&(me.db_idx=e[0].id)):(te.value=[],ve.data=[],ve.total=0,me.db_idx=-1)},{loading:fe,setLoading:ke}=U(),je=async()=>{try{ke(!0);const e=F.value;if(null===e)return;if(te.value.length<=0)return;if(-1===me.db_idx)return;const{message:t}=await r({sid:e,...ee(me)});y(t)?(ve.data=c(t.data)?t.data:[],ve.total=p(t.page)):(ve.data=[],ve.total=0)}finally{_e.value=[],ke(!1)}},Ce=async()=>{await be(),await je()};return Z((()=>P.isRefresh),(e=>{e&&(P.setRefresh(!1),-1!==P.addRedisId&&P.addRedisId!==me.db_idx&&(me.db_idx=P.addRedisId,P.setAddRedisId(-1)),Ce())})),(async()=>{await P.getRemote(),P.install?(P.remoteList.length>0&&(F.value=P.remoteList[0].id),await be(),await je()):g()})(),(e,t)=>{const i=h,d=m,n=_,s=l,o=le,u=D,c=R,r=C,y=k,p=f,g=b,x=v,j=w;return T(),J(M(I),null,{default:A((()=>[$(j,null,{default:A((()=>[z("div",oe,[z("div",ue,[$(n,{class:"items-center"},{default:A((()=>[$(i,{type:"primary",onClick:de},{default:A((()=>[q("Add Key")])),_:1}),$(i,{onClick:M(K)},{default:A((()=>[q("Remote DB")])),_:1},8,["onClick"]),$(i,{onClick:pe},{default:A((()=>[q("Backup list")])),_:1}),$(d,{class:"mx-0!",vertical:""}),$(i,{onClick:he},{default:A((()=>[q("Clear DB")])),_:1})])),_:1}),$(n,{class:"items-center"},{default:A((()=>[z("div",ce,[$(s,{name:"base-info",size:"14"}),re]),$(M(L),{value:M(F),"onUpdate:value":t[0]||(t[0]=e=>N(F)?F.value=e:null),all:!1,"store-key":"database-redis-page",onChange:be},null,8,["value"])])),_:1})]),M(te).length>0?(T(),J(u,{key:0,value:M(me).db_idx,"onUpdate:value":[t[1]||(t[1]=e=>M(me).db_idx=e),je]},{default:A((()=>[(T(!0),W(Q,null,O(M(te),(e=>(T(),J(o,{key:e.id,name:e.id,tab:`${e.name}(${e.keynum})`},null,8,["name","tab"])))),128))])),_:1},8,["value"])):X("",!0),$(g,null,{toolsLeft:A((()=>[ye])),toolsRight:A((()=>[$(c,{value:M(me).search,"onUpdate:value":t[2]||(t[2]=e=>M(me).search=e),placeholder:"Search key",onSearch:je},null,8,["value"])])),table:A((()=>[$(r,{"checked-row-keys":M(_e),"onUpdate:checkedRowKeys":t[3]||(t[3]=e=>N(_e)?_e.value=e:null),"row-key":"name",loading:M(fe),data:M(ve).data,columns:M(we)},null,8,["checked-row-keys","loading","data","columns"])])),pageLeft:A((()=>[$(y,{"checked-row-keys":M(_e),"onUpdate:checkedRowKeys":t[4]||(t[4]=e=>N(_e)?_e.value=e:null),"row-key":"name",data:M(ve).data,options:xe},null,8,["checked-row-keys","data"])])),pageRight:A((()=>[$(p,{page:M(me).p,"onUpdate:page":t[5]||(t[5]=e=>M(me).p=e),"page-size":M(me).limit,"onUpdate:pageSize":t[6]||(t[6]=e=>M(me).limit=e),"store-key":"database-redis-page","item-count":M(ve).total,onRefresh:je},null,8,["page","page-size","item-count"])])),_:1}),$(x,{show:M(ie).show,"onUpdate:show":t[7]||(t[7]=e=>M(ie).show=e),title:M(ie).title,width:420,"min-height":340,footer:!0,data:M(ie).data,component:M(a)},null,8,["show","title","data","component"]),$(x,{show:M(ne).show,"onUpdate:show":t[8]||(t[8]=e=>M(ne).show=e),title:M(ne).title,width:920,"min-height":156,footer:!1,data:M(ne).data,component:M(E)},null,8,["show","title","data","component"]),$(x,{show:M(ge).show,"onUpdate:show":t[9]||(t[9]=e=>M(ge).show=e),title:M(ge).title,width:420,"min-height":240,footer:!0,data:M(ge).data,component:M(B)},null,8,["show","title","data","component"])])])),_:1})])),_:1})}}}))}}}));
