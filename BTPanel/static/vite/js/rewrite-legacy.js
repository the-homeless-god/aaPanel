System.register(["./index-legacy73.js?v=1723125373998","./index-legacy.js?v=1723125373998","./file-legacy2.js?v=1723125373998","./index.vue_vue_type_script_setup_true_lang-legacy12.js?v=1723125373998","./uniq-legacy.js?v=1723125373998","./vue-legacy.js?v=1723125373998","./Select-legacy.js?v=1723125373998","./pinia-legacy.js?v=1723125373998","./useLoading-legacy.js?v=1723125373998","./Spin-legacy.js?v=1723125373998","./_baseUniq-legacy.js?v=1723125373998","./_baseFindIndex-legacy.js?v=1723125373998","./Tag-legacy.js?v=1723125373998","./Empty-legacy.js?v=1723125373998"],(function(e,l){"use strict";var t,a,n,s,u,i,r,c,o,p,f,d,v,g,y,_,m,j,w,h,x,b;return{setters:[e=>{t=e._},e=>{a=e.cV,n=e.j,s=e.n,u=e.e,i=e.G,r=e.B,c=e.k},e=>{o=e.s},e=>{p=e._},e=>{f=e.u},e=>{d=e.l,v=e.r,g=e.S,y=e.Z,_=e.P,m=e.V,j=e._,w=e.W,h=e.b,x=e.q},e=>{b=e._},null,null,null,null,null,null,null],execute:function(){const l={class:"p-20px"},C={class:"w-160px"},S=j("span",null,"Rewrite rule converter: ",-1),k=j("li",null,"Please select your application.",-1),U=j("li",null," If the site cannot be accessed after the rewrite rules set, please try to reset to default. ",-1),q=j("li",null,"You are able to modify rewrite rules, just save it after modification.",-1);e("default",d({__name:"rewrite",props:{fileContent:{default:""},filename:{default:""},rlist:{default:()=>[]}},emits:["close"],setup(e,{emit:d}){const I=e,P=d,{filename:R,rlist:T,fileContent:V}=I,$=a(),A=v(null),B=v(null),E=v([]),F=v(""),G=v(V),L=e=>{if("0.default"===e||"0.Current"===e)return R;{const{webserver:e}=$;return`/www/server/panel/rewrite/${"openlitespeed"===e?"apache":e}/${B.value}.conf`}},N=async()=>{const{message:e}=await o({path:R,data:G.value,encoding:"utf-8"});n(e)&&s.success(e.msg),P("close")},W=e=>{F.value=L(e),A.value?.getContent()};return(()=>{const e=c(T)?T:[];E.value=f(e).map((e=>({label:e,value:e}))),e.length&&(B.value=e[0],F.value=L(e[0]))})(),(e,a)=>{const n=b,s=u,c=i,o=r,f=t;return g(),y("div",l,[_(c,{class:"items-center mb-12px"},{default:m((()=>[j("div",C,[_(n,{value:w(B),"onUpdate:value":[a[0]||(a[0]=e=>h(B)?B.value=e:null),W],options:w(E)},null,8,["value","options"])]),j("div",null,[S,_(s,{href:"https://www.bt.cn/Tools",target:"_blank"},{default:m((()=>[x("Apache to Nginx")])),_:1})])])),_:1}),_(p,{ref_key:"configRef",ref:A,path:w(F),"onUpdate:path":a[1]||(a[1]=e=>h(F)?F.value=e:null),value:w(G),"onUpdate:value":a[2]||(a[2]=e=>h(G)?G.value=e:null),height:350,"show-tips":!1},null,8,["path","value"]),_(c,{class:"items-center mt-12px"},{default:m((()=>[_(o,{type:"primary",onClick:N},{default:m((()=>[x("Save")])),_:1})])),_:1}),_(f,{class:"mt-24px"},{default:m((()=>[k,U,q])),_:1})])}}}))}}}));
