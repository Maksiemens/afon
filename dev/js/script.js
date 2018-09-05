"use strict"
//'https://fom.in.ua/echo',

var $orderDiv = $('.order');
var $registrationSuccess = $('#registration-success');	
var $registrationError = $('#registration-error');	
var $regForm = $('#registration-form');

$regForm.on('submit', function(event) {	
	event.preventDefault();
	doValidation($regForm, $orderDiv, $registrationSuccess, $registrationError, 5);
});

function doValidation($form, $wrap, $done, $warning, $totalValidItems) {
	var $validItems = $form.find('.valid');
	var $numberValidItems = $validItems.length;

	if($numberValidItems === $totalValidItems) {
		doAjaxForm($form, $wrap, $done, $warning);
	}
}


function doAjaxForm($form, $wrap, $done, $warning) {

	$.ajax('https://mcslayer.com/hillel/ajax.php', {
		method: 'POST',
		data: $form.serializeArray(),
		
		beforeSend: function() {
			$wrap.addClass('relative');
		},

		success: function(response) {

			$done.fadeIn(function() {	
				setTimeout(function() {
					$done.fadeOut();
				}, 3000);
			});

		},

		complete: function() {
			$form[0].reset();

			checkForm($form);
			doFormDefault($form);

			setTimeout(function() {
				$wrap.removeClass('blind-parent');
			}, 4000);
		},

		error: function(response) {
			$warning.fadeIn(function() {	
				setTimeout(function() {
					$warning.fadeOut();
				}, 3000);
			});
		},
	});
}

//SecondForm
var $handlingDiv = $('.handling');
var $handlingSuccess = $('#handling-success');	
var $handlingError = $('#handling-error');
var $handlingForm = $('#handling-form');

$handlingForm.on('submit', function(event) {
	event.preventDefault();
	doValidation($handlingForm, $handlingDiv, $handlingSuccess, $handlingError, 2);
});


//PopupForm
var $popupgDiv = $('.popup-content');
var $popupSuccess = $('#popup-success');	
var $popupError = $('#popup-error');
var $popupForm = $('#popup-form');

$popupForm.on('submit', function(event) {
	event.preventDefault();
	doValidation($popupForm, $popupgDiv, $popupSuccess, $popupError, 2);
});




//Counters
var $calcForm = $('#calculation-form');
var $minusButton = $('#minus');
var $plusButton = $('#plus');
var $resInput = $('#result');
var $cost = $('#cost');

var $numBottles = 1;
var $PRICE = 52;
var $CURRENCY = ' грн';

$resInput.val($numBottles);
$cost.val( doTotalCost() );

$calcForm.on('click', function(event) {
	var $target = $(event.target);

	if ( $target.is($minusButton) ) {
		doMinus();
	};

	if ( $target.is($plusButton) ) {
		doPlus();
	};
});


function doMinus() {
	if($numBottles > 1) {
		$resInput.val(--$numBottles);
		$cost.val( doTotalCost() );
	};
}

function doPlus() {
	$resInput.val(++$numBottles);
	$cost.val( doTotalCost() );
}

function doTotalCost() {
	var $totalCost = $numBottles * $PRICE + $CURRENCY;
	return $totalCost;
}

function checkForm($form) {
	if( $form.hasClass('registration') ) {
		$numBottles = 1;
		$resInput.val($numBottles);
		$cost.val( doTotalCost() );
	}

	else if ( $form.hasClass('popup-form') ) {

		setTimeout(function() {

			closePopup();
	
		}, 3000);
	}

}

function doFormDefault($form) {
	$form.find('.valid').removeClass('valid');
}





//Button go-up
var $goUp = $('.go-up');
var $buttonAppear = 500; //the distance at which the button appears
var $html =  $('html');

$goUp.on('click', function() {
	$html.animate({scrollTop: 0}, 1000);
});

function showGoUp() {
		
	if(	($window.scrollTop() > $buttonAppear) ) {
		$goUp.fadeIn();
	}

	else {
		$goUp.fadeOut();
	}
}


