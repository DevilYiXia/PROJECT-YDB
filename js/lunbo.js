/**
 *乐购商城首页js
 *
 */
//当页面加载完毕
$(function(){
	/*首页大图轮播*/
	$('#bannerInner').tyslide({
				boxh:460,//盒子的高度
				w:1000,//盒子的宽度
				h:390,//图片的高度
				isShow:true,//是否显示控制器
				isShowBtn:true,//是否显示左右按钮
				controltop:40,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
				controlsW:20,//控制按钮宽度
				controlsH:20,//控制按钮高度
				radius:10,//控制按钮圆角度数
				controlsColor:"#d7d7d7",//普通控制按钮的颜色
				controlsCurrentColor:"#ff6600",//当前控制按钮的颜色
				isShowNum:true //是否显示数字
			});
			
			/*图书 电子书小轮播*/
						$('#ebooks-banner').tyslide({
									boxh:223,//盒子的高度
									w:332,//盒子的宽度
									h:223,//图片的高度
									isShow:true,//是否显示控制器
									isShowBtn:true,//是否显示左右按钮
									controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
									controlsW:20,//控制按钮宽度
									controlsH:2,//控制按钮高度
									controlsColor:"#d7d7d7",//普通控制按钮的颜色
									controlsCurrentColor:"#00ff00",//当前控制按钮的颜色
						});

              /*返回顶部*/
              //绑定滚动事件
              $(document).scroll(function(){
              	//获取距离顶部的位置
              	var topDistance = $('html,body').scrollTop();
              	//判断
              	if(topDistance > 500){
              		$('.backToTop').fadeIn();
              	} else {
              		$('.backToTop').fadeOut();
            }
                }) 
                //返回顶部功能
                $('.backToTop').click(function(){
              	   $('html,body').animate({
              		   scrollTop:0
              	   })
                })
			
			
			
})