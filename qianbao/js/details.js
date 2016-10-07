$(function(){	
	//购物车
	$('.car_box').click(function(){
		window.location='car.html'
	})
	
	
	//	侧边栏
	$('.li1').mouseover(function(){
		$('.dianzan').show()
		$('.li1 h3').css({background: 'url(img/xiazai.png) no-repeat 0 -27px'})
	})
	$('.li1').mouseout(function(){
		$('.dianzan').hide()
		$('.li1 h3').css({background: 'url(img/xiazai.png) no-repeat 0 0px'})
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
//	放大镜 
	var scale=$('.big_img img').width()/$('.small_img img').width();
	$('.move').css({width:$('.small_img').width()/scale,
					height:$('.small_img').height()/scale})	
	$('.small_img').hover(f1,f2)
	function f1(){
		$('.move').show()
		$('.big_img').show()
	}
	function f2(){
		$('.move').hide()
		$('.big_img').hide()
	}
	$('.small_img').mousemove(function(event){
		
		var L=event.pageX-$('.small_img').offset().left-$('.move').width()/2;
		//alert(L)
		var T=event.pageY-$('.small_img').offset().top-$('.move').height()/2;
		if(L<0){
			L=0
		}else if(L>$('.small_img').width()-$('.move').width()){
			L=$('.small_img').width()-$('.move').width()
		}
		if(T<0){
			T=0
		}else if(T>$('.small_img').height()-$('.move').height()){
			T=$('.small_img').height()-$('.move').height()
		}
		$('.move').css({left:L,top:T});
		$('.big_img img').css({left:-L*scale,top:-T*scale})
		
	})
	$('.smallpic li').hover(f3,f4);
	
	function f3(){
		
		$(this).css({border:'1px solid red'})
		$('.small_img ul li').eq($(this).index()).addClass('one').siblings().removeClass('one')
		$('.big_img ul li').eq($(this).index()).addClass('first').siblings().removeClass('first')
	}
	function f4(){
		$(this).css({border:'1px solid #eee'})
	}
	
	
	
	
	
//	吸顶
	$(window).scroll(function(){
		if($(this).scrollTop()>=$('.main_bottom').offset().top){
			$('#ceiling').show()
		}
		if($(this).scrollTop()<$('.main_bottom').offset().top){
			$('#ceiling').hide()
		}
	})
	
//	
	var index=1
	$('.a2').click(function(){
		index++;
		if(index>99){
			index=0
		}
		$('#text').val(index)
	})
	$('.a1').click(function(){
		index--;
		if(index<1){
			index=1
		}
		$('#text').val(index)
	})
	
	
	
	//加入购物车
	var timer;
	
				var m=0
				$('.btn2').click(function(){
					m++;
					$('.car_box em').html(m)
					
					
					
					
					
					
					
					
					var $box=$('<div class="box">加入成功&nbsp!</div>').appendTo($('body'))
					$box.animate({top:"45%",opacity:'1'},500,function(){
						timer=setTimeout(function(){
							$box.animate({top:"40%",opacity:"0.1"},function(){							
									$box.remove()																
								})
						},500)
					})
		})
		
		
	$('.erwema').mouseover(function(){
		$('.sss').show()
	})
	$('.erwema').mouseout(function(){
		$('.sss').hide()
	})
})