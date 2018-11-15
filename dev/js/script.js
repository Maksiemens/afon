"use strict"


//questions
var $articleTitle = $('.article__title');
$articleTitle.on('click', function() {
	$(this).toggleClass('article__title_active');
	$(this).siblings().slideToggle(500);
});




//about
var $videoButtonAbout = $('.js-videoButtonAbout');
$videoButtonAbout.on('click', function() {	
	$(this).parent().html('<iframe class="video__iframe" src="https://www.youtube.com/embed/98qgCnn1SfI?autoplay=1" allowfullscreen></iframe>');
});


// https://maps.googleapis.com/maps/api/js?key=AIzaSyByIWaYsKp-2CpLt0dJxE45SP63XIUMPRQ



/*
http://webmap-blog.ru/obzors/znakomimsya-s-otkrytoj-js-bibliotekoj-dlya-interaktivnyx-kart-leaflet
https://habr.com/post/142129/
http://gis-lab.info/qa/openlayers-begin.html
https://snazzymaps.com/help
https://bonum-studio.com/blog/leaflet-alternativa-gugl-kartam/
https://toster.ru/q/474054
http://rightblog.ru/3013








https://cloud.google.com/maps-platform/
*/

//https://leafletjs.com/examples/geojson/
// http://rightblog.ru/3013
//https://openmaptiles.org/docs/website/openlayers/
//https://gis.stackexchange.com/questions/110402/leaflet-how-to-change-default-style-on-a-point-geojson-layer

//reviews
var $videosReviews = $('.js-videosReviews');
var $videoReview = $('.js-videoReview');
var $videoReviewButton = $('.js-videoReviewButton');

$videoReviewButton.on('click', function() {
	$(this).parent().html('<iframe class="video__iframe" src="https://www.youtube.com/embed/98qgCnn1SfI?autoplay=1" allowfullscreen></iframe>');
});

// script(async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyByIWaYsKp-2CpLt0dJxE45SP63XIUMPRQ&callback=initMap")

	
// var mymap = L.map('mapid').setView([55.757920, 37.623515], 17);

// L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox.streets',
//     accessToken: 'your.mapbox.access.token'
// }).addTo(mymap);



// var mymap = L.map('mapid').setView([55.757920, 37.623515], 17);

// var mymap = L.map('mapid', {
// 	center: [55.757920, 37.623515],
// 	zoom: 17,
// 	layers: [a]
// });

// var a = [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]}];

// L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
// 	maxZoom: 18,
// 	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
// 		'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
// 		'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
// 	id: 'mapbox.streets'
// }).addTo(mymap);

// L.layerGroup(a);
// // L.geoJSON(a, {
// // 	filter: function(feature, layer) {
// // 			return feature.properties.show_on_map;
// // 	}
// // }).addTo(mymap);

// // L.control.layers(a).addTo(mymap);

// var mapIcon = L.icon({
// 	iconUrl: '../img/map_icon.png',

// 	// iconSize:     [38, 95], // size of the icon
// 	// iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
// 	// popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
// });

// L.marker([55.757920, 37.623515], {icon: mapIcon}).addTo(mymap);

// 	var baseLayers = {
// 		"Grayscale": grayscale,
// 		"Streets": streets
// 	};

// 	var overlays = {
// 		"Cities": cities
// 	};

// 	L.control.layers(baseLayers).addTo(mymap);




















//'https://fom.in.ua/echo',

// var $orderDiv = $('.order');
// var $registrationSuccess = $('#registration-success');	
// var $registrationError = $('#registration-error');	
// var $regForm = $('#registration-form');

// $regForm.on('submit', function(event) {	
// 	event.preventDefault();
// 	doValidation($regForm, $orderDiv, $registrationSuccess, $registrationError, 5);
// });

// function doValidation($form, $wrap, $done, $warning, $totalValidItems) {
// 	var $validItems = $form.find('.valid');
// 	var $numberValidItems = $validItems.length;

// 	if($numberValidItems === $totalValidItems) {
// 		doAjaxForm($form, $wrap, $done, $warning);
// 	}
// }


// function doAjaxForm($form, $wrap, $done, $warning) {

// 	$.ajax('https://mcslayer.com/hillel/ajax.php', {
// 		method: 'POST',
// 		data: $form.serializeArray(),
		
