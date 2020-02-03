//preloeder

function disableScrolling(){
    var x=0;
    var y=0;
    window.onscroll=function(){window.scrollTo(x, y);};
}

function enableScrolling(){
    window.onscroll=function(){};
}


$(window).load(function() {
   $('.preloader').fadeOut('slow');
   enableScrolling();

});
disableScrolling();


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


//back to top button

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
