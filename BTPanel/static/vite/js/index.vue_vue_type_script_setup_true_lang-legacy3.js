System.register(["./vue-legacy.js?v=1723125373998","./index-legacy.js?v=1723125373998","./Checkbox-legacy.js?v=1723125373998","./Select-legacy.js?v=1723125373998"],(function(e,l){"use strict";var a,t,n,s,d,i,o,u,c,p,r,v,h,y,f,g,m,b,k,_,x,w,K,j,C;return{setters:[e=>{a=e.l,t=e.ah,n=e.ai,s=e.k,d=e.r,i=e.S,o=e.U,u=e.V,c=e._,p=e.P,r=e.W,v=e.b,h=e.Z,y=e.q,f=e.a3,g=e.F,m=e.af,b=e.B,k=e.M},e=>{_=e.z,x=e.br,w=e.B,K=e.G},e=>{j=e._},e=>{C=e._}],execute:function(){const l={class:"flex justify-center w-42px"},B={class:"min-w-140px"},P={class:"ml-8px"};e("_",a({__name:"index",props:t({data:{default:()=>[]},rowKey:{default:"id"},options:{default:()=>[]}},{checkedRowKeys:{default:()=>[]},checkedRowKeysModifiers:{}}),emits:["update:checkedRowKeys"],setup(e){const a=e,t=n(e,"checkedRowKeys"),{rowKey:R}=a,S=_(R)?e=>e[R]:R,U=s({get:()=>t.value.length>0&&t.value.length===a.data.length,set(e){t.value=e?a.data.map((e=>S(e))):[]}}),z=s((()=>0===a.data.length)),M=s((()=>t.value.length>0&&t.value.length<a.data.length)),$=d(null),q=s((()=>a.options.map((e=>({label:e.label,value:e.key}))))),F=s((()=>0===t.value.length)),G=s((()=>F.value||null===$.value)),V=s((()=>a.data.filter((e=>t.value.includes(S(e)))))),W=()=>{const{options:e}=a;for(let l of e)l.key===$.value&&("confirm"===l.type?x({...l.confirm,data:V.value}):l.onBatch?.(V.value))},Z=()=>{const{options:e}=a,l=e[0];"confirm"===l.type?x({...l.confirm,data:V.value}):l.onBatch?.(V.value)};return(e,a)=>{const n=j,s=C,d=w,_=K;return i(),o(_,{class:"items-center",size:0},{default:u((()=>[c("div",l,[p(n,{checked:r(U),"onUpdate:checked":a[0]||(a[0]=e=>v(U)?U.value=e:null),disabled:r(z),indeterminate:r(M)},null,8,["checked","disabled","indeterminate"])]),e.options.length>1?(i(),h(g,{key:0},[c("div",B,[p(s,{value:r($),"onUpdate:value":a[1]||(a[1]=e=>v($)?$.value=e:null),options:r(q),disabled:r(F),placeholder:"Please choose"},null,8,["value","options","disabled"])]),c("div",P,[p(d,{type:r(G)?"default":"primary",disabled:r(G),onClick:W},{default:u((()=>[y(f(e.$t("Public.Components.index_2")),1)])),_:1},8,["type","disabled"])])],64)):m("",!0),1===e.options.length?(i(),o(d,{key:1,disabled:r(F),type:r(F)?"default":"primary",onClick:Z},{default:u((()=>[c("span",null,f(e.options[0].label),1),b(c("span",null," ("+f(e.$t("Public.Components.index_3"))+" "+f(t.value.length)+") ",513),[[k,t.value.length>0]])])),_:1},8,["disabled","type"])):m("",!0)])),_:1})}}}))}}}));
