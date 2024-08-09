const __vite__fileDeps=["js/index78.js?v=1723125373998","js/index.vue_vue_type_script_setup_true_lang6.js?v=1723125373998","js/vue.js?v=1723125373998","js/index.js?v=1723125373998","js/pinia.js?v=1723125373998","css/index42.css?v=1723125373998","js/index.vue_vue_type_script_setup_true_lang7.js?v=1723125373998","js/index.vue_vue_type_script_setup_true_lang8.js?v=1723125373998","js/InputGroupLabel.js?v=1723125373998","js/InputGroup.js?v=1723125373998","js/index69.js?v=1723125373998","js/index70.js?v=1723125373998","css/index10.css?v=1723125373998","js/Select.js?v=1723125373998","js/Tag.js?v=1723125373998","js/Empty.js?v=1723125373998"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{e,u as a,g as t,s,o,h as i,t as l,w as n,j as r,k as p,m as d,l as c,B as u,p as m,q as _,r as h,v as y}from"./index.js?v=1723125373998";import{_ as k}from"./index.vue_vue_type_script_setup_true_lang.js?v=1723125373998";import{_ as f}from"./index.vue_vue_type_script_setup_true_lang2.js?v=1723125373998";import{_ as g}from"./index.vue_vue_type_script_setup_true_lang3.js?v=1723125373998";import{u as b,_ as w}from"./useTableData.js?v=1723125373998";import{_ as v}from"./index.vue_vue_type_script_setup_true_lang4.js?v=1723125373998";import{u as j}from"./useLoading.js?v=1723125373998";import{_ as x,a as C,b as D}from"./useTableColumns.js?v=1723125373998";import{a as S,b as R,d as B,_ as U,e as L,f as P,g as T,u as W,c as E}from"./index69.js?v=1723125373998";import{g as q}from"./hooks.js?v=1723125373998";import{P as z,q as A,l as I,f as G,w as K,S as N,U as V,V as H,_ as O,W as F,b as J,a1 as M,t as Q}from"./vue.js?v=1723125373998";import"./pinia.js?v=1723125373998";import"./index.vue_vue_type_script_setup_true_lang5.js?v=1723125373998";import"./DataTable.js?v=1723125373998";import"./Checkbox.js?v=1723125373998";import"./Ellipsis.js?v=1723125373998";import"./Select.js?v=1723125373998";import"./Tag.js?v=1723125373998";import"./Empty.js?v=1723125373998";import"./omit.js?v=1723125373998";import"./data.js?v=1723125373998";import"./Skeleton.js?v=1723125373998";import"./Progress.js?v=1723125373998";import"./Switch.js?v=1723125373998";import"./index70.js?v=1723125373998";const X={class:"p-16px"},Y=I({__name:"index",setup(I){const Y=M((()=>y((()=>import("./index78.js?v=1723125373998")),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])))),Z=a(),$=t(),ee=()=>{$.show=!0},ae=()=>{P()},te=()=>{T()},se=async()=>{await s(Z.type,{ids:[]}),ce()},oe=G({p:1,limit:10,sid:-1,search:""}),{keys:ie,table:le,columns:ne}=b([{type:"selection",width:40},{key:"name",title:"Database name",width:"12%",minWidth:120},{key:"username",title:"Username",width:"12%",minWidth:120},{key:"password",title:"Password",minWidth:150,render:e=>z(x,{value:e.password},null)},{key:"backup_count",title:"Backup",width:"12%",render:a=>z("div",{class:"flex items-center"},[z(e,{type:a.backup_count>0?"primary":"warning",onClick:()=>{S(a)}},{default:()=>[a.backup_count>0?"\tExists(".concat(a.backup_count,")"):"Not exist"]}),z("span",{class:"mx-4px"},[A("|")]),z(e,{onClick:()=>{R(a)}},{default:()=>[A("Import")]})])},{key:"sid",title:"Location",width:"12%",minWidth:120,render:e=>q(e)},C({onBlur:async(e,a)=>{await o({id:a.id,ps:e})}}),D({width:100,options:e=>[{label:"CHG PW",onClick:()=>{W(e)}},{label:"Del",onClick:()=>{E([e])}}]})]),re=[{key:"sync",label:"Sync to Server",onBatch:e=>{i({title:"Batch Sync to Server",content:"Please be cautious, The selected item will be [Sync to Server] after confirmation",onConfirm:async({hide:a})=>{await s(Z.type,{ids:e.map((e=>e.id))}),a()}})}},{key:"backup",type:"confirm",label:"DB backup",confirm:{title:"Batch backup database",desc:"Do you continue to operate in batch backup database?",api:e=>l(Z.type,{id:e.id},!1),done:()=>{ce()},columns:[{key:"name",title:"Database Name"}]}},{key:"delete",label:"Delete database",onBatch:e=>{E(e)}}],{loading:pe,setLoading:de}=j(),ce=async()=>{try{de(!0);const{message:e}=await n(Z.type,(()=>{const e={...Q(oe)};return-1===e.sid&&delete e.sid,e})());r(e)?(le.data=p(e.data)?e.data:[],le.total=d(e.page)):(le.data=[],le.total=0)}finally{ie.value=[],de(!1)}};K((()=>Z.isRefresh),(e=>{e&&(Z.setRefresh(!1),Z.delRemoteId===oe.sid&&(oe.sid=-1),ce())}));return(async()=>{await Z.getRemote(),Z.install?ce():c()})(),(e,a)=>{const t=u,s=m,o=v,i=w,l=g,n=f,r=k,p=_,d=h;return N(),V(F(L),null,{default:H((()=>[z(d,null,{default:H((()=>[O("div",X,[z(r,null,{toolsLeft:H((()=>[z(t,{type:"primary",onClick:ee},{default:H((()=>[A("Add DB")])),_:1}),z(t,{onClick:ae},{default:H((()=>[A("Root password")])),_:1}),z(t,{onClick:te},{default:H((()=>[A("Remote DB")])),_:1}),z(s,{class:"mx-0!",vertical:""}),z(t,{onClick:se},{default:H((()=>[A("Sync all")])),_:1}),z(t,{onClick:F(B)},{default:H((()=>[A("Get DB from server")])),_:1},8,["onClick"])])),toolsRight:H((()=>[z(F(U),{value:F(oe).sid,"onUpdate:value":a[0]||(a[0]=e=>F(oe).sid=e),"store-key":"database-pgsql-page",onChange:ce},null,8,["value"]),z(o,{value:F(oe).search,"onUpdate:value":a[1]||(a[1]=e=>F(oe).search=e),placeholder:"Database search",onSearch:ce},null,8,["value"])])),table:H((()=>[z(i,{"checked-row-keys":F(ie),"onUpdate:checkedRowKeys":a[2]||(a[2]=e=>J(ie)?ie.value=e:null),loading:F(pe),data:F(le).data,columns:F(ne)},null,8,["checked-row-keys","loading","data","columns"])])),pageLeft:H((()=>[z(l,{"checked-row-keys":F(ie),"onUpdate:checkedRowKeys":a[3]||(a[3]=e=>J(ie)?ie.value=e:null),data:F(le).data,options:re},null,8,["checked-row-keys","data"])])),pageRight:H((()=>[z(n,{page:F(oe).p,"onUpdate:page":a[4]||(a[4]=e=>F(oe).p=e),"page-size":F(oe).limit,"onUpdate:pageSize":a[5]||(a[5]=e=>F(oe).limit=e),"store-key":"database-pgsql-page","item-count":F(le).total,onRefresh:ce},null,8,["page","page-size","item-count"])])),_:1}),z(p,{show:F($).show,"onUpdate:show":a[6]||(a[6]=e=>F($).show=e),title:"Add Database",width:540,"min-height":280,footer:!0,component:F(Y)},null,8,["show","component"])])])),_:1})])),_:1})}}});export{Y as default};
