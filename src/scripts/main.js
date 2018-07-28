var MY_SETTINGS = {
	css: {
		activeClass: 'is-active',
		hiddenClass: 'is-hidden',
		openedClass: 'is-opened'
	}
};

$(function () {
	var $header = $('header');

	$('main').css('display', 'block');

	// Menu toggle

	$('[data-toggle-menu]').click(function () {
		$(this).toggleClass(MY_SETTINGS.css.activeClass);
		$('[data-menu]').slideToggle();
		$header.toggleClass(MY_SETTINGS.css.openedClass);
	});

	// Slick slider options

	$('.slick').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 7,
		slidesToScroll: 7,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4
				}
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	// Tabs

	$('.tabs__link').click(function (e) {
		e.preventDefault();
		var $link = $(this);
		var tabIndex = $link.index();
		var $tab = $link
			.parents('.tabs')
			.find('.tab')
			.eq(tabIndex);
		$link
			.addClass(MY_SETTINGS.css.activeClass)
			.siblings()
			.removeClass(MY_SETTINGS.css.activeClass);
		$tab
			.removeClass(MY_SETTINGS.css.hiddenClass)
			.siblings('.tab')
			.addClass(MY_SETTINGS.css.hiddenClass);
	});



})
