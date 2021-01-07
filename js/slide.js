$(function(){
    $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true,
        dots:true
      });

      $(".regular").slick({
        dots: false, // 페이저 끄기
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
      });

})