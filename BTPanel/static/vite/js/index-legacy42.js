System.register(["./index-legacy.js?v=1723125373998","./vue-legacy.js?v=1723125373998","./pinia-legacy.js?v=1723125373998"],(function(t,n){"use strict";var s,e,i,l,a,o,c,d;return{setters:[t=>{s=t.d,e=t.b,i=t.l,l=t.c},t=>{a=t.l,o=t.x,c=t.S,d=t.Z},null],execute:function(){async function n(){await async function(){await i(),await l(),await s("/static/vite/oldjs/echarts.min.js?v=1723125373998")}(),$("#monitor-main").append("\n\t\t<style>\n\t\t\t.control-item-block .row {\n\t\t\t\tpadding: 0 15px;\n\t\t\t}\n\t\t\t/* 监控右键进程 */\n\t\t\t.echarts-tooltip {\n\t\t\t\twidth: 400px;\n\t\t\t\t/* padding: 10px; */\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: column;\n\t\t\t\tcolor: #444;\n\t\t\t\tborder-radius: 4px;\n\t\t\t\ttransition: all 500ms;\n\t\t\t}\n\t\t\t.echarts-tooltip .formatter-header {\n\t\t\t\tpadding: 0 15px;\n\t\t\t\tbackground-color: #f9f9f9;\n\t\t\t\theight: 40px;\n\t\t\t\tline-height: 40px;\n\t\t\t\tfont-size: 14px;\n\t\t\t\tborder-top-left-radius: 4px;\n\t\t\t\tborder-top-right-radius: 4px;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\t\t\t.echarts-tooltip .formatter-header img {\n\t\t\t\tmargin-right: 5px;\n\t\t\t\theight: 20px;\n\t\t\t\twidth: 20px;\n\t\t\t}\n\t\t\t.echarts-tooltip .formatter-body {\n\t\t\t\tpadding: 20px;\n\t\t\t}\n\n\t\t\t.select-data {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tfont-size: 14px;\n\t\t\t\tmargin-bottom: 8px;\n\t\t\t\tpadding: 0 2px;\n\t\t\t}\n\t\t\t.select-data .flex {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmargin-right: 15px;\n\t\t\t}\n\t\t\t.select-data .flex:last-child {\n\t\t\t\tmargin-right: 0;\n\t\t\t}\n\t\t\t.select-data .status {\n\t\t\t\tdisplay: inline-block;\n\t\t\t\twidth: 12px;\n\t\t\t\theight: 12px;\n\t\t\t\tborder-radius: 50%;\n\t\t\t\tbackground-color: #ff8c00;\n\t\t\t\tmargin-right: 5px;\n\t\t\t}\n\n\t\t\t.process-top5.hide {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\t\t\t.process-header {\n\t\t\t\tpadding-left: 8px;\n\t\t\t\tmargin-left: 2px;\n\t\t\t\tmargin-bottom: 15px;\n\t\t\t\tborder-bottom: 1px solid #f5f5f5;\n\t\t\t}\n\t\t\t.process-top5 table {\n\t\t\t\twidth: 100%;\n\t\t\t\tborder-collapse: collapse;\n\t\t\t}\n\t\t\t.process-top5 table thead th,\n\t\t\t.process-top5 table tbody td {\n\t\t\t\tpadding: 5px 10px;\n\t\t\t\tborder: 0;\n\t\t\t\tfont-size: 12px;\n\t\t\t}\n\t\t\t.process-top5 table thead tr,\n\t\t\t.process-top5 table tbody tr {\n\t\t\t\tborder: none;\n\t\t\t}\n\t\t\t.process-top5 table thead tr {\n\t\t\t\tbackground: #f2f7fed6;\n\t\t\t\tcolor: #555;\n\t\t\t}\n\t\t\t.process-top5 table thead th {\n\t\t\t\theight: 24px;\n\t\t\t\tline-height: 24px;\n\t\t\t\ttext-align: left;\n\t\t\t\tfont-weight: 600;\n\t\t\t}\n\t\t\t.process-top5 table tbody tr {\n\t\t\t\theight: 22px;\n\t\t\t\tline-height: 22px;\n\t\t\t\ttext-align: left;\n\t\t\t}\n\t\t\t.process-top5 table tbody tr {\n\t\t\t\tborder-bottom: 0.5px solid #ececec;\n\t\t\t}\n\t\t\t.process-top5 table tbody tr:last-child {\n\t\t\t\tborder-bottom: none;\n\t\t\t}\n\t\t\t/* end */\n\t\t\t.control-item {\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tpadding: 0 25px;\n\t\t\t\tfont-size: 15px;\n\t\t\t\theight: 50px;\n\t\t\t\tline-height: 50px;\n\t\t\t\tcursor: pointer;\n\t\t\t}\n\t\t\t.control-item.active {\n\t\t\t\tcolor: #20a53a;\n\t\t\t\tfont-weight: 500;\n\t\t\t\tborder-bottom: #20a53a 2px solid;\n\t\t\t}\n\t\t\t.bt-crontab-select-button {\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tposition: relative;\n\t\t\t\tborder: 1px solid #ccc;\n\t\t\t\tborder-radius: 2px;\n\t\t\t\tfont-size: 12px;\n\t\t\t\tvertical-align: middle;\n\t\t\t}\n\n\t\t\t.bt-crontab-select-button .select-picker-search:hover {\n\t\t\t\tbackground: #ebf1f5;\n\t\t\t\tcursor: pointer;\n\t\t\t}\n\n\t\t\t.bt-crontab-select-button .select-picker-search {\n\t\t\t\theight: 25px;\n\t\t\t\tline-height: 25px;\n\t\t\t\tborder: none;\n\t\t\t\toutline: none;\n\t\t\t}\n\n\t\t\t.bt-crontab-select-button .select-picker-search span {\n\t\t\t\twhite-space: nowrap;\n\t\t\t\ttext-overflow: ellipsis;\n\t\t\t\toverflow: hidden;\n\t\t\t\tdisplay: block;\n\t\t\t}\n\n\t\t\t.bt-crontab-select-button .picker-text-list {\n\t\t\t\tmargin-right: 25px;\n\t\t\t\tpadding-left: 10px;\n\t\t\t}\n\n\t\t\t.bt-crontab-select-button input {\n\t\t\t\tpadding: 5px 10px;\n\t\t\t\theight: 35px;\n\t\t\t\tline-height: 35px;\n\t\t\t\tborder: none;\n\t\t\t\tborder-bottom: 1px solid #ccc;\n\t\t\t}\n\n\t\t\t.bt-crontab-select-button input:focus {\n\t\t\t\toutline: none;\n\t\t\t}\n\n\t\t\t.bt-crontab-select-button .only-one {\n\t\t\t\tposition: relative;\n\t\t\t}\n\n\t\t\t.bt-crontab-select-button .down-select-full {\n\t\t\t\tdisplay: inline-block;\n\t\t\t\twidth: 0;\n\t\t\t\theight: 0;\n\t\t\t\tborder-width: 5px;\n\t\t\t\tborder-style: solid;\n\t\t\t\tborder-color: #777 transparent transparent transparent;\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 10px;\n\t\t\t\tright: 10px;\n\t\t\t}\n\n\t\t\t.bt-crontab-select-button .select-list-item {\n\t\t\t\ttransition: all 500ms;\n\t\t\t\tbackground: #fff;\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 28px;\n\t\t\t\tdisplay: none;\n\t\t\t\tbox-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);\n\t\t\t\tborder-radius: 4px;\n\t\t\t\tz-index: 9999;\n\t\t\t}\n\n\t\t\t.bt-crontab-select-button .select-list-item.active {\n\t\t\t\tdisplay: block;\n\t\t\t\tz-index: 2;\n\t\t\t}\n\n\t\t\t.bt-crontab-select-button .select-list-item ul {\n\t\t\t\toverflow: auto;\n\t\t\t\tborder-radius: 4px;\n\t\t\t}\n\n\t\t\t.bt-crontab-select-button .select-list-item li:hover {\n\t\t\t\tbackground: #20a53a;\n\t\t\t\tcolor: #fff;\n\t\t\t}\n\n\t\t\t.bt-crontab-select-button .only-one .select-list-item li.active {\n\t\t\t\tbackground-color: #20a53a;\n\t\t\t\tcolor: #fff;\n\t\t\t}\n\n\t\t\t.bt-crontab-select-button .select-list-item li .select-name-full {\n\t\t\t\twhite-space: nowrap;\n\t\t\t\tpadding: 0 23px 0 10px;\n\t\t\t\theight: 30px;\n\t\t\t\tline-height: 30px;\n\t\t\t\tcursor: pointer;\n\t\t\t\tdisplay: inline-block;\n\t\t\t}\n\n\t\t\t.bt-crontab-select-button .select-check-full {\n\t\t\t\tdisplay: inline-block;\n\t\t\t\theight: 16px;\n\t\t\t\twidth: 16px;\n\t\t\t\tborder-radius: 1px;\n\t\t\t\tmargin-right: 5px;\n\t\t\t\tcursor: pointer;\n\t\t\t\tborder: 1px solid #c2c2c2;\n\t\t\t\tposition: relative;\n\t\t\t\tline-height: 20px;\n\t\t\t\ttransition: all 200ms;\n\t\t\t\tvertical-align: sub;\n\t\t\t}\n\n\t\t\t.bt-crontab-select-button .select-list-item li.active .select-check-full {\n\t\t\t\tborder: none;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: 1px;\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tfont-family: 'Glyphicons Halflings';\n\t\t\t\tfont-style: normal;\n\t\t\t\tfont-weight: 400;\n\t\t\t\tline-height: 1;\n\t\t\t\t-webkit-font-smoothing: antialiased;\n\t\t\t\tbackground: #5fb878;\n\t\t\t\tcolor: #fff;\n\t\t\t}\n\n\t\t\t.bt-crontab-select-button .select-list-item li.active .select-check-full:after {\n\t\t\t\tcontent: '\\e013';\n\t\t\t\tfont-size: 12px;\n\t\t\t\ttransform: scale(0.85);\n\t\t\t\tposition: absolute;\n\t\t\t\tleft: 2px;\n\t\t\t\ttop: 2px;\n\t\t\t}\n\t\t\t</style>\n\t"),$("#monitor-main").append('\n\t\t<div class="main-content">\n\t\t\t<div class="container-fluid">\n\t\t\t\t<div class="pos-box bgw mtb15">\n\t\t\t\t\t<div class="tab-list" id="tabs-cut">\n\t\t\t\t\t\t<div class="tabs-item active" data-name="control">System Monitor</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="control-content">\n\t\t\t\t\t<div class="control-item-block">\n\t\t\t\t\t\t<div class="safe container-fluid radius4 bgw mb15 pd15" style="overflow: hidden">\n\t\t\t\t\t\t\t<div class="mr50 pull-left">\n\t\t\t\t\t\t\t\t<div class="ss-text pull-left">\n\t\t\t\t\t\t\t\t\t<em>Turn on Monitory</em>\n\t\t\t\t\t\t\t\t\t<div class="ssh-item" id="openJK"></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="mr50 pull-left">\n\t\t\t\t\t\t\t\t<div class="ss-text pull-left">\n\t\t\t\t\t\t\t\t\t<em>Number of days to save: </em>\n\t\t\t\t\t\t\t\t\t<input class="bt-input-text" id="saveDay" value="" type="number" />\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="ss-text pull-left" style="margin-left: 10px">\n\t\t\t\t\t\t\t\t\t<button class="btn btn-default btn-sm" type="button" onclick="controlObj.conTrolView.SetControl(true);">Modify</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="mr50 pull-left" style="padding-left: 50px; border-left: #ccc 1px solid; margin-right: 0">\n\t\t\t\t\t\t\t\t<button class="btn btn-default btn-sm" type="button" onclick="controlObj.conTrolView.CloseControl()">Clean Logs</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="control">\n\t\t\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t\t\t<div class="col-xs-12 col-sm-12 col-md-12 pull-left pd0 view0">\n\t\t\t\t\t\t\t\t\t<div class="mb15">\n\t\t\t\t\t\t\t\t\t\t<div class="bgw pb15 radius4">\n\t\t\t\t\t\t\t\t\t\t\t<div class="title c6 plr15 mb15">\n\t\t\t\t\t\t\t\t\t\t\t\t<h3 class="c-tit f16">Load Average</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="searcTime pull-right">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="tit">Interval Search：</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="gt" onclick="controlObj.conTrolView.Wday(1,\'getload\')">Yesterday</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="gt on" onclick="controlObj.conTrolView.Wday(0,\'getload\')">Today</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="gt" onclick="controlObj.conTrolView.Wday(7,\'getload\')">Last 7 Days</span\n\t\t\t\t\t\t\t\t\t\t\t\t\t><span class="gt" onclick="controlObj.conTrolView.Wday(30,\'getload\')">Last 30 Days</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="ss">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="st">Custom Time</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="time">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bt">StartTime：<input class="btime" type="text" value="2017/1/10 00:00:00" /></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="et">EndTime：<input class="etime" type="text" value="2017/1/13 00:00:00" /></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="sbtn time_range_submit" data-type="getload">Submit</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div id="getloadview" style="width: 100%; height: 330px"></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t\t\t<div class="col-xs-12 col-sm-12 col-md-6 pull-left pd0 view1">\n\t\t\t\t\t\t\t\t\t<div class="pr8">\n\t\t\t\t\t\t\t\t\t\t<div class="bgw pb15 radius4">\n\t\t\t\t\t\t\t\t\t\t\t<div class="title c6 plr15">\n\t\t\t\t\t\t\t\t\t\t\t\t<h3 class="c-tit f16">CPU</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="searcTime pull-right">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="tit">Interval Search：</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="gt" onclick="controlObj.conTrolView.Wday(1,\'cpu\')">Yesterday</span\n\t\t\t\t\t\t\t\t\t\t\t\t\t><span class="gt on" onclick="controlObj.conTrolView.Wday(0,\'cpu\')">Today</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="gt" onclick="controlObj.conTrolView.Wday(7,\'cpu\')">Last 7 Days</span\n\t\t\t\t\t\t\t\t\t\t\t\t\t><span class="gt" onclick="controlObj.conTrolView.Wday(30,\'cpu\')">Last 30 Days</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="ss">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="st">Custom Time</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="time">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bt">StartTime：<input class="btime" type="text" value="2017/1/10 00:00:00" /></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="et">EndTime：<input class="etime" type="text" value="2017/1/13 00:00:00" /></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="sbtn time_range_submit" data-type="cpu">Submit</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div id="cpuview" style="width: 100%; height: 330px"></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="col-xs-12 col-sm-12 col-md-6 pull-left pd0 view2">\n\t\t\t\t\t\t\t\t\t<div class="pl7">\n\t\t\t\t\t\t\t\t\t\t<div class="bgw pb15 radius4">\n\t\t\t\t\t\t\t\t\t\t\t<div class="title c6 plr15">\n\t\t\t\t\t\t\t\t\t\t\t\t<h3 class="c-tit f16">Memory</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="searcTime pull-right">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="tit">Interval Search：</span><span class="gt" onclick="controlObj.conTrolView.Wday(1,\'mem\')">Yesterday</span\n\t\t\t\t\t\t\t\t\t\t\t\t\t><span class="gt on" onclick="controlObj.conTrolView.Wday(0,\'mem\')">Today</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="gt" onclick="controlObj.conTrolView.Wday(7,\'mem\')">Last 7 Days</span\n\t\t\t\t\t\t\t\t\t\t\t\t\t><span class="gt" onclick="controlObj.conTrolView.Wday(30,\'mem\')">Last 30 Days</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="ss">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="st">Custom Time</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="time">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bt">StartTime：<input class="btime" type="text" value="2017/1/10 00:00:00" /></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="et">EndTime：<input class="etime" type="text" value="2017/1/13 00:00:00" /></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="sbtn time_range_submit" data-type="mem">Submit</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div id="memview" style="width: 100%; height: 330px"></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t\t\t<div class="col-xs-12 col-sm-12 col-md-6 pull-left pd0 view1">\n\t\t\t\t\t\t\t\t\t<div class="pr8">\n\t\t\t\t\t\t\t\t\t\t<div class="bgw pb15 radius4">\n\t\t\t\t\t\t\t\t\t\t\t<div class="title c6 plr15 mb15">\n\t\t\t\t\t\t\t\t\t\t\t\t<h3 class="c-tit f16">Disk I/O</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="searcTime pull-right">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="tit">Interval Search：</span><span class="gt" onclick="controlObj.conTrolView.Wday(1,\'disk\')">Yesterday</span\n\t\t\t\t\t\t\t\t\t\t\t\t\t><span class="gt on" onclick="controlObj.conTrolView.Wday(0,\'disk\')">Today</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="gt" onclick="controlObj.conTrolView.Wday(7,\'disk\')">Last 7 Days</span\n\t\t\t\t\t\t\t\t\t\t\t\t\t><span class="gt" onclick="controlObj.conTrolView.Wday(30,\'disk\')">Last 30 Days</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="ss">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="st">Custom Time</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="time">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bt">StartTime：<input class="btime" type="text" value="2017/1/10 00:00:00" /></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="et">EndTime：<input class="etime" type="text" value="2017/1/13 00:00:00" /></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="sbtn time_range_submit" data-type="disk">Submit</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div style="position: relative">\n\t\t\t\t\t\t\t\t\t\t\t\t<div id="diskview" style="width: 100%; height: 330px"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div style="position: absolute; top: 15px; left: 6%" class="hide">\n\t\t\t\t\t\t\t\t\t\t\t\t\tUnit:\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="bt-crontab-select-button">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="bt-select-full only-one disk-unit">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="select-picker-search">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="picker-text-list">KB/s</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="down-select-full"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="select-list-item">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul style="width: auto; max-height: auto">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li data-attr="KB/s"><span class="select-name-full">KB/s</span></li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li data-attr="MB/s"><span class="select-name-full">MB/s</span></li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li data-attr="GB/s"><span class="select-name-full">GB/s</span></li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="col-xs-12 col-sm-12 col-md-6 pull-left pd0 view2">\n\t\t\t\t\t\t\t\t\t<div class="pl7">\n\t\t\t\t\t\t\t\t\t\t<div class="bgw pb15 radius4">\n\t\t\t\t\t\t\t\t\t\t\t<div class="title c6 plr15 mb15">\n\t\t\t\t\t\t\t\t\t\t\t\t<h3 class="c-tit f16">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="mr5" style="vertical-align: middle">Network I/O:</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<select class="bt-input-text hide" style="vertical-align: middle; font-size: 13px" name="network-io">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value="all">All</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="searcTime pull-right">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="tit">Interval Search：</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="gt" onclick="controlObj.conTrolView.Wday(1,\'network\')">Yesterday</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="gt on" onclick="controlObj.conTrolView.Wday(0,\'network\')">Today</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="gt" onclick="controlObj.conTrolView.Wday(7,\'network\')">Last 7 Days</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="gt" onclick="controlObj.conTrolView.Wday(30,\'network\')">Last 30 Days</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="ss">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="st">Custom Time</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="time">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bt">StartTime：<input class="btime" type="text" value="2017/1/10 00:00:00" /></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="et">EndTime：<input class="etime" type="text" value="2017/1/13 00:00:00" /></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="sbtn time_range_submit" data-type="network">Submit</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div style="position: relative">\n\t\t\t\t\t\t\t\t\t\t\t\t<div id="network" style="width: 100%; height: 330px"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div style="position: absolute; top: 15px; left: 6%" class="hide">\n\t\t\t\t\t\t\t\t\t\t\t\t\tUnit:\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="bt-crontab-select-button">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="bt-select-full only-one network-unit">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="select-picker-search">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="picker-text-list">KB/s</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="down-select-full"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="select-list-item">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul style="width: auto; max-height: auto">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li data-attr="KB/s"><span class="select-name-full">KB/s</span></li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li data-attr="MB/s"><span class="select-name-full">MB/s</span></li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li data-attr="GB/s"><span class="select-name-full">GB/s</span></li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t'),await s("/static/vite/oldjs/control.js?v=1723125373998",$("#monitor-main").get(0)),$("#monitor-main").append("\n\t\t\t<script type=\"text/javascript\">\n\t\t\t\tvar tabsCut = $('#tabs-cut'),controlType = bt.get_cookie('controlType') || 'control';\n\t\t\t\ttabsCut.on('click', '.tabs-item', function() {\n\t\t\t\t\tvar name = $(this).data('name'),index = $(this).index();\n\t\t\t\t\tbt.set_cookie('controlType', name);\n\t\t\t\t\t$(this).addClass('active').siblings().removeClass('active');\n\t\t\t\t\t$('.control-content .control-item-block').eq(index).show().siblings().hide()\n\t\t\t\t\tswitch (name) {\n\t\t\t\t\t\tcase 'control':\n\t\t\t\t\t\t\tcontrolObj.conTrolView.init();\n\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t\t\tcontrolObj.conTrolView.init();\n\t\t\t<\/script>\n\t\t"),e("#monitor-main")}const p={id:"monitor-main"};t("default",a({__name:"index",setup:t=>(o((async()=>{await n()})),(t,n)=>(c(),d("div",p)))}))}}}));
