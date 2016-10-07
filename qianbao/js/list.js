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
	//宝购
	$('.bg a').hover(f7,f8)
	function f7(){
		$(this).css({background:'url(img/bg1.gif) no-repeat 0 0'})
	}
	function f8(){
		$(this).css({background:'url(img/bg2.gif) no-repeat 0 0'})
	}
//	list
	$.get('json/list.json',function(msg){
		addLi(msg)
	})
	function addLi(json){
		var j=0;
		for (var i in json) {
			var price=json[i].price;
			var pic=json[i].pic;
			var intro=json[i].intro;
			var rush=json[i].rush;
			var b=json[i].b;
			$list=$('<ul class="list"></ul>').appendTo($('.box'))		
			$li1=$('<li class="li1"></li>').appendTo($list)
			$a=$('<a href="javascript:"></a>').appendTo($li1);
			$li2=$('<li class="li2"></li>').appendTo($list)
			$i1=$('<i>券</i>').appendTo($li2);
			$i2=$('<i>包邮</i>').appendTo($li2);
			$span=$('<span>件已抢</span>').appendTo($li2);
			$em1=$('<em></em>').appendTo($span);
			$li3=$('<li class="li3"></li>').appendTo($list)
			$li4=$('<li class="li4"></li>').appendTo($list)
			$p1=$('<p></p>').appendTo($li4);
			$em2=$('<em>¥</em>').appendTo($p1);
			$i3=$('<i></i>').appendTo($p1);
			$b=$('<b></b>').appendTo($p1);
			$p2=$('<p>立即团购</p>').appendTo($li4);
				
			$('<img src= '+pic+' />').appendTo($('.li1 a').eq(j))
			//$('.li1').css({background: "url("+pic+")"})
			$('.li3').eq(j).html(intro)
			$('.li2 em').eq(j).html(rush)
			$('.li4 i').eq(j).html(price)
			$b.html(b)
			j++
		}
		
		$('.box ul').click(function(){
			window.location='details.html'
		})
		
		$('.box ul').mouseover(function(){
			$(this).css({'box-shadow': '0px 0px 10px 5px green'})
		})
		$('.box ul').mouseout(function(){
			$(this).css({'box-shadow': 'none'})
		})
		
		
		
		
	}
	
	
	
	$('.r_top a').click(function(){
		
		$('body,html').animate({ scrollTop: 0 }, 1000);
	})
	
	
	
	
	
	//跳转到详情页
		$('p').click(function(){
			alert(1)
		})
	
})