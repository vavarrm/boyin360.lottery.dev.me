(function() {
	var _tags = document.getElementsByTagName("script");
	window.base = _tags[_tags.length - 1].getAttribute("path");
})();

/**
 * JSON
 */
var JSON = JSON || {};
(function() {

	function f(n) {
		// Format integers to have at least two digits.
		return n < 10 ? '0' + n : n;
	}

	if (typeof Date.prototype.toJSON !== 'function') {

		Date.prototype.toJSON = function(key) {

			return isFinite(this.valueOf()) ? this.getUTCFullYear() + '-'
					+ f(this.getUTCMonth() + 1) + '-' + f(this.getUTCDate())
					+ 'T' + f(this.getUTCHours()) + ':'
					+ f(this.getUTCMinutes()) + ':' + f(this.getUTCSeconds())
					+ 'Z' : null;
		};

		String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(
				key) {
			return this.valueOf();
		};
	}

	var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = { // table
		// of
		// character
		// substitutions
		'\b' : '\\b',
		'\t' : '\\t',
		'\n' : '\\n',
		'\f' : '\\f',
		'\r' : '\\r',
		'"' : '\\"',
		'\\' : '\\\\'
	}, rep;
	function quote(string) {
		escapable.lastIndex = 0;
		return escapable.test(string) ? '"'
				+ string.replace(escapable,
						function(a) {
							var c = meta[a];
							return typeof c === 'string' ? c : '\\u'
									+ ('0000' + a.charCodeAt(0).toString(16))
											.slice(-4);
						}) + '"' : '"' + string + '"';
	}
	function str(key, holder) {
		var i, // The loop counter.
		k, // The member key.
		v, // The member value.
		length, mind = gap, partial, value = holder[key];
		if (value && typeof value === 'object'
				&& typeof value.toJSON === 'function') {
			value = value.toJSON(key);
		}
		if (typeof rep === 'function') {
			value = rep.call(holder, key, value);
		}
		switch (typeof value) {
		case 'string':
			return quote(value);
		case 'number':
			return isFinite(value) ? String(value) : 'null';
		case 'boolean':
		case 'null':
			return String(value);
		case 'object':
			if (!value) {
				return 'null';
			}
			gap += indent;
			partial = [];
			if (Object.prototype.toString.apply(value) === '[object Array]') {

				length = value.length;
				for (i = 0; i < length; i += 1) {
					partial[i] = str(i, value) || 'null';
				}
				v = partial.length === 0 ? '[]' : gap ? '[\n' + gap
						+ partial.join(',\n' + gap) + '\n' + mind + ']' : '['
						+ partial.join(',') + ']';
				gap = mind;
				return v;
			}
			if (rep && typeof rep === 'object') {
				length = rep.length;
				for (i = 0; i < length; i += 1) {
					k = rep[i];
					if (typeof k === 'string') {
						v = str(k, value);
						if (v) {
							partial.push(quote(k) + (gap ? ': ' : ':') + v);
						}
					}
				}
			} else {
				for (k in value) {
					if (Object.hasOwnProperty.call(value, k)) {
						v = str(k, value);
						if (v) {
							partial.push(quote(k) + (gap ? ': ' : ':') + v);
						}
					}
				}
			}
			v = partial.length === 0 ? '{}' : gap ? '{\n' + gap
					+ partial.join(',\n' + gap) + '\n' + mind + '}' : '{'
					+ partial.join(',') + '}';
			gap = mind;
			return v;
		}
	}
	if (typeof JSON.encode !== 'function') {
		JSON.encode = function(value, replacer, space) {
			var i;
			gap = '';
			indent = '';
			if (typeof space === 'number') {
				for (i = 0; i < space; i += 1) {
					indent += ' ';
				}
			} else if (typeof space === 'string') {
				indent = space;
			}
			rep = replacer;
			if (replacer
					&& typeof replacer !== 'function'
					&& (typeof replacer !== 'object' || typeof replacer.length !== 'number')) {
				throw new Error('JSON.stringify');
			}
			return str('', {
				'' : value
			});
		};
	}
	if (typeof JSON.decode !== 'function') {
		JSON.decode = function(text) {
			return eval("(" + text + ")");
		};
	}
}());

