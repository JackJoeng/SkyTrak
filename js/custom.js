$(function(){
	'use strict';

    $('body').scrollspy({
    	target: '#header',
    	offset: 100
    });


	smoothScroll.init({
		selector: '.smoothScroll',
		speed: 1000,
		offset: 100,
		before: function(anchor, toggle){
			var query = Modernizr.mq('(max-width: 767px)');
			var navItem = $(toggle).parents("#main-navbar").length;
			if (query && navItem !== 0) {
				$("button.navbar-toggle").click();
			}
		}
	});



    var mixer = mixitup('#portfolio-grid', {

		selectors: {
			control: '[data-mixitup-control]'
		}
		
	});



	$('.slider-container').slick({
		arrows: false,
		autoplay: true,
		centerMode: true,
		centerPadding: '100px',
		variableWidth: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					centerMode: false,
					variableWidth: false
				}
			}
		]
	});



	$('.team-member').on('mousedown', function() {
	    $(this).removeClass('grabbable');
	    $(this).addClass('grabbing');
	});

	$('.team-member').on('mouseleave mouseup', function() {
	    $(this).removeClass('grabbing');
	    $(this).addClass('grabbable');
	});

	var currentTime = new Date();
	var year = currentTime.getFullYear();
	$("#year").text(year);


});