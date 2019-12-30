/* eslint-disable no-unused-vars */
/*jslint browser:true, evil: true */
/* eslint-env browser */
/*global
alert, confirm, console, Debug, opera, prompt, WSH ,switch, case,superrgranty ,grantysuperman,console,$
*/
/* eslint-disable no-console */
/*jslint plusplus: true */
$(function () {
	'use strict';
	//trigger nice scroll
	$('html').niceScroll();
	//change header height
	$('.header').height($(window).height());
});
///menu
$('.toggle-nav').click(function () {
	"use strict";
	$('.full-scr-nav').show();
	$(this).fadeOut();
});
$('.dismiss').click(function () {
	"use strict";
	$('.full-scr-nav').hide();
	$('.toggle-nav').fadeIn();
});


/*scroll top*/
$(window).scroll(function () {
	"use strict";
	if ($(this).scrollTop() > 100) {
		$('.scroll-top').fadeIn();
	} else {
		$('.scroll-top').fadeOut();
	}
});
$('.scroll-top').click(function () {
	"use strict";
	$("html, body").animate({
		scrollTop: 0
	}, 100);
	return false;
});
/*scroll own*/
$('.arrow').click(function () {
	"use strict";
	$("html, body").animate({
		scrollTop: 500
	}, 50);
	return false;
});