var ishttps = 'https:' == document.location.protocol ? true : false;
if (ishttps) {
	var ptoto = 'https://';
} else {
	var ptoto = 'http://';
}
var red_site_domain = ptoto + window.location.host;
function red_bag_html_(red_site_domain) {

	red_bag_html = '<link href="'+base+'/common/css/redpacket/red_pc.css?v=7" rel="stylesheet" type="text/css">';
	red_bag_html += "<div id=\"wrapper_redbag\">";
	red_bag_html += "            <div class=\"box\" style=\"position: absolute; width: 100%; height: 100%; display:none\">";
	red_bag_html += "                <div class=\"demo\">";
	red_bag_html += "                    <div onclick=\"document.getElementById('hdddddddddd').style.display='none';\" style='position:absolute;z-index:900;background-repeat: no-repeat;width: 41px;height: 40px;left: 180px;background-image:url(\""+base+"/common/images/redpacket/close-btn.png\");zoom: 0.5;'></div>";
	red_bag_html += "                    <a href=\"javascript:;\" class=\"reg_flipInX\"><img src=\""+base+"/common/images/redpacket/rt-ad.png\"></a>";
	red_bag_html += "                </div>";

	red_bag_html += "";
	red_bag_html += "                <div id=\"dialogBg\"></div>";
	red_bag_html += "                <div id=\"dialog\" class=\"animated\">";
	red_bag_html += "                    <div class=\"red_bg\">";
	red_bag_html += "                        <div class=\"dialogTop\">";
	red_bag_html += "                            <a class=\"claseDialogBtn\"></a>";
	red_bag_html += "                        </div>";
	red_bag_html += "                    <div id=\"djs_redbag\" class=\"djs\"><strong></strong></div>";
	red_bag_html += "                    <div class=\"red_but \"><span id=\"red_sp\"><img src=\""+base+"/common/images/redpacket/q_red.gif\" ></span></div>";
	red_bag_html += "                    <div class=\"red_but \" style=\"position: absolute;top: 30px;color: floralwhite; font-size: 20px;font-weight: bold;background: orange;border-radius: 10px;\"><span style=\"margin-left: 2px;\" onclick=\"openRedRule()\">红包规则</span></div>";
	red_bag_html += "                        <div class=\"red_ping hide\"><span id=\"red_sp\">派奖中...请稍后</span></div>";
	red_bag_html += "                        <div class=\"ren_box\" id=\"ren_box\">";
	red_bag_html += "                            <p id=\"red_qd\" class=\"red_p hide\"><span>恭喜抢到</span><span id=\"redmoney\">0</span><span>元</span><br><span>（系统五分钟内派发）</span></p>";
	red_bag_html += "                            <p id=\"error\" class=\"red_p hide\"><span id=\"error_msg\">Sorry，来晚一步！</span></p>";
	red_bag_html += "                            <span class=\"red_a\" href=\"javascript:;\">查看记录</span>";
	red_bag_html += "                        </div>";
	red_bag_html += "                        <div class=\"jilu\">";
	red_bag_html += "                            <div class=\"jl_text str1 str_wrap\">";
	red_bag_html += "                                ";
	red_bag_html += "                        </div>";
	red_bag_html += "                    </div>";
	red_bag_html += "                </div>";
	red_bag_html += "</div>";
	red_bag_html += '<script type="text/javascript" src="'+base+'/common/js/redpacket/liMarquee.js"></scritp>';
	return red_bag_html;
}

function toHBWin(url) {
	var iWidth=800; //弹出窗口的宽度;
	var iHeight=600; //弹出窗口的高度;
	var iTop = (window.screen.availHeight-30-iHeight)/2; //获得窗口的垂直位置;
	var iLeft = (window.screen.availWidth-10-iWidth)/2; //获得窗口的水平位置;
	window.open(url,"","height="+iHeight+", width="+iWidth+", top="+iTop+", left="+iLeft);
}

function openRedRule(){
	toHBWin(base + '/index/redRule.do');
}

(function($) {
	$.extend({
		timer : function(action, time) {
			var _timer;
			if ($.isFunction(action)) {
				(function() {
					_timer = setInterval(function() {
						action();
					}, time);
				})();
			}
			return _timer;
		}
	});
})(jQuery);

