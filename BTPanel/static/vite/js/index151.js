import{_ as e,a}from"./index.vue_vue_type_script_setup_true_lang6.js?v=1723125373998";import{d0 as t,cz as s,ae as l,_ as o,bb as i}from"./index.js?v=1723125373998";import{s as n}from"./pinia.js?v=1723125373998";import{e as r}from"./index59.js?v=1723125373998";import{l as u,ad as p,r as m,f as _,S as d,Z as c,P as v,V as j,q as x,a3 as f,W as h,U as b,_ as w,af as g}from"./vue.js?v=1723125373998";import{a as P,b as D}from"./DataTable.js?v=1723125373998";import{_ as y}from"./InputGroupLabel.js?v=1723125373998";import{_ as W}from"./InputGroup.js?v=1723125373998";import{_ as k}from"./Switch.js?v=1723125373998";import"./index70.js?v=1723125373998";import"./index.vue_vue_type_script_setup_true_lang.js?v=1723125373998";import"./index.vue_vue_type_script_setup_true_lang5.js?v=1723125373998";import"./index.vue_vue_type_script_setup_true_lang2.js?v=1723125373998";import"./index.vue_vue_type_script_setup_true_lang3.js?v=1723125373998";import"./Checkbox.js?v=1723125373998";import"./Select.js?v=1723125373998";import"./Tag.js?v=1723125373998";import"./Empty.js?v=1723125373998";import"./useTableData.js?v=1723125373998";import"./data.js?v=1723125373998";import"./Skeleton.js?v=1723125373998";import"./index.vue_vue_type_script_setup_true_lang4.js?v=1723125373998";import"./site2.js?v=1723125373998";import"./useLoading.js?v=1723125373998";import"./useTableColumns.js?v=1723125373998";import"./Progress.js?v=1723125373998";import"./Ellipsis.js?v=1723125373998";import"./site.js?v=1723125373998";import"./index144.js?v=1723125373998";import"./Tabs.js?v=1723125373998";import"./omit.js?v=1723125373998";import"./index105.js?v=1723125373998";import"./use-theme-vars.js?v=1723125373998";import"./index77.js?v=1723125373998";import"./index.vue_vue_type_script_setup_true_lang13.js?v=1723125373998";import"./index.vue_vue_type_script_setup_true_lang8.js?v=1723125373998";import"./index73.js?v=1723125373998";import"./index.vue_vue_type_script_setup_true_lang12.js?v=1723125373998";import"./file2.js?v=1723125373998";import"./Spin.js?v=1723125373998";import"./refersh.js?v=1723125373998";import"./php.js?v=1723125373998";import"./Space.js?v=1723125373998";import"./Alert.js?v=1723125373998";import"./index145.js?v=1723125373998";import"./Image.js?v=1723125373998";import"./_createCompounder.js?v=1723125373998";const $={class:"p-20px"},U={class:"w-100px"},S={class:"w-120px"},T={class:"w-120px"},C=u({__name:"index",props:{row:{}},setup(u,{expose:C}){const E=u,{t:z}=p(),{row:I}=E,G=t(),{web:L}=n(G),R=s(8,"letter"),q=m(null),A=_({method:1,subDomain:R,subPath:"",newDomain:"",newPath:"",cache_status:I.cache_status}),V={subDomain:{trigger:["blur","input"],validator:()=>1!==A.method||""!==A.subDomain||new Error(z("WP.clone.index_6"))},newDomain:{trigger:["blur","input"],validator:()=>2!==A.method||""!==A.newDomain||new Error(z("WP.clone.index_7"))}};return C({onConfirm:async()=>{var e;await(null==(e=q.value)?void 0:e.validate()),await r({domain:1===A.method?"".concat(A.subDomain,".").concat(I.name):A.newDomain,s_id:I.id,sub_path:1===A.method?A.subPath:A.newPath,enable_cache:A.cache_status?1:0}),G.setRefresh(!0)}}),(t,s)=>{const n=e,r=P,u=l,p=y,m=W,_=o,C=i,E=D,z=k,G=a;return d(),c("div",$,[v(G,{ref_key:"formRef",ref:q,model:h(A),rules:V},{default:j((()=>[v(n,{label:t.$t("WP.clone.index_1")},{default:j((()=>[x(f(h(I).name),1)])),_:1},8,["label"]),v(n,{label:t.$t("WP.clone.index_2")},{default:j((()=>[v(E,{value:h(A).method,"onUpdate:value":s[4]||(s[4]=e=>h(A).method=e)},{default:j((()=>[v(n,{"show-feedback":!1},{default:j((()=>[v(r,{value:1},{default:j((()=>[x(f(t.$t("WP.clone.index_3")),1)])),_:1})])),_:1}),1===h(A).method?(d(),b(n,{key:0,class:"mt-8px",path:"subDomain"},{default:j((()=>[v(m,{class:"w-auto"},{default:j((()=>[w("div",U,[v(u,{value:h(A).subDomain,"onUpdate:value":s[0]||(s[0]=e=>h(A).subDomain=e),placeholder:""},null,8,["value"])]),v(p,{class:"max-w-160px truncate",title:h(I).name},{default:j((()=>[x(" ."+f(h(I).name),1)])),_:1},8,["title"])])),_:1}),v(m,{class:"w-auto ml-12px mr-8px"},{default:j((()=>[v(p,null,{default:j((()=>[x("/")])),_:1}),w("div",S,[v(u,{value:h(A).subPath,"onUpdate:value":s[1]||(s[1]=e=>h(A).subPath=e),placeholder:t.$t("WP.clone.index_8")},null,8,["value","placeholder"])])])),_:1}),v(C,null,{trigger:j((()=>[v(_,{name:"common-ask",size:"18",color:"#999"})])),default:j((()=>[w("div",null,f(t.$t("WP.clone.index_9")),1)])),_:1})])),_:1})):g("",!0),v(n,{"show-feedback":!1},{default:j((()=>[v(r,{value:2},{default:j((()=>[x(f(t.$t("WP.clone.index_4")),1)])),_:1})])),_:1}),2===h(A).method?(d(),b(n,{key:1,class:"mt-8px",path:"newDomain"},{default:j((()=>[v(m,{class:"w-220px"},{default:j((()=>[v(u,{value:h(A).newDomain,"onUpdate:value":s[2]||(s[2]=e=>h(A).newDomain=e),placeholder:t.$t("WP.clone.index_5")},null,8,["value","placeholder"])])),_:1}),v(m,{class:"w-auto ml-12px mr-8px"},{default:j((()=>[v(p,null,{default:j((()=>[x("/")])),_:1}),w("div",T,[v(u,{value:h(A).newPath,"onUpdate:value":s[3]||(s[3]=e=>h(A).newPath=e),placeholder:t.$t("WP.clone.index_8")},null,8,["value","placeholder"])])])),_:1}),v(C,null,{trigger:j((()=>[v(_,{name:"common-ask",size:"18",color:"#999"})])),default:j((()=>[w("div",null,f(t.$t("WP.clone.index_9")),1)])),_:1})])),_:1})):g("",!0)])),_:1},8,["value"])])),_:1},8,["label"]),v(n,{label:t.$t("WP.clone.index_10"),"show-feedback":!1},{default:j((()=>[v(z,{value:h(A).cache_status,"onUpdate:value":s[5]||(s[5]=e=>h(A).cache_status=e),disabled:"nginx"!==h(L).type},null,8,["value","disabled"])])),_:1},8,["label"])])),_:1},8,["model"])])}}});export{C as default};
