System.register(["./index-legacy144.js?v=1723125373998","./index-legacy.js?v=1723125373998","./index.vue_vue_type_script_setup_true_lang-legacy15.js?v=1723125373998","./vue-legacy.js?v=1723125373998","./Tabs-legacy.js?v=1723125373998","./omit-legacy.js?v=1723125373998","./Ellipsis-legacy.js?v=1723125373998","./pinia-legacy.js?v=1723125373998","./index-legacy145.js?v=1723125373998","./Spin-legacy.js?v=1723125373998","./RadioButton-legacy.js?v=1723125373998","./DataTable-legacy.js?v=1723125373998","./Checkbox-legacy.js?v=1723125373998","./Select-legacy.js?v=1723125373998","./Tag-legacy.js?v=1723125373998","./Empty-legacy.js?v=1723125373998","./DatePicker-legacy.js?v=1723125373998","./useLoading-legacy.js?v=1723125373998","./index-legacy73.js?v=1723125373998","./index.vue_vue_type_script_setup_true_lang-legacy6.js?v=1723125373998","./InputGroupLabel-legacy.js?v=1723125373998","./InputGroup-legacy.js?v=1723125373998","./Switch-legacy.js?v=1723125373998"],(function(l,e){"use strict";var a,n,u,s,t,c,i,g,y,o,r,d,p,j,_,v,f,x;return{setters:[l=>{a=l._},l=>{n=l.n,u=l.ef,s=l.k},l=>{t=l._},l=>{c=l.l,i=l.ad,g=l.r,y=l.H,o=l.S,r=l.Z,d=l.P,p=l.W,j=l.b,_=l._,v=l.U,f=l.af,x=l.n},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){const e={class:"flex h-full"},k={class:"flex-1 p-16px"};l("default",c({__name:"index",props:{id:{default:""}},emits:["close"],setup(l,{emit:c}){const m=l,b=c,{t:S}=i(),h=g(m.id),C=y([]),D=g(),w=()=>{x((()=>{D.value?.getContent()}))};return(async()=>{const l=n.loading(S("Public.Api.Load",[S("Docker.Container.log.index_27")]));try{const{message:l}=await u();s(l)&&l.length>0?(C.value=l.map((l=>({key:l.id,label:l.name}))),h.value||(h.value=l[0].id)):(n.error(S("Docker.Container.log.index_28")),b("close"))}finally{l.close()}})(),(l,n)=>{const u=a;return o(),r("div",e,[d(u,{value:p(h),"onUpdate:value":[n[0]||(n[0]=l=>j(h)?h.value=l:null),w],class:"w-auto h-full","pane-padding":"0px",data:p(C),onClickSelf:w},null,8,["value","data"]),_("div",k,[p(h)?(o(),v(t,{key:0,ref_key:"logRef",ref:D,id:p(h)},null,8,["id"])):f("",!0)])])}}}))}}}));
