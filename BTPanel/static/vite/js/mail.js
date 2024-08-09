import{ax as s}from"./index.js?v=1723125373998";const a=()=>s.post("/plugin?action=a&name=mail_sys&s=get_today_count"),e=a=>s.post("/plugin?action=a&name=mail_sys&s=get_domains",a),i=a=>s.post("/plugin?action=a&name=mail_sys&s=flush_domain_record",a),t=a=>s.post("/plugin?action=a&name=mail_sys&s=enable_catchall",a,{requestOptions:{loading:"Setting catchall, please wait...",successMessage:!0}}),n=a=>s.post("/plugin?action=a&name=mail_sys&s=set_mail_certificate_multiple",{...a,act:"add"},{requestOptions:{loading:"Setting certificate status, please wait...",successMessage:!0}}),o=a=>s.post("/plugin?action=a&name=mail_sys&s=set_mail_certificate_multiple",{...a,act:"delete"},{requestOptions:{loading:"Setting certificate status, please wait...",successMessage:!0}}),l=a=>s.post("/plugin?action=a&name=mail_sys&s=add_domain_new",a,{requestOptions:{loading:"Adding domain, please wait...",successMessage:!0}}),p=a=>s.post("/plugin?action=a&name=mail_sys&s=update_domain",a,{requestOptions:{loading:"Editing domain, please wait...",successMessage:!0}}),g=a=>s.post("/plugin?action=a&name=mail_sys&s=delete_domain",a,{requestOptions:{loading:"Deleting domain name, please wait...",successMessage:!0}}),c=a=>s.post("/plugin?action=a&name=mail_sys&s=delete_mx_txt_cache",a,{requestOptions:{loading:"Clearing MAX record and TXT record cache, please wait...",successMessage:!0}}),m=()=>s.post("/plugin?action=a&name=mail_sys&s=get_domain_name"),u=a=>s.post("/plugin?action=a&name=mail_sys&s=get_mailboxs",a),_=a=>s.post("/plugin?action=a&name=mail_sys&s=add_mailbox",a,{requestOptions:{loading:"Adding mailbox, please wait...",successMessage:!0}}),r=a=>s.post("/plugin?action=a&name=mail_sys&s=update_mailbox",a,{requestOptions:{loading:"Editing mailbox, please wait...",successMessage:!0}}),d=a=>s.post("/plugin?action=a&name=mail_sys&s=delete_mailbox",a,{requestOptions:{loading:"Deleting mailbox, please wait...",successMessage:!0}}),y=()=>s.post("/plugin?action=a&name=mail_sys&s=get_bcc"),w=a=>s.post("/plugin?action=a&name=mail_sys&s=set_mail_bcc",a,{requestOptions:{loading:"Adding BCC service, please wait...",successMessage:!0}}),O=a=>s.post("/plugin?action=a&name=mail_sys&s=update_bcc",a,{requestOptions:{loading:"Editing BCC service, please wait...",successMessage:!0}}),M=a=>s.post("/plugin?action=a&name=mail_sys&s=del_bcc",a,{requestOptions:{loading:"Deleting BCC setting, please wait...",successMessage:!0}}),q=()=>s.post("/plugin?action=a&name=mail_sys&s=get_mail_forward"),b=a=>s.post("/plugin?action=a&name=mail_sys&s=set_mail_forward",a,{requestOptions:{loading:"Adding forward, please wait...",successMessage:!0}}),k=a=>s.post("/plugin?action=a&name=mail_sys&s=edit_mail_forward",a,{requestOptions:{loading:"Editing forward, please wait...",successMessage:!0}}),v=a=>s.post("/plugin?action=a&name=mail_sys&s=delete_mail_forward",a,{requestOptions:{loading:"Deleting BCC setting, please wait...",successMessage:!0}}),f=()=>s.post("/plugin?action=a&name=mail_sys&s=get_all_user"),x=a=>s.post("/plugin?action=a&name=mail_sys&s=get_mails",a),C=a=>s.post("/plugin?action=a&name=mail_sys&s=move_to_junk",a,{requestOptions:{loading:"Marking as spam, please wait...",successMessage:!0,isOriginalResult:!0}}),h=a=>s.post("/plugin?action=a&name=mail_sys&s=delete_mail",a,{requestOptions:{loading:"Deleting message, please wait...",successMessage:!0,isOriginalResult:!0}}),S=a=>s.post("/plugin?action=a&name=mail_sys&s=get_junk_mails",a),A=a=>s.post("/plugin?action=a&name=mail_sys&s=move_out_junk",a,{requestOptions:{loading:"Restoring spam, please wait...",successMessage:!0}}),D=a=>s.post("/plugin?action=a&name=mail_sys&s=get_sent_mails",a),I=a=>s.post("/plugin?action=a&name=mail_sys&s=send_mail",a,{requestOptions:{loading:"Sending mail, please wait...",successMessage:!0}}),R=a=>s.post("/plugin?action=a&name=mail_sys&s=get_task_list",a),j=a=>s.post("/plugin?action=a&name=mail_sys&s=get_log_rank",a),B=a=>s.post("/plugin?action=a&name=mail_sys&s=get_log_list",a),E=a=>s.post("/plugin?action=a&name=mail_sys&s=delete_task",a,{requestOptions:{loading:"Deleting task, please wait...",successMessage:!0}}),T=a=>s.post("/plugin?action=a&name=mail_sys&s=processing_recipient",a,{requestOptions:{loading:"Importing, please wait...",successMessage:!0}}),X=a=>s.post("/plugin?action=a&name=mail_sys&s=get_recipient_data",a),H=a=>s.post("/plugin?action=a&name=mail_sys&s=add_task",a,{requestOptions:{loading:"Adding, please wait...",successMessage:!0}}),N=a=>s.post("/plugin?action=a&name=mail_sys&s=pause_task",a,{requestOptions:{loading:"Processing, please wait...",successMessage:!0}}),P=()=>s.post("/plugin?action=a&name=mail_sys&s=get_backup_task_status",{},{requestOptions:{errorMessage:!1}}),U=()=>s.post("/plugin?action=a&name=mail_sys&s=close_backup_task",{},{requestOptions:{loading:"Closing backup settings, please wait...",successMessage:!0}}),z=()=>s.post("/plugin?action=a&name=mail_sys&s=get_cloud_storage_list"),F=a=>s.post("/plugin?action=a&name=mail_sys&s=open_backup_task",a,{requestOptions:{loading:"Saving backup settings, please wait...",successMessage:!0}}),G=()=>s.post("/plugin?action=a&name=mail_sys&s=get_backup_path"),J=a=>s.post("/plugin?action=a&name=mail_sys&s=get_backup_file_list",a),K=a=>s.post("/plugin?action=a&name=mail_sys&s=restore",a,{requestOptions:{loading:"Restoring backup mails, please wait...",successMessage:!0}}),L=()=>s.post("/plugin?action=a&name=mail_sys&s=get_service_status"),Q=a=>s.post("/plugin?action=a&name=mail_sys&s=service_admin",a,{requestOptions:{loading:"Setting service, please wait...",successMessage:!0}}),V=a=>s.post("/plugin?action=a&name=mail_sys&s=repair_service_conf",a,{requestOptions:{loading:"Repair service, please wait...",successMessage:!0}}),W=a=>s.post("/plugin?action=a&name=mail_sys&s=get_config",a),Y=a=>s.post("/plugin?action=a&name=mail_sys&s=save_config",a,{requestOptions:{loading:"Saving service profile, please wait...",successMessage:!0}}),Z=()=>s.post("/plugin?action=a&name=mail_sys&s=get_service_monitor_status",{},{requestOptions:{errorMessage:!1}}),$=()=>s.post("/plugin?action=a&name=mail_sys&s=open_service_monitor_task",{},{requestOptions:{loading:"Saving monitoring task status, please wait...",successMessage:!0}}),ss=()=>s.post("/plugin?action=a&name=mail_sys&s=close_service_monitor_task",{},{requestOptions:{loading:"Closing monitoring task status, please wait...",successMessage:!0}}),as=()=>s.post("/plugin?action=a&name=mail_sys&s=get_save_day"),es=a=>s.post("/plugin?action=a&name=mail_sys&s=set_save_day",a,{requestOptions:{loading:"Setting mail retention time...",successMessage:!0}}),is=()=>s.post("/plugin?action=a&name=mail_sys&s=check_mail_env"),ts=(a,e)=>s.post("/plugin?action=a&name=mail_sys&s=".concat(e),{},{requestOptions:{loading:"Is to repair ".concat(a,", please wait..."),successMessage:!0}}),ns=a=>s.post("/plugin?action=a&name=mail_sys&s=change_hostname",a,{requestOptions:{loading:"Is to repair HostName, please wait...",successMessage:!0}}),os=()=>s.post("/plugin?action=a&name=mail_sys&s=setup_mail_sys"),ls=()=>s.post("/plugin?action=a&name=mail_sys&s=get_init_log"),ps=()=>s.post("/plugin?action=a&name=mail_sys&s=get_roundcube_status"),gs=()=>s.post("/plugin?action=a&name=mail_sys&s=get_domain"),cs=a=>s.post("/plugin?action=a&name=mail_sys&s=uninstall_roundcube",a,{requestOptions:{loading:"Uninstalling, please wait...",successMessage:!0}}),ms=a=>s.post("/plugin?action=a&name=mail_sys&s=add_roundcube",a,{requestOptions:{loading:"Installing, please wait...",successMessage:!0}}),us=a=>s.post("/plugin?action=a&name=mail_sys&s=add_roundcube_info",a,{requestOptions:{loading:"Installing, please wait...",successMessage:!0}}),_s=a=>s.post("/plugin?action=a&name=mail_sys&s=login_roundcube",a,{requestOptions:{loading:"logging in, please wait..."}});export{m as $,z as A,P as B,F as C,U as D,K as E,J as F,G,es as H,as as I,ms as J,us as K,gs as L,cs as M,$ as N,ss as O,Z as P,W as Q,Y as R,Q as S,V as T,L as U,p as V,l as W,n as X,o as Y,c as Z,_,e as a,O as a0,w as a1,b as a2,T as a3,X as a4,H as a5,B as a6,j as a7,ns as a8,ls as a9,os as aa,ts as ab,is as ac,d as b,u as c,g as d,r as e,i as f,a as g,ps as h,M as i,y as j,k,_s as l,v as m,q as n,C as o,h as p,x as q,f as r,t as s,A as t,S as u,D as v,I as w,N as x,E as y,R as z};
