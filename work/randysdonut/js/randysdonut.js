$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() >=1500){
            // gotop 버튼 보여줘
            $('.go_top').fadeIn();
        } else {
            // gotop 버튼 숨어줘
            $('.go_top').fadeOut();
        }
    })

    // gotop 버튼을 클릭하면 html, body 스크롤양이 0으로 가도록
    $('.go_top').click(function(e){
        e.preventDefault();
        $('html, body').stop().animate({
            scrollTop : 0
        }, 1000)
    })

    $(".bxslide").bxSlider({
        mode: 'horizontal', 
        speed: 500, //슬라이드 전환 속도
        controls: true, //prev, next버튼 여부
        // autoHover: true, // 슬라이드에 마우스를 올렸을 떄 자동 전환을 멈추게 할 것인지 여부.
        auto: false,
        infiniteLoop: true, //무한반복
        pager: false, //물방울 여부
      });

})