//Guide(nav sticky)
var $navSticky = $('.guide');
var $window = $(window);
var $tabWidth = 768;
var $guideAppear = 200; //the distance at which the guide appears

function showNav() {
	if(	$window.width() > $tabWidth && ($window.scrollTop() > $guideAppear) ) {
		$navSticky.slideDown();
	}
	else {
		$navSticky.slideUp();
	}
}

//Event scroll
$window.on('scroll', function() {
	showNav();
	showGoUp();
	// console.log( $window.scrollTop() );
});




//Drop menu
var $dropLi = $('.nav__item_drop');
var $dropUl = $('.drop');

$dropLi.on('click', function() {
	$(this).find($dropUl).slideToggle();
	$(this).toggleClass('nav__item_open');
});



///Click on Li, go to link, what is in it
var $mobileNavItem = $('.header-mobile .go-to-page');
$mobileNavItem.on('click', function() {
	var $currentAnchor = $(this).find( $('.nav__item-link[href $= ".html"]') );
	var $currentAnchorAttr = $currentAnchor.attr('href');
	window.location.replace($currentAnchorAttr);
});



//Humburger
var $humburger = $('.hamburger');
var $mobileContent = $('.mobile-content');
var $body = $('body');

$humburger.on('click', function() {
	$mobileContent.toggleClass('open');
	$mobileContent.toggleClass('mobile-content_overflow');
	$body.toggleClass('body_overflow');
});


//Mask
var $inputTel = $('input[type=tel]');
$inputTel.mask('(000) 000 00 00');


//Validation regular
//https://uiregex.com/ru
var $onlyWordsReg = /(^[A-Z]{1}[a-z]{1,14}$)|(^[А-Я]{1}[а-я]{1,14}$)/;
var $onlyDigitsReg = /^\d+$/;

var $inputText = $('input[type=text]');
var $inputNumber = $('input[type=number]');



$inputText.on('keypress', function(event) {
	if ( (event.which > 41 && 58 > event.which) ) {
		return false;
	}
	// console.log(event.which);
});


$inputNumber.on('keypress', function(event) {
	if ( event.which != 8 && event.which != 0 && (event.which < 46 || event.which > 57)	) {
		return false;
	}
});



$regForm.on('input', function(event) {
	var $target = $(event.target);
	checkСontent($target, $inputText, $inputNumber, $inputTel);
});

$handlingForm.on('input', function(event) {
	var $target = $(event.target);
	checkСontent($target, $inputText, $inputNumber, $inputTel);
});

$popupForm.on('input', function(event) {
	var $target = $(event.target);
	checkСontent($target, $inputText, $inputNumber, $inputTel);
});

function checkСontent($target, $text, $number, $tel) {

	if( $target.is($text) ) {
		checkText( $target );
	}

	else if( $target.is($number) ) {
		checkDigits( $target );
	}

	else if( $target.is($tel) ) {
		checkTel($target);
	}
}

function checkText($text) {
	var $textValue = $text.val();	

	if( $onlyWordsReg.test($textValue) ) {
		addClassValid($text);
	}

	else if( !$textValue.length ) {
		removeClassesValidation($text);
	}

	else {
		addClassInValid($text);
	}
}

function checkDigits($digits) {
	var $digitsValue = $digits.val();	

	if( $onlyDigitsReg.test( $digitsValue ) ) {
		addClassValid($digits);
	}

	else if( !$digitsValue.length ) {
		removeClassesValidation($digits);
	}

	else {
		addClassInValid($digits);
	}
}

function checkTel($tel) {
	var $telValue = $tel.val();	

	if($telValue.length < 15 && $telValue.length > 0) {
		addClassInValid($tel);
	}

	else if( $telValue.length === 15 ) {
		addClassValid($tel);
	}

	else {
		removeClassesValidation($tel);
	}
}

