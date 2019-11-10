$(function(){
 	new WOW().init();
 	$(window).scroll(function(event) {
 		// console.log("ban vua cuon chuot");
 		var vitri = $('html,body').scrollTop()
 		if (vitri >= 100) {
 			$('.navbar').addClass('navbar-fixed-top maunen fadeInLeft animated');
 			$('.navbar-light .navbar-nav .nav-link').addClass('mauchu')
 		}
 		else {
 			$('.navbar').removeClass('navbar-fixed-top maunen fadeInLeft animated');
 			$('.navbar-light .navbar-nav .nav-link').removeClass('mauchu ')
 		}
 	});
 	$('.muitenlen').click(function(event) {
 		$("html,body").animate({scrollTop:0});
 		return false;
 	});
})	