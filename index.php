


<html>
<head>
    


<title>大唐彩票</title>
<link href="/images/ico.ico" rel="shortcut icon?aa">
<link rel="stylesheet" rev="stylesheet" href="/css/reset.css" type="text/css">
<link rel="stylesheet" rev="stylesheet" href="/css/global.css" type="text/css">
<link rel="stylesheet" rev="stylesheet" href="/css/index.css" type="text/css">
<link rel="stylesheet" rev="stylesheet" href="/css/scroll.css" type="text/css">
<script src="/js/jquery-1.8.3.min.js"></script>
<script type="text/javascript" src="/js/float.js"></script>
<script type="text/javascript" src="/js/jquery.SuperSlide.2.1.1.js"></script>
<script>
    var base = '';
</script>
<script src="/common/template/member/common.js"></script>
<style>
    body{
        overflow-x: hidden;
    }
</style>


    

<script src="/common/modelCommon/layer/js/layer.min.js"></script>


<link rel="stylesheet" href="/common/modelCommon/layer/css/layer.css">
<link rel="stylesheet" href="/common/modelCommon/layer/css/style.css">
<script src="/common/jquery/jquery.cookie.js"></script>
<script>
	$(function() {
		$.ajax({
			url : "/getConfig/listPopFrame.php",
			data:{'code': '14','position':'index'},
					type : "post",
					dataType : 'json',
					success : function(j) {
						var title = "";
						var content = "";
						var temp = -1;
						if (j.length > 0) {
							if (j[0].index) {
								var fw = 550;
								var fh = 550;
								if (j[0].frameWidth && j[0].frameHeight) {
									fw = j[0].frameWidth;
									fh = j[0].frameHeight;
								}
								title = j[0].title;
								if (!title) {
									title = " ";
									temp = 1;
								}
								
								var showStyle = $('#showStyle').val();
								if(!showStyle){
									layer.open({
										type : 1, //page层
										area : [ fw + 'px', fh + 'px' ],
										title : title,
										shade : 0.6, //遮罩透明度
										scrollbar : false,
										offset : '16%',//距离顶部
										moveType : 0, //拖拽风格，0是默认，1是传统拖动
										shift : 1, //0-6的动画形式，-1不开启
										content : '<div style="overflow-x: hidden;overflow-y: hidden;width:100%;height:100%;">'
												+ j[0].content + '</div>'
									});
									if (temp < 0) {
										$('.layui-layer-title').css({
											'font-size' : '16px',
											'color' : '#4c2515',
											'font-weight' : 'bold',
											'text-align' : 'center',
											'text-overflow' : 'ellipsis',
											'white-space' : 'nowrap',
											'padding' : '10px'
										})
									}
								}else{
									
									$(function(){
										  if ($.cookie('SHOW_FRAME')){
									             $("#LsjmyModal").hide();
									             $('#Lsj-fkinglayer').hide();
									             return;
									         }else{
									        	 if (temp > 0) {
									        		 $('#LsjmyModal #Lsj_modal-header').remove();
									        	 }else{
									        		 $('#LsjmyModal #lsj_title').html(title);
									        	 }
									        	 $('#LsjmyModal #Lsj_modal-content').css('width',fw);
									        	 $('#LsjmyModal #Lsjmodal-body_contents').css('height',fh);
									        	 $('#LsjmyModal #Lsjmodal-body_contents').html(j[0].content);
									            $('#Lsj-fkinglayer').show();
									            $("#LsjmyModal").show();    
									         }
									});
									
								}
							
							}
						}

					}
				});
	});
	
    function removers(i) {
        if (i == 1) {
            $.cookie('SHOW_FRAME', 'Y', {path: '/', expires: ''});
        }
        $('#LsjmyModal').remove();
    }
</script>
<!-- 弹窗 -->
<div id="LsjmyModal" class="Lsj-Modal">
    <div class="Lsj_modal-content pop_border_color" id="Lsj_modal-content">
    
        <div class="Lsj_modal-header pop_title_box_bcolor" id="Lsj_modal-header">
            <span class="Lsj-close" onclick="removers();">×</span>
            <h3 class="pop_title_color" id="lsj_title"></h3>
        </div>
        
        <div class="Lsjmodal-body_contents pop_box_bg_color" id="Lsjmodal-body_contents"></div>
        
        <div class="Lsj_modal-footer">
            <div class="Lsjbtn-bottom-two-right">
                <button class="Lsj_okBtn Lsj_outline" onclick="removers(1);">下次不再显示</button>
                <button class="Lsj_okBtn Lsj_filled" onclick="removers();">确定</button>
            </div>
        </div>
        
    </div>
    <div id="Lsj-fkinglayer" style="display: none;"></div>
