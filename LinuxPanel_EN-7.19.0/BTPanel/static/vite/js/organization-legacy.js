System.register(["./page_layout-legacy.js?v=1732601582185"],(function(t,e){"use strict";var r,s;return{setters:[t=>{r=t.i,s=t.a8}],execute:function(){const{t:e}=r.global;t("b",(t=>s.post("/crontab/trigger/get_trigger_list",{data:JSON.stringify(t)}))),t("a",(t=>s.post("/crontab/trigger/create_trigger",{data:JSON.stringify(t)},{requestOptions:{loading:e("Security.Api.Index_4"),successMessage:!0}}))),t("e",(t=>s.post("/crontab/trigger/modify_trigger",{data:JSON.stringify(t)},{requestOptions:{loading:e("Crontab.Api.index_5"),successMessage:!0}}))),t("g",(()=>s.post("/crontab/script/get_script_list_by_type"))),t("l",(t=>s.post("/crontab/trigger/get_operator_where_list",{data:JSON.stringify(t)}))),t("i",(t=>s.post("/crontab/trigger/create_operator_where",{data:JSON.stringify(t)},{requestOptions:{loading:e("Security.Api.Index_4"),successMessage:!0}}))),t("h",(t=>s.post("/crontab/trigger/modify_operator_where",{data:JSON.stringify(t)},{requestOptions:{loading:e("Crontab.Api.index_5"),successMessage:!0}}))),t("k",(t=>s.post("/crontab/trigger/remove_operator_where",t,{requestOptions:{loading:e("Security.Api.Index_3"),successMessage:!0}}))),t("j",(t=>s.post("/crontab/trigger/get_operator_logs",{data:JSON.stringify(t)}))),t("c",(t=>s.post("/crontab/trigger/get_trigger_logs",t))),t("f",(t=>s.post("/crontab/trigger/test_trigger",{data:JSON.stringify(t)},{requestOptions:{loading:e("Crontab.Api.index_4"),successMessage:!1,errorMessage:!1}}))),t("d",((t,r=!0)=>s.post("/crontab/trigger/remove_trigger",t,{requestOptions:{loading:r?e("Security.Api.Index_3"):"",successMessage:r}})))}}}));