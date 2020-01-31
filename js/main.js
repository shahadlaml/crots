//preloeder
$(window).load(function() {
   $('.preloader').fadeOut('slow');
});

//navigation
$('.menu-icon').on('click', function(){
  $('.menu').toggleClass('hide');
});
$('.menu').on('click', function(){
  $('.menu').toggleClass('hide');
});
