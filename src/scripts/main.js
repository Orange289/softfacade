var PAGE_SETTINGS = {
	css: {
		activeClass: 'is-active',
		hiddenClass: 'is-hidden',
		openedClass: 'is-opened'
	}
};

$(function () {
	var $header = $('header');
	var $searchBtn = $('.header__search');
	var $searchBar = $('.header__searchbar');

	// Menu toggle

	$('[data-toggle-menu]').click(function () {
		$(this).toggleClass(PAGE_SETTINGS.css.activeClass);
		$('[data-nav]').slideToggle();
		$header.toggleClass(PAGE_SETTINGS.css.openedClass);
	});

	// Show and hide search

	$searchBtn.click(function (e) {
		e.preventDefault();

		$(this).addClass(PAGE_SETTINGS.css.hiddenClass);
		$searchBar.removeClass(PAGE_SETTINGS.css.hiddenClass);
		$searchBar.focus();
	});

	$(document).mouseup(function (e) {
		if (!$searchBar.is(e.target)) {
			$searchBar.addClass(PAGE_SETTINGS.css.hiddenClass);
			$searchBtn.removeClass(PAGE_SETTINGS.css.hiddenClass);
		}
	});

	// Slick slider options

	$('.banners__slider').slick({
		arrows: false,
		dots: true,
		speed: 200
	});


	$('.receipts__slider').slick({
		arrows: false,
		dots: false,
		speed: 200,
		responsive: [
			{
				breakpoint: 2000,
				settings: 'unslick'
			},

			{
				breakpoint: 991,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}

			}
		]
	});

	$('.brands__slider').slick({
		arrows: false,
		dots: false,
		speed: 200,
		responsive: [
			{
				breakpoint: 2000,
				settings: 'unslick'
			},

			{
				breakpoint: 991,
				settings: {
					autoplay: true,
					autoplaySpeed: 2500,
					slidesToShow: 3,
					slidesToScroll: 1
				}

			}
		]
	});

	// Show and hide the loyalityy description

	$('.loyality__card').on('click', function() {
		$('.loyality__descript')
			.addClass(PAGE_SETTINGS.css.activeClass);
		setTimeout(function() {
			$('.loyality__descript').removeClass(PAGE_SETTINGS.css.activeClass)
		}, 3000);
	});

	// Footer accordion

	$('.footer__title').on('click', function () {
		var $title = $(this);
		$title.toggleClass('footer__title--active');
		$title
			.parents('.footer__item')
			.find('.footer__links')
			.slideToggle();
	});

})
