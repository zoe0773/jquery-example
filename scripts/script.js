$(function() {
	var page = 1; //初始化版面数
	var i = 4; //每版显示4张图片

	//为向后按钮绑定事件
	$("span.next").click(function() {
		var $parent = $(this).parents("div.v_show"); //获取到最外层包裹层
		var $v_show = $parent.find('div.v_content_list'); //获取视频内容展示区包裹层
		var $v_content = $parent.find('div.v_content'); //获取视频内容展示区外的包裹层，方便获取每一屏的宽度
		var v_width = $v_content.width(); //获取区域内容的宽度--一屏的宽度，带单位
		var len = $v_show.find('li').length; //获取总的视频图片数（li的个数）
		var p_count = Math.ceil(len / i); //如版面数不是整数，则向上取整，不足四张的图片独占一版
		if (!$v_show.is(':animated')) {
			if (page == p_count) {
				$v_show.animate({
					left: "0px"
				}, "slow"); //当切换的版面是最后一页的时候，再按向右切换到第一版面
				page = 1;
			} else {
				$v_show.animate({
					left: "-=" + v_width
				}, "slow");
				page++;
			}
			//每切换一版，相对应版页的原点切换为蓝色原点显示
			$parent.find('span').eq((page - 1)).addClass('current').siblings().removeClass('current'); //eq()下标从0开始
		}
	});
	$("span.prev").click(function() {
		var $parent = $(this).parents("div.v_show"); //获取到最外层包裹层
		var $v_show = $parent.find('div.v_content_list'); //获取视频内容展示区包裹层
		var $v_content = $parent.find('div.v_content'); //获取视频内容展示区外的包裹层，方便获取每一屏的宽度
		var v_width = $v_content.width(); //获取区域内容的宽度--一屏的宽度，带单位
		var len = $v_show.find('li').length; //获取总的视频图片数（li的个数）
		var p_count = Math.ceil(len / i); //如版面数不是整数，则向上取整，不足四张的图片独占一版
		if (!$v_show.is(':animated')) {
			if (page == 1) {
				$v_show.animate({
					left: '-=' + v_width * (p_count - 1)
				}, "slow");
				page = p_count;
			} else {
				$v_show.animate({
					left: '+=' + v_width
				}, "slow");
				page--;
			}
			//每切换一版，相对应版页的原点切换为蓝色原点显示
			$parent.find('span').eq((page - 1)).addClass('current').siblings().removeClass('current'); //eq()下标从0开始
		}
	});
});