require(['jquery'],
function ($) {
	$(document).ready(function() {
		var img = $('.fc-c-pd a.partners>img');
		for (var i = 0; i < img.length; i++) {
			img[i].onmouseover = function() {
				img.addClass('gray');
				$(this).removeClass('gray');
			};
			img[i].onmouseout = function() {
				img.addClass('gray');
			};
		};


		// 倒计时模块
		var intDiff = parseInt(100800);//倒计时总秒数量

		function timer(intDiff){
			window.setInterval(function(){
			var day=0,
				hour=0,
				minute=0,
				second=0;//时间默认值		
			if(intDiff > 0){
				day = Math.floor(intDiff / (60 * 60 * 24));
				hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
				minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
				second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
			}
			if (minute <= 9) minute = '0' + minute;
			if (second <= 9) second = '0' + second;
			$('#day_show').html(day);
			$('#hour_show').html('<s id="h"></s>'+hour);
			$('#minute_show').html('<s></s>'+minute);
			$('#second_show').html('<s></s>'+second);
			intDiff--;
			}, 1000);
		} 

		$(function(){
			timer(intDiff);
		});	
	});
});