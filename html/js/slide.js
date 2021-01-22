$(function(){
    $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true,
        dots:true,
        autoplay : true,			// 자동 스크롤 사용 여부
        autoplaySpeed : 3000 		// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
      });

      $("#sec3 .regular").slick({
        dots: true, // 페이저 끄기
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay : true,			// 자동 스크롤 사용 여부
        autoplaySpeed : 1500
      });

      $("#sec7 .regular").slick({
        dots: true, // 페이저 끄기
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay : true,			// 자동 스크롤 사용 여부
        autoplaySpeed : 3000
      });

      //////////////sec2
     var sta = 1
      $(".photo").click(function(){
        if (sta==1) {
        $("#sec2 .w_box").animate({left:'-55%'});
        $(this).addClass('on');
        sta=2
      }else {
        $("#sec2 .w_box").animate({left:'0'});
        $(this).removeClass('on');
        sta=1
      }
      }); // photo click

      //////////////네비 변화 - from 필아트
      $(window).scroll(function(){
        if($(document).scrollTop() >= $('#sec3').offset().top && $(document).scrollTop() < $('#sec5').offset().top ) { //<= $('#footer').offset().top - 1000
           $('#header').removeClass('nav_d2_on'),   
           $('#header').addClass('nav_d1_on');
       }else if($(document).scrollTop() >= $('#sec5').offset().top && $(document).scrollTop() < $('#sec7').offset().top) { 
          $('#header').removeClass('nav_d1_on');
           $('#header').addClass('nav_d2_on');
       }else if($(document).scrollTop() >= $('#sec7').offset().top) {
         $('#header').removeClass('nav_d2_on');
       }else{$('#header').removeClass('nav_d1_on'),
             $('#header').removeClass('nav_d2_on');}    ;// window scroll
      })
  
  });
  
      //////////////휠 스크롤링
  (function($){
		$.aniPage=function(e,type){
			if(e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0){
				$("body, html").animate({
					scrollTop:$(window).scrollTop()-$(window).height()
				},1000,function(){
						$.aniOk = 0;
				});
			}else{
				$("body, html").animate({
					scrollTop:$(window).scrollTop()+$(window).height()
				},1000,function(){
						$.aniOk = 0;
				});
			}
		};
	})(jQuery);
	$(function(){
		$(window).height();
		$.aniOk=0;
		$(window).scrollTop(0);
	});
	$(document).on("mousewheel DOMMouseScroll",function(e){
		e.preventDefault();
		if($.aniOk == 0){
			$.aniPage(e,e.type);
			$.aniOk = 1;
		}
	});