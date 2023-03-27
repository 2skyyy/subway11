$('nav > ul > li')
   .mouseenter(function(){
      $(this).find('.sub').stop().slideDown(500);
   })
   .mouseleave(function(){
      $(this).find('.sub').stop().slideUp(200);
   })

$(function(){
   const imgWidth = $('.slider img').width();
   const imgNumber = $('.slider img').length;
   const sliderUl = $('.slider>ul');

   sliderUl.css({width: imgWidth*imgNumber})

   //슬라이더 - 방향 왼쪽 오른쪽
   setInterval(function(){
      sliderUl.animate({'margin-left':`-${imgWidth}px`},300)
   },1000)

})