function addClassValid($element) {
	$element.addClass('valid');
	$element.removeClass('invalid');
}

function removeClassesValidation($element) {
	$element.removeClass('valid');
	$element.removeClass('invalid');
}

function addClassInValid($element) {
	$element.removeClass('valid');
	$element.addClass('invalid');
}

$goUp.on('click', function() {
	$html.animate({scrollTop: 0}, 1000);
});


// Scroll to first form
var $intelligenceLink = $('.intelligence__link[href="#registration-form"]');
var $distanceToRegForm = 150;

$intelligenceLink.on('click', function() {
	var id = $(this).attr('href');
	
	var top = $(id).offset().top - $distanceToRegForm;

	$html.animate({scrollTop: top}, 1500);
});


//Scroll to second form
// var $infoButton = $('#to-handling-form');
// var $distanceForCenter = 400;
// $infoButton.on('click', function() {
// 	var top = $handlingForm.offset().top - $distanceForCenter;
// 	$html.animate({scrollTop: top}, 1500);
// });


//Popup
var $infoButton = $('#to-popup-form');
var $popupOverlay = $('.popup-overlay');
var $popupContent = $('.popup-content');
var $popupCloseButton = $('.popup-close');

function closePopup() {
	$(document).off('keydown', closeByEsc);
	$popupOverlay.fadeOut();
}

$infoButton.on('click', function() {
	$(document).on('keydown', closeByEsc);
	$popupOverlay.fadeIn();
});

$popupOverlay.on('click', function() {
	closePopup();
});

$popupCloseButton.on('click', function() {
	closePopup();
});

$popupContent.on('click', function(event) {
	event.stopPropagation();
});


function closeByEsc(event) {
	if (event.which == 27) {
		closePopup();
	}
}








// // WOW.js
// // // Animate.css
new WOW().init();

//The first block (Bottles and form)
// var $opening = $('.opening');
// $opening.addClass('wow slideInDown');
var $product = $('.product');
var $order = $('.order');
$product.addClass('wow bounceInLeft');
$order.addClass('wow bounceInRight');

//How to make an order(cards)
var $card = $('.card');
$card.addClass('wow fadeInRight');
$card.attr('data-wow-offset', 100);
doDelay($card);

var $nextStep = $('.next-step');
$nextStep.addClass('wow fadeInRight');
doDelay($nextStep);

function doDelay(element) {
	var $initialDelay = 0;
	element.each(function(index, item) {
		var $resultDelay = $initialDelay+=0.1;
		var $resultDelayFix = +$resultDelay.toFixed(10);
		$(item).attr('data-wow-delay', $resultDelayFix + 's');
	});
}

//Why choose us
var $intelligence = $('.intelligence__section');

$intelligence.addClass('wow fadeInLeftBig');
doDelay($intelligence);

var $documentation = $('.documentation');
$documentation.addClass('wow slideInRight');

//form
var $handling = $('.handling');
var $bottles = $('.appeal__background_bottles');
var $jug = $('.appeal__background_jug');

$handling.addClass('wow slideInDown');
$handling.attr('data-wow-offset', 100);

$bottles.addClass('wow slideInLeft');
$bottles.attr('data-wow-offset', 100);

$jug.addClass('wow slideInRight');
$jug.attr('data-wow-offset', 100);

//Schedule
var $schedule = $('.schedule');
$schedule.addClass('wow fadeIn');
$schedule.attr('data-wow-offset', 100);

//footer
var $footer = $('.footer');
$footer.addClass('wow slideInUp');
$footer.attr('data-wow-offset', 100);




//Fotorama
var $fotoramaDiv = $('.fotorama');

$fotoramaDiv.fotorama({
	allowfullscreen: true,
	nav: 'thumbs',
	loop: true,
	swipe: true
});

var $fotoramaData = $fotoramaDiv.data('fotorama');

var $documentsDiv = $('#documents');

$documentsDiv.on('click', function() {
	$fotoramaData.requestFullScreen(); 
});
