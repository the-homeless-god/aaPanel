System.register(["./index-legacy.js?v=1723125373998","./vue-legacy.js?v=1723125373998"],(function(e,t){"use strict";var r,a,n,i,l,o,s,p,c,d,m,g,u;return{setters:[e=>{r=e.co,a=e.aM,n=e.aN,i=e.aO,l=e.bO,o=e.bP,s=e.aT,p=e.c$,c=e.bQ},e=>{d=e.l,m=e.k,g=e.p,u=e.C}],execute:function(){const t={gapSmall:"4px 8px",gapMedium:"8px 12px",gapLarge:"12px 16px"},f={name:"Space",self:()=>t};let y;const x=()=>{if(!r)return!0;if(void 0===y){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e);const t=1===e.scrollHeight;return document.body.removeChild(e),y=t}return y},v=Object.assign(Object.assign({},n.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,reverse:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemClass:String,itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}});e("_",d({name:"Space",props:v,setup(e){const{mergedClsPrefixRef:t,mergedRtlRef:r}=a(e),l=n("Space","-space",void 0,f,e,t),o=i("Space",r,t);return{useGap:x(),rtlEnabled:o,mergedClsPrefix:t,margin:m((()=>{const{size:t}=e;if(Array.isArray(t))return{horizontal:t[0],vertical:t[1]};if("number"==typeof t)return{horizontal:t,vertical:t};const{self:{[s("gap",t)]:r}}=l.value,{row:a,col:n}=p(r);return{horizontal:c(n),vertical:c(a)}}))}},render(){const{vertical:e,reverse:t,align:r,inline:a,justify:n,itemClass:i,itemStyle:s,margin:p,wrap:c,mergedClsPrefix:d,rtlEnabled:m,useGap:f,wrapItem:y,internalUseGap:x}=this,v=l(o(this),!1);if(!v.length)return null;const h=`${p.horizontal}px`,b=p.horizontal/2+"px",w=`${p.vertical}px`,S=p.vertical/2+"px",C=v.length-1,B=n.startsWith("space-");return g("div",{role:"none",class:[`${d}-space`,m&&`${d}-space--rtl`],style:{display:a?"inline-flex":"flex",flexDirection:e&&!t?"column":e&&t?"column-reverse":!e&&t?"row-reverse":"row",justifyContent:["start","end"].includes(n)?"flex-"+n:n,flexWrap:!c||e?"nowrap":"wrap",marginTop:f||e?"":`-${S}`,marginBottom:f||e?"":`-${S}`,alignItems:r,gap:f?`${p.vertical}px ${p.horizontal}px`:""}},y||!f&&!x?v.map(((t,r)=>t.type===u?t:g("div",{role:"none",class:i,style:[s,{maxWidth:"100%"},f?"":e?{marginBottom:r!==C?w:""}:m?{marginLeft:B?"space-between"===n&&r===C?"":b:r!==C?h:"",marginRight:B?"space-between"===n&&0===r?"":b:"",paddingTop:S,paddingBottom:S}:{marginRight:B?"space-between"===n&&r===C?"":b:r!==C?h:"",marginLeft:B?"space-between"===n&&0===r?"":b:"",paddingTop:S,paddingBottom:S}]},t))):v)}}))}}}));
