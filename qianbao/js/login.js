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
//	login
	$('.key').mouseover(function(){
		$(this).css({background: 'url(img/uc_icon_key.png) no-repeat 0 -22px'})
	})
	$('.key').mouseout(function(){
		$(this).css({background: 'url(img/uc_icon_key.png) no-repeat 0 0px'})
	})
	
	var code;
	function yzm(){
		var arr=['1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','g','k',
		'l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
		code=''
		for (var i=0;i<4;i++) {
			var index=Math.floor(Math.random()*arr.length)
			code += arr[index]
			
		}
		
		$('.login_bottom em').html(code)
		
	}
	
		yzm()
	
	
	function verify(){
		
		var inputCode=$('#txt1').val()
		//alert(inputCode)
		if (inputCode.length<=0) {
			alert('请输入验证码')
		} else if(inputCode!=code){
			alert('验证码输入错误')
			yzm()
			
		}
		
	}
	$('.zhuce a:first-child').click(function(){
		window.location='register.html'
	})
	
	
	
	
//	$('.login_bottom em').html(code)
	$('#btn').click(function(){
		verify()
		
		var name=$('#txt').val()
		var pwd=$('#psd').val()
		
		$.ajax({
			url:'http://bokanappapi.sinaapp.com/HQNews/user/userlogin.php',
			data:{username:name,password:pwd},
			dataType:'json',
			success:function(msg){
				console.log(msg);
				if (msg.code==400) {
					alert('密码错误');
				} else if(msg.code==200){
					alert('登录成功')
					window.location.href='index.html'
				}
			},
			error:function(err){
				alert('登录失败')
			}
		})
	})
})