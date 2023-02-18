$(function() {

	// Fixed Header
	let header = $("#header");
	let intro = $("#intro");
	let introH = intro.innerHeight();
	let scrollPos = $(window).scrollTop();
	let nav = $("#nav")
	let navToggle = $("#navToggle")

	checkScroll(scrollPos, introH)

	$(window).on("scroll resize", function() {
    	introH = intro.innerHeight();
    	scrollPos = $(this).scrollTop();

    	checkScroll(scrollPos, introH)
	});

	function checkScroll(scrollPos, introH) {
		if(scrollPos > introH) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	}

	// Smooth scroll
	$("[data-scroll]").on("click", function(event) {
        event.preventDefault();

		nav.removeClass("show");

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

		$("html, body").animate({
			scrollTop: elementOffset - 65
		}, 700);
	});

	// Nav Toggle
	navToggle.on("click", function(event){
		event.preventDefault();

		nav.toggleClass("show")
	});







});

function copyIP() {
	navigator.clipboard.writeText('play.vibecraft.ru')

	let div = document.createElement('div');

    div.className = "alert";
    div.innerHTML = "<b>ip-адрес скопирован!</b> Приятной игры.";
	document.body.before(div);

	setTimeout(() => div.remove(), 1500);
  }