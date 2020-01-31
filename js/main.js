//preloeder
$(window).load(function() {
   $('.preloader').fadeOut('slow');
});

//navigation btn
$('.menu-icon').on('click', function(){
  $('.menu').toggleClass('hide');
});
$('.menu').on('click', function(){
  $('.menu').toggleClass('hide');
});

//nsvigation scrool effect
$(window).on('scroll', function(){
  if($(window).scrollTop()){
    $('.head').addClass('scroll');
    $("#l").attr("src","../img/logo/em-blue.svg");
  }else{
    $('.head').removeClass('scroll');
    $("#l").attr("src","../img/logo/fullcolor.svg");

  }
});
