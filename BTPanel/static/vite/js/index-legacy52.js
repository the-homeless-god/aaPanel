System.register(["./index-legacy.js?v=1723125373998","./vue-legacy.js?v=1723125373998","./pinia-legacy.js?v=1723125373998"],(function(t,s){"use strict";var n,e,a,i,l,o,p;return{setters:[t=>{n=t.d,e=t.l,a=t.c},t=>{i=t.l,l=t.x,o=t.S,p=t.Z},null],execute:function(){async function s(){await async function(){await e(),await a(),await n("/static/vite/oldjs/clipboard.min.js?v=1723125373998"),await n("/static/vite/oldjs/jquery.dragsort-0.5.2.min.js?v=1723125373998"),await n("/static/vite/oldjs/xterm.js?v=1723125373998")}(),$("#terminal-main").append('\n\t\t<div class="main-content">\n\t\t\t\t<div class="container-fluid">\n\t\t\t\t\t\t<div class="safe bgw mtb15 pd15" style="height: 100%;">\n\t\t\t\t\t\t\t\t<link rel="stylesheet" href="/static/css/xterm.css?v=1723125373998" />\n\t\t\t\t\t\t\t\t<div class="quick_links">\n\t\t\t\t\t\t\t\t\t\t<div class="quick_links_title"><span class="glyphicon glyphicon-lock" aria-hidden="true"></span>SSH://</div>\n\t\t\t\t\t\t\t\t\t\t<input type="text" class="quick_links_input" placeholder="root@192.168.1.1:21, support temporary SSH connection.">\n\t\t\t\t\t\t\t\t\t\t<span class="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="term_box" id="term_box_view">\n\t\t\t\t\t\t\t\t\t\t<div class="term_item_tab">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="list"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class="addServer" title="Add server SSH information">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="glyphicon glyphicon-plus" aria-hidden="true" ></span>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class="tab_tootls">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="glyphicon glyphicon-resize-full" aria-hidden="true" title="Full Screen"></span><span>Full Screen</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\x3c!-- <span class="glyphicon glyphicon-triangle-top" aria-hidden="true"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span> --\x3e\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class="term_content_tab">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="term-tool-button tool-hide"><span class="glyphicon glyphicon-menu-right"></span></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="term_tootls">\n\t\t\t\t\t\t\t\t\t\t<div class="tootls_tab"><span class="active">Server list</span><a href="javascript:;" data-type="host" title="Add server SSH information"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span></a></div>\n\t\t\t\t\t\t\t\t\t\t<ul class="tootls_host_list"></ul>\n\t\t\t\t\t\t\t\t\t\t<div class="tootls_tab"><span class="active">Commands<i>(Click to copy)</i></span><a href="javascript:;"  data-type="shell" title="Add common commands"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span></a></div>\n\t\t\t\t\t\t\t\t\t\t<ul class="tootls_commonly_list"></ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t</div>\n\t\t<script type="text/html" id="host_form_view">\n\t\t\t\t<div class="bt-form bt-form-2x pd20" id="host_form">\n\t\t\t\t\t\t<input type="text" name="sort" class="hidden" value="<% this.form.sort %>" />\n\t\t\t\t\t\t<div class="line input_group">\n\t\t\t\t\t\t\t\t<span class="tname">Server IP</span>\n\t\t\t\t\t\t\t\t<div class="info-r">\n\t\t\t\t\t\t\t\t\t\t<input type="text" name="host" class="bt-input-text mr5" style="width:240px" value="<% this.form.host %>" placeholder="Enter server IP" val="" autocomplete="off" />\n\t\t\t\t\t\t\t\t\t\t<input type="text" name="port" class="bt-input-text mr5" style="width:60px" placeholder="Port" value="<% this.form.port %>" autocomplete="off"/>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="line">\n\t\t\t\t\t\t\t\t<span class="tname">SSH account</span>\n\t\t\t\t\t\t\t\t<div class="info-r">\n\t\t\t\t\t\t\t\t\t\t<input type="text" name="username" class="bt-input-text mr5" style="width:305px" placeholder="Enter SSH account" value="<% this.form.username %>" autocomplete="off"/>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="line">\n\t\t\t\t\t\t\t\t<span class="tname">Verification</span>\n\t\t\t\t\t\t\t\t<div class="info-r ">\n\t\t\t\t\t\t\t\t\t\t<div class="btn-group">\n\t\t\t\t\t\t\t\t\t\t\t\t<button type="button" tabindex="-1" class="btn btn-sm auth_type_checkbox  <% !(this.form.password != \'\' || this.form.pkey == \'\' && this.form.password == \'\')?\'btn-default\':\'btn-success\' %>" data-ctype="0">Password</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<button type="button" tabindex="-1" class="btn btn-sm auth_type_checkbox  <% this.form.pkey == \'\'?\'btn-default\':\'btn-success\' %>" data-ctype="1">Private key</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="line c_password_view <% (this.form.password != \'\' || this.form.pkey == \'\' && this.form.password == \'\')?\'show\':\'hidden\'%>">\n\t\t\t\t\t\t\t\t<span class="tname">Password</span>\n\t\t\t\t\t\t\t\t<div class="info-r">\n\t\t\t\t\t\t\t\t\t\t<input type="text" name="password" class="bt-input-text mr5" placeholder="Please enter SSH password"\n\t\t\t\t\t\t\t\t\t\t\t\t\tstyle="width:305px;" value="<% this.form.password %>" autocomplete="off"/>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="line c_pkey_view <% this.form.pkey != \'\'?\'show\':\'hidden\'%>">\n\t\t\t\t\t\t\t\t<span class="tname">Private key</span>\n\t\t\t\t\t\t\t\t<div class="info-r">\n\t\t\t\t\t\t\t\t\t\t<textarea rows="4" name="pkey" class="bt-input-text mr5" placeholder="Please enter SSH Private key"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle="width:305px;height: 80px;line-height: 18px;padding-top:10px;"><% this.form.pkey %></textarea>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="line key_pwd_line <% this.form.pkey != \'\' ? \'show\' : \'hidden\' %>">\n\t\t\t\t\t\t\t\t<span class="tname">Key password</span>\n\t\t\t\t\t\t\t\t<div class="info-r">\n\t\t\t\t\t\t\t\t\t\t<input type="text" name="pkey_passwd" class="bt-input-text mr5" placeholder="Please enter Key password, can be blank" style="width:305px;"\n\t\t\t\t\t\t\t\t\t\t\t\t\tvalue="<% this.form.pkey_passwd %>" autocomplete="off"/>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="line">\n\t\t\t\t\t\t\t\t<span class="tname">Remarks</span>\n\t\t\t\t\t\t\t\t<div class="info-r">\n\t\t\t\t\t\t\t\t\t\t<input type="text" name="ps" class="bt-input-text mr5" placeholder="Please enter remarks, can be blank"\n\t\t\t\t\t\t\t\t\t\t\t\t\tstyle="width:305px;" value="<% this.form.ps %>" autocomplete="off"/>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t<\/script>\n\t\t<script type="text/html" id="shell_form_view">\n\t\t\t<div class="bt-form bt-form-2x pd20" id="host_form">\n\t\t\t\t\t<div class="line">\n\t\t\t\t\t\t\t<span class="tname">Name</span>\n\t\t\t\t\t\t\t<div class="info-r">\n\t\t\t\t\t\t\t\t\t<input type="text" name="title" class="bt-input-text mr5" style="width:305px" placeholder="Please enter command description, required" value="<% this.form.title %>" autocomplete="off"/>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="line">\n\t\t\t\t\t\t\t<span class="tname">Content</span>\n\t\t\t\t\t\t\t<div class="info-r">\n\t\t\t\t\t\t\t\t\t<textarea rows="4" name="shell" class="bt-input-text mr5"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder="Please enter command content, required"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle="width:305px;height: 150px;line-height: 18px;padding-top:10px;"><% this.form.shell %></textarea>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t</div>\n\t\t<\/script>\n\t'),await n("/static/vite/oldjs/term.js?v=1723125373998",$("#terminal-main").get(0))}const r={id:"terminal-main"};t("default",i({__name:"index",setup:t=>(l((async()=>{await s()})),(t,s)=>(o(),p("div",r)))}))}}}));
