(function ($) {
	"use strict";

	jQuery(document).ready(function ($) {
		// Add an Class to the <li> if has Submenu
		$(".header-nav ul li:has(ul)").addClass("has-submenu");

		// Slicknav
		$("#main-menu").slicknav({
			closeOnClick: true,
			label: "",
			appendTo: ".mobile-menu",
		});

		// Header Search Form
		$("#search-modal-btn").on("click", function (e) {
			e.preventDefault();
			$(".search-modal-wrpr").addClass("active");
		});

		$(".search-modal-wrpr .close-icon").on("click", function () {
			$(".search-modal-wrpr").removeClass("active");
		});

		// Hero Section One Parallax
		$("#hero-section-one").paroller({
			factor: 0.5,
			factorXs: 0.2,
			type: "background",
			direction: "vertical",
		});

		// Testimonial Slider One
		$("#testimonial-section-one .owl-carousel").owlCarousel({
			loop: true,
			responsiveClass: true,
			items: 1,
			animateOut: "fadeOut",
			animateIn: "fadeIn",
			dots: false,
			nav: true,
			navText: [
				"<img src='assets/img/icons/arrow-prev-brown.png'>",
				"<img src='assets/img/icons/arrow-next-brown.png'>",
			],
		});

		// Testimonial Slider Two
		$("#testimonial-section-two .owl-carousel").owlCarousel({
			loop: true,
			responsiveClass: true,
			dots: true,
			items: 3,
			margin: 30,
			responsive: {
				// breakpoint from 0 up
				0: {
					items: 1,
				},
				// breakpoint from 480 up
				480: {
					items: 1,
				},
				// breakpoint from 768 up
				768: {
					items: 2,
				},
				// breakpoint from 992 up
				992: {
					items: 3,
				},
			},
		});

		// Hero Section Two Slider
		$("#hero-section-two .owl-carousel").owlCarousel({
			loop: true,
			responsiveClass: true,
			items: 1,
			dots: false,
			nav: true,
			navText: [
				"<img src='assets/img/icons/arrow-prev.png'>",
				"<img src='assets/img/icons/arrow-next.png'>",
			],
		});

		// Hero Section Two Slider Animation
		$("#hero-section-two .owl-carousel").on(
			"translated.owl.carousel",
			function () {
				$("#hero-section-two small")
					.addClass("animated slideInUp")
					.css("opacity", "1");
				$("#hero-section-two h1")
					.addClass("animated flipInX")
					.css("opacity", "1");
				$("#hero-section-two .lead")
					.addClass("animated slideInDown")
					.css("opacity", "1");
				$("#hero-section-two .buttons-wrpr")
					.addClass("animated slideInDown")
					.css("opacity", "1");
			}
		);
		$("#hero-section-two .owl-carousel").on(
			"translate.owl.carousel",
			function () {
				$("#hero-section-two small")
					.removeClass("animated slideInUp")
					.css("opacity", "0");
				$("#hero-section-two h1")
					.removeClass("animated flipInX")
					.css("opacity", "0");
				$("#hero-section-two .lead")
					.removeClass("animated slideInDown")
					.css("opacity", "0");
				$("#hero-section-two .buttons-wrpr")
					.removeClass("animated slideInDown")
					.css("opacity", "0");
			}
		);

		// Stop Modal Video on Close
		$(".modal").on("hide.bs.modal", function (e) {
			var $if = $(e.delegateTarget).find("iframe");
			var src = $if.attr("src");
			$if.attr("src", "/empty.html");
			$if.attr("src", src);
		});

		// Scroll To Top
		$("#scroll-to-top").on("click", function () {
			$("html, body").animate({ scrollTop: 0 }, 1000);
			return false;
		});

		// Fun Fact Counter Up
		$(".counter").counterUp({
			delay: 10,
			time: 1500,
		});

		// Contact Form
		if ($('form[id="contact_form"]').length > 0) {
			$('form[id="contact_form"]').validate({
				rules: {
					name: "required",
					email: {
						required: true,
						email: true,
					},
					subject: "required",
					message: "required",
				},

				messages: {
					name: "Enter your full name.",
					email: "Enter a valid email.",
					subject: "Enter your subject.",
					message: "Write your message.",
				},
				submitHandler: function (form) {
					// start ajax request
					$.ajax({
						type: "POST",
						url: "mail.php",
						data: $("#contact_form").serialize(),
						cache: false,
						success: function (data) {
							if (data == "Y") {
								$("#message_sent").modal("show");
								$("#contact_form").trigger("reset");
							} else {
								$("#message_fail").modal("show");
							}
						},
					});
				},
			});
		}
	});

	jQuery(window).on("load", function () {
		// Loading Spinner
		$(".spinner-wrpr").fadeOut();

		// Active WOW JS
		new WOW().init();
	});

	jQuery(window).scroll(function () {
		// Sticky Nav
		if ($(this).scrollTop() >= 100) {
			$(".header-one.sticky").addClass("active");
		} else {
			$(".header-one.sticky").removeClass("active");
		}

		// Scroll To Top Hide/Show
		if ($(this).scrollTop() >= 1000) {
			$("#scroll-to-top").addClass("active");
		} else {
			$("#scroll-to-top").removeClass("active");
		}
	});
})(jQuery);
