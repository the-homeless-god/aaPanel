import{aK as o,bu as e,bn as r,aE as n,aH as l,aG as s,aV as t,aC as i,aM as c,aN as a,aO as d,aP as g,bp as b,aQ as h,bo as v,aJ as C,bq as u,aT as p,b5 as f,bv as x,bw as m,bx as I,by as z}from"./index.js?v=1723125373998";import{l as P,k as S,r as y,p as H,L as T}from"./vue.js?v=1723125373998";const R={iconMargin:"11px 8px 0 12px",iconMarginRtl:"11px 12px 0 8px",iconSize:"24px",closeIconSize:"16px",closeSize:"20px",closeMargin:"13px 14px 0 0",closeMarginRtl:"13px 0 0 14px",padding:"13px"},w={name:"Alert",common:o,self:o=>{const{lineHeight:n,borderRadius:l,fontWeightStrong:s,baseColor:t,dividerColor:i,actionColor:c,textColor1:a,textColor2:d,closeColorHover:g,closeColorPressed:b,closeIconColor:h,closeIconColorHover:v,closeIconColorPressed:C,infoColor:u,successColor:p,warningColor:f,errorColor:x,fontSize:m}=o;return Object.assign(Object.assign({},R),{fontSize:m,lineHeight:n,titleFontWeight:s,borderRadius:l,border:"1px solid ".concat(i),color:c,titleTextColor:a,iconColor:d,contentTextColor:d,closeBorderRadius:l,closeColorHover:g,closeColorPressed:b,closeIconColor:h,closeIconColorHover:v,closeIconColorPressed:C,borderInfo:"1px solid ".concat(e(t,r(u,{alpha:.25}))),colorInfo:e(t,r(u,{alpha:.08})),titleTextColorInfo:a,iconColorInfo:u,contentTextColorInfo:d,closeColorHoverInfo:g,closeColorPressedInfo:b,closeIconColorInfo:h,closeIconColorHoverInfo:v,closeIconColorPressedInfo:C,borderSuccess:"1px solid ".concat(e(t,r(p,{alpha:.25}))),colorSuccess:e(t,r(p,{alpha:.08})),titleTextColorSuccess:a,iconColorSuccess:p,contentTextColorSuccess:d,closeColorHoverSuccess:g,closeColorPressedSuccess:b,closeIconColorSuccess:h,closeIconColorHoverSuccess:v,closeIconColorPressedSuccess:C,borderWarning:"1px solid ".concat(e(t,r(f,{alpha:.33}))),colorWarning:e(t,r(f,{alpha:.08})),titleTextColorWarning:a,iconColorWarning:f,contentTextColorWarning:d,closeColorHoverWarning:g,closeColorPressedWarning:b,closeIconColorWarning:h,closeIconColorHoverWarning:v,closeIconColorPressedWarning:C,borderError:"1px solid ".concat(e(t,r(x,{alpha:.25}))),colorError:e(t,r(x,{alpha:.08})),titleTextColorError:a,iconColorError:x,contentTextColorError:d,closeColorHoverError:g,closeColorPressedError:b,closeIconColorError:h,closeIconColorHoverError:v,closeIconColorPressedError:C})}},E=n("alert","\n line-height: var(--n-line-height);\n border-radius: var(--n-border-radius);\n position: relative;\n transition: background-color .3s var(--n-bezier);\n background-color: var(--n-color);\n text-align: start;\n word-break: break-word;\n",[l("border","\n border-radius: inherit;\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n transition: border-color .3s var(--n-bezier);\n border: var(--n-border);\n pointer-events: none;\n "),s("closable",[n("alert-body",[l("title","\n padding-right: 24px;\n ")])]),l("icon",{color:"var(--n-icon-color)"}),n("alert-body",{padding:"var(--n-padding)"},[l("title",{color:"var(--n-title-text-color)"}),l("content",{color:"var(--n-content-text-color)"})]),t({originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.9)"}}),l("icon","\n position: absolute;\n left: 0;\n top: 0;\n align-items: center;\n justify-content: center;\n display: flex;\n width: var(--n-icon-size);\n height: var(--n-icon-size);\n font-size: var(--n-icon-size);\n margin: var(--n-icon-margin);\n "),l("close","\n transition:\n color .3s var(--n-bezier),\n background-color .3s var(--n-bezier);\n position: absolute;\n right: 0;\n top: 0;\n margin: var(--n-close-margin);\n "),s("show-icon",[n("alert-body",{paddingLeft:"calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))"})]),s("right-adjust",[n("alert-body",{paddingRight:"calc(var(--n-close-size) + var(--n-padding) + 2px)"})]),n("alert-body","\n border-radius: var(--n-border-radius);\n transition: border-color .3s var(--n-bezier);\n ",[l("title","\n transition: color .3s var(--n-bezier);\n font-size: 16px;\n line-height: 19px;\n font-weight: var(--n-title-font-weight);\n ",[i("& +",[l("content",{marginTop:"9px"})])]),l("content",{transition:"color .3s var(--n-bezier)",fontSize:"var(--n-font-size)"})]),l("icon",{transition:"color .3s var(--n-bezier)"})]),W=P({name:"Alert",inheritAttrs:!1,props:Object.assign(Object.assign({},a.props),{title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:"default"},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function}),setup(o){const{mergedClsPrefixRef:e,mergedBorderedRef:r,inlineThemeDisabled:n,mergedRtlRef:l}=c(o),s=a("Alert","-alert",E,w,o,e),t=d("Alert",l,e),i=S((()=>{const{common:{cubicBezierEaseInOut:e},self:r}=s.value,{fontSize:n,borderRadius:l,titleFontWeight:t,lineHeight:i,iconSize:c,iconMargin:a,iconMarginRtl:d,closeIconSize:g,closeBorderRadius:b,closeSize:h,closeMargin:v,closeMarginRtl:C,padding:f}=r,{type:x}=o,{left:m,right:I}=u(a);return{"--n-bezier":e,"--n-color":r[p("color",x)],"--n-close-icon-size":g,"--n-close-border-radius":b,"--n-close-color-hover":r[p("closeColorHover",x)],"--n-close-color-pressed":r[p("closeColorPressed",x)],"--n-close-icon-color":r[p("closeIconColor",x)],"--n-close-icon-color-hover":r[p("closeIconColorHover",x)],"--n-close-icon-color-pressed":r[p("closeIconColorPressed",x)],"--n-icon-color":r[p("iconColor",x)],"--n-border":r[p("border",x)],"--n-title-text-color":r[p("titleTextColor",x)],"--n-content-text-color":r[p("contentTextColor",x)],"--n-line-height":i,"--n-border-radius":l,"--n-font-size":n,"--n-title-font-weight":t,"--n-icon-size":c,"--n-icon-margin":a,"--n-icon-margin-rtl":d,"--n-close-size":h,"--n-close-margin":v,"--n-close-margin-rtl":C,"--n-padding":f,"--n-icon-margin-left":m,"--n-icon-margin-right":I}})),b=n?g("alert",S((()=>o.type[0])),i,o):void 0,h=y(!0);return{rtlEnabled:t,mergedClsPrefix:e,mergedBordered:r,visible:h,handleCloseClick:()=>{var e;Promise.resolve(null===(e=o.onClose)||void 0===e?void 0:e.call(o)).then((o=>{!1!==o&&(h.value=!1)}))},handleAfterLeave:()=>{(()=>{const{onAfterLeave:e,onAfterHide:r}=o;e&&e(),r&&r()})()},mergedTheme:s,cssVars:n?void 0:i,themeClass:null==b?void 0:b.themeClass,onRender:null==b?void 0:b.onRender}},render(){var o;return null===(o=this.onRender)||void 0===o||o.call(this),H(C,{onAfterLeave:this.handleAfterLeave},{default:()=>{const{mergedClsPrefix:o,$slots:e}=this,r={class:["".concat(o,"-alert"),this.themeClass,this.closable&&"".concat(o,"-alert--closable"),this.showIcon&&"".concat(o,"-alert--show-icon"),!this.title&&this.closable&&"".concat(o,"-alert--right-adjust"),this.rtlEnabled&&"".concat(o,"-alert--rtl")],style:this.cssVars,role:"alert"};return this.visible?H("div",Object.assign({},T(this.$attrs,r)),this.closable&&H(b,{clsPrefix:o,class:"".concat(o,"-alert__close"),onClick:this.handleCloseClick}),this.bordered&&H("div",{class:"".concat(o,"-alert__border")}),this.showIcon&&H("div",{class:"".concat(o,"-alert__icon"),"aria-hidden":"true"},h(e.icon,(()=>[H(f,{clsPrefix:o},{default:()=>{switch(this.type){case"success":return H(z,null);case"info":return H(I,null);case"warning":return H(m,null);case"error":return H(x,null);default:return null}}})]))),H("div",{class:["".concat(o,"-alert-body"),this.mergedBordered&&"".concat(o,"-alert-body--bordered")]},v(e.header,(e=>{const r=e||this.title;return r?H("div",{class:"".concat(o,"-alert-body__title")},r):null})),e.default&&H("div",{class:"".concat(o,"-alert-body__content")},e))):null}})}});export{W as _};
