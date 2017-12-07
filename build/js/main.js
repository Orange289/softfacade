'use strict';

var SETTINGS = {
	activeClass: 'is-active',
	hiddenClass: 'is-hidden',
	selhovClass: 'is-selected-hover
};

$(function() {
	var $card = $('.card:not(".is-disabled .card")');
	var $remarkDefault = '.items__remark--default';
	var $remarkSelected = '.items__remark--sel';
	var $remarkLink = $('.items__link');
	var $cardActive = $('.card.is-active');

	$remarkLink.click(function () {
		$(this).parents('.items__block').find('.card').toggleClass(SETTINGS.activeClass);
		$(this).parents('.items__block').find($remarkDefault).toggleClass(SETTINGS.hiddenClass);
		$(this).parents('.items__block').find($remarkSelected).toggleClass(SETTINGS.hiddenClass);
	})

	$card.click(function () {
		$(this).toggleClass(SETTINGS.activeClass);
		$(this).parent('.items__block').find($remarkDefault).toggleClass(SETTINGS.hiddenClass);
		$(this).parent('.items__block').find($remarkSelected).toggleClass(SETTINGS.hiddenClass);
		$(this).removeClass(SETTINGS.selhovClass);
	})

	$card.hover(
		function () {
			if ($(this).hasClass(SETTINGS.activeClass)) {			
				$(this).addClass(SETTINGS.selhovClass);
			}
		},
		function () {
			if ($(this).hasClass(SETTINGS.activeClass)) {
				$(this).removeClass(SETTINGS.selhovClass);
			}
		}
	)

})