// 		beforeSend: function() {
// 			$wrap.addClass('relative');
// 		},

// 		success: function(response) {

// 			$done.fadeIn(function() {	
// 				setTimeout(function() {
// 					$done.fadeOut();
// 				}, 3000);
// 			});

// 		},

// 		complete: function() {
// 			$form[0].reset();

// 			checkForm($form);
// 			doFormDefault($form);

// 			setTimeout(function() {
// 				$wrap.removeClass('blind-parent');
// 			}, 4000);
// 		},

// 		error: function(response) {
// 			$warning.fadeIn(function() {	
// 				setTimeout(function() {
// 					$warning.fadeOut();
// 				}, 3000);
// 			});
// 		},
// 	});
// }

// //SecondForm
// var $handlingDiv = $('.handling');
// var $handlingSuccess = $('#handling-success');	
// var $handlingError = $('#handling-error');
// var $handlingForm = $('#handling-form');

// $handlingForm.on('submit', function(event) {
// 	event.preventDefault();
// 	doValidation($handlingForm, $handlingDiv, $handlingSuccess, $handlingError, 2);
// });


// //PopupForm
// var $popupgDiv = $('.popup-content');
// var $popupSuccess = $('#popup-success');	
// var $popupError = $('#popup-error');
// var $popupForm = $('#popup-form');

// $popupForm.on('submit', function(event) {
// 	event.preventDefault();
// 	doValidation($popupForm, $popupgDiv, $popupSuccess, $popupError, 2);
// });




// //Counters
// var $calcForm = $('#calculation-form');
// var $minusButton = $('#minus');
// var $plusButton = $('#plus');
// var $resInput = $('#result');
// var $cost = $('#cost');

// var $numBottles = 1;
// var $PRICE = 52;
// var $CURRENCY = ' грн';

// $resInput.val($numBottles);
// $cost.val( doTotalCost() );

// $calcForm.on('click', function(event) {
// 	var $target = $(event.target);

// 	if ( $target.is($minusButton) ) {
// 		doMinus();
// 	};

// 	if ( $target.is($plusButton) ) {
// 		doPlus();
// 	};
// });


// function doMinus() {
// 	if($numBottles > 1) {
// 		$resInput.val(--$numBottles);
// 		$cost.val( doTotalCost() );
// 	};
// }

// function doPlus() {
// 	$resInput.val(++$numBottles);
// 	$cost.val( doTotalCost() );
// }

// function doTotalCost() {
// 	var $totalCost = $numBottles * $PRICE + $CURRENCY;
// 	return $totalCost;
// }

// function checkForm($form) {
// 	if( $form.hasClass('registration') ) {
// 		$numBottles = 1;
// 		$resInput.val($numBottles);
// 		$cost.val( doTotalCost() );
// 	}

// 	else if ( $form.hasClass('popup-form') ) {

// 		setTimeout(function() {

// 			closePopup();
	
// 		}, 3000);
// 	}

// }

// function doFormDefault($form) {
// 	$form.find('.valid').removeClass('valid');
// }





// //Button go-up
// var $goUp = $('.go-up');
// var $buttonAppear = 500; //the distance at which the button appears
// var $html =  $('html');

// $goUp.on('click', function() {
// 	$html.animate({scrollTop: 0}, 1000);
// });

// function showGoUp() {
		
// 	if(	($window.scrollTop() > $buttonAppear) ) {
// 		$goUp.fadeIn();
// 	}

// 	else {
// 		$goUp.fadeOut();
// 	}
// }


// //Guide(nav sticky)
// var $navSticky = $('.guide');
// var $window = $(window);
// var $tabWidth = 768;
// var $guideAppear = 200; //the distance at which the guide appears

// function showNav() {
// 	if(	$window.width() > $tabWidth && ($window.scrollTop() > $guideAppear) ) {
// 		$navSticky.slideDown();
// 	}
// 	else {
// 		$navSticky.slideUp();
// 	}
// }

// //Event scroll
// $window.on('scroll', function() {
// 	showNav();
// 	showGoUp();
// 	// console.log( $window.scrollTop() );
// });




// //Drop menu
// var $dropLi = $('.nav__item_drop');
// var $dropUl = $('.drop');

// $dropLi.on('click', function() {
// 	$(this).find($dropUl).slideToggle();
// 	$(this).toggleClass('nav__item_open');
// });



