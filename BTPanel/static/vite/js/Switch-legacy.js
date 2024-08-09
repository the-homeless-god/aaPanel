System.register(["./index-legacy.js?v=1723125373998","./vue-legacy.js?v=1723125373998"],(function(e,n){"use strict";var t,i,a,o,r,l,d,s,c,u,h,b,v,g,p,f,w,m,x,y,k,S,C,$,B,_;return{setters:[e=>{t=e.aK,i=e.bn,a=e.aE,o=e.aH,r=e.c1,l=e.aC,d=e.aG,s=e.aW,c=e.aM,u=e.aN,h=e.bN,b=e.aX,v=e.aP,g=e.aS,p=e.bo,f=e.bW,w=e.bX,m=e.aZ,x=e.aT,y=e.bV,k=e.bQ},e=>{S=e.l,C=e.r,$=e.d,B=e.k,_=e.p}],execute:function(){const n={buttonHeightSmall:"14px",buttonHeightMedium:"18px",buttonHeightLarge:"22px",buttonWidthSmall:"14px",buttonWidthMedium:"18px",buttonWidthLarge:"22px",buttonWidthPressedSmall:"20px",buttonWidthPressedMedium:"24px",buttonWidthPressedLarge:"28px",railHeightSmall:"18px",railHeightMedium:"22px",railHeightLarge:"26px",railWidthSmall:"32px",railWidthMedium:"40px",railWidthLarge:"48px"},z={name:"Switch",common:t,self:e=>{const{primaryColor:t,opacityDisabled:a,borderRadius:o,textColor3:r}=e;return Object.assign(Object.assign({},n),{iconColor:r,textColor:"white",loadingColor:t,opacityDisabled:a,railColor:"rgba(0, 0, 0, .14)",railColorActive:t,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:o,railBorderRadiusMedium:o,railBorderRadiusLarge:o,buttonBorderRadiusSmall:o,buttonBorderRadiusMedium:o,buttonBorderRadiusLarge:o,boxShadowFocus:`0 0 0 2px ${i(t,{alpha:.2})}`})}},F=a("switch","\n height: var(--n-height);\n min-width: var(--n-width);\n vertical-align: middle;\n user-select: none;\n -webkit-user-select: none;\n display: inline-flex;\n outline: none;\n justify-content: center;\n align-items: center;\n",[o("children-placeholder","\n height: var(--n-rail-height);\n display: flex;\n flex-direction: column;\n overflow: hidden;\n pointer-events: none;\n visibility: hidden;\n "),o("rail-placeholder","\n display: flex;\n flex-wrap: none;\n "),o("button-placeholder","\n width: calc(1.75 * var(--n-rail-height));\n height: var(--n-rail-height);\n "),a("base-loading","\n position: absolute;\n top: 50%;\n left: 50%;\n transform: translateX(-50%) translateY(-50%);\n font-size: calc(var(--n-button-width) - 4px);\n color: var(--n-loading-color);\n transition: color .3s var(--n-bezier);\n ",[r({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),o("checked, unchecked","\n transition: color .3s var(--n-bezier);\n color: var(--n-text-color);\n box-sizing: border-box;\n position: absolute;\n white-space: nowrap;\n top: 0;\n bottom: 0;\n display: flex;\n align-items: center;\n line-height: 1;\n "),o("checked","\n right: 0;\n padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));\n "),o("unchecked","\n left: 0;\n justify-content: flex-end;\n padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));\n "),l("&:focus",[o("rail","\n box-shadow: var(--n-box-shadow-focus);\n ")]),d("round",[o("rail","border-radius: calc(var(--n-rail-height) / 2);",[o("button","border-radius: calc(var(--n-button-height) / 2);")])]),s("disabled",[s("icon",[d("rubber-band",[d("pressed",[o("rail",[o("button","max-width: var(--n-button-width-pressed);")])]),o("rail",[l("&:active",[o("button","max-width: var(--n-button-width-pressed);")])]),d("active",[d("pressed",[o("rail",[o("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),o("rail",[l("&:active",[o("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),d("active",[o("rail",[o("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),o("rail","\n overflow: hidden;\n height: var(--n-rail-height);\n min-width: var(--n-rail-width);\n border-radius: var(--n-rail-border-radius);\n cursor: pointer;\n position: relative;\n transition:\n opacity .3s var(--n-bezier),\n background .3s var(--n-bezier),\n box-shadow .3s var(--n-bezier);\n background-color: var(--n-rail-color);\n ",[o("button-icon","\n color: var(--n-icon-color);\n transition: color .3s var(--n-bezier);\n font-size: calc(var(--n-button-height) - 4px);\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n display: flex;\n justify-content: center;\n align-items: center;\n line-height: 1;\n ",[r()]),o("button",'\n align-items: center; \n top: var(--n-offset);\n left: var(--n-offset);\n height: var(--n-button-height);\n width: var(--n-button-width-pressed);\n max-width: var(--n-button-width);\n border-radius: var(--n-button-border-radius);\n background-color: var(--n-button-color);\n box-shadow: var(--n-button-box-shadow);\n box-sizing: border-box;\n cursor: inherit;\n content: "";\n position: absolute;\n transition:\n background-color .3s var(--n-bezier),\n left .3s var(--n-bezier),\n opacity .3s var(--n-bezier),\n max-width .3s var(--n-bezier),\n box-shadow .3s var(--n-bezier);\n ')]),d("active",[o("rail","background-color: var(--n-rail-color-active);")]),d("loading",[o("rail","\n cursor: wait;\n ")]),d("disabled",[o("rail","\n cursor: not-allowed;\n opacity: .5;\n ")])]),R=Object.assign(Object.assign({},u.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let V;e("_",S({name:"Switch",props:R,setup(e){void 0===V&&(V="undefined"==typeof CSS||void 0!==CSS.supports&&CSS.supports("width","max(1px)"));const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=c(e),i=u("Switch","-switch",F,z,e,n),a=h(e),{mergedSizeRef:o,mergedDisabledRef:r}=a,l=C(e.defaultValue),d=$(e,"value"),s=b(d,l),g=B((()=>s.value===e.checkedValue)),p=C(!1),f=C(!1),w=B((()=>{const{railStyle:n}=e;if(n)return n({focused:f.value,checked:g.value})}));function S(n){const{"onUpdate:value":t,onChange:i,onUpdateValue:o}=e,{nTriggerFormInput:r,nTriggerFormChange:d}=a;t&&m(t,n),o&&m(o,n),i&&m(i,n),l.value=n,r(),d()}const _=B((()=>{const{value:e}=o,{self:{opacityDisabled:n,railColor:t,railColorActive:a,buttonBoxShadow:r,buttonColor:l,boxShadowFocus:d,loadingColor:s,textColor:c,iconColor:u,[x("buttonHeight",e)]:h,[x("buttonWidth",e)]:b,[x("buttonWidthPressed",e)]:v,[x("railHeight",e)]:g,[x("railWidth",e)]:p,[x("railBorderRadius",e)]:f,[x("buttonBorderRadius",e)]:w},common:{cubicBezierEaseInOut:m}}=i.value;let S,C,$;return V?(S=`calc((${g} - ${h}) / 2)`,C=`max(${g}, ${h})`,$=`max(${p}, calc(${p} + ${h} - ${g}))`):(S=y((k(g)-k(h))/2),C=y(Math.max(k(g),k(h))),$=k(g)>k(h)?p:y(k(p)+k(h)-k(g))),{"--n-bezier":m,"--n-button-border-radius":w,"--n-button-box-shadow":r,"--n-button-color":l,"--n-button-width":b,"--n-button-width-pressed":v,"--n-button-height":h,"--n-height":C,"--n-offset":S,"--n-opacity-disabled":n,"--n-rail-border-radius":f,"--n-rail-color":t,"--n-rail-color-active":a,"--n-rail-height":g,"--n-rail-width":p,"--n-width":$,"--n-box-shadow-focus":d,"--n-loading-color":s,"--n-text-color":c,"--n-icon-color":u}})),R=t?v("switch",B((()=>o.value[0])),_,e):void 0;return{handleClick:function(){e.loading||r.value||(s.value!==e.checkedValue?S(e.checkedValue):S(e.uncheckedValue))},handleBlur:function(){f.value=!1,function(){const{nTriggerFormBlur:e}=a;e()}(),p.value=!1},handleFocus:function(){f.value=!0,function(){const{nTriggerFormFocus:e}=a;e()}()},handleKeyup:function(n){e.loading||r.value||" "===n.key&&(s.value!==e.checkedValue?S(e.checkedValue):S(e.uncheckedValue),p.value=!1)},handleKeydown:function(n){e.loading||r.value||" "===n.key&&(n.preventDefault(),p.value=!0)},mergedRailStyle:w,pressed:p,mergedClsPrefix:n,mergedValue:s,checked:g,mergedDisabled:r,cssVars:t?void 0:_,themeClass:null==R?void 0:R.themeClass,onRender:null==R?void 0:R.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:n,checked:t,mergedRailStyle:i,onRender:a,$slots:o}=this;null==a||a();const{checked:r,unchecked:l,icon:d,"checked-icon":s,"unchecked-icon":c}=o,u=!(g(d)&&g(s)&&g(c));return _("div",{role:"switch","aria-checked":t,class:[`${e}-switch`,this.themeClass,u&&`${e}-switch--icon`,t&&`${e}-switch--active`,n&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},_("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:i},p(r,(n=>p(l,(t=>n||t?_("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},_("div",{class:`${e}-switch__rail-placeholder`},_("div",{class:`${e}-switch__button-placeholder`}),n),_("div",{class:`${e}-switch__rail-placeholder`},_("div",{class:`${e}-switch__button-placeholder`}),t)):null)))),_("div",{class:`${e}-switch__button`},p(d,(n=>p(s,(t=>p(c,(i=>_(f,null,{default:()=>this.loading?_(w,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(t||n)?_("div",{class:`${e}-switch__button-icon`,key:t?"checked-icon":"icon"},t||n):this.checked||!i&&!n?null:_("div",{class:`${e}-switch__button-icon`,key:i?"unchecked-icon":"icon"},i||n)}))))))),p(r,(n=>n&&_("div",{key:"checked",class:`${e}-switch__checked`},n))),p(l,(n=>n&&_("div",{key:"unchecked",class:`${e}-switch__unchecked`},n))))))}}))}}}));
