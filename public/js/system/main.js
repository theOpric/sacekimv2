$(document).ready(function ($) {
	"use strict";
	let socket = io();
	var loader = function () {

		setTimeout(function () {
			if ($('#pb_loader').length > 0) {
				$('#pb_loader').removeClass('show');
			}
		}, 700);
	};
	loader();

	// scroll
	var scrollWindow = function () {
		$(window).scroll(function () {
			var $w = $(this),
				st = $w.scrollTop(),
				navbar = $('.pb_navbar'),
				sd = $('.js-scroll-wrap');

			if (st > 150) {
				if (!navbar.hasClass('scrolled')) {
					navbar.addClass('scrolled');
				}
			}
			if (st < 150) {
				if (navbar.hasClass('scrolled')) {
					navbar.removeClass('scrolled sleep');
				}
			}
			if (st > 350) {
				if (!navbar.hasClass('awake')) {
					navbar.addClass('awake');
				}

				if (sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if (st < 350) {
				if (navbar.hasClass('awake')) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if (sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	// slick sliders
	var slickSliders = function () {
		$('.single-item').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			infinite: true,
			autoplay: false,
			autoplaySpeed: 2000,
			nextArrow: '<span class="next"><i class="ion-md-arrow-dropright"></i></span>',
			prevArrow: '<span class="prev"><i class="ion-md-arrow-dropleft"></i></span>',
			arrows: true,
			draggable: false,
			adaptiveHeight: true
		});
		$(".single-item").on("beforeChange", function () {
			//change color here
			var elmnt = document.getElementById("section-practicing-areas");
			elmnt.scrollIntoView({ behavior: 'smooth'});
		})

		$('.single-item-no-arrow').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 2000,
			nextArrow: '<span class="next"><i class="ion-md-arrow-dropright"></i></span>',
			prevArrow: '<span class="prev"><i class="ion-md-arrow-dropleft"></i></span>',
			arrows: false,
			draggable: false
		});

		$('.multiple-items').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			dots: true,
			infinite: true,

			autoplay: true,
			autoplaySpeed: 2000,

			arrows: true,
			nextArrow: '<span class="next"><i class="ion-md-arrow-dropright"></i></span>',
			prevArrow: '<span class="prev"><i class="ion-md-arrow-dropleft"></i></span>',
			draggable: false,
			responsive: [
				{
					breakpoint: 1125,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						infinite: true,
						dots: true
					}
				},
				{
					breakpoint: 900,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 580,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});

		$('.js-pb_slider_content').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: '.js-pb_slider_nav',
			adaptiveHeight: false
		});
		$('.js-pb_slider_nav').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			asNavFor: '.js-pb_slider_content',
			dots: false,
			centerMode: true,
			centerPadding: "0px",
			focusOnSelect: true,
			arrows: false
		});

		$('.js-pb_slider_content2').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: '.js-pb_slider_nav2',
			adaptiveHeight: false
		});
		$('.js-pb_slider_nav2').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			asNavFor: '.js-pb_slider_content2',
			dots: false,
			centerMode: true,
			centerPadding: "0px",
			focusOnSelect: true,
			arrows: false
		});
	};
	slickSliders();

	// navigation
	var OnePageNav = function () {
		$(".smoothscroll[href^='#'], #svkn-navbar ul li a[href^='#']").on('click', function (e) {
			e.preventDefault();
			var hash = this.hash,
				navToggler = $('.navbar-toggler');
			$('html, body').animate({

				scrollTop: $(hash).offset().top
			}, 700, 'easeInOutExpo', function () {
				window.location.hash = hash;
			});

			if (navToggler.is(':visible')) {
				navToggler.click();
			}
		});
		$('body').on('activate.bs.scrollspy', function () {
			console.log('nice');
		})
	};
	OnePageNav();

	var offCanvasNav = function () {
		var toggleNav = $('.js-pb_nav-toggle'),
			offcanvasNav = $('.js-pb_offcanvas-nav_v1');
		if (toggleNav.length > 0) {
			toggleNav.click(function (e) {
				$(this).toggleClass('active');
				offcanvasNav.addClass('active');
				e.preventDefault();
			});
		}
		offcanvasNav.click(function (e) {
			if (offcanvasNav.hasClass('active')) {
				offcanvasNav.removeClass('active');
				toggleNav.removeClass('active');
			}
			e.preventDefault();
		})
	};
	offCanvasNav();
	$("#languageSelector").change(function () {
		let val = this.value;
		if (val == "English") {
			Cookies.set('lang', 'EN');
		}
		else if (val == "Español") {
			Cookies.set('lang', 'ES');
		}
		else if (val == "Français") {
			Cookies.set('lang', 'FR');
		}
		else if (val == "Deutsch") {
			Cookies.set('lang', 'DE');
		}
		else if (val == "Italiano") {
			Cookies.set('lang', 'IT');
		}
		else if (val == "العربية") {
			Cookies.set('lang', 'AR');
		}
		else if (val == "Português") {
			Cookies.set('lang', 'PT');
		}
		else if (val == "Pусский") {
			Cookies.set('lang', 'RU');
		}
		else {
			Cookies.set('lang', 'TR');
		}
		location.reload();
	});

	//Saç Analiz
	socket.on("sacEkim_IletisimTalebi_Insert_Result", (data) => {
		if (data.status) {
			alert(contactSuccess);
		}
		else {
			alert(contactDbError);
		};
	});
	let phoneInput;
	let telephone;
	if (window.location.pathname == "/") {
		phoneInput = document.querySelector("#phoneInput");
		telephone = window.intlTelInput(phoneInput, {
			preferredCountries: ["tr", "us"],
			utilsScript: "/public/js/utils.js",
		});
	}
	//Analiz
	let analizJSON = {
		gender: "",
		tip: "",
		yas: "",
		ilac: "",
		kronik: "",
		ulke: "",
		telefon: "",
		ad: "",
		eposta: "",
	};
	const stepManagement = (goTo, prevAndNext) => {
		if (goTo == 2 && prevAndNext == "next") {//1 to 2
			$("#step1").hide();
			$("#headerAnaliz1").show();
			$("#step2").show();
			if (analizJSON["gender"] == "Erkek") {
				$(".dokulmeErkek").show();
				$(".dokulmeKadin").hide();
			}
			else {
				$(".dokulmeErkek").hide();
				$(".dokulmeKadin").show();
			};
		}
		else if (goTo == 1 && prevAndNext == "prev") {
			$("#step2").hide();
			$("#headerAnaliz1").hide();
			$("#step1").show();
		}
		else if (goTo == 3 && prevAndNext == "next") {
			$("#step2").hide();
			$("#headerAnaliz1").hide();
			$("#headerAnaliz2").show();
			$("#prevButtons1").show();
			$("#step3").show();
		}
		else if (goTo == 2 && prevAndNext == "prev") {
			$("#step3").hide();
			$("#headerAnaliz1").show();
			$("#headerAnaliz2").hide();
			$("#prevButtons1").hide();
			$("#step2").show();
		}
		else if (goTo == 4 && prevAndNext == "next") {
			$("#step3").hide();
			$("#headerAnaliz2").hide();
			$("#headerAnaliz3").show();
			$("#prevButtons1").hide();
			$("#prevButtons2").show();
			$("#ilacEvet").hide();
			$("#ilacInputEvet").hide();
			$("#step4").show();
		}
		else if (goTo == 3 && prevAndNext == "prev") {
			$("#step4").hide();
			$("#headerAnaliz2").show();
			$("#headerAnaliz3").hide();
			$("#prevButtons1").show();
			$("#prevButtons2").hide();
			$("#step3").show();
		}
		else if (goTo == 5 && prevAndNext == "next") {
			$("#step4").hide();
			$("#headerAnaliz3").hide();
			$("#prevButtons2").hide();
			$("#prevButtons3").show();
			$("#headerAnaliz4").show();
			$("#step5").show();
		}
		else if (goTo == 5 && prevAndNext == "next") {
			$("#step4").hide();
			$("#headerAnaliz3").hide();
			$("#prevButtons2").hide();
			$("#prevButtons3").show();
			$("#headerAnaliz4").show();
			$("#step5").show();
		}
		else if (goTo == 4 && prevAndNext == "prev") {
			$("#step5").hide();
			$("#headerAnaliz4").hide();
			$("#prevButtons3").hide();
			$("#prevButtons2").show();
			$("#headerAnaliz3").show();
			$("#step4").show();
		}
		else if (goTo == 6 && prevAndNext == "next") {
			$("#step5").hide();
			$("#headerAnaliz4").hide();
			$("#prevButtons3").hide();
			$("#prevButtons4").show();
			$("#headerAnaliz5").show();
			$("#step6").show();
		}
		else if (goTo == 5 && prevAndNext == "prev") {
			$("#step6").hide();
			$("#headerAnaliz4").show();
			$("#prevButtons3").show();
			$("#prevButtons4").hide();
			$("#headerAnaliz5").hide();
			$("#step5").show();
		}
		else if (goTo == 7 && prevAndNext == "next") {
			$("#step6").hide();
			$("#prevButtons4").hide();
			$("#headerAnaliz5").hide();
			$("#headerAnaliz6").show();
			$("#step7").show();
		}
	};
	$("#hideShowAnaliz").click(() => {
		$("#analiz").hide();
		$(".analizHeader2").show();
		Cookies.set("cookieClose", "off");
	});
	$(".analizHeader2").click(() => {
		$(".analizHeader2").hide();
		$("#analiz").show();
		Cookies.set("cookieClose", "on");
	});
	$(".genderMale").click(() => {
		analizJSON.gender = "Erkek";
		stepManagement(2, "next");
	});
	$(".genderWoman").click(() => {
		analizJSON.gender = "Bayan";
		stepManagement(2, "next");
	});
	$(".prevBtn").click(function () {
		let elemName = $(this).attr("name");
		if (elemName == "goTo1") {
			stepManagement(1, "prev");
		}
		else if (elemName == "goTo4") {
			stepManagement(4, "prev");
		}
		else if (elemName == "goTo5") {
			stepManagement(5, "prev");
		}
	});
	$("#notSureBtn").click(() => {
		analizJSON.tip = "Emin Değil";
		stepManagement(3, "next");
	});
	$(".selectTip").click(function () {
		let tip = $(this).attr("src");
		analizJSON.tip = tip;
		stepManagement(3, "next");
	});
	$("#prevButtons1").click(() => {
		stepManagement(2, "prev");
	});
	$(".yasBtn").click(function () {
		analizJSON.yas = $(this).text();
		stepManagement(4, "next");
	});
	$("#prevButtons2").click(() => {
		stepManagement(3, "prev");
	});
	$("#ilacEvet").keyup(() => {
		$("#ilacEvet").css("box-shadow", "0px 0px 6px 1px #6c757d");
		$("#ilacEvet").css("border", "1px solid white");
	});
	$("#ilacEvetBtn").click(() => {
		$("#ilacEvet").show();
		$("#ilacInputEvet").show();
	});
	$("#ilacHayirBtn").click(() => {
		analizJSON.ilac = "Hayır";
		stepManagement(5, "next");
	});
	$("#ilacInputEvet").click(() => {
		let len = $("#ilacEvet").val().length;
		if (len > 0 && len <= 100) {
			analizJSON.ilac = $("#ilacEvet").val();
			stepManagement(5, "next");
		}
		else {
			$("#ilacEvet").css("border", "1px solid #C0392B");
		}
	});
	$(".yasBtn2").click(function () {
		analizJSON.kronik = $(this).text();
		stepManagement(6, "next");
	});
	$("#phoneInput").keyup(() => {
		$("#phoneInput").css("border", "1px solid #CACFD2");
	});
	$("#analizInputNameSurname").keyup(() => {
		$("#analizInputNameSurname").css("border", "1px solid #CACFD2");
	});
	$("#analizInputMail").keyup(() => {
		$("#analizInputMail").css("border", "1px solid #CACFD2");
	});
	$("#completeBtn").click(() => {
		let nameLen = $("#analizInputNameSurname").val().length;
		let mailLen = $("#analizInputMail").val().length;
		analizJSON.ulke = telephone.getSelectedCountryData().name;
		if (telephone.getValidationError() != 0) {
			$("#phoneInput").css("border", "1px solid #C0392B");
		}
		else if (nameLen == 0 || nameLen > 100) {
			$("#analizInputNameSurname").css("border", "1px solid #C0392B");
		}
		else if (mailLen == 0 || mailLen > 100) {
			$("#analizInputMail").css("border", "1px solid #C0392B");
		}
		else {
			analizJSON.telefon = telephone.getNumber();
			analizJSON.ad = $("#analizInputNameSurname").val();
			analizJSON.eposta = $("#analizInputMail").val();
			stepManagement(7, "next");
			Cookies.set("analiz", true, { expires: 3600 * 24 });
			Cookies.set("cookieClose", true);
			socket.emit("sacEkim_SacAnalizTalebi_Insert", {
				json: analizJSON
			});;
		};
	});
	$("#closeBtn").click(() => {
		$("#analiz").hide();
		$(".analizHeader2").show();
		Cookies.set("cookieClose", "off");
	});
	$("#homeIndexHairAnalysisFree").click(() => {
		$("#analiz").show();
		$(".analizHeader2").hide();
	});
	let analizCookie = Cookies.get("analiz");
	let cookieClose = Cookies.get("cookieClose");
	if (analizCookie == "true") {
		$("#step1").hide();
		$("#headerAnaliz1").hide();
		$("#headerAnaliz6").show();
		$("#step7").show();
	};
	if (cookieClose == "off") {
		$("#analiz").hide();
		$(".analizHeader2").show();
	}
	else {
		if (cookieClose != undefined) {
			$("#analiz").show();
			$(".analizHeader2").hide();
		}
	};
	// END Analiz

	//Dil Seçim
	$("#languageSelector").change(function () {
		let val = this.value;
		if (val == "English") {
			Cookies.set('lang', 'EN');
		}
		else if (val == "Español") {
			Cookies.set('lang', 'ES');
		}
		else if (val == "Français") {
			Cookies.set('lang', 'FR');
		}
		else if (val == "Deutsch") {
			Cookies.set('lang', 'DE');
		}
		else if (val == "Italiano") {
			Cookies.set('lang', 'IT');
		}
		else if (val == "العربية") {
			Cookies.set('lang', 'AR');
		}
		else if (val == "Português") {
			Cookies.set('lang', 'PT');
		}
		else if (val == "Pусский") {
			Cookies.set('lang', 'RU');
		}
		else {
			Cookies.set('lang', 'TR');
		}
		location.reload();
	});
	$(".selectpicker").selectpicker();
	let browserLangs = Cookies.get('lang');
	if (browserLangs == 'TR') {
		$('#languageSelector').selectpicker('val', "Türkçe");
	}
	else if (browserLangs == 'EN') {
		$('#languageSelector').selectpicker('val', "English");

	}
	else if (browserLangs == 'RU') {
		$('#languageSelector').selectpicker('val', "Pусский");
	}
	else if (browserLangs == 'FR') {
		$('#languageSelector').selectpicker('val', "Français");
	}
	else if (browserLangs == 'AR') {
		$('#languageSelector').selectpicker('val', "العربية");
	}
	else if (browserLangs == 'PT') {
		$('#languageSelector').selectpicker('val', "Português");
	}
	else if (browserLangs == 'IT') {
		$('#languageSelector').selectpicker('val', "Italiano");
	}
	else if (browserLangs == 'DE') {
		$('#languageSelector').selectpicker('val', "Deutsch");
	}
	else if (browserLangs == 'ES') {
		$('#languageSelector').selectpicker('val', "Español");
	};
	// İletişim
	$("#contactInfoBtn").click(() => {
		let ctrlContact = Cookies.get('contact');
		let name = $("#contactNameInput").val();
		let mail = $("#contactEmailInput").val();
		let text = $("#contactTextarea").val();
		if (name.length < 155 && name.length > 3) {
			if (mail.length < 255 && mail.length > 5) {
				if (text.length < 155 && text.length > 10) {
					if (!ctrlContact) {
						Cookies.set('contact', true, { expires: 3600 * 24 }); // Expires in 10 minutes
						socket.emit('sacEkim_IletisimTalebi_Insert', {
							name,
							mail,
							text
						});
					}
					else {
						alert(contactLimitErr);
					}
				}
				else {
					$("#contactTextarea").focus();
				}
			}
			else {
				$("#contactEmailInput").focus();
			}
		}
		else {
			$("#contactNameInput").focus();
			//
		};
	});
	$(".contactInputs").keyup(function () {
		let len = $(this).val().length;
		if (len > 4) {
			$(this).css("border", "1px solid #CACFD2")
		}
	});

	// İletişim2
	$("#contactInfoBtn2").click(() => {
		let ctrlContact = Cookies.get('contact');
		let name = $("#contactNameInput2").val();
		let mail = $("#contactEmailInput2").val();
		let text = $("#contactTextarea2").val();
		if (name.length < 155 && name.length > 3) {
			if (mail.length < 255 && mail.length > 5) {
				if (text.length < 155 && text.length > 10) {
					if (!ctrlContact) {
						Cookies.set('contact', true, { expires: 3600 * 24 }); // Expires in 10 minutes
						socket.emit('sacEkim_IletisimTalebi_Insert', {
							name,
							mail,
							text
						});
					}
					else {
						alert(contactLimitErr);
					}
				}
				else {
					$("#contactTextarea2").focus();
				}
			}
			else {
				$("#contactEmailInput2").focus();
			}
		}
		else {
			$("#contactNameInput2").focus();
			//
		};
	});
	$(".contactInputs2").keyup(function () {
		let len = $(this).val().length;
		if (len > 4) {
			$(this).css("border", "1px solid #CACFD2")
		}
	});


});
// Whatsapp

// (function () {
// 	let phoneNumber = "90" + $("#phoneNumber").attr("name");
// 	var options = {
// 		whatsapp: "" + phoneNumber, // WhatsApp numaranızı buraya girin
// 		call_to_action: "Merhaba, nasıl yardımcı olabilirim?", // Görünecek metin
// 		position: "left", // Position may be 'right' or 'left'
// 	};
// 	var proto = document.location.protocol, host = "whatshelp.io", url = proto + "//static." + host;
// 	var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
// 	s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
// 	var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
// })();





