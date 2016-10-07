$(function(){
//	top购物车
	$('.gw').mouseover(function(){
		$('.gw').css({background:'white','border-left':'#ddd','border-right':'#ddd'})
		$('.gouwuche').show()
	})
	$('.gw').mouseout(function(){
		$('.gw').css({background:'#e9ecef'})
		$('.gouwuche').hide()
	})
	$('.top_right .span1').click(function(){
		window.location='car.html'
	})
//	手机玩钱宝
	$('ul .phone').hover(f3,f4)
	function f3(){
		$('ul .phone').css({
			background:'#fff',
			position:'relative',
			'border-left':'#ddd',
			'border-right':'#ddd'
		})
		$div=$('<div></div>').appendTo($('ul .phone'));
		$img=$('<img src="img/cm_client_code_198X198.png"/>').appendTo($div);
		$img.css({
			margin:'0 20px'
		})
		$p1=$('<p>手机扫一扫</p>').appendTo($div).css({'font-size':'12px','line-height':'14px','text-align':'center',color:'#888888'})
		$p2=$('<p>下载钱宝客户端</p>').appendTo($div).css({'font-size':'12px','line-height':'14px','text-align':'center',color:'#888888'})
		$div.css({
			'z-index':9,
			position:'absolute',
			top:'30px',
			left:'-1px',
			width:'110px',
			height:'120px',
			background:'white',		
			border:'1px solid #eef1f3',
			'border-top':'none',
		})
	}
	function f4(){
		$('ul .phone').css({
			background:'#e9ecef',
		})
		$div.remove()		
	}
	//网址导航
	$('ul .net').hover(f5,f6)
	function f5(){
		$('ul .net').css({
			background:'#fff',
			position:'relative',
			'border-left':'#ddd',
			'border-right':'#ddd'
		})
		$div=$('#div')
		$div0=$('#div0').css({width:'1178px',height:'188px'})
		$div.css({
			display:'block'
		})
	}
	function f6(){
		$('ul .net').css({
			background:'#e9ecef',
		})
		$div.css({
		display:'none'
		})
	}
	//注册
	//手机号
	$('#txt').blur(function(){
		var reg=/^1[3578]\d{9}$/;
		
		if (reg.test($('#txt').val())||$('#txt').val()=='') {
			$('.reg_foot p').html('温馨提示：一张身份证只能认证一个钱宝账号')
		} else{
			$('.reg_foot p').html('用户名只能是手机号')
			var $span=$('<span></span>')
			$span.appendTo($('.reg_foot p')).css({float:'left',background: 'url(img/icon.png) no-repeat 0 0',width:'16px',height:'16px'})
		}
	})
	//密码
	$('#pwd').blur(function(){
		var $val=$('#pwd').val();
		if($val.length<1){
			$('.reg_foot ul .l1').css({background:'#ccc'}).html('低')
			$('.reg_foot ul .l2').css({background:'#ccc'})
			$('.reg_foot ul .l3').css({background:'#ccc'})
		}
		//alert(1)
		var reg=/^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~]{6,22}$/;
		if (reg.test($('#pwd').val())||$('#pwd').val()=='') {
			$('.reg_foot p').html('温馨提示：一张身份证只能认证一个钱宝账号')
		} else{
			$('.reg_foot p').html('密码长度或格式不正确')
			var $span=$('<span></span>')
			$span.appendTo($('.reg_foot p')).css({float:'left',background: 'url(img/icon.png) no-repeat 0 0',width:'16px',height:'16px'})
		}
	})
	//二次密码
	$('#pwd').keyup(function(event){
		var $val=$('#pwd').val();
		//alert($val.length)
		if($val.length<6){
			$('.reg_foot ul .l1').css({background:'rgb(252, 31, 4)',color:'#000'})
			$('.reg_foot ul .l2').css({background:'#ccc',color:'#000'}).html('中')
			$('.reg_foot ul .l3').css({background:'#ccc',color:'#000'}).html('高')
		}else if($val.length>=6&&$val.length<10){
			$('.reg_foot ul .l1').css({background:'rgb(255, 157, 4)'}).html('')
			$('.reg_foot ul .l2').css({background:'rgb(255, 157, 4)',color:'#fff'})
			$('.reg_foot ul .l3').css({background:'#ccc'})
		}else if($val.length>=12){
			$('.reg_foot ul .l1').css({background:'rgb(144, 203, 17)'}).html('')
			$('.reg_foot ul .l2').css({background:'rgb(144, 203, 17)'}).html('')
			$('.reg_foot ul .l3').css({background:'rgb(144, 203, 17)',color:'#fff'})
		}
	})
	$('#pwd2').blur(function(){
		var $val=$('#pwd').val();
		
		if ($('#pwd2').val()==$val) {
			//alert(1)
			$('.reg_foot p').html('温馨提示：一张身份证只能认证一个钱宝账号')
		} else{
			$('.reg_foot p').html('两次输入的密码不一致')
			var $span=$('<span></span>')
			$span.appendTo($('.reg_foot p')).css({float:'left',background: 'url(img/icon.png) no-repeat 0 0',width:'16px',height:'16px'})
		}
	})
	//验证码
	var code;
	$('.reg_foot em').click(function(){
		//alert(1)
		var arr=['0','1','2','3','4','5','6','7','8','9']
		code=''
		for (var i=0;i<4;i++) {
			var index=Math.floor(Math.random()*arr.length)
			code+=arr[index];
			//alert(code)
		}
		//alert(code)
		$('#txt2').val(code).css({color:'#999'})
	})
	$('#btn').click(function(){
		//alert(1)
		var name=$('#txt').val();
		var pwd=$('#pwd').val();
		$.ajax({
			url:'http://bokanappapi.sinaapp.com/HQNews/user/userregister.php',
			data:{username:name,password:pwd},
			dataType:'json',
			success:function(msg){
				if(msg.code==400){
					alert('用户名已存在');
				}else if(msg.code==200){
					alert('注册成功!即将跳入登录页面');
					window.location='login.html';
				}
			},
			
		})		
	})
	
	$('.reg_top a').click(function(){
		window.location='login.html'
	})
	
	
})