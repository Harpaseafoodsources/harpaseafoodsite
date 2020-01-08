$(window).scroll(function() {
  //For the navbar fade
  if ($(window).width() > 991) {
    if ($(window).scrollTop() < $("#topOfPage").position().top) {
      $("#navBarTop").addClass("navTrans");
    }
    if (
      $(window).scrollTop() + $("#topNav").outerHeight() >=
      $("#topOfPage").position().top
    ) {
      $("#navBarTop").removeClass("navTrans");
    }
  }
});
