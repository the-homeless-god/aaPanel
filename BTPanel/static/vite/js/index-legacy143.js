System.register(["./index-legacy73.js?v=1723125373998","./index.vue_vue_type_script_setup_true_lang-legacy6.js?v=1723125373998","./index.vue_vue_type_script_setup_true_lang-legacy13.js?v=1723125373998","./index-legacy105.js?v=1723125373998","./check-legacy.js?v=1723125373998","./site-legacy.js?v=1723125373998","./vue-legacy.js?v=1723125373998","./Select-legacy.js?v=1723125373998","./index-legacy.js?v=1723125373998","./index.vue_vue_type_script_setup_true_lang-legacy8.js?v=1723125373998","./InputGroupLabel-legacy.js?v=1723125373998","./InputGroup-legacy.js?v=1723125373998","./use-theme-vars-legacy.js?v=1723125373998","./Tag-legacy.js?v=1723125373998","./Empty-legacy.js?v=1723125373998","./pinia-legacy.js?v=1723125373998"],(function(e,t){"use strict";var l,r,a,s,i,n,u,o,d,p,_,x,y,c,h,g,v,m,P,f,S,$,b,j,k;return{setters:[e=>{l=e._},e=>{r=e._,a=e.a},e=>{s=e._},e=>{i=e._},e=>{n=e.b},e=>{u=e.bd},e=>{o=e.l,d=e.ad,p=e.r,_=e.f,x=e.x,y=e.S,c=e.Z,h=e.P,g=e.V,v=e._,m=e.W,P=e.a3,f=e.U,S=e.q},e=>{$=e._},e=>{b=e.ae,j=e.G,k=e.bt},null,null,null,null,null,null,null],execute:function(){const t={class:"m-15px"},w={class:"w-440px"},H={class:"list-none!"},U={class:"list-none!"},q={class:"list-none!"};e("default",o({__name:"index",emits:["refresh"],setup(e,{expose:o,emit:E}){const{t:G}=d(),I=E,C=()=>{"2"===T.proxy_type?T.proxy_host="$http_host":T.proxy_host=""},L=e=>{if("2"===T.proxy_type)return void(T.proxy_host="$http_host");let t=e.replace(/^http[s]?:\/\//,"");t=t.replace(/(:|\?|\/|\\)(.*)$/,""),T.proxy_host=t},N=p(null),R=[{label:G("Site.Proxy.index_11"),value:"1"},{label:G("Site.Proxy.index_12"),value:"2"}],T=_({domains:"",proxy_type:"1",url:"http://",unx:"",proxy_host:"$http_host",remark:""}),V={domains:{required:!0,trigger:["blur","change"],validator:(e,t)=>{if(""===t.trim())return new Error(G("Site.PHP.add_site_23"));const l=t.trim().split("\n")[0].split(":")[1];return!(l&&(!n(l)||Number(l)<100))||new Error(G("Site.Proxy.index_13"))}},url:{required:!0,trigger:["blur","change"],validator:(e,t)=>{if(!t.replace(/^http[s]?:\/\//,""))return new Error(G("Site.Proxy.index_14"));let l=t.replace(/^http[s]?:\/\//,"");return l=l.replace(/(:|\?|\/|\\)(.*)$/,""),/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/.test(l)?T.proxy_host="$http_host":T.proxy_host=l,!0}},unx:{required:!0,message:G("Site.PHP.add_site_26"),trigger:["blur","change"]},proxy_host:{required:!0,message:G("Site.PHP.add_site_26"),trigger:["blur","change"]}},W=e=>{const t=e.trim().split("\n")[0].split(":")[0];t&&(T.remark=t)};return x((()=>{})),o({onConfirm:async()=>{await(N.value?.validate());let e={remark:T.remark,proxy_type:"1"==T.proxy_type,proxy_pass:"1"==T.proxy_type?T.url:T.unx,domains:T.domains,proxy_host:T.proxy_host};await u(e),I("refresh")}}),(e,n)=>{const u=i,o=r,d=$,p=b,_=s,x=j,E=k,G=a,I=l;return y(),c("div",t,[h(G,{ref_key:"formRef",ref:N,model:m(T),rules:V},{default:g((()=>[h(o,{label:e.$t("Site.PHP.add_site_4"),path:"domains"},{default:g((()=>[v("div",w,[h(u,{value:m(T).domains,"onUpdate:value":[n[0]||(n[0]=e=>m(T).domains=e),W]},{default:g((()=>[v("p",null,P(e.$t("Site.PHP.add_site_5")),1),v("p",null,P(e.$t("Site.PHP.add_site_6")),1),v("p",null,P(e.$t("Site.PHP.add_site_7")),1)])),_:1},8,["value"])])])),_:1},8,["label"]),h(x,null,{default:g((()=>[h(o,{label:e.$t("Site.Proxy.index_1")},{default:g((()=>[h(d,{value:m(T).proxy_type,"onUpdate:value":[n[1]||(n[1]=e=>m(T).proxy_type=e),C],options:R,class:"w-120px"},null,8,["value"])])),_:1},8,["label"]),"1"==m(T).proxy_type?(y(),f(o,{key:0,path:"url",class:"w-310px"},{default:g((()=>[h(p,{value:m(T).url,"onUpdate:value":n[2]||(n[2]=e=>m(T).url=e),onInput:L},null,8,["value"])])),_:1})):(y(),f(o,{key:1,path:"unx",class:"w-310px"},{default:g((()=>[h(_,{"checked-type":["dir","file"],value:m(T).unx,"onUpdate:value":n[3]||(n[3]=e=>m(T).unx=e),onChange:L},null,8,["value"])])),_:1}))])),_:1}),h(o,{label:e.$t("Site.Proxy.index_2"),path:"proxy_host",class:"w-570px"},{default:g((()=>[h(E,{trigger:"hover"},{trigger:g((()=>[h(p,{value:m(T).proxy_host,"onUpdate:value":n[4]||(n[4]=e=>m(T).proxy_host=e)},null,8,["value"])])),default:g((()=>[S(" "+P(e.$t("Site.Proxy.index_4")),1)])),_:1})])),_:1},8,["label"]),h(o,{label:e.$t("Site.Proxy.index_3"),class:"w-570px"},{default:g((()=>[h(p,{value:m(T).remark,"onUpdate:value":n[5]||(n[5]=e=>m(T).remark=e),placeholder:e.$t("Site.Proxy.index_5")},null,8,["value","placeholder"])])),_:1},8,["label"])])),_:1},8,["model"]),h(I,{class:"mt-16px"},{default:g((()=>[v("li",null,P(e.$t("Site.Proxy.index_6")),1),v("li",null,P(e.$t("Site.Proxy.index_7")),1),v("li",H,P(e.$t("Site.Proxy.index_8")),1),v("li",U,P(e.$t("Site.Proxy.index_9")),1),v("li",q,P(e.$t("Site.Proxy.index_10")),1)])),_:1})])}}}))}}}));
