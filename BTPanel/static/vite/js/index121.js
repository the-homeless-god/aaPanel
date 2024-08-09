import{_ as e,a}from"./index.vue_vue_type_script_setup_true_lang6.js?v=1723125373998";import{e as s,_ as l,$ as t}from"./mail.js?v=1723125373998";import{k as r,N as n,ae as o,cG as u}from"./index.js?v=1723125373998";import{g as i}from"./data.js?v=1723125373998";import{l as d,r as p,f as m,S as v,Z as c,P as w,V as f,_,W as b}from"./vue.js?v=1723125373998";import{_ as h}from"./Select.js?v=1723125373998";import{_ as x}from"./Switch.js?v=1723125373998";import"./pinia.js?v=1723125373998";import"./Tag.js?v=1723125373998";import"./Empty.js?v=1723125373998";const g={class:"p-20px"},E={class:"w-280px"},q={class:"w-100px ml-10px"},y={class:"w-280px"},j={class:"w-130px"},U={class:"w-140px ml-10px"},B={class:"w-280px"},T=d({__name:"index",props:{row:{},isEdit:{type:Boolean}},emits:["refresh"],setup(d,{expose:T,emit:k}){const G=d,z=k,{isEdit:A}=G,M=p(null),P=m({full_name:"",domain:null,quota:5,quota_unit:"GB",is_admin:0,username:"",password:"",active:1}),S=p([]),Z=[{label:"GB",value:"GB"},{label:"MB",value:"MB"}],$=[{label:"General user",value:0},{label:"Admin",value:1}],N={full_name:{trigger:["blur","input"],validator:()=>""!==P.full_name.trim()||new Error("Username cannot be empty!")},username:{trigger:["blur","input"],validator:()=>""!==P.username.trim()||new Error("Email address cannot be empty!")},quota:{trigger:["blur","input"],validator:()=>(console.log(P.quota),!!P.quota||new Error("MailBox size cannot be empty!"))},password:{trigger:["blur","input"],validator:()=>{if(A){if(P.password&&P.password.trim().length<8)return new Error("The current mailbox user password length is less than 8 digits, please re-enter");const e=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/;if(P.password&&!e.test(P.password))return new Error("The current mailbox user password must contain at least uppercase and lowercase letters and numbers. Please re-enter")}else{if(P.password.trim().length<8)return new Error("The current mailbox user password length is less than 8 digits, please re-enter");if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/.test(P.password))return new Error("The current mailbox user password must contain at least uppercase and lowercase letters and numbers. Please re-enter")}return!0}}},C=()=>({full_name:P.full_name,quota:P.quota+" "+P.quota_unit,is_admin:P.is_admin,username:P.username+"@"+P.domain,password:P.password,active:P.active});return(async()=>{const{message:e}=await t();r(e)&&(S.value=e.map((e=>({label:e,value:e}))),P.domain=e[0])})(),(()=>{const{row:e,isEdit:a}=G;if(a&&e){P.full_name=e.full_name,P.is_admin=e.is_admin,P.username=e.username.split("@")[0],P.active=e.active;const[a,s]=e.username.split("@");P.username=a,P.domain=s;const l=n(e.quota),[t,r]=l.split(" ");P.quota=i(t),P.quota_unit=r}})(),T({onConfirm:async()=>{var e;await(null==(e=M.value)?void 0:e.validate()),A?await s(C()):await l(C()),z("refresh")}}),(s,l)=>{const t=o,r=e,n=u,i=h,d=x,p=a;return v(),c("div",g,[w(p,{ref_key:"formRef",ref:M,model:b(P),rules:N},{default:f((()=>[w(r,{label:"Name",path:"full_name"},{default:f((()=>[_("div",E,[w(t,{value:b(P).full_name,"onUpdate:value":l[0]||(l[0]=e=>b(P).full_name=e),placeholder:"Enter the name please"},null,8,["value"])])])),_:1}),w(r,{label:"Quota",path:"quota"},{default:f((()=>[w(n,{value:b(P).quota,"onUpdate:value":l[1]||(l[1]=e=>b(P).quota=e),class:"w-170px",min:0,"show-button":!1,placeholder:"Enter the size of MailBox"},null,8,["value"]),_("div",q,[w(i,{value:b(P).quota_unit,"onUpdate:value":l[2]||(l[2]=e=>b(P).quota_unit=e),options:Z},null,8,["value"])])])),_:1}),w(r,{label:"User type",path:"is_admin"},{default:f((()=>[_("div",y,[w(i,{value:b(P).is_admin,"onUpdate:value":l[3]||(l[3]=e=>b(P).is_admin=e),options:$},null,8,["value"])])])),_:1}),w(r,{label:"Email Address",path:"username"},{default:f((()=>[_("div",j,[w(t,{value:b(P).username,"onUpdate:value":l[4]||(l[4]=e=>b(P).username=e),disabled:b(A),placeholder:"Your domain name"},null,8,["value","disabled"])]),_("div",U,[w(i,{value:b(P).domain,"onUpdate:value":l[5]||(l[5]=e=>b(P).domain=e),disabled:b(A),filterable:!0,options:b(S)},null,8,["value","disabled","options"])])])),_:1}),w(r,{label:"Email Password",path:"password"},{default:f((()=>[_("div",B,[w(t,{value:b(P).password,"onUpdate:value":l[6]||(l[6]=e=>b(P).password=e),placeholder:b(A)?"If it is empty, the password will not be changed":"Enter your email password please"},null,8,["value","placeholder"])])])),_:1}),w(r,{label:"EnforceTLS",path:"active","show-feedback":!1},{default:f((()=>[w(d,{value:b(P).active,"onUpdate:value":l[7]||(l[7]=e=>b(P).active=e),"checked-value":1,"unchecked-value":0},null,8,["value"])])),_:1})])),_:1},8,["model"])])}}});export{T as default};
