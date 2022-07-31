$(document).ready(function(){
	//web	
    if(  $(window).width()>1000 ) {
        //웹접근성강화
        $(".menuA").on("focus mouseenter",function(){
            $(".menuNav").stop().slideUp();
            $(this).next().stop().slideDown();
        });
    }
    //모바일 메뉴 네비게이션
	$("#mobile_menu a").click(function(){
		const menubar = $("#menu").width();
		//모바일 버튼 클릭
		$("#menu").stop().animate({left: 0},1200);
		/*$("#menu").addClass("on");
				$("#menu").css("display","block");*/
	});
		//닫기버튼클릭
	$("#menu>a").click(function(){
		$("#menu").stop().animate({left: -650},1200);
		/*$("#menu").removeClass("on");
		$("#menu").css("display","none");*/
	});
	

    });
 	