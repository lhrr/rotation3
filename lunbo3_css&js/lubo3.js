$(document).ready(function(){
	var i=0,
		index,
		timer,
		len=$(".image").length,
		wid=$("#photo a").width();

	function tess(){
		timer=setInterval(function(){
			if(i<len-1){
				i++;
			}else{
				i=0;
			}
			moving();
		},4000)
	}
	tess();
	$("#main").mouseover(function(){
		clearInterval(timer);
	})
	$("#main").mouseout(function(){
		tess();
	})
	$(".dots_1").click(function(){
		i=$(this).index();
		moving();
	})
	$(".button-left").click(function(){
		i--;
		if(i<0){
			i=len-1;
		}
		moving();
	})
	$(".button-right").click(function(){
		i++;
		if(i>=len){
			i=0;
		}
		moving();
	})

	

function moving(){
	$(".dots_1").removeClass('active');
	$(".dots_1").eq(i).addClass('active');
	$("#photo").stop().animate({left:-i*wid},500);

}
})