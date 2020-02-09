var siteKey = $("#verifySiteKey").val();
var hideVerifyCode = $("#hideVerifyCode").val();
//验证码
function reloadImg(type,reg){
	if (siteKey) {
        getToken(type);
    }
	if (!hideVerifyCode || hideVerifyCode == false || hideVerifyCode == 'false') {
		var url = '';
		if(reg){
			url = base + "/regVerifycode.do?timestamp=" + (new Date().getTime())
		}else{
			url = base + "/verifycode.do?timestamp=" + (new Date().getTime())
		}
		$(".validcode").attr("src", url);
	}
}

$(function(){
	$('input#verifyCode').click(function(){
		reloadImg("login");
	});
	$("#RverifyCode").click(function(){
		reloadImg("register",1);
	});
	/*$('.validcode').click(function(){
		reloadImg("register");
	});*/
	reloadImg("login");
	reloadImg("register",1);
	setInterval(mem_refresh, 5000);
});


//A站登录
function loginA(){
	toLoginMember();
}

//B站登录
function loginB(){
	toLoginMember('B');
}

//D站登录
function loginD(){
	toLoginMember('D');
}

//B站备用登录
function loginBY(){
	toLoginMember('B','by');
}

function toLoginMember(p,tmp){
	var username,password,verifyCode;
	
	var url = base + '/lottery/index.do';
	if(p == 'B'){
		url = base + '/index.do';
	}else if(p == 'D'){
		url = base + '/lotteryV3/index.do';
	}
	
	if(tmp){
		username = $('input#username1').val();
		password = $('input#password1').val();
		verifyCode = $('input#verifyCode1').val();
	}else{
		username = $('input#username').val();
		password = $('input#password').val();
		verifyCode = $('input#verifyCode').val();
	}
	
	login_tmp(url,username,password,verifyCode);

}

function login_tmp(url,username,password,verifyCode){
	
	if(!username){
		alert("用户名不能为空");
		$('input#username').focus();
		return;
	} else if(!password){
		alert("密码不能为空");
		$('input#password').focus();
		return;
	} else if(password.length<6){
		alert("密码不能小于6位!");
		$('input#password').focus();
		return;
	} else if(!hideVerifyCode || hideVerifyCode == false || hideVerifyCode == 'false' || siteKey == null || siteKey==''){
		if(!verifyCode){
			alert("验证码不能为空");
			$('input#verifyCode').focus();
			return;
		}
	} 
	
	var data = {};
	data["account"] = username;
	data["password"] = password;
	data["verifyCode"] = verifyCode;
	data["gToken"]= $("input#gToken").val();
	$.ajax({
		url : base + "/login.do",
		type : "post",
		data : data,
		success : function(result, textStatus, xhr) {
			var ceipstate = xhr.getResponseHeader("ceipstate")
			if (!ceipstate || ceipstate == 1) {// 正常响应
				window.location.href = url;
			} else if (ceipstate == 2) {// 后台异常
				alert("后台异常，请联系管理员!");
				reloadImg("login");
			} else if (ceipstate == 3) { // 业务异常
				alert(result.msg);
				reloadImg("login");
			}
		}
	});
}

//A站注册
function regA(){
	toRegMember();
}

//A站代理注册
function daili(){
	toRegMember('daili');
}

//B站注册
function regB(){
	toRegMember('B');
}

//D站注册
function regD(){
	toRegMember('D');
}


function toRegMember(p){
	var username = $('input#Rusername').val();
	var password = $('input#Rpassword').val();
	var repassword = $('input#Rrepassword').val();
	var verifyCode = $('input#RverifyCode').val();
    if(!username){
   	 alert("用户名不能为空!");
   	 return false;
    }
    if(!password){
   	 alert("密码不能为空!");
   	 return false;
    }
    if(password.length<6){
   	 alert("密码不能小于6位!");
   	 return false;
    }
    if(!repassword){
   	 alert("确认密码不能为空!");
   	 return false;
    }
    if(password != repassword){
   	 alert("两次密码不一致!");
   	 return false;
    }
    if(!hideVerifyCode || hideVerifyCode == false || hideVerifyCode == 'false' || siteKey == null || siteKey==''){
    	if(!verifyCode){
    	   	 alert("验证码不能为空!");
    	   	 return false;
    	    }
	} 
    
    var data = getCommitData();
    data["account"] = username;
    data["password"] = password;
	data["rpassword"] = repassword;
    data["verifyCode"] = verifyCode;
    data["gToken"]=$("input[name='gToken']").val();
	var url = base + '/index.do';
	var turl = base + '/register.do';
	if(!p){
		url = base + '/lottery/index.do';
	}
	if(p == 'daili'){
		url = base + '/daili';
		turl = base + '/agtregister.do';
	}else if(p == 'D'){
		url = base + '/lotteryV3/index.do';
	}
  	$.ajax({
 		url: turl,
 		data : {
			data : JSON.encode(data)
		},
 		type:"POST",
		success : function(result, textStatus, xhr) {
			var ceipstate = xhr.getResponseHeader("ceipstate")
			if (!ceipstate || ceipstate == 1) {// 正常响应
				if(!result.success){
					alert(result.msg);
				}else{
					alert("注册成功!");
					window.location.href = url;
				}
			} else if (ceipstate == 2) {// 后台异常
				alert("后台异常，请联系管理员!");
				reloadImg("register",1);
				$('input#verifyCode').val('')
			} else if (ceipstate == 3) { // 业务异常
				alert(result.msg);
				reloadImg("register",1);
				$('input#verifyCode').val('')
			}
		}
 	});
}

