import{_ as e}from"./index77.js?v=1723125373998";import{_ as a}from"./index.vue_vue_type_script_setup_true_lang18.js?v=1723125373998";import{_ as t}from"./index73.js?v=1723125373998";import{u as s,_ as r}from"./useTableData.js?v=1723125373998";import{_ as o}from"./index.vue_vue_type_script_setup_true_lang13.js?v=1723125373998";import{n as i,et as l,k as p,eu as n,B as d}from"./index.js?v=1723125373998";import{u as m}from"./useLoading.js?v=1723125373998";import{l as c,ad as u,f as _,r as f,S as k,Z as x,_ as v,P as h,V as j,W as y,q as g,a3 as T,b,t as D}from"./vue.js?v=1723125373998";import{_ as w}from"./Checkbox.js?v=1723125373998";import"./Tabs.js?v=1723125373998";import"./omit.js?v=1723125373998";import"./index.vue_vue_type_script_setup_true_lang6.js?v=1723125373998";import"./index.vue_vue_type_script_setup_true_lang12.js?v=1723125373998";import"./file2.js?v=1723125373998";import"./Select.js?v=1723125373998";import"./Tag.js?v=1723125373998";import"./Empty.js?v=1723125373998";import"./Spin.js?v=1723125373998";import"./data.js?v=1723125373998";import"./Skeleton.js?v=1723125373998";import"./DataTable.js?v=1723125373998";import"./Ellipsis.js?v=1723125373998";import"./index.vue_vue_type_script_setup_true_lang8.js?v=1723125373998";import"./InputGroupLabel.js?v=1723125373998";import"./InputGroup.js?v=1723125373998";import"./pinia.js?v=1723125373998";const C={class:"px-16px"},L={class:"flex mb-10px"},S={class:"flex-1"},R={class:"ml-16px"},U={class:"text-error"},$=c({__name:"index",setup(e,{expose:a}){const{t:c}=u(),$=_({path:"",checked:!1}),z=f([]),{keys:B,table:E,columns:G}=s([{type:"selection",width:40},{key:"project_name",title:c("Docker.Template.add.index_9")},{key:"conf_file",title:c("Docker.Template.add.index_10")},{key:"remark",title:c("Docker.Template.add.index_3")}]),{loading:I,setLoading:P}=m(),q=async()=>{if(""!==$.path.trim())try{P(!0);const{message:e}=await l({path:$.path,sub_dir:$.checked?"1":"0"});E.data=p(e)?e:[]}finally{B.value=[],z.value=[],P(!1)}else i.error(c("Docker.Template.add.index_11"))},K=(e,a)=>{z.value=a};return a({onConfirm:async()=>{0!==z.value.length?await n({template_list:D(z.value)}):i.error(c("Docker.Template.add.index_12"))}}),(e,a)=>{const s=w,i=o,l=d,p=r,n=t;return k(),x("div",C,[v("div",L,[v("div",S,[h(i,{value:y($).path,"onUpdate:value":a[1]||(a[1]=e=>y($).path=e),placeholder:e.$t("Docker.Template.add.index_5")},{suffix:j((()=>[h(s,{checked:y($).checked,"onUpdate:checked":a[0]||(a[0]=e=>y($).checked=e),class:"mr-8px"},{default:j((()=>[g(T(e.$t("Docker.Template.add.index_6")),1)])),_:1},8,["checked"])])),_:1},8,["value","placeholder"])]),v("div",R,[h(l,{type:"primary",onClick:q},{default:j((()=>[g(T(e.$t("Public.Btn.Search")),1)])),_:1})])]),h(p,{"checked-row-keys":y(B),"onUpdate:checkedRowKeys":[a[2]||(a[2]=e=>b(B)?B.value=e:null),K],"row-key":"project_name",loading:y(I),"loading-num":7,columns:y(G),data:y(E).data},null,8,["checked-row-keys","loading","columns","data"]),h(n,{class:"mt-20px"},{default:j((()=>[v("li",U,T(e.$t("Docker.Template.add.index_8",[y(B).length])),1)])),_:1})])}}}),z={class:"p-16px"},B=c({__name:"index",emits:["refresh"],setup(t,{expose:s,emit:r}){const o=r,{t:i}=u(),l=f(),p=f("normal"),n=[{key:"normal",label:i("Docker.Template.add.index_13"),isLazy:!0,data:{onRefresh:()=>{o("refresh")}},component:a},{key:"command",label:i("Docker.Template.add.index_14"),isLazy:!0,data:{onRefresh:()=>{o("refresh")}},component:$}];return s({onConfirm:async()=>{var e;await(null==(e=l.value)?void 0:e.onConfirm()),o("refresh")}}),(a,t)=>{const s=e;return k(),x("div",z,[h(s,{ref_key:"tabsRef",ref:l,value:y(p),"onUpdate:value":t[0]||(t[0]=e=>b(p)?p.value=e:null),options:n},null,8,["value"])])}}});export{B as default};
