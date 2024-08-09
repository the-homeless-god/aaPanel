const __vite__fileDeps=["js/index72.js?v=1723125373998","js/index.vue_vue_type_script_setup_true_lang6.js?v=1723125373998","js/vue.js?v=1723125373998","js/index.js?v=1723125373998","js/pinia.js?v=1723125373998","css/index42.css?v=1723125373998","js/index.vue_vue_type_script_setup_true_lang7.js?v=1723125373998","js/index.vue_vue_type_script_setup_true_lang8.js?v=1723125373998","js/InputGroupLabel.js?v=1723125373998","js/InputGroup.js?v=1723125373998","js/index69.js?v=1723125373998","js/index70.js?v=1723125373998","css/index10.css?v=1723125373998","js/Select.js?v=1723125373998","js/Tag.js?v=1723125373998","js/Empty.js?v=1723125373998"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{e as a,x as t,y as e,j as s,z as o,A as i,u as n,g as l,n as r,s as d,o as u,h as p,t as c,w as m,k as _,m as h,l as w,B as y,p as f,q as g,r as k,v}from"./index.js?v=1723125373998";import{_ as b}from"./index.vue_vue_type_script_setup_true_lang.js?v=1723125373998";import{_ as x}from"./index.vue_vue_type_script_setup_true_lang2.js?v=1723125373998";import{_ as j}from"./index.vue_vue_type_script_setup_true_lang3.js?v=1723125373998";import{u as C,_ as S}from"./useTableData.js?v=1723125373998";import{_ as R}from"./index.vue_vue_type_script_setup_true_lang4.js?v=1723125373998";import{u as D}from"./useLoading.js?v=1723125373998";import{_ as U,a as B,b as z}from"./useTableColumns.js?v=1723125373998";import{a as P,b as I,d as L,_ as T,e as W,g as A,u as E,c as q}from"./index69.js?v=1723125373998";import{g as G}from"./hooks.js?v=1723125373998";import{P as H,q as K,l as N,r as V,f as O,S as Z,Z as F,V as J,_ as M,W as Q,t as X,w as Y,U as $,b as aa,a1 as ta}from"./vue.js?v=1723125373998";import{_ as ea,a as sa}from"./index.vue_vue_type_script_setup_true_lang6.js?v=1723125373998";import{_ as oa}from"./index.vue_vue_type_script_setup_true_lang7.js?v=1723125373998";import{_ as ia}from"./index73.js?v=1723125373998";import{_ as na}from"./Switch.js?v=1723125373998";import"./pinia.js?v=1723125373998";import"./index.vue_vue_type_script_setup_true_lang5.js?v=1723125373998";import"./DataTable.js?v=1723125373998";import"./Checkbox.js?v=1723125373998";import"./Ellipsis.js?v=1723125373998";import"./Select.js?v=1723125373998";import"./Tag.js?v=1723125373998";import"./Empty.js?v=1723125373998";import"./omit.js?v=1723125373998";import"./data.js?v=1723125373998";import"./Skeleton.js?v=1723125373998";import"./Progress.js?v=1723125373998";import"./index70.js?v=1723125373998";import"./index.vue_vue_type_script_setup_true_lang8.js?v=1723125373998";import"./InputGroupLabel.js?v=1723125373998";import"./InputGroup.js?v=1723125373998";const la={class:"px-20px pt-24px pb-8px"},ra={class:"w-320px"},da=N({__name:"index",setup(a,{expose:i}){const n=V(null),l=O({password:""}),r={password:{required:!0,message:"Root password cannot be empty",trigger:"blur"}},{loading:d,setLoading:u}=D();return(async()=>{try{u(!0);const{message:a}=await e();s(a)&&(l.password=o(a.root)?a.root:"")}finally{u(!1)}})(),i({onConfirm:async({hide:a})=>{var e;try{await(null==(e=n.value)?void 0:e.validate()),await t(X(l)),a()}catch(s){console.error(s)}}}),(a,t)=>{const e=oa,s=ea,o=sa;return Z(),F("div",la,[H(o,{ref_key:"formRef",ref:n,model:Q(l),rules:r},{default:J((()=>[H(s,{label:"Root password",path:"password"},{default:J((()=>[M("div",ra,[H(e,{value:Q(l).password,"onUpdate:value":t[0]||(t[0]=a=>Q(l).password=a),loading:Q(d),default:!1},null,8,["value","loading"])])])),_:1})])),_:1},8,["model"])])}}}),ua={class:"px-20px py-24px"},pa=M("li",null," Security authentication: After this function is enabled, an account and password are required to access data ",-1),ca=N({__name:"index",props:{data:{}},setup(a){const t=a,{status:e,getInfo:s}=t.data,o=O({status:e}),n=async()=>{await i(X(o)),null==s||s()};return(a,t)=>{const e=na,s=ea,i=sa,l=ia;return Z(),F("div",ua,[H(i,{"label-width":"160"},{default:J((()=>[H(s,{label:"Security authentication","show-feedback":!1},{default:J((()=>[H(e,{value:Q(o).status,"onUpdate:value":[t[0]||(t[0]=a=>Q(o).status=a),n],"checked-value":1},null,8,["value"])])),_:1})])),_:1}),H(l,{class:"mt-16px"},{default:J((()=>[pa])),_:1})])}}}),ma={class:"p-16px"},_a=N({__name:"index",setup(t){const o=ta((()=>v((()=>import("./index72.js?v=1723125373998")),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])))),i=n(),N=l("Add Database",{status:!1}),V=()=>{N.data.status="enabled"===_a.authorization,N.show=!0},F=l("Change database password"),ea=()=>{"enabled"===_a.authorization?F.show=!0:(oa(),r.warning("Please enable security authentication first!"))},sa=l("Security authentication",{status:0}),oa=()=>{sa.data.status="enabled"===_a.authorization?1:0,sa.data.getInfo=ha,sa.show=!0},ia=()=>{A()},na=async()=>{await d(i.type,{ids:[]}),ga()},{keys:la,table:ra,columns:ua}=C([{type:"selection",width:40},{key:"name",title:"Database name",width:"12%",minWidth:120},{key:"username",title:"Username",width:"12%",minWidth:120},{key:"password",title:"Password",minWidth:150,render:a=>H(U,{value:a.password},null)},{key:"backup_count",title:"Backup",width:"12%",render:t=>H("div",{class:"flex items-center"},[H(a,{type:t.backup_count>0?"primary":"warning",onClick:()=>{P(t)}},{default:()=>[t.backup_count>0?"Exists(".concat(t.backup_count,")"):"Not exist"]}),H("span",{class:"mx-4px"},[K("|")]),H(a,{onClick:()=>{I(t)}},{default:()=>[K("Import")]})])},{key:"sid",title:"Position",width:"12%",minWidth:120,render:a=>G(a)},B({onBlur:async(a,t)=>{await u({id:t.id,ps:a})}}),z({width:100,options:a=>[{label:"CHG PW",onClick:()=>{E(a)}},{label:"Del",onClick:()=>{q([a])}}]})]),pa=[{key:"sync",label:"Sync to Server",onBatch:a=>{p({title:"Batch Sync to Server",content:"Please be cautious, The selected item will be [Sync to Server] after confirmation",onConfirm:async({hide:t})=>{await d(i.type,{ids:a.map((a=>a.id))}),t()}})}},{key:"backup",type:"confirm",label:"DB backup",confirm:{title:"Batch backup database",desc:"Do you continue to operate in batch backup database?",api:a=>c(i.type,{id:a.id},!1),done:()=>{ga()},columns:[{key:"name",title:"Database Name"}]}},{key:"delete",label:"Delete database",onBatch:a=>{q(a)}}],_a=O({authorization:"",msg:"",port:"",root:""}),ha=async()=>{const{message:a}=await e();s(a)&&(_a.authorization=a.authorization,_a.msg=a.msg,_a.port=a.port,_a.root=a.root)},{loading:wa,setLoading:ya}=D(),fa=O({p:1,limit:10,sid:-1,search:""}),ga=async()=>{try{ya(!0);const{message:a}=await m(i.type,(()=>{const a={...X(fa)};return-1===a.sid&&delete a.sid,a})());s(a)?(ra.data=_(a.data)?a.data:[],ra.total=h(a.page)):(ra.data=[],ra.total=0)}finally{la.value=[],ya(!1)}};Y((()=>i.isRefresh),(a=>{a&&(i.setRefresh(!1),i.delRemoteId===fa.sid&&(fa.sid=-1),ga())}));return(async()=>{await i.getRemote(),i.install?(ga(),ha()):w()})(),(a,t)=>{const e=y,s=f,i=R,n=S,l=j,r=x,d=b,u=g,p=k;return Z(),$(Q(W),null,{default:J((()=>[H(p,null,{default:J((()=>[M("div",ma,[H(d,null,{toolsLeft:J((()=>[H(e,{type:"primary",onClick:V},{default:J((()=>[K("Add DB")])),_:1}),H(e,{onClick:ea},{default:J((()=>[K("Root password")])),_:1}),H(e,{onClick:oa},{default:J((()=>[K("Security authentication")])),_:1}),H(e,{onClick:ia},{default:J((()=>[K("Remote DB")])),_:1}),H(s,{class:"mx-0!",vertical:""}),H(e,{onClick:na},{default:J((()=>[K("Sync all")])),_:1}),H(e,{onClick:Q(L)},{default:J((()=>[K("Get DB from server")])),_:1},8,["onClick"])])),toolsRight:J((()=>[H(Q(T),{value:Q(fa).sid,"onUpdate:value":t[0]||(t[0]=a=>Q(fa).sid=a),"store-key":"database-mongo-page",onChange:ga},null,8,["value"]),H(i,{value:Q(fa).search,"onUpdate:value":t[1]||(t[1]=a=>Q(fa).search=a),placeholder:"Database search",onSearch:ga},null,8,["value"])])),table:J((()=>[H(n,{"checked-row-keys":Q(la),"onUpdate:checkedRowKeys":t[2]||(t[2]=a=>aa(la)?la.value=a:null),loading:Q(wa),data:Q(ra).data,columns:Q(ua)},null,8,["checked-row-keys","loading","data","columns"])])),pageLeft:J((()=>[H(l,{"checked-row-keys":Q(la),"onUpdate:checkedRowKeys":t[3]||(t[3]=a=>aa(la)?la.value=a:null),data:Q(ra).data,options:pa},null,8,["checked-row-keys","data"])])),pageRight:J((()=>[H(r,{page:Q(fa).p,"onUpdate:page":t[4]||(t[4]=a=>Q(fa).p=a),"page-size":Q(fa).limit,"onUpdate:pageSize":t[5]||(t[5]=a=>Q(fa).limit=a),"store-key":"database-mongo-page","item-count":Q(ra).total,onRefresh:ga},null,8,["page","page-size","item-count"])])),_:1}),H(u,{show:Q(N).show,"onUpdate:show":t[6]||(t[6]=a=>Q(N).show=a),title:Q(N).title,width:540,minHeight:176,footer:!0,data:Q(N).data,component:Q(o)},null,8,["show","title","data","component"]),H(u,{show:Q(F).show,"onUpdate:show":t[7]||(t[7]=a=>Q(F).show=a),title:Q(F).title,width:520,footer:!0,component:da},null,8,["show","title"]),H(u,{show:Q(sa).show,"onUpdate:show":t[8]||(t[8]=a=>Q(sa).show=a),title:Q(sa).title,width:400,data:Q(sa).data,component:ca},null,8,["show","title","data"])])])),_:1})])),_:1})}}});export{_a as default};
