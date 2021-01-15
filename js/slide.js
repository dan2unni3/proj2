$(function(){
    $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true,
        dots:true,
        autoplay : true,			// 자동 스크롤 사용 여부
        autoplaySpeed : 3000 		// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
      });

      $(".regular").slick({
        dots: true, // 페이저 끄기
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
      });

})