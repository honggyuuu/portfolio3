$(function(){
    const header = $('header'),
          page = $('.slide1 .slide1-text'), //색이 변할 부분(시작점위치)
          pageOffsetTop = page.offset().top; //색이 변할 부분의 top값
    
    //반응형일 때 리사이즈시 top값을 다시 계산      
    $(window).resize(function(){
        pageOffsetTop = page.offset().top;
    })

    // 스크롤 했을떄 변하도록 하기
    $(window).scroll(function(){
        const scrolled = $(window).scrollTop() >= pageOffsetTop;
        // console.log(scrolled)  
        // 스크롤된 상태 true
        header.toggleClass('down', scrolled)
    })

    // AOS
    AOS.init({
        // 공통효과
        duration : 1500,
        easing : 'ease-in-out'
    });


   
})