$(document).ready(function () {
  //STICKY MENU - (ABOUT SECTION)
  $(".js--about-section").waypoint(function (direction) {
    if (direction == "down") {
      $("nav").addClass("sticky");
    } else {
      $("nav").removeClass("sticky");
    }
  });

  //ACTIVE LINK
  $(document).on("click", "nav ul li", function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
  $(document).on("click", "nav a img.logo", function () {
    $("nav ul li").removeClass("active");
    $("nav ul li:first-child").addClass("active");
  });

  //MIXITUP - (PORTFOLIO SECTION)
  var mixer = mixitup(".mixitup");
});

//MOBILE MENU
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
