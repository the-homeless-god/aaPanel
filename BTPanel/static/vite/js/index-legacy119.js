System.register(["./index-legacy77.js?v=1723125373998","./index-legacy73.js?v=1723125373998","./index-legacy105.js?v=1723125373998","./mail-legacy.js?v=1723125373998","./index-legacy.js?v=1723125373998","./vue-legacy.js?v=1723125373998","./Alert-legacy.js?v=1723125373998","./Tabs-legacy.js?v=1723125373998","./omit-legacy.js?v=1723125373998","./use-theme-vars-legacy.js?v=1723125373998","./pinia-legacy.js?v=1723125373998"],(function(e,t){"use strict";var a,l,s,c,n,i,r,o,u,d,f,v,p,m,y,h,_,b,x,w,g,S,j,C,k,P,B;return{setters:[e=>{a=e._},e=>{l=e._},e=>{s=e._},e=>{c=e.X,n=e.Y},e=>{i=e.n,r=e.h,o=e.G,u=e.B,d=e.a},e=>{f=e.l,v=e.r,p=e.k,m=e.S,y=e.Z,h=e.W,_=e.U,b=e.V,x=e._,w=e.a3,g=e.af,S=e.P,j=e.b,C=e.q,k=e.a5,P=e.a6},e=>{B=e._},null,null,null,null],execute:function(){var t=document.createElement("style");t.textContent=".n-alert[data-v-6c4a6ee7]{--n-color: #dff0d8;--n-border: 1px solid #d6e9c6;--n-font-size: 12px}.cert-info[data-v-6c4a6ee7]{color:#3c763d}.cert-info+.cert-info[data-v-6c4a6ee7]{margin-top:2px}.cert-info .cert-label[data-v-6c4a6ee7]{font-weight:700}.cert-info .cert-value[data-v-6c4a6ee7]{flex:1;width:0}\n",document.head.appendChild(t);const E=e=>(k("data-v-6c4a6ee7"),e=e(),P(),e),L={class:"cert-info"},T=E((()=>x("span",{class:"cert-label"},"Brand: ",-1))),U={class:"cert-value"},$={class:"cert-info"},W=E((()=>x("span",{class:"cert-label"},"Certified domain(s): ",-1))),z={class:"cert-value"},I={class:"w-48%"},K={class:"mb-8px"},M={class:"w-48%"},R={class:"mb-8px"},Y=E((()=>x("li",null,"Paste you KEY and CRT content, and then save it",-1))),q=E((()=>x("li",null," If the browser prompts that the certificate chain is incomplete, please check if the PEM certificate is correctly spliced correctly ",-1))),A=E((()=>x("li",null," PEM format certificate = domain name certificate .crt + root certificate (root_bundle).crt ",-1))),D=E((()=>x("li",null," When you do not specify a SSL default site, if you use HTTPS to access a site that does not have SSL enabled, you will directly access a site that has SSL enabled ",-1))),G=d(f({__name:"index",props:{row:{}},emits:["close","refresh"],setup(e,{emit:t}){const a=e,d=t,{row:f}=a,k=v(f.ssl_info.key),P=v(f.ssl_info.src),E=p((()=>(f.ssl_info.dns||[]).join(", "))),G=async()=>{""!==k.value&&""!==P.value?(await c({domain:f.domain,key:k.value,csr:P.value}),d("refresh"),d("close")):i.error("Certificate cannot be empty")},H=()=>{r({title:"Confirm delete",content:"Whether to delete the SSL certificate?",onConfirm:async()=>{await n({domain:f.domain,key:k.value,csr:P.value}),d("refresh"),d("close")}})};return(e,t)=>{const a=B,c=s,n=o,i=u,r=l;return m(),y("div",null,[h(f).ssl_status?(m(),_(a,{key:0,class:"mb-16px",type:"success","show-icon":!1},{default:b((()=>[x("div",L,[T,x("span",U,w(h(f).ssl_info.issuer),1)]),x("div",$,[W,x("span",z,w(h(E)),1)])])),_:1})):g("",!0),S(n,{class:"mb-16px",size:10,justify:"space-between"},{default:b((()=>[x("div",I,[x("div",K,w(e.$t("Site.Cert.PrivateKey")),1),S(c,{value:h(k),"onUpdate:value":t[0]||(t[0]=e=>j(k)?k.value=e:null),rows:10},null,8,["value"])]),x("div",M,[x("div",R,w(e.$t("Site.Cert.Certificate")),1),S(c,{value:h(P),"onUpdate:value":t[1]||(t[1]=e=>j(P)?P.value=e:null),rows:10},null,8,["value"])])])),_:1}),S(n,{class:"mb-12px"},{default:b((()=>[S(i,{type:"primary",onClick:G},{default:b((()=>[C(w(e.$t("Public.Btn.Save")),1)])),_:1}),S(i,{onClick:H},{default:b((()=>[C(w(e.$t("Public.Btn.Delete")),1)])),_:1})])),_:1}),S(r,null,{default:b((()=>[Y,q,A,D])),_:1})])}}}),[["__scopeId","data-v-6c4a6ee7"]]),H={class:"h-full p-16px"};e("default",f({__name:"index",props:{row:{}},emits:["close","refresh"],setup(e,{emit:t}){const l=e,s=t,{row:c}=l,n={row:c,onClose:()=>{s("close")},onRefresh:()=>{s("refresh")}},i=v("other"),r=[{key:"other",label:"Other certificate",component:G}];return(e,t)=>{const l=a;return m(),y("div",H,[S(l,{value:h(i),"onUpdate:value":t[0]||(t[0]=e=>j(i)?i.value=e:null),data:n,options:r},null,8,["value"])])}}}))}}}));
