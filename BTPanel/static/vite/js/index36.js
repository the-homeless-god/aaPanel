const __vite__fileDeps=["js/index128.js?v=1723125373998","js/index.js?v=1723125373998","js/vue.js?v=1723125373998","js/pinia.js?v=1723125373998","css/index42.css?v=1723125373998","css/index34.css?v=1723125373998"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{O as a,g as t,j as e,k as s,m as i,r as l,q as o,v as n}from"./index.js?v=1723125373998";import{_ as r}from"./index.vue_vue_type_script_setup_true_lang.js?v=1723125373998";import{_ as p}from"./index.vue_vue_type_script_setup_true_lang2.js?v=1723125373998";import{u as m,_ as u}from"./useTableData.js?v=1723125373998";import{b as d}from"./useTableColumns.js?v=1723125373998";import{t as _,p as c,u as j}from"./mail.js?v=1723125373998";import{_ as h}from"./index.vue_vue_type_script_setup_true_lang11.js?v=1723125373998";import{l as g,ad as f,r as x,f as w,P as b,q as y,x as v,S as k,U as E,V as M,a3 as C,W as T,a1 as D}from"./vue.js?v=1723125373998";import{_ as L}from"./InputGroupLabel.js?v=1723125373998";import{_ as P}from"./InputGroup.js?v=1723125373998";import"./pinia.js?v=1723125373998";import"./index.vue_vue_type_script_setup_true_lang5.js?v=1723125373998";import"./DataTable.js?v=1723125373998";import"./Checkbox.js?v=1723125373998";import"./Ellipsis.js?v=1723125373998";import"./Select.js?v=1723125373998";import"./Tag.js?v=1723125373998";import"./Empty.js?v=1723125373998";import"./omit.js?v=1723125373998";import"./data.js?v=1723125373998";import"./Skeleton.js?v=1723125373998";import"./Progress.js?v=1723125373998";import"./Switch.js?v=1723125373998";const R=g({__name:"index",setup(g){const R=D((()=>n((()=>import("./index128.js?v=1723125373998")),__vite__mapDeps([0,1,2,3,4,5])))),{t:S}=f(),U=x(),W=w({p:1,username:null}),{table:I,columns:q}=m([{key:"from",title:S("Mail.Email.index_2"),width:"25%",minWidth:140,ellipsis:{tooltip:!0}},{key:"theme",title:S("Mail.Email.index_3"),minWidth:160,ellipsis:{tooltip:{width:"trigger"}},render:a=>{const t=a.html.replace(/[^\u4e00-\u9fa5]/g,"");return b("span",{class:"cursor-pointer",onClick:()=>{O(a)}},[b("a",{class:"bt-link"},[a.subject]),b("span",{class:"text-desc"},[y(" - "),t||a.body])])}},{key:"time",title:S("Mail.Email.index_4"),width:"12%",minWidth:140,render:t=>a(t.time)},d({width:150,options:a=>[{label:S("Mail.Email.index_5"),onClick:()=>{O(a)}},{label:S("Mail.Email.index_10"),onClick:()=>{V(a)}},{label:S("Public.Btn.Del"),onClick:()=>{A(a)}}]})]),G=t(),O=a=>{G.data.row=a,G.title=S("Mail.Email.index_7",[a.subject]),G.show=!0},V=async a=>{await _({path:a.path,username:W.username||""}),B()},A=async a=>{await c({path:a.path}),B()},B=async()=>{try{I.loading=!0;const{message:a}=await j({p:W.p,username:W.username||""});e(a)&&(I.data=s(a.data)?a.data:[],I.total=i(a.page))}finally{I.loading=!1}},$=()=>{W.p=1,B()};return v((async()=>{await U.value.getList()})),(a,t)=>{const e=L,s=P,i=u,n=p,m=r,d=o,_=l;return k(),E(_,{class:"p-16px"},{default:M((()=>[b(m,null,{toolsLeft:M((()=>[b(s,{class:"w-460px"},{default:M((()=>[b(e,null,{default:M((()=>[y(C(a.$t("Mail.Email.index_1")),1)])),_:1}),b(h,{ref_key:"senderRef",ref:U,value:T(W).username,"onUpdate:value":[t[0]||(t[0]=a=>T(W).username=a),$]},null,8,["value"])])),_:1})])),table:M((()=>[b(i,{loading:T(I).loading,data:T(I).data,columns:T(q)},null,8,["loading","data","columns"])])),pageRight:M((()=>[b(n,{page:T(W).p,"onUpdate:page":t[1]||(t[1]=a=>T(W).p=a),"item-count":T(I).total,onRefresh:B},null,8,["page","item-count"])])),_:1}),b(d,{show:T(G).show,"onUpdate:show":t[2]||(t[2]=a=>T(G).show=a),title:T(G).title,data:T(G).data,width:850,height:680,component:T(R)},null,8,["show","title","data","component"])])),_:1})}}});export{R as default};