// ///Click on Li, go to link, what is in it
// var $mobileNavItem = $('.header-mobile .go-to-page');
// $mobileNavItem.on('click', function() {
// 	var $currentAnchor = $(this).find( $('.nav__item-link[href $= ".html"]') );
// 	var $currentAnchorAttr = $currentAnchor.attr('href');
// 	window.location.replace($currentAnchorAttr);
// });



// //Humburger
// var $humburger = $('.hamburger');
// var $mobileContent = $('.mobile-content');
// var $body = $('body');

// $humburger.on('click', function() {
// 	$mobileContent.toggleClass('open');
// 	$mobileContent.toggleClass('mobile-content_overflow');
// 	$body.toggleClass('body_overflow');
// });


// //Mask
// var $inputTel = $('input[type=tel]');
// $inputTel.mask('(000) 000 00 00');


// //Validation regular
// //https://uiregex.com/ru
// var $onlyWordsReg = /(^[A-Z]{1}[a-z]{1,14}$)|(^[А-Я]{1}[а-я]{1,14}$)/;
// var $onlyDigitsReg = /^\d+$/;

// var $inputText = $('input[type=text]');
// var $inputNumber = $('input[type=number]');



// $inputText.on('keypress', function(event) {
// 	if ( (event.which > 41 && 58 > event.which) ) {
// 		return false;
// 	}
// 	// console.log(event.which);
// });


// $inputNumber.on('keypress', function(event) {
// 	if ( event.which != 8 && event.which != 0 && (event.which < 46 || event.which > 57)	) {
// 		return false;
// 	}
// });



// $regForm.on('input', function(event) {
// 	var $target = $(event.target);
// 	checkСontent($target, $inputText, $inputNumber, $inputTel);
// });

// $handlingForm.on('input', function(event) {
// 	var $target = $(event.target);
// 	checkСontent($target, $inputText, $inputNumber, $inputTel);
// });

// $popupForm.on('input', function(event) {
// 	var $target = $(event.target);
// 	checkСontent($target, $inputText, $inputNumber, $inputTel);
// });

// function checkСontent($target, $text, $number, $tel) {

// 	if( $target.is($text) ) {
// 		checkText( $target );
// 	}

// 	else if( $target.is($number) ) {
// 		checkDigits( $target );
// 	}

// 	else if( $target.is($tel) ) {
// 		checkTel($target);
// 	}
// }

// function checkText($text) {
// 	var $textValue = $text.val();	

// 	if( $onlyWordsReg.test($textValue) ) {
// 		addClassValid($text);
// 	}

// 	else if( !$textValue.length ) {
// 		removeClassesValidation($text);
// 	}

// 	else {
// 		addClassInValid($text);
// 	}
// }

// function checkDigits($digits) {
// 	var $digitsValue = $digits.val();	

// 	if( $onlyDigitsReg.test( $digitsValue ) ) {
// 		addClassValid($digits);
// 	}

// 	else if( !$digitsValue.length ) {
// 		removeClassesValidation($digits);
// 	}

// 	else {
// 		addClassInValid($digits);
// 	}
// }

// function checkTel($tel) {
// 	var $telValue = $tel.val();	

// 	if($telValue.length < 15 && $telValue.length > 0) {
// 		addClassInValid($tel);
// 	}

// 	else if( $telValue.length === 15 ) {
// 		addClassValid($tel);
// 	}

// 	else {
// 		removeClassesValidation($tel);
// 	}
// }

// function addClassValid($element) {
// 	$element.addClass('valid');
// 	$element.removeClass('invalid');
// }

// function removeClassesValidation($element) {
// 	$element.removeClass('valid');
// 	$element.removeClass('invalid');
// }

// function addClassInValid($element) {
// 	$element.removeClass('valid');
// 	$element.addClass('invalid');
// }

// $goUp.on('click', function() {
// 	$html.animate({scrollTop: 0}, 1000);
// });


// // Scroll to first form
// var $intelligenceLink = $('.intelligence__link[href="#registration-form"]');
// var $distanceToRegForm = 150;

// $intelligenceLink.on('click', function() {
// 	var id = $(this).attr('href');
	
// 	var top = $(id).offset().top - $distanceToRegForm;

