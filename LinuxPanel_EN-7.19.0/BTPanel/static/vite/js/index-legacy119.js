System.register(["./page_layout-legacy.js?v=1732601582185","./public-legacy.js?v=1732601582185","./php-legacy.js?v=1732601582185","./naive-legacy.js?v=1732601582185","./vue-legacy.js?v=1732601582185"],(function(t,e){"use strict";var a,s,o,n,r,l,c,u,i,d,p,f,b,m,g,v,_,y,S,x,h,C,$,P,k,j,w,R;return{setters:[t=>{a=t.b4,s=t.f,o=t.Y,n=t._,r=t.j,l=t.n,c=t.k},t=>{u=t.b,i=t.a,d=t.v},t=>{p=t.g,f=t.s},t=>{b=t.aa,m=t.bh,g=t.bm},t=>{v=t.d,_=t.W,y=t.r,S=t.e,x=t.O,h=t.X,C=t.Y,$=t.R,P=t.M,k=t.Q,j=t.Z,w=t.ad,R=t.c}],execute:function(){var e=document.createElement("style");e.textContent=".soft-btn.n-button--error-type[data-v-37200fbc]{--n-color: rgba(239, 8, 8, .14);--n-color-hover: rgba(239, 8, 8, .14);--n-color-focus: rgba(239, 8, 8, .14);--n-color-pressed: rgba(239, 8, 8, .14);--n-border: 1px solid rgba(239, 8, 8, .19);--n-border-hover: 1px solid rgba(239, 8, 8, .19);--n-border-pressed: 1px solid rgba(239, 8, 8, .19);--n-border-focus: 1px solid rgba(239, 8, 8, .19);--n-text-color: #666;--n-text-color-pressed: #666;--n-text-color-focus: #666;--n-text-color-hover: #ef0808}\n",document.head.appendChild(e);const N={class:"m-2px"};t("_",c(v({__name:"index",props:{softName:{default:""},openSoft:{default:""}},setup(t){const e=t,{t:c}=_(),v=y({status:!0,s_status:!0,msg:"",version:"0",name:"",title:"",admin:!1,s_version:""}),z=S((()=>a(v.value.name)+" "+v.value.version)),{loading:L,setLoading:Y}=u(),E=async()=>{try{Y(!0);const{message:t}=await p({name:e.softName});s(t)&&(v.value=t)}finally{Y(!1)}},I=(t,e)=>{const s=`${e} ${z.value}`,o=c("Component.SoftState.index_1",[e.toLowerCase(),a(v.value.name)]);i({title:s,content:o,onConfirm:async()=>{await f({name:v.value.s_version,type:t}),E()}})},M=()=>{d({name:e.openSoft?e.openSoft:e.softName,title:z.value,admin:!1})};return E(),(t,e)=>{const a=o,s=n,u=b,i=r,d=l,p=m,f=g;return x(),h(f,{trigger:"hover"},{trigger:C((()=>[$(L)?(x(),h(a,{key:0,width:120,height:32,sharp:!1})):(x(),h(u,{key:1,class:"min-w-120px soft-btn",type:$(v).s_status?"default":"error",onClick:M},{default:C((()=>[P(s,{name:`soft-${t.softName}`,size:"20"},null,8,["name"]),k("span",N,j($(z)),1),k("span",{class:w(["iconfont","icon-"+($(v).s_status?"start":"stop")])},null,2)])),_:1},8,["type"]))])),default:C((()=>[P(p,{class:"items-center",size:8},{default:C((()=>[P(i,{onClick:e[0]||(e[0]=e=>I($(v).s_status?"stop":"start",$(v).s_status?t.$t("Public.Status.Stop"):t.$t("Public.Status.Start")))},{default:C((()=>[R(j($(v).s_status?t.$t("Public.Status.Stop"):t.$t("Public.Status.Start")),1)])),_:1}),P(d,{class:"mx-0!",vertical:""}),P(i,{onClick:e[1]||(e[1]=t=>I("restart",$(c)("Public.Status.Restart")))},{default:C((()=>[R(j(t.$t("Public.Status.Restart")),1)])),_:1}),P(d,{class:"mx-0!",vertical:""}),P(i,{onClick:e[2]||(e[2]=t=>I("reload",$(c)("Public.Status.Reload")))},{default:C((()=>[R(j(t.$t("Public.Status.Reload")),1)])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-37200fbc"]]))}}}));