/* =========================================
                Preloader
============================================ */
$(window).on('load', function () { // makes sure that whole site is loaded
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});


/* =========================================
              Navigation
============================================ */
 $(function() {
   var moveLeft = 20;
   var moveDown = 10;

   $('a.trigger').hover(function(e) {
     $('div#pop-up').show();
     //.css('top', e.pageY + moveDown)
     //.css('left', e.pageX + moveLeft)
     //.appendTo('body');
   }, function() {
     $('div#pop-up').hide();
   });

   $('a.trigger').mousemove(function(e) {
     $("div#pop-up").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
   });

 });


/* =========================================
              Navigation
============================================ */

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
}

$(function () {

    // show/hide nav on page load
    showHideNav();

    $(window).scroll(function () {

        // show/hide nav on window's scroll
        showHideNav();
    });

    function showHideNav() {

        if ($(window).scrollTop() > 50) {

            // Show back to top button
            $("#back-to-top").fadeIn();

        } else {

            // Hide back to top button
            $("#back-to-top").fadeOut();
        }
    }
});


jQuery(function(){
    jQuery('.showSingle').click(function(){
        var target = jQuery(this).data('target');
        var parent = jQuery(this).closest('.container');

        parent.find('.targetDiv').hide();
        parent.find('.div'+target).show();
    });
});

// Smooth scrolling
$(function () {

    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();

        // get/return id like #about, #work, #team and etc
        var section = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(section).offset().top
        }, 1250, "easeInOutExpo");
    });
});




/* =========================================
              Mobile Menu
============================================ */
$(function () {

    // Show mobile nav
    $("#mobile-nav-open-btn").click(function () {
        $("#mobile-nav").css("height", "100%");
    });

    // Hide mobile nav
    $("#mobile-nav-close-btn, #mobile-nav a").click(function () {
        $("#mobile-nav").css("height", "0%");
    });

});
