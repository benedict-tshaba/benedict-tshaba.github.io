(function($) {
  "use strict"; //Strict mode

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && 
      location.hostname == this.hostname) {
      
      var target = $(this.hash);
      
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 70)
        }, 1000, "easeInOutExpo");
        return false;
      }

    }

  });

  $(document).scroll(function() {

    var scrollDistance = $(this).scrollTop();
    
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }

  });

  $('.js-scroll-trigger').click(function() {

    $('.navbar-collapse').collapse('hide');
  
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({

    target: '#mainNav',
    offset: 80
  
  });

  // Collapse Navbar
  var navbarCollapse = function() {

    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
      $('#mainNav').addClass('transparent');
    } else {
      $("#mainNav").removeClass("navbar-shrink");
      $('#mainNav').addClass('transparent');
    }

  };

  // Collapse now if page is not at top
  navbarCollapse();

  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Modal popup$(function () {
  $('.portfolio-item').magnificPopup({

    type: 'inline',
    preloader: false,
    focus: '#username',
    modal: true
  
  });

  //Close the modal when user clicks outside of it  
  $(document).on('click', '.portfolio-modal-dismiss', function(e) {
  
    e.preventDefault();
    $.magnificPopup.close();
  
  });
  
})(jQuery);