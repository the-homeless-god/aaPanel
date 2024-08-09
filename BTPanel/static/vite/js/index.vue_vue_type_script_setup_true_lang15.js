import{O as e,B as a,bb as l,G as t,U as i,e2 as s,cn as o,e as n,cG as u,g as r,e3 as p,j as _,h as d,e4 as v,p as c,q as f,e5 as m}from"./index.js?v=1723125373998";import{_ as g}from"./index145.js?v=1723125373998";import{l as h,ai as y,ad as x,r as k,k as w,S as b,U as C,V as D,P as z,W as $,b as j,Z as U,F as P,ag as M,q as S,a3 as R,d as T,f as E,af as G,_ as B}from"./vue.js?v=1723125373998";import{_ as L}from"./RadioButton.js?v=1723125373998";import{b as O,a as q}from"./DataTable.js?v=1723125373998";import{_ as I}from"./DatePicker.js?v=1723125373998";import{u as A}from"./useLoading.js?v=1723125373998";import{_ as F}from"./index73.js?v=1723125373998";import{_ as V,a as W}from"./index.vue_vue_type_script_setup_true_lang6.js?v=1723125373998";import{_ as Z}from"./InputGroupLabel.js?v=1723125373998";import{_ as H}from"./InputGroup.js?v=1723125373998";import{_ as J}from"./Switch.js?v=1723125373998";const K=h({__name:"index",props:{value:{default:()=>[]},valueModifiers:{}},emits:["update:value"],setup(i){const s=y(i,"value"),{t:o}=x(),n=k(null),u=k("all"),r=k(null),p=w((()=>""===u.value?"primary":"default")),_=w((()=>{if(""===u.value){const[a,l]=s.value;if(a!==l)return"".concat(e(a,"yyyy-MM-dd")," ~ ").concat(e(l,"yyyy-MM-dd"))}return"Custom Date"})),d=e=>e>Date.now(),v=[{label:o("Public.All"),value:"all"},{label:o("Public.Time.7Days"),value:"l7"},{label:o("Public.Time.30Days"),value:"l30"}],c=e=>{switch(r.value=null,e){case"all":s.value=[];break;case"l7":s.value=[Date.now()-6048e5,Date.now()];break;case"l30":s.value=[Date.now()-2592e6,Date.now()]}},f=e=>{var a;e&&e[0]!==e[1]&&(u.value="",s.value=e,null==(a=n.value)||a.setShow(!1))},m=e=>{e||r.value&&r.value[0]===r.value[1]&&(r.value=null)};return(e,i)=>{const s=L,o=O,g=a,h=I,y=l,x=t;return b(),C(x,{size:8},{default:D((()=>[z(o,{value:$(u),"onUpdate:value":[i[0]||(i[0]=e=>j(u)?u.value=e:null),c],class:"bt-radio"},{default:D((()=>[(b(),U(P,null,M(v,(e=>z(s,{key:e.value,value:e.value},{default:D((()=>[S(R(e.label),1)])),_:2},1032,["value"]))),64))])),_:1},8,["value"]),z(y,{ref_key:"popoverRef",ref:n,trigger:"click",placement:"bottom-end",style:{padding:0},"arrow-point-to-center":!0,"onUpdate:show":m},{trigger:D((()=>[z(g,{type:$(p)},{default:D((()=>[S(R($(_)),1)])),_:1},8,["type"])])),default:D((()=>[z(h,{value:$(r),"onUpdate:value":[i[1]||(i[1]=e=>j(r)?r.value=e:null),f],type:"daterange",panel:!0,actions:null,"is-date-disabled":d},null,8,["value"])])),_:1},512)])),_:1})}}}),N={class:"p-20px"},Q=B("div",{class:"mr-16px"},"/var/lib/docker/containers/history_logs",-1),X={key:0},Y={key:1},ee=h({__name:"config",props:{info:{}},emits:["refresh"],setup(e,{expose:a,emit:l}){const t=e,r=l,{t:p}=x(),_=T(t,"info"),d=k(null),v=E({split_type:"day",split_hour:2,split_minute:2,save:180,split_size:10}),c={split_size:{trigger:["input","blur"],validator:()=>!("size"===v.split_type&&v.split_size<0)||new Error(p("Docker.Container.log.index_23"))},split_day:{trigger:["input","blur"],validator:()=>{if("day"===v.split_type){if(v.split_hour>23||v.split_hour<0)return new Error(p("Docker.Container.log.index_24"));if(v.split_minute>59||v.split_minute<0)return new Error(p("Docker.Container.log.index_25"))}return!0}},save:{trigger:["input","blur"],validator:()=>!(v.save>1800||v.save<0)||new Error(p("Docker.Container.log.index_26"))}},f=()=>{i("Path","/var/lib/docker/containers/history_logs"),window.location.href=window.location.origin+"/files"};return v.split_type=_.value.split_type,v.split_size=_.value.split_size,v.split_hour=_.value.split_hour,v.split_minute=_.value.split_minute,v.save=o(_.value.save),a({onConfirm:async()=>{var e;await(null==(e=d.value)?void 0:e.validate()),await s({pid:_.value.id,type:"add",log_path:_.value.logs_path,split_type:v.split_type,split_size:v.split_size,split_hour:v.split_hour,split_minute:v.split_minute,save:"".concat(v.save)}),r("refresh")}}),(e,a)=>{const l=n,t=V,i=q,s=O,o=u,r=Z,p=H,_=W,m=F;return b(),U("div",N,[z(_,{ref_key:"formRef",ref:d,model:$(v),rules:c},{default:D((()=>[z(t,{label:e.$t("Docker.Container.log.index_8")},{default:D((()=>[Q,z(l,{onClick:f},{default:D((()=>[S(R(e.$t("Docker.Container.log.index_9")),1)])),_:1})])),_:1},8,["label"]),z(t,{label:e.$t("Docker.Container.log.index_10")},{default:D((()=>[z(s,{value:$(v).split_type,"onUpdate:value":a[0]||(a[0]=e=>$(v).split_type=e)},{default:D((()=>[z(i,{value:"size"},{default:D((()=>[S(R(e.$t("Docker.Container.log.index_11")),1)])),_:1}),z(i,{value:"day"},{default:D((()=>[S(R(e.$t("Docker.Container.log.index_12")),1)])),_:1})])),_:1},8,["value"])])),_:1},8,["label"]),"size"===$(v).split_type?(b(),C(t,{key:0,label:e.$t("Docker.Container.log.index_13"),path:"split_size"},{default:D((()=>[z(p,{class:"w-120px"},{default:D((()=>[z(o,{value:$(v).split_size,"onUpdate:value":a[1]||(a[1]=e=>$(v).split_size=e),min:0,"show-button":!1},null,8,["value"]),z(r,null,{default:D((()=>[S("MB")])),_:1})])),_:1})])),_:1},8,["label"])):G("",!0),"day"===$(v).split_type?(b(),C(t,{key:1,label:e.$t("Docker.Container.log.index_14"),path:"split_day"},{default:D((()=>[z(p,{class:"w-auto"},{default:D((()=>[z(r,null,{default:D((()=>[S(R(e.$t("Docker.Container.log.index_15")),1)])),_:1})])),_:1}),z(p,{class:"w-120px ml-12px"},{default:D((()=>[z(o,{value:$(v).split_hour,"onUpdate:value":a[2]||(a[2]=e=>$(v).split_hour=e),min:0,max:23,"show-button":!1},null,8,["value"]),z(r,null,{default:D((()=>[S(R(e.$t("Docker.Container.log.index_16")),1)])),_:1})])),_:1}),z(p,{class:"w-120px ml-12px"},{default:D((()=>[z(o,{value:$(v).split_minute,"onUpdate:value":a[3]||(a[3]=e=>$(v).split_minute=e),min:0,max:59,"show-button":!1},null,8,["value"]),z(r,null,{default:D((()=>[S(R(e.$t("Docker.Container.log.index_17")),1)])),_:1})])),_:1})])),_:1},8,["label"])):G("",!0),z(t,{label:e.$t("Docker.Container.log.index_18"),path:"save"},{default:D((()=>[z(p,{class:"w-120px"},{default:D((()=>[z(o,{value:$(v).save,"onUpdate:value":a[4]||(a[4]=e=>$(v).save=e),min:0,max:1800,"show-button":!1},null,8,["value"]),z(r,null,{default:D((()=>[S(R(e.$t("Docker.Container.log.index_19")),1)])),_:1})])),_:1})])),_:1},8,["label"])])),_:1},8,["model"]),z(m,{class:"mt-8px"},{default:D((()=>["size"===$(v).split_type?(b(),U("li",X,R(e.$t("Docker.Container.log.index_20")),1)):G("",!0),"day"===$(v).split_type?(b(),U("li",Y,R(e.$t("Docker.Container.log.index_21")),1)):G("",!0),B("li",null,R(e.$t("Docker.Container.log.index_22")),1)])),_:1})])}}}),ae={class:"ml-4px"},le={class:"mt-12px mb-16px"},te={class:"h-500px"},ie=h({__name:"index",props:{id:{default:""}},setup(e,{expose:l}){const i=T(e,"id"),{t:o}=x(),u=E({time_search:[]}),h=k({logs:o("Docker.Container.log.index_4"),split_status:!1,split_type:"",split_size:0,split_hour:0,split_minute:0,save:"",id:"",name:"",logs_path:"",size:0}),y=r(o("Docker.Container.log.index_5"),{info:h.value,onRefresh:()=>{P()}}),{loading:w,setLoading:C}=A();function j(e){return String(e).padStart(2,"0")}const P=async()=>{if(i.value)try{C(!0),h.value.logs="";const{message:e}=await p(0===u.time_search.length?{id:i.value}:{id:i.value,time_search:u.time_search.map((e=>Math.round(e/1e3)))});_(e)&&(h.value=e,h.value.logs=e.logs||o("Docker.Container.log.index_4"))}finally{C(!1)}},M=e=>{d({title:o("Docker.Container.log.index_6",[o(e?"Public.Status.TurnOn":"Public.Status.TurnOff")]),content:o(e?"Docker.Container.log.index_7.index_1":"Docker.Container.log.index_7.index_2"),onConfirm:async()=>{try{await s({pid:h.value.id,type:e?"add":"del",log_path:h.value.logs_path,split_type:h.value.split_type,split_size:h.value.split_size,split_hour:h.value.split_hour,split_minute:h.value.split_minute,save:h.value.save})}catch(a){h.value.split_status=!e}},onPublicClose:()=>{h.value.split_status=!e}})},G=()=>{y.data.info=h.value,y.show=!0},L=()=>{P()},O=()=>{const e=m();window.open("".concat(e,"/download?filename=").concat(h.value.logs_path))},q=async()=>{await v({log_path:h.value.logs_path}),P()},I=()=>{P()};return P(),l({getContent:P}),(e,l)=>{const i=J,s=n,o=t,r=c,p=a,_=K,d=g,v=f;return b(),U("div",null,[z(o,{class:"items-center"},{default:D((()=>[B("div",null,R(e.$t("Docker.Container.log.index_1")),1),z(i,{value:$(h).split_status,"onUpdate:value":[l[0]||(l[0]=e=>$(h).split_status=e),M]},null,8,["value"]),B("div",ae,[S(R(e.$t("Docker.Container.log.index_2",[j($(h).split_hour),j($(h).split_minute)]))+" ",1),z(s,{onClick:G},{default:D((()=>[S(R(e.$t("Docker.Container.log.index_3")),1)])),_:1})])])),_:1}),B("div",le,[z(r)]),z(o,{class:"mb-16px",justify:"space-between"},{default:D((()=>[z(o,{class:"items-center"},{default:D((()=>[z(p,{onClick:L},{default:D((()=>[S("Refresh")])),_:1}),z(r,{class:"mx-0!",vertical:""}),z(p,{onClick:O},{default:D((()=>[S("Download")])),_:1}),z(p,{onClick:q},{default:D((()=>[S("Clear")])),_:1})])),_:1}),z(_,{value:$(u).time_search,"onUpdate:value":[l[1]||(l[1]=e=>$(u).time_search=e),I]},null,8,["value"])])),_:1}),B("div",te,[z(d,{log:$(h).logs,loading:$(w)},null,8,["log","loading"])]),z(v,{show:$(y).show,"onUpdate:show":l[2]||(l[2]=e=>$(y).show=e),title:$(y).title,data:$(y).data,width:520,footer:!0,component:ee},null,8,["show","title","data"])])}}});export{ie as _};
