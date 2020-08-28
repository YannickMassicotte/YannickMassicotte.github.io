/*
	Alpha by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

const modals = [
	{
		id: 1,
		name: "bg-color",
		img: "./images/gif/bg-color.gif",
		git: "https://github.com/YannickMassicotte/BackgroundColorChanger"
	},
	{
		id: 2,
		name: "budget",
		img: "./images/gif/budget.gif",
		git: "https://github.com/YannickMassicotte/BudgetCalculator"
	},
	{
		id: 3,
		name: "countdown",
		img: "./images/gif/countdown.gif",
		git: "https://github.com/YannickMassicotte/CountDown"
	},
	{
		id: 4,
		name: "grocery",
		img: "./images/gif/grocery.gif",
		git: "https://github.com/YannickMassicotte/GroceryBud"
	},
	{
		id: 5,
		name: "login",
		img: "./images/gif/login.gif",
		git: "https://github.com/YannickMassicotte/Login-Registration"
	},
	{
		id: 6,
		name: "loremipsum",
		img: "./images/gif/loremipsum.gif",
		git: "https://github.com/YannickMassicotte/LoremIpsum"
	},
	{
		id: 7,
		name: "menu",
		img: "./images/gif/menu.gif",
		git: "https://github.com/YannickMassicotte/MenuSortingMeals"
	},
	{
		id: 8,
		name: "mobshop",
		img: "./images/gif/mobshop.gif",
		git: "https://github.com/YannickMassicotte/MobShop"
	},
	{
		id: 9,
		name: "modal",
		img: "./images/gif/modal.gif",
		git: "https://github.com/YannickMassicotte/SimpleModal"
	},
	{
		id: 10,
		name: "scroll",
		img: "./images/gif/scroll.gif",
		git: "https://github.com/YannickMassicotte/ScrollProject"
	},
	{
		id: 11,
		name: "tabs",
		img: "./images/gif/tabs.gif",
		git: "https://github.com/YannickMassicotte/TabsProject5Pillars"
	},

];

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$banner = $('#banner');

	// Breakpoints.
		breakpoints({
			wide:      ( '1281px',  '1680px' ),
			normal:    ( '981px',   '1280px' ),
			narrow:    ( '737px',   '980px'  ),
			narrower:  ( '737px',   '840px'  ),
			mobile:    ( '481px',   '736px'  ),
			mobilep:   ( null,      '480px'  )
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			alignment: 'right'
		});

	// NavPanel.

		// Button.
			$(
				'<div id="navButton">' +
					'<a href="#navPanel" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

	// Header.
		if (!browser.mobile
		&&	$header.hasClass('alt')
		&&	$banner.length > 0) {

			$window.on('load', function() {

				$banner.scrollex({
					bottom:		$header.outerHeight(),
					terminate:	function() { $header.removeClass('alt'); },
					enter:		function() { $header.addClass('alt reveal'); },
					leave:		function() { $header.removeClass('alt'); }
				});

			});

		}

})(jQuery);