</div>

<!-- 红包功能 -->
<!--
	<script src="/common/js/redpacket/redbag.js?v=1.3.12122" path=""></script>
-->

<!-- 统计代码 -->
<div style="position: fixed; z-index: 99; bottom: 0;" id="accessStatisticsCode"></div>


</head>
<body>



<div class="header">
    


<div class="psr">
    <div class="newbox">
        <div class="inner">
            <div class="newin">
                <div class="lunleft" style="color: white">
                    <marquee scrollamount="6" scrolldelay="100" direction="left"onmouseover="this.stop();"onmouseout="this.start();" style="padding-top: 6px;"></marquee>
                </div>
            </div>
        </div>
    </div>
</div>

    <div class="cl"></div>
    <div class="nav">
        <div class="inner">
            <div class="logo">
                <h1>
                    <a href="/index.do" class="">
                        <img src="/images/logo_page.png" alt="">
                    </a>
                </h1>
            </div>
            <div class="navul">
                <ul>
                    <li>
                        <a href="/index.do" class="ico">
                            <span class="ving">
                                <img src="/images/nv1.png" alt="">
                            </span>
                            <span class="nvwz">网站首页 </span>
                        </a>
                    </li>
                    <li>
                        <a href="/index/games.do">
                            <span class="ving">
                                <img src="/images/nv2.png" alt="">
                            </span>
                            <span class="nvwz">彩票游戏</span>
                        </a>
                    </li>
                    <li>
                        <a href="/index/real.do">
                            <span class="ving">
                                <img src="/images/nv6.png" alt="">
                            </span>
                            <span class="nvwz">真人娱乐</span>
                        </a>
                    </li>
                    <li>
                        <a href="/index/qipai.do" target="_shoe" class="">
                            <span class="ving">
                                <img src="/images/nv4.png" alt="">
                            </span>
                            <span class="nvwz">棋牌游戏 </span>
                        </a>
                    </li>
                    <li>
                        <a href="/index/egame.do">
                            <span class="ving">
                                <img src="/images/nv61.png" alt="">
                            </span>
                            <span class="nvwz">电子游艺</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:alert('请先登录吧！')">
                        <span class="ving">
                                <img src="/images/nv3.png" alt="">
                            </span>
                        <span class="nvwz">YG彩票   </span>
                        </a>
                    </li>
                    <li>
                        <a href="/index/sport.do">
                            <span class="ving">
                                <img src="/images/nv7.png" alt="">
                            </span>
                            <span class="nvwz">体育竞技</span>
                        </a>
                    </li>
                    <li>
                        <a href="/index/active.do" class="">
                        <span class="ving">
                                <img src="/images/nv5.png" alt="">
                            </span>
                        <span class="nvwz">优惠活动 </span>
                        </a>
                    </li>
                    <li>
                        <a href="/index/rookieHelp.do?code=4" class="">
                            <span class="ving">
                                <img src="/images/nv8.png" alt="">
                            </span>
                            <span class="nvwz">代理加盟 </span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
<script>
    function yicaipiao(){
        var windowOpen = window.open();
        var result = null;
        $.ajax({
            url: base + "/forwardTtLottery.do",
            type:'POST',
            async:false,
            success:function(res){
                result = res;
            }
        });
        if(result.success){
            windowOpen.location.href = result.url;
        }else{
            var new_doc = windowOpen.document.open("text/html","replace");
            new_doc.write("<script>alert('" + (result.msg || result.description || result.message) + "');window.close();<\/script>");
            new_doc.close();
        }
    }
</script>



<div class="bannerge"></div>
<div class="banner">
    


