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
 
 		// var vitritieude = $('.tdtoso1').offset().top;
 		// vitritieude = vitritieude - 950 ;

 		// if (vitri >= vitritieude) {
 		// 	$('.tdtoso1').addClass('bounceInLeft animated');
 		// }

 		// var vitritieude = $('.tdtoso2').offset().top;
 		// vitritieude = vitritieude - 850 ;

 		// if (vitri >= vitritieude) {
 		// 	$('.tdtoso2').addClass('rotateInDownLeft animated');
 		// }

 		// var vitritieude = $('.tdtoso3').offset().top;
 		// vitritieude = vitritieude - 1050 ;

 		// if (vitri >= vitritieude) {
 		// 	$('.tdtoso3').addClass('fadeInLeft animated');
 		// }

 		// var vitritieude = $('.tdtoso4').offset().top;
 		// vitritieude = vitritieude - 650 ;

 		// if (vitri >= vitritieude) {
 		// 	$('.tdtoso4').addClass('fadeInLeft animated');
 		// }

 	
 	$('.muitenlen').click(function(event) {
 		$("html,body").animate({scrollTop:0});
 		return false;
 	});
})  
 