/**
 * 返回顶部功能函数封装
 * 参数说明
 * imgUrl：图片地址（必选），
 * bottom：按钮距底部距离（必选）
 */
//当页面加载完成
$(function(){
	//  把函数  挂载在window上  暴露出去
	window.gotoTop = function(options){
			
			//默认参数（看一眼）
			var defaults = {
				bottom: '100px'
			}
			
			//参数合并
			var params = $.extend({},defaults,options)
		
		//准备结构
		var $gotoTopHtml = $(`<div class="backToTop">
							<img src="${params.imgUrl}" alt="">
						</div>`);
		//写样式定位			
		$gotoTopHtml.css({
				width: '30px',
				height: '50px',
			    /*定位*/
				position: 'fixed',
				bottom: params.bottom,
				left: '610'px,
				marginLeft: '50%',
				/*默认隐藏*/
				display: 'none',
			  });			
					//返回顶部的JS代码
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
						    //返回顶部功能(动态添加的元素  需要使用事件委托  才能绑定事件)
						    $('body').on('click','.backToTop',function(){
						  	   $('html,body').animate({
						  		   scrollTop:0
						  	   })
						    })
							
		//追加到页面的尾部
		$('body').append($gotoTopHtml)
	}
})