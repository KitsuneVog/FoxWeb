$(function() {

	let header = $("#header");
	let intro = $("#intro");
	let introH;
	let scrollPos = $(window).scrollTop();

	$(window).on("scroll load resize", function() {
    	introH = intro.innerHeight();
    	scrollPos = $(this).scrollTop();

    	if(scrollPos > introH) {
    	header.addClass("fixed");
    	} else {
    	header.removeClass("fixed");
    	}
	})
});

function copyIP() {
	navigator.clipboard.writeText('play.vibecraft.ru')

	let div = document.createElement('div');

    div.className = "alert";
    div.innerHTML = "<b>ip-адрес скопирован!</b> Приятной игры.";
	document.body.before(div);

	setTimeout(() => div.remove(), 1500);
  }