// 	$html.animate({scrollTop: top}, 1500);
// });


// //Scroll to second form
// // var $infoButton = $('#to-handling-form');
// // var $distanceForCenter = 400;
// // $infoButton.on('click', function() {
// // 	var top = $handlingForm.offset().top - $distanceForCenter;
// // 	$html.animate({scrollTop: top}, 1500);
// // });


// //Popup
// var $infoButton = $('#to-popup-form');
// var $popupOverlay = $('.popup-overlay');
// var $popupContent = $('.popup-content');
// var $popupCloseButton = $('.popup-close');

// function closePopup() {
// 	$(document).off('keydown', closeByEsc);
// 	$popupOverlay.fadeOut();
// }

// $infoButton.on('click', function() {
// 	$(document).on('keydown', closeByEsc);
// 	$popupOverlay.fadeIn();
// });

// $popupOverlay.on('click', function() {
// 	closePopup();
// });

// $popupCloseButton.on('click', function() {
// 	closePopup();
// });

// $popupContent.on('click', function(event) {
// 	event.stopPropagation();
// });


// function closeByEsc(event) {
// 	if (event.which == 27) {
// 		closePopup();
// 	}
// }








// WOW.js
// Animate.css
// new WOW().init();

//header

/*
var $headerTop = $('.js-headerTop');
var $captionTitleSizeM = $('.js-captionTitleSizeM');
var $captionTitleSizeL = $('.js-captionTitleSizeL');
var $captionTitleSizeS = $('.js-captionTitleSizeS');
var $booking = $('.js-booking');

$headerTop.addClass('wow fadeInDown');
$headerTop.attr('data-wow-delay', 0 + 's');

$captionTitleSizeM.addClass('wow fadeInDown');
$captionTitleSizeM.attr('data-wow-delay', 1 + 's');

$captionTitleSizeL.addClass('wow fadeInDown');
$captionTitleSizeL.attr('data-wow-delay', 1 + 's');

$captionTitleSizeS.addClass('wow fadeIn');
$captionTitleSizeS.attr('data-wow-delay', 2 + 's');

$booking.addClass('wow fadeIn');
$booking.attr('data-wow-delay', 2 + 's');


//dates
var $dates = $('.js-dates');
$dates.addClass('wow fadeIn');
$dates.attr('data-wow-duration', 2 + 's');
$dates.attr('data-wow-offset', 300);


//about
var $about = $('.js-about');
var $aboutContainer = $('.js-aboutContainer');

$aboutContainer.css({
	'display': 'none',
	'position': 'relative',
});

$aboutContainer.addClass('wow fadeIn');
$aboutContainer.attr('data-wow-duration', 2 + 's');
$aboutContainer.attr('data-wow-delay', 2 + 's');
$aboutContainer.attr('data-wow-offset', 500);

var $aboutContent = $('.js-aboutContent');
$aboutContent.addClass('wow slideInUp');
$aboutContent.attr('data-wow-duration', 5 + 's');
// $aboutContainer.attr('data-wow-delay', 2 + 's');

var $cloud = $('.js-cloud');
$cloud.addClass('wow slideInDown');
$cloud.attr('data-wow-duration', 3 + 's');
$cloud.attr('data-wow-delay', 1 + 's');


var $aboutСurHeight = $about.outerHeight();
// var $aboutHeightAuto = $about.css('height', 'auto').outerHeight();

// https://stackoverflow.com/questions/5003220/animate-element-to-auto-height-with-jquery/5003287





// var $advantagesContent = $('.js-advantagesContent');
// $advantagesContent.addClass('wow fadeInUp');
// $advantagesContent.attr('data-wow-duration', 2 + 's');
// $advantagesContent.attr('data-wow-delay', 2 + 's');
// $advantagesContent.attr('data-wow-offset', 500);

// var $cards = $('.js-cards');
// $cloud.addClass('wow slideInUp');
// $cloud.attr('data-wow-duration', 3 + 's');
// $cloud.attr('data-wow-delay', 1 + 's');

var $card = $('.js-card');
$card.addClass('wow fadeInDown');
$card.attr('data-wow-offset', 300);
doDelay($card);

function doDelay(element) {
	var $initialDelay = 0;
	element.each(function(index, item) {
		var $resultDelay = $initialDelay+=0.1;
		var $resultDelayFix = +$resultDelay.toFixed(10);
		$(item).attr('data-wow-delay', $resultDelayFix + 's');
	});
}



var $reviews = $('.js-reviews');
$reviews.addClass('wow fadeInUp');
$reviews.attr('data-wow-duration', 2 + 's');
$reviews.attr('data-wow-offset', 700);

var $showMoreReviews = $('.js-showMoreReviews');
$showMoreReviews.addClass('wow fadeIn');
$showMoreReviews.attr('data-wow-duration', 3 + 's');




var $needs = $('.js-needs');
$needs.addClass('wow fadeIn');
$needs.attr('data-wow-duration', 2 + 's');
$needs.attr('data-wow-offset', 500);

var $formNeeds = $('.js-formNeeds');
$formNeeds.addClass('wow fadeInUp');
$formNeeds.attr('data-wow-duration', 2 + 's');




var $questions = $('.js-questions');
var $questionsContainer = $('.js-questionsContainer');

$questionsContainer.css({
	'display': 'none',
	'position': 'relative',
});

// $aboutContent.addClass('wow slideInUp');
// $aboutContent.attr('data-wow-duration', 5 + 's');

// $questions.addClass('wow fadeInUp');
// $questions.attr('data-wow-duration', 2 + 's');




var $formConsultation = $('.js-formConsultation');
$formConsultation.addClass('wow fadeInUp');
$formConsultation.attr('data-wow-duration', 2 + 's');
$formConsultation.attr('data-wow-offset', 300);



var $contacts = $('.js-contacts');
$contacts.addClass('wow fadeIn');
$contacts.attr('data-wow-duration', 2 + 's');
$contacts.attr('data-wow-offset', 300);

var $addresses = $('.js-addresses');
$addresses.addClass('wow fadeInLeft');
$addresses.attr('data-wow-duration', 2.5 + 's');
$addresses.attr('data-wow-offset', 400);

var $map = $('.js-map');
$map.addClass('wow fadeInRight');
$map.attr('data-wow-duration', 2.5 + 's');
$map.attr('data-wow-offset', 400);




var $footerContainer = $('.js-footerContainer');
$footerContainer.addClass('wow fadeInUp');
$footerContainer.attr('data-wow-duration', 2 + 's');





// Event scroll
function getDistance($element) {
	var $scrollTop = $(window).scrollTop();
	var $elementOffset = $element.offset().top;
	var $distance = ($elementOffset - $scrollTop);
	return $distance;
}

$(window).on('scroll', function() {

	if( getDistance($about) < 300 ) {
		$aboutContainer.slideDown(2000);
	}

	if( getDistance($questions) < 500 ) {
		$questionsContainer.slideDown(3000);
	}

	console.log( getDistance($questions) );



	// if(	$(window).height() > 200 ) { 
	// 	$about.slideDown(2000);
	// }

	// console.log($(window).height() );

	// console.log(scrollTop);
	// console.log(elementOffset);
	// console.log(distance);

	// var bottom = $(window).height() - $about.height();
	
	// var top = $about.offset().top; // position from $(document).offset().top
	// var bottom = top + $about.outerHeight(); // position from $(document).offset().top

	// // var left = link.offset().left; // position from $(document).offset().left
	// // var right = left + link.width(); // position from $(document).offset().left

	// 	// console.log( bottom );

	// var bottomFromBottom = $(document).height() - bottom;
	// // distance from document bottom
	// // var rightFromRight = $(document).width() - right;
	// // distance from document right

	// 	// console.log( $(window).scrollTop() );

	// 	var about = document.querySelector('.js-about');
	// 	var aboutbox = about.getBoundingClientRect();
	// 	// console.log(aboutbox);

	// var offset = $about.offset();
	// var top = offset.top;
	// // var left = offset.left;
	// var bottom = $(window).height() - top - $about.height();
	// bottom = bottom - offset.top;
	// console.log(bottom);
	// var right = $(window).width() - link.width();
	// right = offset.left - right;

	// 	var top = $about.offset().top; // position from $(document).offset().top
	// 	var bottom = top + $about.outerHeight(); // position from $(document).offset().top
	// 	console.log(top);
	// console.log(bottom);
	// var bottom = $about.position().top + $about.outerHeight(true);
	// console.log(bottom);


});



*/





