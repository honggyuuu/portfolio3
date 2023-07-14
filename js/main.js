// 제이쿼리
$(document).ready(function(){
    // $('.right').click(function(){
    //     $('.popup').show()
    // })
    $('.popup .profile').click(function(){
        $('.popup').hide()
    })

    $(window).scroll(function(){
      if($(this).scrollTop() >=8500){
          // gotop 버튼 보여줘
          $('.go-top').fadeIn();
      } else {
          // gotop 버튼 숨어줘
          $('.go-top').fadeOut();
          
      }
      behavior: 'smooth' // 부드러운 스크롤 동작을 적용합니다.
  })
})

// 자바스크립트
document.addEventListener('DOMContentLoaded', function() {
  // var aElements = document.getElementsByClassName('left');
  
  // for (var i = 0; i < aElements.length; i++) {
  //   aElements[i].addEventListener('click', function(event) {
  //     event.preventDefault(); // 클릭된 링크의 기본 동작을 막습니다.
      
  //     // 여기에 이동할 스크롤 위치를 지정합니다.
  //     var scrollPosition = 1100; // 예시로 500px로 지정했습니다.
      
  //     window.scrollTo({
  //       top: scrollPosition,
  //       behavior: 'smooth' // 부드러운 스크롤 동작을 적용합니다.
  //     });
  //   });
  // }
  var aElements = document.getElementsByClassName('go-top');
  
  for (var i = 0; i < aElements.length; i++) {
    aElements[i].addEventListener('click', function(event) {
      event.preventDefault(); // 클릭된 링크의 기본 동작을 막습니다.
      
      // 여기에 이동할 스크롤 위치를 지정합니다.
      var scrollPosition = 0; // 예시로 500px로 지정했습니다.
      
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth' // 부드러운 스크롤 동작을 적용합니다.
      });
    });
  }
});

// 좌측원 클릭시 클론코딩 섹터로 이동
$(document).ready(function() {
  $('.left').click(function() {
    var targetSection = $('.clone-coding');
    $('html, body').animate({
      scrollTop: targetSection.offset().top
    }, 1000);
  });
});

// 프로필 페이드인 (자바스크립트)
document.addEventListener('DOMContentLoaded', function() {
  var rightElement = document.querySelector('.right');
  var popupElement = document.querySelector('.popup');

  rightElement.addEventListener('click', function() {
    popupElement.classList.add('fade-in');
    popupElement.style.display = 'block';
  });
});