<div class="inner psr">
    <div class="dengbox">
        
            <div class="dengin">
                <div class="dengtou">
                    <span class="dengtou1">用户登录</span>
                    <a href="https://live868.redlivechat.com/chat/chatClient/chatbox.jsp?companyID=1300316&configID=67406&jid=8507881777&s=1" target="_kf" class="kefu"></a>
                </div>
                <div class="dengitem">
                    <input type="text" id="username" class="denginpt dinpt1" placeholder="用户名" value="">
                </div>
                <div class="dengitem">
                    <input type="password" id="password" class="denginpt dinpt2" placeholder="密码" value="">
                </div>
                <div class="dengitem">
                    <input type="text" id="verifyCode" class="denginpt dinpt3" placeholder="验证码" value="" >
                    <img class="validcode" style="position: absolute;right: 6px;top: 5px; width: 83px;height: 32px;border-radius: 15px;cursor: pointer">
                </div>
                <div class="dbtnwa">
                    <a href="javascript:loginB()" class="dbtn dbtn1">登 陆</a>
                    <a href="/regpage.do" class="dbtn dbtn2">注 册</a>
                </div>
                <div class="dbtnwa">
                    <a href="/registerGuestPage.do" target="_blank" class="dbtnx dbtn3"></a>
                </div>
            </div>
        
        
    </div>
</div>
<script>
    function enter_the_game() {
        window.open('/lotteryV2/index.do ');
    }

    function out() {
        $(function () {
            var drop_out = confirm("你确定退出登录吗?");
            if (drop_out == true) {
                window.location.href = '/logout.do';
            }
        })
    }

    //回车按键登入
    document.onkeydown = function (event_e) {
        if (window.event) {
            event_e = window.event;
        }
        var int_keycode = event_e.charCode || event_e.keyCode;
        if (int_keycode == '13') {
            loginB();
            return false;
        }
    }
</script>



    <ul class="tutu">
        


<style type="text/css">
	.slideBox{min-width: 1024px; width: 100%; position: relative; overflow: hidden; height: 411px !important;}
	.slideBox .bd{height: 411px !important;position: absolute; width: 1920px; left: 50%; margin-left: -960px; overflow: hidden;text-align: center;}
	.slideBox .hd{ position: absolute; left: 0; right: 0; bottom: 20px; z-index: 4; text-align: center;}
	.slideBox .hd ul li{display: inline-block; height: 12px; width: 12px; margin: 0 5px;border-radius: 6px;cursor: pointer; background: white; -webkit-transition: all .5s;}
	.slideBox .hd ul li.on{ background: yellow;}
</style>
<div id="slideBox" class="slideBox">
	<div class="bd">
		<ul id="lunbo">
		</ul>
	</div>
	<div class="hd">
		<ul></ul>
	</div>
</div>
<script type="text/javascript">
	function lunbo() {
		$.ajax({
			url:"/getConfig/getLunBo.php",
			type:"GET",
			dataType:"json",
			success:function(j) {
				var col = "";
				var dian = "";
				for (var i in j) {
					if (j[i].status == 2) {
						
						col += '<li><a href="';
						if (j[i].titleUrl) {
							col += j[i].titleUrl + '" target="_blank';
						} else {
							col += "javascript:void(0);";
						}
						col += '"><img src="' + j[i].titleImg + '"></a></li>';
						if(j.length > 1){
							dian += "<li></li>";
						}
					}
				}
				$("#lunbo").html(col);
				$("div.hd ul").html(dian);
				if(j.length > 1){
					jQuery(".slideBox").slide({
						mainCell:".bd ul",effect:"fold",autoPlay:true,delayTime:1500
					});
				}
			}
		});
	}
	lunbo();
</script>

    </ul>
