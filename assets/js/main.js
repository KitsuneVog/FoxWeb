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
    alert("ip-адрес скопирован");
  }