// $aboutContainer.addClass('wow about-container');

// $aboutContainer.attr('data-wow-offset', 200);




// //Button go-up
// var $goUp = $('.go-up');
// var $buttonAppear = 500; //the distance at which the button appears
// var $html =  $('html');

// $goUp.on('click', function() {
// 	$html.animate({scrollTop: 0}, 1000);
// });

// function showGoUp() {
		
// 	if(	($window.scrollTop() > $buttonAppear) ) {
// 		$goUp.fadeIn();
// 	}

// 	else {
// 		$goUp.fadeOut();
// 	}
// }


// //Guide(nav sticky)
// var $navSticky = $('.guide');
// var $window = $(window);
// var $tabWidth = 768;
// var $guideAppear = 200; //the distance at which the guide appears

// function showNav() {
// 	if(	$window.width() > $tabWidth && ($window.scrollTop() > $guideAppear) ) {
// 		$navSticky.slideDown();
// 	}
// 	else {
// 		$navSticky.slideUp();
// 	}
// }

// //Event scroll
// $window.on('scroll', function() {
// 	showNav();
// 	showGoUp();
// 	// console.log( $window.scrollTop() );
// });








//google maps
initMap();
function initMap() {
	var myLatLng = {lat: 55.757920, lng: 37.623515};				
	var map = new google.maps.Map(document.querySelector('.js-map'), {
		center: myLatLng,
		zoom: 17,
		styles: [
			{
					"featureType": "water",
					"elementType": "geometry",
					"stylers": [
							{
									"color": "#e9e9e9"
							},
							{
									"lightness": 17
							}
					]
			},
			{
					"featureType": "landscape",
					"elementType": "geometry",
					"stylers": [
							{
									"color": "#f5f5f5"
							},
							{
									"lightness": 20
							}
					]
			},
			{
					"featureType": "road.highway",
					"elementType": "geometry.fill",
					"stylers": [
							{
									"color": "#ffffff"
							},
							{
									"lightness": 17
							}
					]
			},
			{
					"featureType": "road.highway",
					"elementType": "geometry.stroke",
					"stylers": [
							{
									"color": "#ffffff"
							},
							{
									"lightness": 29
							},
							{
									"weight": 0.2
							}
					]
			},
			{
					"featureType": "road.arterial",
					"elementType": "geometry",
					"stylers": [
							{
									"color": "#ffffff"
							},
							{
									"lightness": 18
							}
					]
			},
			{
					"featureType": "road.local",
					"elementType": "geometry",
					"stylers": [
							{
									"color": "#ffffff"
							},
							{
									"lightness": 16
							}
					]
			},
			{
					"featureType": "poi",
					"elementType": "geometry",
					"stylers": [
							{
									"color": "#f5f5f5"
							},
							{
									"lightness": 21
							}
					]
			},
			{
					"featureType": "poi.park",
					"elementType": "geometry",
					"stylers": [
							{
									"color": "#dedede"
							},
							{
									"lightness": 21
							}
					]
			},
			{
					"elementType": "labels.text.stroke",
					"stylers": [
							{
									"visibility": "on"
							},
							{
									"color": "#ffffff"
							},
							{
									"lightness": 16
							}
					]
			},
			{
					"elementType": "labels.text.fill",
					"stylers": [
							{
									"saturation": 36
							},
							{
									"color": "#333333"
							},
							{
									"lightness": 40
							}
					]
			},
			{
					"elementType": "labels.icon",
					"stylers": [
							{
									"visibility": "off"
							}
					]
			},
			{
					"featureType": "transit",
					"elementType": "geometry",
					"stylers": [
							{
									"color": "#f2f2f2"
							},
							{
									"lightness": 19
							}
					]
			},
			{
					"featureType": "administrative",
					"elementType": "geometry.fill",
					"stylers": [
							{
									"color": "#fefefe"
							},
							{
									"lightness": 20
							}
					]
			},
			{
					"featureType": "administrative",
					"elementType": "geometry.stroke",
					"stylers": [
							{
									"color": "#fefefe"
							},
							{
									"lightness": 17
							},
							{
									"weight": 1.2
							}
					]
			}
	]
	});						
	var marker = new google.maps.Marker({
		map: map,
		position: myLatLng,
		icon: '../img/map_icon.png'
	});
}