</div>
<div class="content" style="height:833px;">
    <div class="inner">
        <div class="cont1">
            <div class="datu">
                <ul>
                    <li>
                        <a href="/index/real.do"    class="">
                            <img src="/images/mg12.png?aaa" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="/index/qipai.do" target="_shoe" class="">
                            <img src="/images/mg2.png" alt="">
                        </a>
                    </li>
                </ul>
            </div>
            <div class="xiaotu">
                <ul>
                    <li>
                        <a href="/index/games.do" class="">
                            <span class="cptu">
                                <img src="/images/cp1.png" alt="">
                            </span>
                            <span class="cpwz">六合彩</span>
                        </a>
                    </li>
                    <li>
                        <a href="/index/games.do" class="">
                            <span class="cptu">
                                <img src="/images/cp2.png" alt="">
                            </span>
                            <span class="cpwz">北京赛车</span>
                        </a>
                    </li>
                    <li>
                        <a href="/index/games.do" class="">
                            <span class="cptu">
                                <img src="/images/cp3.png" alt="">
                            </span>
                            <span class="cpwz">重庆时时彩</span>
                        </a>
                    </li>
                    <li>
                        <a href="/index/games.do" class="">
                            <span class="cptu">
                                <img src="/images/cp4.png" alt="">
                            </span>
                            <span class="cpwz">PC蛋蛋</span>
                        </a>
                    </li>
                    <li>
                        <a href="/index/games.do" class="">
                            <span class="cptu">
                                <img src="/images/cp5.png" alt="">
                            </span>
                            <span class="cpwz">幸运飞艇</span>
                        </a>
                    </li>
                    <li>
                        <a href="/index/games.do"  class="">
                            <span class="cptu">
                                <img src="/images/cp6.png" alt="">
                            </span>
                            <span class="cpwz">幸运农场</span>
                        </a>
                    </li>
                    <li>
                        <a href="/index/games.do"  class="">
                            <span class="cptu">
                                <img src="/images/cp7.png" alt="">
                            </span>
                            <span class="cpwz">加拿大28</span>
                        </a>
                    </li>
                    <li>
                        <a href="/index/games.do" class="">
                            <span class="cptu">
                                <img src="/images/cp8.png" alt="">
                            </span>
                            <span class="cpwz">快三</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="contwz">
            <img src="/images/youshi.png?adwd" alt="">
        </div>
    </div>
</div>





<div class="footer" style="border-top: 5px solid #e461618f">
    <div class="inner">
        <div class="fimg">
            <img src="/images/fimg.png?adw" alt="">
        </div>
        <div class="cop">
            为了保证您最佳体验环境，推荐使用IE浏览器，谷歌浏览器或火狐浏览器
            <br>
            Copyright © 大唐彩票 All Rights Reserved.
        </div>
    </div>
</div>




<style>
    #floatLeft a {
        display: block
    }

    #floatRight a {
        display: block
    }
</style>
<div id="floatLeft" picfloat="left" >
    <a href="javascript:alert('请登录会员吧!')" target="_cai">
        <img src="/images/ldao1.png?aaa">
    </a>
    <a href="/index/luckyLottery.do" target="_zuap">
        <img src="/images/ldao2.png">
    </a>
    <a href="javascript:void(0)">
        <img src="/images/l3.png">
    </a>
    <a href="https://889789.top/" id="closeLeft">
        <img src="/images/ldao4.png">
    </a>
</div>
<div id="floatRight" picfloat="right" >
    <img src="/images/rdao.png" alt="">
    <a href="javascript:void(0)" style="position: absolute;top: 89px;width: 100%; height: 106px;">

    </a>

    <a href="tencent://message/?uin=23307086&Menu=yes" target="_qq"style="position: absolute;top: 187px;width: 100%; height:46px;">

    </a>
    <a href="tencent://message/?uin=23307089&Menu=yes" target="_qq"style="position: absolute;width: 100%; top: 231px;height: 21px;">

    </a>
    <a href="tencent://message/?uin=23307087&Menu=yes" target="_qq"style="position: absolute;width: 100%; top: 247px;height: 21px;">

    </a>
        <a href="/index/signNew.do" target="_ian"style="position: absolute;top: 273px;width: 100%; height: 39px;">

    </a>

    <a href="https://live868.redlivechat.com/chat/chatClient/chatbox.jsp?companyID=1300316&configID=67406&jid=8507881777&s=1" target="_kf"style="position: absolute;top: 313px;width: 100%; height: 40px;">

    </a>

    <a href="javascript:;" id="closeRight"style="position: absolute;top:349px;width: 100%; height: 23px;">

    </a>

</div>

<script type="text/javascript">
    $('#floatLeft').Float({
        'floatRight': 0,
        'topSide': 183,
        'side' : 5,
        'close': 'closeLeft'
    })
    $('#floatRight').Float({
        'floatRight': 1,
        'topSide': 183,
        'side': 5,
        'close': 'closeRight'
    })
</script>

</body>
</html>歐文