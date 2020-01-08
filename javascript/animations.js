window.sr = ScrollReveal();
// sr.reveal(".navbar", {
//   duration: 2000,
//   origin: "bottom"
// });

//Startup animation
sr.reveal("#homeText", {
  delay: 50,
  duration: 2000,
  origin: "right",
  distance: "0.5rem",
  reset: true
});
sr.reveal("#homeButton", {
  delay: 50,
  duration: 2000,
  origin: "left",
  distance: "0.5rem",
  reset: true
});

sr.reveal("#homeBox", {
  delay: 50,
  duration: 2000,
  origin: "bottom",
  distance: "1rem",
  reset: true
});

//Default Fades
sr.reveal("#fadeLeft", {
  duration: 2000,
  origin: "left",
  distance: "1rem"
});

sr.reveal("#fadeRight", {
  duration: 2000,
  origin: "right",
  distance: "1rem"
});

sr.reveal("#fadeTop", {
  duration: 2000,
  origin: "top",
  distance: "2rem"
});

sr.reveal("#fadeBottom", {
  duration: 2000,
  origin: "bottom",
  distance: "2rem"
});

var selectNavbarCollapse = $(".navbar-collapse");

var heightNavbarCollapsed = $(".navbar").outerHeight(true);
var heightNavbarExpanded = 0;
var navBarVariableHeight = heightNavbarExpanded;

function paddingSmall() {
  $("body").css("padding-top", heightNavbarCollapsed + "px");
}
function paddingGreat() {
  $("body").css("padding-top", heightNavbarExpanded + "px");
}

//Text and Title animation in carousel
$(document).ready(function() {
  var heightOfFrontPage = $(window).height() - $("#navBarTop").outerHeight();
  $("#Home").css("height", heightOfFrontPage.toString() + "px"); 
  
  $("#topNav")
    .css("opacity", 0)
    .slideDown("slow")
    .animate({ opacity: 1 }, { queue: false, duration: "slow" });

  paddingSmall();

  selectNavbarCollapse.on("show.bs.collapse", function() {
    navBarVariableHeight = heightNavbarExpanded;
    if (heightNavbarExpanded == 0) {
      heightNavbarExpanded = heightNavbarCollapsed + $(this).outerHeight(true);
      navBarVariableHeight = heightNavbarExpanded;
    }
    if (
      $(window).scrollTop() + navBarVariableHeight >
      $("#topOfPage").position().top
    ) {
      paddingGreat();
    }
  });

  selectNavbarCollapse.on("hide.bs.collapse", function() {
    navBarVariableHeight = heightNavbarCollapsed;
    paddingSmall();
  });

  var sections = ["#About", "#Contact"];

  $("#moreArrows").html("");

  if ($(window).width() < 991) {
    $("#navBarTop").removeClass("navTrans");
    $.each(sections, function(index, value) {
      $(value).css("max-width", "90%");
      $(value).css("margin-left", "5%");
    });
  }

  $(window).resize(function() {
    //Custom sizing for mobile devices
    if ($(window).width() < 991) {
    } else {
      if (
        document.documentElement.clientWidth > 767 &&
        selectNavbarCollapse.hasClass("in")
      ) {
        selectNavbarCollapse.removeClass("in").attr("aria-expanded", "false");
        paddingSmall();
      }
    }
  });

  //Change highlight color Navbar
  var navLinks = [
    "#homeLink",
    "#aboutLink",
    "#servicesLink",
    "#contactLink"
  ];

  //Scrolling animations
  var scrollSpeed = 250;
  $("#homeLink").click(function() {
    paddingSmall();
    $("html, body").animate(
      {
        scrollTop: 0
      },
      scrollSpeed
    );
  });

  $("#homeArrow").click(function() {
    let positionPage = $("#About").position().top + 69;
    if ($(window).width() < 991 && $("#homeLink").is(":visible")) {
      $("html, body").animate(
        {
          scrollTop: positionPage - heightNavbarExpanded
        },
        scrollSpeed
      );
    } else {
      $("html, body").animate(
        {
          scrollTop: $("#About").position().top
        },
        scrollSpeed
      );
    }
  });

  $("#aboutLink").click(function() {
    let positionPage = $("#About").position().top + 69;
    if ($(window).width() < 991 && $("#homeLink").is(":visible")) {
      $("html, body").animate(
        {
          scrollTop: positionPage - heightNavbarExpanded
        },
        scrollSpeed
      );
    } else {
      $("html, body").animate(
        {
          scrollTop: $("#About").position().top
        },
        scrollSpeed
      );
    }
  });

  $("#homeButton").click(function() {
    let positionPage = $("#About").position().top + 69;
    if ($(window).width() < 991 && $("#homeLink").is(":visible")) {
      $("html, body").animate(
        {
          scrollTop: positionPage - $("#topNav").outerHeight()
        },
        scrollSpeed
      );
    } else {
      $("html, body").animate(
        {
          scrollTop: $("#About").position().top
        },
        scrollSpeed
      );
    }
  });

  $("#contactLink").click(function() {
    let positionPage = $("#Contact").position().top + 69;
    if ($(window).width() < 991 && $("#homeLink").is(":visible")) {
      $("html, body").animate(
        {
          scrollTop: positionPage - $("#topNav").outerHeight()
        },
        scrollSpeed
      );
    } else {
      $("html, body").animate(
        {
          scrollTop: $("#Contact").position().top
        },
        scrollSpeed
      );
    }
  });
});