// redbag
(function($) {
	// 红包js
	var iii = 0;
	$.redbag = {
		redPacket : {},
		isopen : false,
		intDiff : -3600,
		timer : -1,
		initbox : function() {
			var _this = this;
			// 抢红包事件
			$("#red_sp").click(function() {
				if(_this.isopen){
					$(".red_but").hide();
					$(".red_ping").show();
					$.ajax({
				        url:base+'/center/redpacket/grab.do',
				        type:'POST',
				        data:{redPacketId:_this.redPacket.id},
				        success:function(json,status,xhr){
				         	var ceipstate = xhr.getResponseHeader("ceipstate")
							if (!ceipstate || ceipstate == 1) {// 正常响应
								$(".red_p").addClass("hide");
								$("#red_qd").removeClass("hide");
								$("#red_qd #redmoney").html(json);
							} else {// 后台异常
								$("#red_qd").addClass("hide");
								$("#error").removeClass("hide");// needlogin
								if(ceipstate == 3){
									$("#error #error_msg").html(json.msg);
								}else if(ceipstate == 4){
									$("#error #error_msg").html("请先登录！");
								}else {
									$("#error #error_msg").html("抢红包失败！");
								}
								$(".red_a").hide();
							}
				        	
				        },complete:function(){
				        	$(".red_a").show();
							$(".red_ping").hide();
							$(".red_but").show();
							$("#ren_box").addClass("show");
				        }
				    });
				}
			});
			$(".red_a").click(
				function() {
					// 查看记录
					$.ajax({
						url : base + "/center/redpacket/marquee.do",
						data:{redPacketId:_this.redPacket.id},
						success : function(result) {
							if(result){
								var txt = "";
								result.forEach(function(e){
									txt += "<p><span>"+e.account+":</span><span>"+e.money+"元</span></p>";
								});
								$(".jilu .jl_text").children().html(txt)
							} else {
								$(".jilu .jl_text").children().html(
										"<p><span>暂无记录</span><span></span></p>");
							}
							$("#ren_box").removeClass("show");
							$(".jilu").addClass("show_2");
						}
					});
				});
		},
		refresh : function() {
			var _this = this;
			// 红包活动
			$.ajax({
				url : base + "/center/redpacket/progress.do",
				success : function(result) {
					_this.redPacket = result;
					var times = new Date().getTime();
					if(_this.redPacket && times < _this.redPacket.endDatetime){
						var redTimes = _this.redPacket.beginDatetime;
						if (times > redTimes) {
							redTimes = _this.redPacket.endDatetime;
							_this.intDiff = ~~((redTimes - times) / 1000);
						} else {
							_this.intDiff = ~~((times - redTimes) / 1000);
						}
						if (iii == 0) {
							$('#hdddddddddd').html(
									red_bag_html_(red_site_domain));
							clickfunction();
							iii++;
						}
						$("#wrapper_redbag .box").show();
						_this.initbox();
					} else {
						$("#wrapper_redbag .box").hide();
					}
				}
			});
		},
		dtimer : function() {
			var _this = this;
			_this.timer = $.timer(function() {
				var day = 0, hour = 0, minute = 0, second = 0, type = 1;// 时间默认值
				var times = new Date().getTime();
				if (_this.redPacket && times < _this.redPacket.endDatetime) {
					if (_this.intDiff > 0) {
						type = 1;
					} else {
						type = 2;
					}
				} else {
					return;
				}
				if (_this.intDiff > 0) {
					day = Math.floor(_this.intDiff / (60 * 60 * 24));
					hour = Math.floor(_this.intDiff / (60 * 60)) - (day * 24);
					minute = Math.floor(_this.intDiff / 60) - (day * 24 * 60)
							- (hour * 60);
					second = Math.floor(_this.intDiff) - (day * 24 * 60 * 60)
							- (hour * 60 * 60) - (minute * 60);
				} else {
					var shijian = Math.abs(_this.intDiff)
					day = Math.floor(shijian / (60 * 60 * 24));
					hour = Math.floor(shijian / (60 * 60)) - (day * 24);
					minute = Math.floor(shijian / 60) - (day * 24 * 60)
							- (hour * 60);
					second = Math.floor(shijian) - (day * 24 * 60 * 60)
							- (hour * 60 * 60) - (minute * 60);
				}
				if (minute <= 9)
					minute = '0' + minute;
				if (second <= 9)
					second = '0' + second;
				txt = type == 2 ? "离活动开始还差:" : "离结束还差:";
				$("#djs_redbag").children().html(
						txt + day + '天' + hour + '时' + minute + '分' + second
								+ '秒');

				if (type == 2) {
					_this.intDiff++;
					if (_this.intDiff == 0) {
						_this.isopen = true;
						_this.intDiff = ~~((_this.redPacket.endDatetime - new Date()
								.getTime()) / 1000);
					} else {
						_this.isopen = false;
					}
				} else {
					_this.intDiff--;
					if (_this.intDiff == 0) {
						_this.isopen = false;
						clearInterval(_this.timer);
						$("#djs_redbag").children().html("活动已结束！");
					} else {
						_this.isopen = true;
					}
				}
			}, 1000);
		}
	}
})(jQuery);

function getCookie(name) {
	var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
	if (arr = document.cookie.match(reg))
		return unescape(arr[2]);
	else
		return null;
}

var w, h, className;
function getSrceenWH() {
	w = $(window).width();
	h = $(window).height();
	$('#dialogBg').width(w).height(h);
}

window.onresize = function() {
	getSrceenWH();
}
$(window).resize();

function clickfunction() {
	getSrceenWH();
	// 显示弹框
	$('.box a').click(
			function() {
				className = $(this).attr('class');
				$('#dialogBg').fadeIn(300);
				$('#dialog').removeAttr('class').addClass(
						'animated ' + className + '').fadeIn();
			});

	// 关闭弹窗
	$('.claseDialogBtn').click(function() {
		$('#dialogBg').fadeOut(300, function() {
			$('#dialog').addClass('bounceOutUp').fadeOut();
		});
	});

	$(".claseDialogBtn").click(function() {
		$("#ren_box").removeClass("show");
		$(".jilu").removeClass("show_2");
	});
}
$(document).ready(function() {
	$('body').append("<div id='hdddddddddd'></div>");
	$.redbag.refresh();
	$.redbag.dtimer();
})
/*
 * var get_redbag = function(){ $.redbag.refresh(); } $.timer(get_redbag,
 * 60000);
 */