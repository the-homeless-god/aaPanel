System.register(["./index-legacy.js?v=1723125373998","./index-legacy27.js?v=1723125373998","./vue-legacy.js?v=1723125373998","./Select-legacy.js?v=1723125373998","./Checkbox-legacy.js?v=1723125373998","./DataTable-legacy.js?v=1723125373998","./Alert-legacy.js?v=1723125373998","./pinia-legacy.js?v=1723125373998","./useLoop-legacy.js?v=1723125373998","./index.vue_vue_type_script_setup_true_lang-legacy5.js?v=1723125373998","./index-legacy63.js?v=1723125373998","./Tag-legacy.js?v=1723125373998","./Countdown-legacy.js?v=1723125373998","./use-theme-vars-legacy.js?v=1723125373998","./Progress-legacy.js?v=1723125373998","./useTableData-legacy.js?v=1723125373998","./data-legacy.js?v=1723125373998","./Skeleton-legacy.js?v=1723125373998","./useLoading-legacy.js?v=1723125373998","./useTableColumns-legacy.js?v=1723125373998","./Switch-legacy.js?v=1723125373998","./Ellipsis-legacy.js?v=1723125373998","./index.vue_vue_type_script_setup_true_lang-legacy9.js?v=1723125373998","./color-legacy.js?v=1723125373998","./index-legacy92.js?v=1723125373998","./index.vue_vue_type_script_setup_true_lang-legacy10.js?v=1723125373998","./Tabs-legacy.js?v=1723125373998","./omit-legacy.js?v=1723125373998","./Empty-legacy.js?v=1723125373998"],(function(e,t){"use strict";var l,a,n,s,o,i,c,p,r,d,m,u,v,y,g,x,f,A,h,b,_,I,j,C,w,H,E,L,S,B,V,T,k,D,P,q;return{setters:[e=>{l=e.au,a=e.n,n=e.eD,s=e._,o=e.bt,i=e.B,c=e.a,p=e.k,r=e.e},e=>{d=e.o,m=e.g,u=e.a},e=>{v=e.l,y=e.ad,g=e.d,x=e.r,f=e.S,A=e.Z,h=e._,b=e.a3,_=e.W,I=e.F,j=e.ag,C=e.U,w=e.P,H=e.V,E=e.q,L=e.b,S=e.H,B=e.ae,V=e.X},e=>{T=e._},e=>{k=e._},e=>{D=e.a,P=e.b},e=>{q=e._},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var t=document.createElement("style");t.textContent=".recommend-item[data-v-60986ac0]{flex:1 1 0%}.recommend-item+.recommend-item[data-v-60986ac0]{margin-left:24px}.recommend-item .recommend-title[data-v-60986ac0]{margin-bottom:10px;padding-left:5px;font-size:20px}.recommend-item .content[data-v-60986ac0]{border-radius:4px;padding:20px 16px;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s;transition-duration:.2s;border:1px solid #ddd}.recommend-item .content[data-v-60986ac0]:hover{background-color:#fcfcfc;border:1px solid #20a53a}.recommend-item .content .soft-list li[data-v-60986ac0]{display:flex;align-items:center}.recommend-item .content .soft-list li+li[data-v-60986ac0]{margin-top:12px}.recommend-list[data-v-24bd8f9b]{display:flex}\n",document.head.appendChild(t);const N={class:"recommend-item"},Q={class:"recommend-title"},R={class:"content"},U={class:"soft-list"},W={key:0,class:"flex-center w-32px"},F=["src"],M={class:"flex items-center my-20px"},Y={class:"mr-10px"},Z={class:"w-280px"},z={class:"w-280px"},J={class:"flex justify-center"},K=c(v({__name:"item",props:{data:{},memTotal:{default:0}},emits:["close"],setup(e,{emit:t}){const c=e,p=t,{t:r}=y(),m=l(),u=g((()=>c.data)),v=g((()=>c.memTotal)),S=x((()=>{const{soft:e}=u.value,t={};return e.forEach((e=>{t[e.type]={value:e.value,checked:!0},"DNS-Server"!==e.type&&"Mail-Server"!==e.type||(t[e.type].checked=!1)})),t})()),B=x(1),V=new Map([["5.1",{max:256,rec:512}],["5.5",{max:600,rec:1024}],["5.6",{max:800,rec:1024}],["5.7",{max:1500,rec:2048}],["8.0",{max:5e3,rec:6144}],["AliSQL",{max:800,rec:1024}],["mariadb_10.0",{max:800,rec:1024}],["mariadb_10.1",{max:1500,rec:2048}]]),q=new Map([["5.2","4.0"],["5.3","4.0"],["5.4","4.4"],["5.5","4.4"]]),K={mysql:e=>{const t=V.get(e),l=t?.max||0,n=t?.rec||0;if(v.value<l){const t=r("Home.Install.index_10",[n/1024,e]);a.error(t)}},apache:e=>{"2.2"==e?a.info(r("Home.Install.index_11",["2.2","php5_module"])):a.info(r("Home.Install.index_11",["2.4","php-fpm"]))},php:e=>{if("lnmp"===u.value.type){const t=q.get(e)||"4.9";S.value.phpMyAdmin.value=t}if("lamp"===u.value.type){const t=e;"2.2"==S.value.Apache.value?"5.2"!=t&&"5.3"!=t&&"5.4"!=t&&(a.error(r("Home.Install.index_12",["2.2",t])),S.value.PHP.value="5.4"):"5.2"==t&&(a.error(r("Home.Install.index_12",["2.4",t])),S.value.PHP.value="5.4")}}},X=async()=>{const e=a.loading(r("Home.Install.index_13"));try{const e=(()=>{const e=[];return Object.entries(S.value).forEach((([t,l])=>{if(l.checked){let a=t.toLowerCase();"pure-ftpd"===a&&(a="pureftpd"),"php"===a&&(a="php-"+l.value),"dns-server"===a&&(a="dns_manager"),"mail-server"===a&&(a="mail_sys"),e.push({sName:a,version:`${l.value}`,type:B.value,id:"lnmp"===u.value.type?50:41})}})),e})();for(let t=0;t<e.length;t++)await n(e[t]);a.success(r("Home.Install.index_14")),m.getConfigSimple(),p("close"),d()}finally{e.close()}};return(e,t)=>{const l=s,a=T,n=k,c=D,p=o,r=P,d=i;return f(),A("div",N,[h("div",Q,b(_(u).title),1),h("div",R,[h("ul",U,[(f(!0),A(I,null,j(_(u).soft,(e=>(f(),A("li",{key:e.type},["mail"===e.icon||"dns"===e.icon?(f(),A("div",W,[h("img",{class:"w-20px",src:"mail"===e.icon?_("/static/vite/images/mail-server.png"):_("data:image/png;base64,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"),alt:""},null,8,F)])):(f(),C(l,{key:1,name:`soft-${e.icon}`,size:"32"},null,8,["name"])),w(a,{value:_(S)[e.type].value,"onUpdate:value":[t=>_(S)[e.type].value=t,t=>((e,t)=>{e=e.toLowerCase();const l=K[e];l?.(t)})(e.type,t)],class:"flex-1 ml-10px mr-20px",options:e.options},null,8,["value","onUpdate:value","options"]),w(n,{checked:_(S)[e.type].checked,"onUpdate:checked":t=>_(S)[e.type].checked=t},null,8,["checked","onUpdate:checked"])])))),128))]),h("div",M,[h("span",Y,b(e.$t("Home.Install.index_4")),1),w(r,{value:_(B),"onUpdate:value":t[0]||(t[0]=e=>L(B)?B.value=e:null)},{default:H((()=>[w(p,{trigger:"hover"},{trigger:H((()=>[w(c,{value:1},{default:H((()=>[E(b(e.$t("Home.Install.index_5")),1)])),_:1})])),default:H((()=>[h("div",Z,b(e.$t("Home.Install.index_6")),1)])),_:1}),w(p,{trigger:"hover"},{trigger:H((()=>[w(c,{value:0},{default:H((()=>[E(b(e.$t("Home.Install.index_7")),1)])),_:1})])),default:H((()=>[h("div",z,b(e.$t("Home.Install.index_8")),1)])),_:1})])),_:1},8,["value"])]),h("div",J,[w(d,{type:"primary",onClick:X},{default:H((()=>[E(b(e.$t("Home.Install.index_9")),1)])),_:1})])])])}}}),[["__scopeId","data-v-60986ac0"]]),X={class:"w-680px p-20px"},O={class:"recommend-list"},G=v({__name:"index",props:{memTotal:{}},emits:["close"],setup(e,{expose:t,emit:l}){const a=e,n=l,{t:s}=y(),{memTotal:o}=a,i=S([]),c=[{type:"lnmp",title:s("Home.Install.index_2"),soft:[{type:"Nginx",icon:"nginx",value:void 0,options:[]},{type:"MySQL",icon:"mysql",value:void 0,options:[]},{type:"PHP",icon:"php",value:void 0,options:[]},{type:"Pure-Ftpd",icon:"pure-ftpd",value:void 0,options:[]},{type:"phpMyAdmin",icon:"phpmyadmin",value:void 0,options:[]},{type:"DNS-Server",icon:"dns",value:void 0,options:[]},{type:"Mail-Server",icon:"mail",value:void 0,options:[]}]},{type:"lamp",title:s("Home.Install.index_3"),soft:[{type:"Apache",icon:"apache",value:void 0,options:[]},{type:"MySQL",icon:"mysql",value:void 0,options:[]},{type:"PHP",icon:"php",value:void 0,options:[]},{type:"Pure-Ftpd",icon:"pure-ftpd",value:void 0,options:[]},{type:"phpMyAdmin",icon:"phpmyadmin",value:void 0,options:[]},{type:"DNS-Server",icon:"dns",value:void 0,options:[]},{type:"Mail-Server",icon:"mail",value:void 0,options:[]}]}],d=B(),v=()=>{d.push("/soft")},g=()=>{n("close")};return(async()=>{const{message:e}=await m();p(e)&&e.forEach((e=>{const{name:t}=e;if("Tomcat"===t)return;let l;const a=[];e.versions.forEach((({version:e})=>{(!l&&"PHP"===t&&"8.3"===e||"MySQL"===t&&"5.7"===e||"phpMyAdmin"===t&&"5.2"===e)&&(l=e),a.push({label:`${t} ${e}`,value:e})})),!l&&a.length>0&&(l=a[0].value),c.forEach((e=>{for(let n=0;n<e.soft.length;n++)if(e.soft[n].type===t){e.soft[n].value=l,e.soft[n].options=a;break}})),i.value=c}))})(),t({onClose:()=>{u()}}),(e,t)=>{const l=r,a=V("i18n-t"),n=q;return f(),A("div",X,[w(n,{class:"mb-16px",type:"warning"},{default:H((()=>[w(a,{tag:"div",keypath:"Home.Install.index_1.0"},{btn:H((()=>[w(l,{onClick:v},{default:H((()=>[E(b(e.$t("Home.Install.index_1.1")),1)])),_:1})])),_:1})])),_:1}),h("div",O,[(f(!0),A(I,null,j(_(i),(e=>(f(),C(K,{key:e.type,data:e,"mem-total":_(o),onClose:g},null,8,["data","mem-total"])))),128))])])}}});e("default",c(G,[["__scopeId","data-v-24bd8f9b"]]))}}}));
