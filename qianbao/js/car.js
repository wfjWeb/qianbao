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
	
	$('.sea').click(function(){
		$('.box').toggle()
	})
	

//	$('.shop .li5').click(function(){
//		alert(flag)
//	})


//		$('#check').click(function(){
//			$('.shop').css({background:'red'})
//		})
//		if($('#check').checked){
//			$('#check').click(function(){
//			$('.shop').css({background:'white'})
//		})
//		}
		


	var index=1
	//$('.account .li2 .s2 em').html(($('.shop .li2 em').html()*index).toFixed(2))
	$('.shop .li3 i').eq(1).click(function(){
	//	alert(1)
		index++;
		if(index>99){
			index=0
		}
		$('.shop #txt').val(index)
		$('.shop .li4').html(($('.shop .li2 em').html()*index).toFixed(2))
		$('.account .li2 .s1 em').html(0)
		$('.account .li2 .s2 em').html(0)
	})
	$('.shop .li3 i').eq(0).click(function(){
		index--;
		if(index<1){
			index=1
		}
		$('.shop #txt').val(index)
		$('.shop .li4').html(($('.shop .li2 em').html()*index).toFixed(2))
		$('.account .li2 .s1 em').html(0)
		$('.account .li2 .s2 em').html(0)
	})	
	//背景颜色
	$('#check').click(function(){
		if(this.checked){
			$('.account .li2 .s3 a').css({background:'red',color:'#fff'})
			
			
			
			$('.shop').css({background:'#fcf4d9'})
			$('.account .li2 .s1 em').html(index)
			$('.account .li2 .s2 em').html(($('.shop .li2 em').html()*index).toFixed(2))
	//$('.account .li2 .s2 em').html(($('.shop .li2 em').html()*index).toFixed(2))
	$('.shop .li3 i').eq(1).click(function(){
		
	//	alert(1)
		//index++;
		if(index>99){
			index=0
		}
		$('.shop #txt').val(index)
		$('.account .li2 .s1 em').html(index)
		
		$('.account .li2 .s2 em').html(($('.shop .li2 em').html()*index).toFixed(2))
	})
	$('.shop .li3 i').eq(0).click(function(){
		//index--;
		if(index<1){
			index=1
		}
		$('.shop #txt').val(index)
		$('.account .li2 .s1 em').html(index)
		//$('.shop .li4').html(($('.shop .li2 em').html()*index).toFixed(2))
		$('.account .li2 .s2 em').html(($('.shop .li2 em').html()*index).toFixed(2))
	})			
		} else {
			$('.account .li2 .s3 a').css({background:'#e4e4e4',color:'#999'})
			
			
			
	//$('.account .li2 .s2 em').html(($('.shop .li2 em').html()*index).toFixed(2))
	$('.shop .li3 i').eq(1).click(function(){
	//	alert(1)
		//index++;
		if(index>99){
			index=0
		}
		$('.shop #txt').val(index)
		$('.account .li2 .s1 em').html(0)
		$('.account .li2 .s2 em').html(0)
	})
	$('.shop .li3 i').eq(0).click(function(){
		//index--;
		if(index<1){
			index=1
		}
		$('.shop #txt').val(index)
		$('.account .li2 .s1 em').html(0)
		$('.account .li2 .s2 em').html(0)
	})	
		$('.shop').css({background:'white'})
		$('.account .li2 .s1 em').html(0)
		$('.account .li2 .s2 em').html(0)
		}
	});
	
	
	
	//tip
	$('.tip').hide()
	//删除
	$('.shop .li5 a').click(function(){
		$('.tip').show()
		$('.zzc').show()
		//alert(1)
		//$('.buy .shop').remove()
		$('.confirm').click(function(){
			$('#box').css({display:'block'})
			$('#box1').css({display:'none'})
			//alert(1)
			$('.buy .shop').remove()
			$('.tip').hide()
			$('.zzc').hide()
			$('.account .li2 .s3 a').css({background:'#e4e4e4',color:'#999'})
			$('.account .li2 .s1 em').html(0)
			$('.account .li2 .s2 em').html(0)
		})
		$('.cancel').click(function(){
			$('.tip').hide()
			$('.zzc').hide()
		})
	})
	$('.account .li1 a').eq(0).click(function(){
		$('.tip').show()
		$('.zzc').show()
		//alert(1)
		//$('.buy .shop').remove()
		$('.confirm').click(function(){
			//alert(1)
			$('#box').css({display:'block'})
			$('#box1').css({display:'none'})
			$('.buy .shop').remove()
			$('.tip').hide()
			$('.zzc').hide()
			$('.account .li2 .s3 a').css({background:'#e4e4e4',color:'#999'})
			$('.account .li2 .s1 em').html(0)
			$('.account .li2 .s2 em').html(0)
		})
		$('.cancel').click(function(){
			$('.tip').hide()
			$('.zzc').hide()
		})
	})
//	$('.account .li1 a').eq(0).click(function(){
//		//alert(1)
//		$('.buy .shop').remove()
//	})
	$('.tip_1 li').eq(1).click(function(){
		$('.tip').hide()
		$('.zzc').hide()

	})
	
//	var count=$('.shop').length;
//	if(count>0){
//		alert(1)
//	}else{
//		$('.account .li2 .s1 em').html(0)
//		$('.account .li2 .s2 em').html(0)
//	}
})