// $(window).scroll(function() {
//   var = $(this).
// });
// $('#page-top').click(function() {
//   $(window).scrollTop(0);
// })

$(function(){
  $(window).scroll(function(){
    if($(window).scrollTop() > 60) {
      $('#page-top').fadeIn();
    } else {
      $('#page-top').fadeOut();
    }
  });
  $('#page-top').click(function(){
    $('html,body').animate({scrollTop:0});
  });
});