/* ---------------------------------
Javascript(jQuery) for Apecsa Optima Solusi

version: 2.0
author : Fathan Rohman
email  : karir.fathan@gmail.com
website: http://apecsa-indonesia.com
-----------------------------------*/

$(document).ready(function () {
	// jQuery.scrollSpeed(100, 800);
	
	new WOW().init();
	
	// TOOLTIP
	$('[data-toggle="tooltip"]').tooltip()
	
	// SCROLL TO FIXED
	$('#navbar-fixed-apecsaos').fadeIn(250).scrollToFixed();

	// SET HEIGHT CAROUSEL HOME
	$('.carousel-car .item').each(function(){
		var topSlider = $('.carousel-car').outerWidth() / 2.4;
		$(this).css('height', topSlider);
	});

	// BACK TO TOP
	if ($('#back-to-top').length) {
	    var scrollTrigger = 100, // px
	    backToTop = function () {
	    	var scrollTop = $(window).scrollTop();
	    	if (scrollTop > scrollTrigger) {
	    		$('#back-to-top').addClass('show');
	    	} else {
	    		$('#back-to-top').removeClass('show');
	    	}
	    };
	    
	    backToTop();
	    $(window).on('scroll', function () {
	    	backToTop();
	    });

	    $('#back-to-top').on('click', function (e) {
	    	e.preventDefault();
	    	$('html,body').animate({
	    		scrollTop: 0
	    	}, 700);
	    });
	}
});