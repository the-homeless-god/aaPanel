System.register(["./index-legacy.js?v=1721298337096","./vue-legacy.js?v=1721298337096"],(function(o,e){"use strict";var r,l,n,c,a,s,t,i,d,h,g,b,C,v,p,u,k,x,f,m,y,z,I,S;return{setters:[o=>{r=o.aH,l=o.bi,n=o.aB,c=o.aD,a=o.aE,s=o.aT,t=o.az,i=o.aJ,d=o.aK,h=o.aL,g=o.aM,b=o.bj,C=o.bk,v=o.aV,p=o.aW,u=o.aQ,k=o.bl,x=o.aR},o=>{f=o.l,m=o.r,y=o.A,z=o.d,I=o.k,S=o.p}],execute:function(){const e={closeIconSizeTiny:"12px",closeIconSizeSmall:"12px",closeIconSizeMedium:"14px",closeIconSizeLarge:"14px",closeSizeTiny:"16px",closeSizeSmall:"16px",closeSizeMedium:"18px",closeSizeLarge:"18px",padding:"0 7px",closeMargin:"0 0 0 4px"},P={name:"Tag",common:r,self:o=>{const{textColor2:r,primaryColorHover:n,primaryColorPressed:c,primaryColor:a,infoColor:s,successColor:t,warningColor:i,errorColor:d,baseColor:h,borderColor:g,opacityDisabled:b,tagColor:C,closeIconColor:v,closeIconColorHover:p,closeIconColorPressed:u,borderRadiusSmall:k,fontSizeMini:x,fontSizeTiny:f,fontSizeSmall:m,fontSizeMedium:y,heightMini:z,heightTiny:I,heightSmall:S,heightMedium:P,closeColorHover:B,closeColorPressed:$,buttonColor2Hover:H,buttonColor2Pressed:M,fontWeightStrong:R}=o;return Object.assign(Object.assign({},e),{closeBorderRadius:k,heightTiny:z,heightSmall:I,heightMedium:S,heightLarge:P,borderRadius:k,opacityDisabled:b,fontSizeTiny:x,fontSizeSmall:f,fontSizeMedium:m,fontSizeLarge:y,fontWeightStrong:R,textColorCheckable:r,textColorHoverCheckable:r,textColorPressedCheckable:r,textColorChecked:h,colorCheckable:"#0000",colorHoverCheckable:H,colorPressedCheckable:M,colorChecked:a,colorCheckedHover:n,colorCheckedPressed:c,border:`1px solid ${g}`,textColor:r,color:C,colorBordered:"rgb(250, 250, 252)",closeIconColor:v,closeIconColorHover:p,closeIconColorPressed:u,closeColorHover:B,closeColorPressed:$,borderPrimary:`1px solid ${l(a,{alpha:.3})}`,textColorPrimary:a,colorPrimary:l(a,{alpha:.12}),colorBorderedPrimary:l(a,{alpha:.1}),closeIconColorPrimary:a,closeIconColorHoverPrimary:a,closeIconColorPressedPrimary:a,closeColorHoverPrimary:l(a,{alpha:.12}),closeColorPressedPrimary:l(a,{alpha:.18}),borderInfo:`1px solid ${l(s,{alpha:.3})}`,textColorInfo:s,colorInfo:l(s,{alpha:.12}),colorBorderedInfo:l(s,{alpha:.1}),closeIconColorInfo:s,closeIconColorHoverInfo:s,closeIconColorPressedInfo:s,closeColorHoverInfo:l(s,{alpha:.12}),closeColorPressedInfo:l(s,{alpha:.18}),borderSuccess:`1px solid ${l(t,{alpha:.3})}`,textColorSuccess:t,colorSuccess:l(t,{alpha:.12}),colorBorderedSuccess:l(t,{alpha:.1}),closeIconColorSuccess:t,closeIconColorHoverSuccess:t,closeIconColorPressedSuccess:t,closeColorHoverSuccess:l(t,{alpha:.12}),closeColorPressedSuccess:l(t,{alpha:.18}),borderWarning:`1px solid ${l(i,{alpha:.35})}`,textColorWarning:i,colorWarning:l(i,{alpha:.15}),colorBorderedWarning:l(i,{alpha:.12}),closeIconColorWarning:i,closeIconColorHoverWarning:i,closeIconColorPressedWarning:i,closeColorHoverWarning:l(i,{alpha:.12}),closeColorPressedWarning:l(i,{alpha:.18}),borderError:`1px solid ${l(d,{alpha:.23})}`,textColorError:d,colorError:l(d,{alpha:.1}),colorBorderedError:l(d,{alpha:.08}),closeIconColorError:d,closeIconColorHoverError:d,closeIconColorPressedError:d,closeColorHoverError:l(d,{alpha:.12}),closeColorPressedError:l(d,{alpha:.18})})}},B={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},$=n("tag","\n --n-close-margin: var(--n-close-margin-top) var(--n-close-margin-right) var(--n-close-margin-bottom) var(--n-close-margin-left);\n white-space: nowrap;\n position: relative;\n box-sizing: border-box;\n cursor: default;\n display: inline-flex;\n align-items: center;\n flex-wrap: nowrap;\n padding: var(--n-padding);\n border-radius: var(--n-border-radius);\n color: var(--n-text-color);\n background-color: var(--n-color);\n transition: \n border-color .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n color .3s var(--n-bezier),\n box-shadow .3s var(--n-bezier),\n opacity .3s var(--n-bezier);\n line-height: 1;\n height: var(--n-height);\n font-size: var(--n-font-size);\n",[c("strong","\n font-weight: var(--n-font-weight-strong);\n "),a("border","\n pointer-events: none;\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n border-radius: inherit;\n border: var(--n-border);\n transition: border-color .3s var(--n-bezier);\n "),a("icon","\n display: flex;\n margin: 0 4px 0 0;\n color: var(--n-text-color);\n transition: color .3s var(--n-bezier);\n font-size: var(--n-avatar-size-override);\n "),a("avatar","\n display: flex;\n margin: 0 6px 0 0;\n "),a("close","\n margin: var(--n-close-margin);\n transition:\n background-color .3s var(--n-bezier),\n color .3s var(--n-bezier);\n "),c("round","\n padding: 0 calc(var(--n-height) / 3);\n border-radius: calc(var(--n-height) / 2);\n ",[a("icon","\n margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);\n "),a("avatar","\n margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);\n "),c("closable","\n padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);\n ")]),c("icon, avatar",[c("round","\n padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);\n ")]),c("disabled","\n cursor: not-allowed !important;\n opacity: var(--n-opacity-disabled);\n "),c("checkable","\n cursor: pointer;\n box-shadow: none;\n color: var(--n-text-color-checkable);\n background-color: var(--n-color-checkable);\n ",[s("disabled",[t("&:hover","background-color: var(--n-color-hover-checkable);",[s("checked","color: var(--n-text-color-hover-checkable);")]),t("&:active","background-color: var(--n-color-pressed-checkable);",[s("checked","color: var(--n-text-color-pressed-checkable);")])]),c("checked","\n color: var(--n-text-color-checked);\n background-color: var(--n-color-checked);\n ",[s("disabled",[t("&:hover","background-color: var(--n-color-checked-hover);"),t("&:active","background-color: var(--n-color-checked-pressed);")])])])]),H=Object.assign(Object.assign(Object.assign({},d.props),B),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),M=v("n-tag");o("_",f({name:"Tag",props:H,setup(o){const e=m(null),{mergedBorderedRef:r,mergedClsPrefixRef:l,inlineThemeDisabled:n,mergedRtlRef:c}=i(o),a=d("Tag","-tag",$,P,o,l);y(M,{roundRef:z(o,"round")});const s={setTextContent(o){const{value:r}=e;r&&(r.textContent=o)}},t=h("Tag",c,l),b=I((()=>{const{type:e,size:l,color:{color:n,textColor:c}={}}=o,{common:{cubicBezierEaseInOut:s},self:{padding:t,closeMargin:i,borderRadius:d,opacityDisabled:h,textColorCheckable:g,textColorHoverCheckable:b,textColorPressedCheckable:C,textColorChecked:v,colorCheckable:p,colorHoverCheckable:x,colorPressedCheckable:f,colorChecked:m,colorCheckedHover:y,colorCheckedPressed:z,closeBorderRadius:I,fontWeightStrong:S,[u("colorBordered",e)]:P,[u("closeSize",l)]:B,[u("closeIconSize",l)]:$,[u("fontSize",l)]:H,[u("height",l)]:M,[u("color",e)]:R,[u("textColor",e)]:T,[u("border",e)]:E,[u("closeIconColor",e)]:W,[u("closeIconColorHover",e)]:j,[u("closeIconColorPressed",e)]:w,[u("closeColorHover",e)]:O,[u("closeColorPressed",e)]:_}}=a.value,F=k(i);return{"--n-font-weight-strong":S,"--n-avatar-size-override":`calc(${M} - 8px)`,"--n-bezier":s,"--n-border-radius":d,"--n-border":E,"--n-close-icon-size":$,"--n-close-color-pressed":_,"--n-close-color-hover":O,"--n-close-border-radius":I,"--n-close-icon-color":W,"--n-close-icon-color-hover":j,"--n-close-icon-color-pressed":w,"--n-close-icon-color-disabled":W,"--n-close-margin-top":F.top,"--n-close-margin-right":F.right,"--n-close-margin-bottom":F.bottom,"--n-close-margin-left":F.left,"--n-close-size":B,"--n-color":n||(r.value?P:R),"--n-color-checkable":p,"--n-color-checked":m,"--n-color-checked-hover":y,"--n-color-checked-pressed":z,"--n-color-hover-checkable":x,"--n-color-pressed-checkable":f,"--n-font-size":H,"--n-height":M,"--n-opacity-disabled":h,"--n-padding":t,"--n-text-color":c||T,"--n-text-color-checkable":g,"--n-text-color-checked":v,"--n-text-color-hover-checkable":b,"--n-text-color-pressed-checkable":C}})),C=n?g("tag",I((()=>{let e="";const{type:l,size:n,color:{color:c,textColor:a}={}}=o;return e+=l[0],e+=n[0],c&&(e+=`a${x(c)}`),a&&(e+=`b${x(a)}`),r.value&&(e+="c"),e})),b,o):void 0;return Object.assign(Object.assign({},s),{rtlEnabled:t,mergedClsPrefix:l,contentRef:e,mergedBordered:r,handleClick:function(e){if(!o.disabled&&o.checkable){const{checked:e,onCheckedChange:r,onUpdateChecked:l,"onUpdate:checked":n}=o;l&&l(!e),n&&n(!e),r&&r(!e)}},handleCloseClick:function(e){if(o.triggerClickOnClose||e.stopPropagation(),!o.disabled){const{onClose:r}=o;r&&p(r,e)}},cssVars:n?void 0:b,themeClass:null==C?void 0:C.themeClass,onRender:null==C?void 0:C.onRender})},render(){var o,e;const{mergedClsPrefix:r,rtlEnabled:l,closable:n,color:{borderColor:c}={},round:a,onRender:s,$slots:t}=this;null==s||s();const i=b(t.avatar,(o=>o&&S("div",{class:`${r}-tag__avatar`},o))),d=b(t.icon,(o=>o&&S("div",{class:`${r}-tag__icon`},o)));return S("div",{class:[`${r}-tag`,this.themeClass,{[`${r}-tag--rtl`]:l,[`${r}-tag--strong`]:this.strong,[`${r}-tag--disabled`]:this.disabled,[`${r}-tag--checkable`]:this.checkable,[`${r}-tag--checked`]:this.checkable&&this.checked,[`${r}-tag--round`]:a,[`${r}-tag--avatar`]:i,[`${r}-tag--icon`]:d,[`${r}-tag--closable`]:n}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},d||i,S("span",{class:`${r}-tag__content`,ref:"contentRef"},null===(e=(o=this.$slots).default)||void 0===e?void 0:e.call(o)),!this.checkable&&n?S(C,{clsPrefix:r,class:`${r}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:a,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?S("div",{class:`${r}-tag__border`,style:{borderColor:c}}):null)}}))}}}));