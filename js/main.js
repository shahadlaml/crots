//preloeder
$(window).load(function() {
   $('.preloader').fadeOut('slow');
});

//navigation

function showMobileMenu(){
var mobileVis = jQuery('.navigation').css('display');
if(mobileVis == "none"){
  jQuery('.navigation').slideDown('slow');
  $('.mob_btn button').toggleClass("mob_open");
  $('button div').css('border',' 1.5px solid #fff');
}
else{
  jQuery('.navigation').slideUp('slow');
  $('.mob_btn button').toggleClass("mob_open");
          $('button div').css('border',' 1.5px solid #749799');
}
};
jQuery('.mob_btn button').click(function(){
  showMobileMenu();
  return false;
});

//stiky navigation

$(document).ready(function() {
			// grab the initial top offset of the navigation
		   	var stickyNavTop = $('.container').offset().top;
		   	var stickyNav = function(){
			    var scrollTop = $(window).scrollTop();
			    if (scrollTop > stickyNavTop) {
            $('.container').addClass('sticky');
            $('.header').addClass('header-scroll');
		        $('.nav-menu').addClass('nav-menu-p');
            $("#mainlogo").attr("src","../img/logo/em-blue.svg");
            $("#mainlogo").css("width", "40px");
			    } else {
            $('.container').removeClass('sticky');
		        $('.header').removeClass('header-scroll');
            $('.nav-menu').removeClass('nav-menu-p');
            $("#mainlogo").attr("src","../img/logo/fullcolor.svg");
            $("#mainlogo").css("width", "150px");

			    }
			};
			stickyNav();
			$(window).scroll(function() {
				stickyNav();
        
			});

    });
