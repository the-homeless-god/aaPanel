const __vite__fileDeps=["js/index74.js?v=1723125373998","js/index73.js?v=1723125373998","js/index.js?v=1723125373998","js/vue.js?v=1723125373998","js/pinia.js?v=1723125373998","css/index42.css?v=1723125373998","js/index.vue_vue_type_script_setup_true_lang6.js?v=1723125373998","js/Select.js?v=1723125373998","js/Tag.js?v=1723125373998","js/Empty.js?v=1723125373998","js/InputGroupLabel.js?v=1723125373998","js/InputGroup.js?v=1723125373998","js/index75.js?v=1723125373998","js/index.vue_vue_type_script_setup_true_lang.js?v=1723125373998","js/index.vue_vue_type_script_setup_true_lang5.js?v=1723125373998","css/index9.css?v=1723125373998","js/useTableData.js?v=1723125373998","js/data.js?v=1723125373998","js/Skeleton.js?v=1723125373998","js/DataTable.js?v=1723125373998","js/Checkbox.js?v=1723125373998","js/Ellipsis.js?v=1723125373998","js/omit.js?v=1723125373998","js/useTableColumns.js?v=1723125373998","js/Progress.js?v=1723125373998","js/Switch.js?v=1723125373998","css/useTableColumns.css?v=1723125373998","js/useLoading.js?v=1723125373998","js/index76.js?v=1723125373998","css/index26.css?v=1723125373998"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{n as e,_ as t,u as a,g as s,C as i,h as l,D as d,E as o,k as n,F as r,j as u,m as p,l as c,B as m,p as _,G as h,q as y,r as w,v}from"./index.js?v=1723125373998";import{_ as x}from"./index.vue_vue_type_script_setup_true_lang.js?v=1723125373998";import{_ as f}from"./index.vue_vue_type_script_setup_true_lang2.js?v=1723125373998";import{_ as b}from"./index.vue_vue_type_script_setup_true_lang3.js?v=1723125373998";import{u as g,_ as k}from"./useTableData.js?v=1723125373998";import{_ as j}from"./index.vue_vue_type_script_setup_true_lang4.js?v=1723125373998";import{_ as C}from"./index77.js?v=1723125373998";import{u as R}from"./useLoading.js?v=1723125373998";import{c as D,b as E}from"./useTableColumns.js?v=1723125373998";import{g as L,_ as U,e as I}from"./index69.js?v=1723125373998";import{l as P,ad as T,S as K,Z as S,_ as A,P as B,V as W,q as z,a3 as V,r as O,H as q,f as F,w as H,U as G,W as Z,b as J,ag as M,F as N,af as Q,a1 as X,t as Y}from"./vue.js?v=1723125373998";import{_ as $}from"./Ellipsis.js?v=1723125373998";import{c as ee}from"./capitalize.js?v=1723125373998";import{_ as te}from"./Tabs.js?v=1723125373998";import"./pinia.js?v=1723125373998";import"./index.vue_vue_type_script_setup_true_lang5.js?v=1723125373998";import"./DataTable.js?v=1723125373998";import"./Checkbox.js?v=1723125373998";import"./Select.js?v=1723125373998";import"./Tag.js?v=1723125373998";import"./Empty.js?v=1723125373998";import"./omit.js?v=1723125373998";import"./data.js?v=1723125373998";import"./Skeleton.js?v=1723125373998";import"./Progress.js?v=1723125373998";import"./Switch.js?v=1723125373998";import"./index70.js?v=1723125373998";const ae={class:"flex"},se={class:"w-0 flex-1 flex items-center"},ie={style:{minWidth:0}},le=P({__name:"index",props:{value:{default:""}},setup(a){const{t:s}=T(),i=a,{toClipboard:l}=D(),d=async()=>{try{await l("".concat(i.value)),e.success(s("Public.Components.index_4"))}catch(t){e.success(s("Public.Components.index_5"))}};return(e,a)=>{const s=$,i=t;return K(),S("div",ae,[A("div",se,[A("div",ie,[B(s,{class:"max-w-full",tooltip:{width:"trigger",scrollable:!0,contentStyle:{maxHeight:"360px",overflow:"auto"}}},{default:W((()=>[z(V(e.value),1)])),_:1})]),A("button",{class:"reset mx-8px text-15px cursor-pointer text-#333",title:"Copy",onClick:d},[B(i,{name:"common-copy"})])])])}}});const de={class:"p-16px"},oe={class:"flex flex-wrap justify-between mb-12px"},ne={class:"flex items-center text-warning"},re=A("span",{class:"ml-4px"},"All current action items are associated with",-1),ue=A("div",null,null,-1),pe=P({__name:"index",setup(e){const D=X((()=>v((()=>import("./index74.js?v=1723125373998")),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11])))),P=X((()=>v((()=>import("./index75.js?v=1723125373998")),__vite__mapDeps([12,13,14,2,3,4,5,15,16,17,18,19,20,21,7,8,9,22,23,24,25,26,27])))),T=X((()=>v((()=>import("./index76.js?v=1723125373998")),__vite__mapDeps([28,6,3,2,4,5,7,8,9,20,29])))),V=a(),$=O(null),ae=q([]),se=s("",{row:void 0,sid:null,dbIdx:0,isEdit:!1}),ie=()=>{se.data.dbIdx=he.db_idx,se.data.row=void 0,se.data.sid=$.value,se.data.isEdit=!1,se.title="Add Key",se.show=!0},pe=s("Redis Backup list",{sid:null}),ce=()=>{pe.data.sid=$.value,pe.show=!0},me=s("Example Clear database",{sid:null,databaseList:[]}),_e=()=>{me.data.sid=$.value,me.data.databaseList=ae.value,me.show=!0},he=F({db_idx:-1,db_type:0,p:1,limit:20,search:""}),{keys:ye,table:we,columns:ve}=g([{type:"selection",width:40},{key:"name",title:"Key",width:"20%",minWidth:120,ellipsis:{tooltip:{width:"trigger"}}},{key:"val",title:"Value",render:e=>B(le,{value:e.val},null)},{key:"type",title:"Data type",width:"10%",minWidth:100,render:e=>ee(e.type)},{key:"len",title:"Data length",width:"10%",minWidth:100},{key:"endtime",title:"Term of validity",width:"10%",minWidth:100,render:e=>0===e.endtime?"Permanent":i(e.endtime)},E({width:100,options:e=>[{label:"Edit",onClick:()=>{(e=>{se.data.dbIdx=he.db_idx,se.data.row=e,se.data.sid=$.value,se.data.isEdit=!0,se.title="Edit Key [".concat(e.name,"]"),se.show=!0})(e)}},{label:"Del",onClick:()=>{l({title:"Delete the key value",content:"Do you really want to delete [".concat(e.name,"]?"),onConfirm:async({hide:t})=>{null!==$.value&&-1!==he.db_idx&&(await d({sid:$.value,key:e.name,db_idx:he.db_idx}),1===we.data.length&&(he.db_idx=-1),je(),t())}})}}]})]),xe=[{key:"del",type:"confirm",label:"Please choose del",confirm:{title:"Batch delete Key",desc:"Delete selected keys in batches. Do you want to continue?",columns:[{key:"name",title:"Key",ellipsis:{tooltip:{width:"trigger"}}}],api:async e=>{null!==$.value&&-1!==he.db_idx&&await d({sid:$.value,key:e.name,db_idx:he.db_idx},!1)},done:e=>{we.total===e.length&&(he.db_idx=-1),je()}}}],fe=async()=>{if(null===$.value)return;const{message:e}=await o({sid:$.value});n(e)&&e.length>0?(ae.value=e,-1===he.db_idx&&(he.db_idx=e[0].id)):(ae.value=[],we.data=[],we.total=0,he.db_idx=-1)},{loading:be,setLoading:ge}=R(),ke=async()=>{try{ge(!0);const e=$.value;if(null===e)return;if(ae.value.length<=0)return;if(-1===he.db_idx)return;const{message:t}=await r({sid:e,...Y(he)});u(t)?(we.data=n(t.data)?t.data:[],we.total=p(t.page)):(we.data=[],we.total=0)}finally{ye.value=[],ge(!1)}},je=async()=>{await fe(),await ke()};H((()=>V.isRefresh),(e=>{e&&(V.setRefresh(!1),-1!==V.addRedisId&&V.addRedisId!==he.db_idx&&(he.db_idx=V.addRedisId,V.setAddRedisId(-1)),je())}));return(async()=>{await V.getRemote(),V.install?(V.remoteList.length>0&&($.value=V.remoteList[0].id),await fe(),await ke()):c()})(),(e,a)=>{const s=m,i=_,l=h,d=t,o=te,n=C,r=j,u=k,p=b,c=f,v=x,g=y,R=w;return K(),G(Z(I),null,{default:W((()=>[B(R,null,{default:W((()=>[A("div",de,[A("div",oe,[B(l,{class:"items-center"},{default:W((()=>[B(s,{type:"primary",onClick:ie},{default:W((()=>[z("Add Key")])),_:1}),B(s,{onClick:Z(L)},{default:W((()=>[z("Remote DB")])),_:1},8,["onClick"]),B(s,{onClick:ce},{default:W((()=>[z("Backup list")])),_:1}),B(i,{class:"mx-0!",vertical:""}),B(s,{onClick:_e},{default:W((()=>[z("Clear DB")])),_:1})])),_:1}),B(l,{class:"items-center"},{default:W((()=>[A("div",ne,[B(d,{name:"base-info",size:"14"}),re]),B(Z(U),{value:Z($),"onUpdate:value":a[0]||(a[0]=e=>J($)?$.value=e:null),all:!1,"store-key":"database-redis-page",onChange:fe},null,8,["value"])])),_:1})]),Z(ae).length>0?(K(),G(n,{key:0,value:Z(he).db_idx,"onUpdate:value":[a[1]||(a[1]=e=>Z(he).db_idx=e),ke]},{default:W((()=>[(K(!0),S(N,null,M(Z(ae),(e=>(K(),G(o,{key:e.id,name:e.id,tab:"".concat(e.name,"(").concat(e.keynum,")")},null,8,["name","tab"])))),128))])),_:1},8,["value"])):Q("",!0),B(v,null,{toolsLeft:W((()=>[ue])),toolsRight:W((()=>[B(r,{value:Z(he).search,"onUpdate:value":a[2]||(a[2]=e=>Z(he).search=e),placeholder:"Search key",onSearch:ke},null,8,["value"])])),table:W((()=>[B(u,{"checked-row-keys":Z(ye),"onUpdate:checkedRowKeys":a[3]||(a[3]=e=>J(ye)?ye.value=e:null),"row-key":"name",loading:Z(be),data:Z(we).data,columns:Z(ve)},null,8,["checked-row-keys","loading","data","columns"])])),pageLeft:W((()=>[B(p,{"checked-row-keys":Z(ye),"onUpdate:checkedRowKeys":a[4]||(a[4]=e=>J(ye)?ye.value=e:null),"row-key":"name",data:Z(we).data,options:xe},null,8,["checked-row-keys","data"])])),pageRight:W((()=>[B(c,{page:Z(he).p,"onUpdate:page":a[5]||(a[5]=e=>Z(he).p=e),"page-size":Z(he).limit,"onUpdate:pageSize":a[6]||(a[6]=e=>Z(he).limit=e),"store-key":"database-redis-page","item-count":Z(we).total,onRefresh:ke},null,8,["page","page-size","item-count"])])),_:1}),B(g,{show:Z(se).show,"onUpdate:show":a[7]||(a[7]=e=>Z(se).show=e),title:Z(se).title,width:420,"min-height":340,footer:!0,data:Z(se).data,component:Z(D)},null,8,["show","title","data","component"]),B(g,{show:Z(pe).show,"onUpdate:show":a[8]||(a[8]=e=>Z(pe).show=e),title:Z(pe).title,width:920,"min-height":156,footer:!1,data:Z(pe).data,component:Z(P)},null,8,["show","title","data","component"]),B(g,{show:Z(me).show,"onUpdate:show":a[9]||(a[9]=e=>Z(me).show=e),title:Z(me).title,width:420,"min-height":240,footer:!0,data:Z(me).data,component:Z(T)},null,8,["show","title","data","component"])])])),_:1})])),_:1})}}});export{pe as default};
