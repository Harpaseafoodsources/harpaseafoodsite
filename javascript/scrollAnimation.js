var navLinks = [
  "#homeLink",
  "#aboutLink",
  "servicesLink",
  "#contactLink"
];
//Scroll and move highlight
$(window).scroll(function() {
  let navHeight = $("#topNav").outerHeight();
  if (
    $(window).scrollTop() + navHeight >= 0 &&
    $(window).scrollTop() + navHeight <= $("#Home").outerHeight()
  ) {
    $("#homeLink").attr("style", "color: rgb(0,0,0) !important");
    $.each(navLinks, function(index, value) {
      if (value !== "#homeLink") {
        $(value).attr("style", "color: rgba(0,0,0,0.5) !important");
      }
    });
  }
  //Uncomment for scroll animations
  if (
    $(window).scrollTop() + navHeight >= $("#About").position().top &&
    $(window).scrollTop() + navHeight <
      $("#About").position().top + $("#About").outerHeight()
  ) {
    $("#aboutLink").attr("style", "color: rgb(0,0,0) !important");
    $.each(navLinks, function(index, value) {
      if (value !== "#aboutLink") {
        $(value).attr("style", "color: rgba(0,0,0,0.5) !important");
      }
    });
  }
  // if (
  //   $(window).scrollTop() + navHeight >= $("#Contact").position().top ||
  //   $(window).scrollTop() + navHeight + $(window).outerHeight() >=
  //     $("footer").position().top
  // ) {
  //   $("#contactLink").attr("style", "color: rgb(0,0,0) !important");
  //   $.each(navLinks, function(index, value) {
  //     if (value !== "#contactLink") {
  //       $(value).attr("style", "color: rgba(0,0,0,0.5) !important");
  //     }
  //   });
  // }
});
