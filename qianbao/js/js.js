

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
		
	//轮播图
//	
////	var num=$('.ban_pic ul li').length;
////	var num1=0
//	var n=3
//	var timer;
//	timer=setInterval(function(){
////		if(num1==num-1){
////			$('.ban_pic ul li').eq(num1+1).fadeIn('slow').siblings('.ban_pic ul li').fadeOut('slow')
////		}
////		num1++
//		
//		if(! $('.ban_pic ul li').eq(n).is(':hidden')){
//			$('.ban_pic ul li').eq(n).fadeOut('slow')
//		}else{
//			$('.ban_pic ul li').eq(n).fadeIn('slow')
//		}
//		n--;
//		if(n==0){
//			n=3
//		}
//	},2000)
	var timer;
	var m=$('.pic_span span').length;
	var n=0;
	$('.ban_pic ul li:gt(0)').hide()
	$('.pic_span span').mouseover(function(){
		$(this).addClass('one').siblings().removeClass('one')
		var n1=$('.pic_span span').index(this);
		//alert(n1)
		$('.ban_pic ul li').eq(n1).fadeIn('slow').siblings().fadeOut('slow');
		n=n1
	})
	
	//创建左右按钮
	var $left=$('.pic .left')
	var $right=$('.pic .right')

	
	//滑入滑出按钮，按钮变化
	$left.mouseover(function(){
		$(this).css({background:'url(img/hall_bg.png) no-repeat -3px -89px'})
	})
	$left.mouseout(function(){
		$(this).css({background:'url(img/hall_bg.png) no-repeat -3px -4px'})
	})
	$right.mouseover(function(){
		$(this).css({background:'url(img/hall_bg.png) no-repeat -47px -89px'})
	})
	$right.mouseout(function(){
		$(this).css({background:'url(img/hall_bg.png) no-repeat -47px -4px'})
	})
	//鼠标划入显示按钮
	$('.pic').mouseover(function(){
		$left.show()
		$right.show()
	})
	$('.pic').mouseout(function(){
		$left.hide()
		$right.hide()
	})
	
	//点击按钮图片滑动
	$left.click(function(){
		clearInterval(timer)
		if(n==0){
			n=m
		}
		$('.ban_pic ul li').eq(n-1).fadeIn('slow').siblings('li').fadeOut('slow')
		$('.pic_span span').eq(n-1).addClass('one').siblings().removeClass('one')
		n--
	})
	$right.click(function(){
		move()
	})
	//鼠标移出图片，激发动画
	$('.pic').mouseout(function(){
		MOVE()
	})
	$('.pic').mouseover(function(){
		$('.pic').css({cursor:'pointer'})
		clearInterval(timer)
	})
	//运动函数
	function MOVE(){
		
	
	timer=setInterval(function(){
		move()
	},2000)	
	}
	MOVE()
	function move(){
		if(n==m-1){
			n=-1
		}
		$('.ban_pic ul li').eq(n+1).fadeIn('slow').siblings('li').fadeOut('slow')
		$('.pic_span span').eq(n+1).addClass('one').siblings().removeClass('one')
		n++
	}

	
	
//	二级菜单
	$('.list .li').mouseover(function(){
		$(this).animate({height:104},10).css({
			background:'black',
			opacity:'1',
		})
		$(this).siblings().animate({height:43},10).css({
//			background:'black',
			opacity:'0.5'
		})
		$(this).css({cursor:'pointer'})
	})
	
	
//	楼梯效果
	var $stairs=$('#stairs')
	
	$('#stairs p a').mouseover(function(){
		$(this).children('span').css({display:'none'})
		$(this).children('em').css({display:'block'})
		
	})
	$('#stairs p a').mouseout(function(){
		$(this).children('span').css({display:'block'})
		$(this).children('em').css({display:'none'})		
	})
	$('#stairs p a').click(function(){
		if($(this).index()==0){
			//alert(1)
			$('html,body').animate({scrollTop:($('#menu').offset().top)},500)
		}else{
			$('html,body').animate({scrollTop:$('#menu').offset().top+$(this).index()*497+'px'},500)
		}
		//$('html,body').animate({scrollTop:($(this).index()+1)*500+'px'},1000)

	})
	$(window).scroll(function(){
		if($(this).scrollTop()>=500){
			$('#stairs').show()
		}
		if($(this).scrollTop()<=500){
			$('#stairs').hide()
		}

		var index=Math.floor($(document).scrollTop()/500)-1;
//		if($(this).scrollTop()>=$('#menu').offset().top&&$(this).scrollTop()<=$('#menu').offset().top+400){
//			$("#stairs p a").eq(0).children('span').css({display:'none'})
//			$("#stairs p a").eq(0).children('em').css({display:'block'})
//			$("#stairs p a").eq(0).siblings().children('span').css({display:'block'})
//			$("#stairs p a").eq(0).siblings().children('em').css({display:'none'})
//		}else{
			 $("#stairs p a").eq(index).children('span').css({display:'none'})
			 $("#stairs p a").eq(index).children('em').css({display:'block'})
			 $("#stairs p a").eq(index).siblings().children('span').css({display:'block'})
			 $("#stairs p a").eq(index).siblings().children('em').css({display:'none'})
//		}		
		
	})
	
	
	