function mem_refresh(){
  	$.ajax({
 		url: base + '/meminfo.php',
 		type:"POST",
		success : function(result, textStatus, xhr) {
			var ceipstate = xhr.getResponseHeader("ceipstate")
			if (!ceipstate || ceipstate == 1) {// 正常响应
				$('.station_money').html(result.money);
			} else if (ceipstate == 2) {// 后台异常
				alert("后台异常，请联系管理员!");
			} else if (ceipstate == 3) { // 业务异常
				alert(result.msg);
			}
		}
 	});
}


//menu_首页
function toIndex(){
	window.location.href = base + '/index.do'
}

//menu_彩票游戏
function toCp(code){
	var url = base + '/index/games.do';
	if(code){
		url += '?lotCode=' + code;
	}
	window.location.href = url;
}

//menu_电子游戏
function toDz(){
	window.location.href = base + '/index/egame.do'
}

//menu_体育赛事
function toTy(){
	window.location.href = base + '/index/sport.do'
}

//menu_真人游戏
function toZr(){
	window.location.href = base + '/index/real.do'
}

//menu_优惠活动
function toAc(){
	window.location.href = base + '/index/active.do'
}

//menu_帮助中心code
function userHelp(code){
	if(!code){
		alert('未正确设置code值!');
		return false;
	}
	window.location.href = base + '/index/rookieHelp.do?code=' + code;
}


//button_免费试玩
function toSw(){
	window.open(base + '/registerGuestPage.do');
}

//button_APP下载
function toDown(){
	window.open(base + '/down.do');
}

//button_手机投注
function toMobile(){
	window.open(base + '/mobile');
}

//button_代理登入
function toDaili(){
	window.open(base + '/daili');
}

//button_代理注册
function toAgt(){
	window.location.href = base + '/agtregpage.do'
}

//button_免费注册
function toReg(){
	window.location.href = base + '/regpage.do'
}

//button_在线签到
function toZxqd(){
	window.open(base + '/index/signNew.do');
}

//button_大转盘
function toDzp(){
	window.open(base + '/index/luckyLottery.do');
}

//button_红包
function toRed(){
	window.open(base + '/index/redPackage.do');
}

//button_公共页面线路检测
function toXljc(){
	window.open(base + '/user_xljc.do');
}

//button_新窗最新消息
function toNews(){
	window.open(base + '/index/news.do');
}


//=============登陆后_会员登录中心=============//
function toCenter(p){
	var url = '';
	switch (p) {
	case 1:
		url =  '/center/member/meminfo/page.do'; //会员中心
		break;
	case 2:
		url ='/center/banktrans/deposit/page.do';	//在线存款
		break;
	case 3:
		url ='/center/banktrans/draw/page.do';	//在线取款
		break;
	case 4:
		url ='/center/banktrans/mnychg/page.do'; //额度转换
		break;
	case 5:
		url ='/center/record/betrecord/page.do'; //交易记录
		break;
	case 6:
		url ='/center/news/message/page.do'; //未读消息
		break;
	case 7:
		url ='/center/record/hisrecord/page.do'; //往来记录
		break;
	case 8:
		url ='/center/record/mnyrecord/page.do'; //账变记录
		break;
	}
	window.open(base + url);
}


//设为首页
function SetHome() {
	var url = location.href;
    if (document.all) {
        document.body.style.behavior = 'url(#default#homepage)';
        document.body.setHomePage(url);
    } else {
        alert("您好,您的浏览器不支持自动设置页面为首页功能,请您手动在浏览器里设置该页面为首页!");
    }
}

//加入收藏 param：sURL 收藏网址, 收藏标题
function AddFavorite() {
	var sTitle = document.title;
	var sURL = location.href;
    sURL = encodeURI(sURL);
    try {
        window.external.addFavorite(sURL, sTitle);
    } catch (e) {
    try {
        window.sidebar.addPanel(sTitle, sURL, "");
    } catch (e) {
        alert("加入收藏失败,请使用Ctrl+D进行添加,或手动在浏览器里进行设置.");
        }
    }
}


//文字闪烁
//new toggleColor('.mfsw', [ 'yellow', '#FF0000' ], 1000);
function toggleColor( id , arr , s ){
  var self = this;
  self._i = 0;
  self._timer = null;
  
  self.run = function(){
      if(arr[self._i]){
          $(id).css('color', arr[self._i]);
      }
      self._i == 0 ? self._i++ : self._i = 0;
      self._timer = setTimeout(function(){
          self.run( id , arr , s);
      }, s);
  }
  self.run();
}

function yicaipiao(){
	if(!isLogin || isLogin == 'false'){
		alert('请先登录再进行游戏!');
		return;
	}
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
function getToken(action) {
    if (siteKey) {
        grecaptcha.ready(function () {
            grecaptcha.execute(siteKey, {action: action}).then(function(token) {
                if (action == 'login') {
                    $("input#gToken").val(token);
                } else if (action == 'register') {
                	$("input[name='gToken']").val(token)
                }
            });
        });
    }
}