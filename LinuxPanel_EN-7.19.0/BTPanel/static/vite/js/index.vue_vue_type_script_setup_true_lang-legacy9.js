System.register(["./page_layout-legacy.js?v=1732601582185","./vue-legacy.js?v=1732601582185","./naive-legacy.js?v=1732601582185"],(function(e,a){"use strict";var s,i,t,p,u,r,o,l,n,g,c,d,f,v,z;return{setters:[e=>{s=e.an,i=e.ao,t=e.J},e=>{p=e.d,u=e.ap,r=e.e,o=e.aq,l=e.O,n=e.X,g=e.ax,c=e.Y,d=e.Q,f=e.Z,v=e.u},e=>{z=e.bX}],execute:function(){const a={class:"ml-8px text-14px"};e("_",p({__name:"index",props:u({storeKey:{default:""},pageSizes:{default:()=>[10,20,50,100]},showTotal:{type:Boolean,default:!0},showSizePicker:{type:Boolean,default:!0},showQuickJumper:{type:Boolean,default:!0}},{page:{},pageModifiers:{},pageSize:{},pageSizeModifiers:{}}),emits:u(["refresh"],["update:page","update:pageSize"]),setup(e,{emit:p}){const u=e,h=p,m=r((()=>{const{storeKey:e}=u;return e?`${e}-page`:""})),y=o(e,"page"),k=o(e,"pageSize"),S=e=>{y.value=e,h("refresh")},w=e=>{y.value=1,k.value=e,x(e),h("refresh")},x=e=>{m.value&&s(m.value,String(e))};return(()=>{if(m.value){const e=i(m.value);e&&(k.value=t(e))}})(),(e,s)=>{const i=z;return l(),n(i,v(e.$attrs,{page:y.value,"onUpdate:page":[s[0]||(s[0]=e=>y.value=e),S],"page-size":k.value,"onUpdate:pageSize":[s[1]||(s[1]=e=>k.value=e),w],"show-size-picker":e.showSizePicker,"show-quick-jumper":e.showQuickJumper,"page-sizes":e.pageSizes,"display-order":["pages","size-picker","quick-jumper"]}),g({_:2},[e.showTotal?{name:"suffix",fn:c((({itemCount:s})=>[d("span",a,f(e.$t("Public.Table.Page.index_4",[s])),1)])),key:"0"}:void 0]),1040,["page","page-size","show-size-picker","show-quick-jumper","page-sizes"])}}}))}}}));