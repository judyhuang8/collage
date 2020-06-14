$(document).ready(function () {
  $('#logo').removeClass("hidden");
  for (let i = 1; i < 7; i++) {
    $('#logo path:nth-child(' + i + ')').css({
      "stroke-dasharray": "" + $('#logo path')[i - 1].getTotalLength() + "",
      "stroke-dashoffset": "" + $('#logo path')[i - 1].getTotalLength() + "",
      "animation": "line-anim 3s ease reverse"
    })
  }
  setTimeout(function () { $('#logo').addClass("hidden"), $('footer').removeClass("hidden"), $('main').removeClass("hidden"), $('main').css({ "animation": "fadein 1s" }) }, 3150);

  /* Every time the window is scrolled ... */
  $(window).scroll(function () {

    /* Check the location of each desired element */
    $('.fade').each(function (i) {
      console.log(this);
      // console.log();
      var bottom_of_object = $(this).position().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      /* If the object is completely visible in the window, fade it it */
      if (bottom_of_window > bottom_of_object) {
        if ($(this).hasClass('img')) {
          $(this).css({ "animation": "fade-right 1s ease-in" });
        }

        $(this).animate({ 'opacity': '1' }, 1000);

      }

    });

  });

})