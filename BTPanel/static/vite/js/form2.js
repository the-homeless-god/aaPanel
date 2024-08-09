import{_ as e}from"./index73.js?v=1723125373998";import{_ as r,a as l}from"./index.vue_vue_type_script_setup_true_lang6.js?v=1723125373998";import{_ as t}from"./index105.js?v=1723125373998";import{l as a,ad as o,r as i,f as s,S as p,Z as u,P as d,V as n,_ as m,W as c,B as _,M as f,a3 as v}from"./vue.js?v=1723125373998";import{e as w,a as y}from"./index44.js?v=1723125373998";import{_ as b}from"./Select.js?v=1723125373998";import{ae as h}from"./index.js?v=1723125373998";import"./use-theme-vars.js?v=1723125373998";import"./index70.js?v=1723125373998";import"./index77.js?v=1723125373998";import"./Tabs.js?v=1723125373998";import"./omit.js?v=1723125373998";import"./index.vue_vue_type_script_setup_true_lang.js?v=1723125373998";import"./index.vue_vue_type_script_setup_true_lang5.js?v=1723125373998";import"./useTableData.js?v=1723125373998";import"./data.js?v=1723125373998";import"./Skeleton.js?v=1723125373998";import"./DataTable.js?v=1723125373998";import"./Checkbox.js?v=1723125373998";import"./Ellipsis.js?v=1723125373998";import"./Empty.js?v=1723125373998";import"./index.vue_vue_type_script_setup_true_lang3.js?v=1723125373998";import"./index.vue_vue_type_script_setup_true_lang4.js?v=1723125373998";import"./useTableColumns.js?v=1723125373998";import"./Progress.js?v=1723125373998";import"./Switch.js?v=1723125373998";import"./file2.js?v=1723125373998";import"./Upload2.js?v=1723125373998";import"./Image.js?v=1723125373998";import"./_createCompounder.js?v=1723125373998";import"./RadioButton.js?v=1723125373998";import"./index.vue_vue_type_script_setup_true_lang2.js?v=1723125373998";import"./Tag.js?v=1723125373998";import"./pinia.js?v=1723125373998";const P={class:"p-20px"},j={class:"w-240px"},S={class:"w-240px"},x={class:"w-240px"},F={class:"w-240px"},g={class:"w-240px"},U={class:"w-240px"},$={class:"w-240px"},T={class:"w-240px"},E=a({__name:"form",props:{row:{},isEdit:{type:Boolean,default:!1}},emits:["refresh"],setup(a,{expose:E,emit:C}){const I=a,k=C,{t:D}=o(),{isEdit:A,row:B}=I,N=i(null),O=s({protocol:"tcp",port:"",choose:"all",address:"",domain:"",types:"accept",chain:"INPUT",brief:""}),R={port:{trigger:["blur","input"],validator:()=>{const e=O.port.split(","),r=/^\d+$/;for(let l of e)if(r.test(l)){const e=parseInt(l,10);if(e<1||e>65535)return new Error(D("Security.Firewall.Port.form_15"))}else{if(!l.includes("-"))return""==l?new Error(D("Security.Firewall.Port.form_16")):new Error(D("Security.Firewall.Port.form_15"));{const e=l.split("-"),r=parseInt(e[0],10),t=parseInt(e[1],10);if(r<1||t>65535||r>t)return new Error(D("Security.Firewall.Port.form_15"))}}return!0}},address:{trigger:["blur","input"],validator:()=>!!("point"!==O.choose||""!==O.address.trim()&&O.address)||new Error(D("Security.Firewall.Port.form_18"))},domain:{trigger:["blur","input"],validator:()=>!!("domain"!==O.choose||""!==O.domain.trim()&&O.domain)||new Error(D("Security.Firewall.Port.form_19"))}},M=[{label:"TCP",value:"tcp"},{label:"UDP",value:"udp"},{label:"TCP/UDP",value:"all"}],V=[{label:D("Security.Firewall.Port.form_20"),value:"all"},{label:D("Security.Firewall.Port.form_5"),value:"point"}],W=[{label:D("Security.Firewall.Port.form_21"),value:"accept"},{label:D("Security.Firewall.Port.form_22"),value:"drop"}],Z=[{label:D("Security.Firewall.Port.form_23"),value:"INPUT"},{label:D("Security.Firewall.Port.form_24"),value:"OUTPUT"}];return A&&B&&(O.protocol=B.Protocol,O.port=B.Port,O.choose="all"===B.Address?"all":""===B.domain?"point":"domain",O.address="all"===B.Address?"":B.Address,O.domain=B.domain,O.types=B.Strategy,O.chain=B.Chain,O.brief=B.brief),E({onConfirm:async()=>{var e;await(null==(e=N.value)?void 0:e.validate());const r=(()=>{let e={protocol:O.protocol,port:O.port,choose:O.choose,domain:"domain"===O.choose?O.domain:"",types:O.types,strategy:O.types,chain:O.chain,brief:O.brief};return"point"===e.choose&&(e=Object.assign(e,{address:O.address})),e})();A&&B?await w({new_data:r,old_data:B}):await y(r),k("refresh")}}),(a,o)=>{const i=b,s=r,w=h,y=t,E=l,C=e;return p(),u("div",P,[d(E,{ref_key:"formRef",ref:N,model:c(O),rules:R},{default:n((()=>[d(s,{label:a.$t("Security.Firewall.Port.form_1"),path:"protocol"},{default:n((()=>[m("div",j,[d(i,{value:c(O).protocol,"onUpdate:value":o[0]||(o[0]=e=>c(O).protocol=e),options:M},null,8,["value"])])])),_:1},8,["label"]),d(s,{label:a.$t("Security.Firewall.Port.form_2"),path:"port"},{default:n((()=>[m("div",S,[d(w,{value:c(O).port,"onUpdate:value":o[1]||(o[1]=e=>c(O).port=e),disabled:c(A),placeholder:a.$t("Security.Firewall.Port.form_3")},null,8,["value","disabled","placeholder"])])])),_:1},8,["label"]),d(s,{label:a.$t("Security.Firewall.Port.form_4"),path:"choose"},{default:n((()=>[m("div",x,[d(i,{value:c(O).choose,"onUpdate:value":o[2]||(o[2]=e=>c(O).choose=e),options:V},null,8,["value"])])])),_:1},8,["label"]),_(d(s,{label:a.$t("Security.Firewall.Port.form_5"),path:"address"},{default:n((()=>[m("div",F,[d(y,{value:c(O).address,"onUpdate:value":o[3]||(o[3]=e=>c(O).address=e),rows:3,placeholder:a.$t("Security.Firewall.Port.form_6")},null,8,["value","placeholder"])])])),_:1},8,["label"]),[[f,"point"===c(O).choose]]),_(d(s,{label:a.$t("Security.Firewall.Port.form_7"),path:"domain"},{default:n((()=>[m("div",g,[d(y,{value:c(O).domain,"onUpdate:value":o[4]||(o[4]=e=>c(O).domain=e),rows:3,placeholder:a.$t("Security.Firewall.Port.form_8")},null,8,["value","placeholder"])])])),_:1},8,["label"]),[[f,"domain"===c(O).choose]]),d(s,{label:a.$t("Security.Firewall.Port.form_9"),path:"types"},{default:n((()=>[m("div",U,[d(i,{value:c(O).types,"onUpdate:value":o[5]||(o[5]=e=>c(O).types=e),options:W},null,8,["value"])])])),_:1},8,["label"]),d(s,{label:a.$t("Security.Firewall.Port.form_10"),path:"types"},{default:n((()=>[m("div",$,[d(i,{value:c(O).chain,"onUpdate:value":o[6]||(o[6]=e=>c(O).chain=e),options:Z},null,8,["value"])])])),_:1},8,["label"]),d(s,{label:a.$t("Security.Firewall.Port.form_11"),path:"brief","show-feedback":!1},{default:n((()=>[m("div",T,[d(w,{value:c(O).brief,"onUpdate:value":o[7]||(o[7]=e=>c(O).brief=e),placeholder:a.$t("Security.Firewall.Port.form_12")},null,8,["value","placeholder"])])])),_:1},8,["label"])])),_:1},8,["model"]),d(C,{class:"mt-20px ml-40px"},{default:n((()=>[m("li",null,v(a.$t("Security.Firewall.Port.form_13")),1),m("li",null,v(a.$t("Security.Firewall.Port.form_14")),1)])),_:1})])}}});export{E as default};