//	侧边栏
	$('.li1').mouseover(function(){
		$('.dianzan').show()
//		$('.li1 h3').css({background: 'url(img/xiazai.png) no-repeat 0 -27px'})
	})
	$('.li1').mouseout(function(){
		$('.dianzan').hide()
//		$('.li1 h3').css({background: 'url(img/xiazai.png) no-repeat 0 0px'})
	})
	$('.li1 h3').click(function(){
		$('.li1 h3').css({background: 'url(img/xiazai.png) no-repeat 0 -55px'})
		$('.li1 p').eq(0).css({color:'red'})
		$('.li1 p').eq(1).html(2).css({color:'red'})
	})
	$('.li3').mouseover(function(){
		$('.div3').show()
		$(this).css({background: 'url(img/下载.png) no-repeat 0 0'})
	})
	$('.li3').mouseout(function(){
		$('.div3').hide()
		$(this).css({background: 'url(img/下载.png) no-repeat -53px 0'})
	})
	$('.li4').mouseover(function(){
		$('.div4').show()
		$(this).css({background: 'url(img/下载.png) no-repeat 0 -53px'})
	})
	$('.li4').mouseout(function(){
		$('.div4').hide()
		$(this).css({background: 'url(img/下载.png) no-repeat -53px -53px'})
	})
	$('.li5').mouseover(function(){
		$(this).css({background: 'url(img/下载.png) no-repeat -0px -106px'})
	})
	$('.li5').mouseout(function(){
		$(this).css({background: 'url(img/下载.png) no-repeat -53px -106px'})
	})
	$('.li5').click(function(){
		
		$('body,html').animate({ scrollTop: 0 }, 1000);
	})
	$('.li6').click(function(){
		$('#abs').fadeOut(500)
		$('.wfj').fadeIn(500)
	})
	$('.wfj').click(function(){
		$('#abs').fadeIn(500)
		$('.wfj').fadeOut(500)
	})
	$(window).scroll(function(){
		if($(this).scrollTop()>0){
			$('.li5').show(500)
		}else{
			$('.li5').hide(500)
		}
	})
	//跳转到购物车页面
	$('.li2').click(function(){
		window.location='car.html'
	})
	
	
	//menu_1
	$('.menu_11 div').hover(f1,f2)
	function f1(){
		$(this).css({
			opacity:'0.85',
			cursor:'pointer'
		})
	}
	function f2(){
		$(this).css({
			opacity:'1'
		})
	}
	
	
	
	
	
	$('.dl').click(function(){
		window.location='login.html'
	})
	$('.zc').click(function(){
		window.location='register.html'
	})
	$('.DL').click(function(){
		window.location='login.html'
	})
	$('.ZC').click(function(){
		window.location='register.html'
	})
	$('.car_box').click(function(){
		
		window.location='car.html'
	})
	$('.top_right .span1').click(function(){
		window.location='car.html'
	})
	
	
	$.get('js/index.json',function(msg){
		
		adda(msg)
		
	})
	function adda(json){
		var i=0;
		for (var key in json) {
		var tit=json[key].tit;
		console.log(tit)
		var arr=tit.split(" ");
		console.log(arr)
		//for(var i=0;i<arr.length;i++){
			//for(i=0;;i++){
		$('<a>'+tit+'</a>').appendTo($('.aaa').eq(i))
			//}
		
		//}
		var cent=json[key].cent;
		var arr1=cent.split(" ");
		
		$('<a>'+cent+'</a>').appendTo($('.li ul li').eq(i))		
		
				
		i++
		
			
		}
		
	}
	//跳转到list
	$('.menu_1_1 a').click(function(){
		window.location='list.html'
	})
	
})




