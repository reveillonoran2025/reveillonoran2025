// preloader
jQuery(window).on('load', function() {
  jQuery('#status').fadeOut();
  jQuery('#preloader').delay(350).fadeOut('slow');
  jQuery('body').delay(350).css({'overflow':'visible'});
})

// toggle button
jQuery(function($){
  $( '.toggle-nav button' ).click( function(e){
    $( 'body' ).toggleClass( 'show-main-menu' );
    var element = $( '.sidenav' );
    creative_blogger_trapFocus( element );
  });

  $( '.close-button' ).click( function(e){
    $( '.toggle-nav button' ).click();
    $( '.toggle-nav button' ).focus();
  });
  $( document ).on( 'keyup',function(evt) {
    if ( $( 'body' ).hasClass( 'show-main-menu' ) && evt.keyCode == 27 ) {
      $( '.toggle-nav button' ).click();
      $( '.toggle-nav button' ).focus();
    }
  });
});

function creative_blogger_trapFocus( element, namespace ) {
  var creative_blogger_focusableEls = element.find( 'a, button' );
  var creative_blogger_firstFocusableEl = creative_blogger_focusableEls[0];
  var creative_blogger_lastFocusableEl = creative_blogger_focusableEls[creative_blogger_focusableEls.length - 1];
  var KEYCODE_TAB = 9;

  element.keydown( function(e) {
    var isTabPressed = ( e.key === 'Tab' || e.keyCode === KEYCODE_TAB );

    if ( !isTabPressed ) {
      return;
    }

    if ( e.shiftKey ) /* shift + tab */ {
      if ( document.activeElement === creative_blogger_firstFocusableEl ) {
        creative_blogger_lastFocusableEl.focus();
        e.preventDefault();
      }
    } else /* tab */ {
      if ( document.activeElement === creative_blogger_lastFocusableEl ) {
        creative_blogger_firstFocusableEl.focus();
        e.preventDefault();
      }
    }
  });
}

// scroll to top
jQuery(document).ready(function () {
  jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 0) {
      jQuery('#button').fadeIn();
    } else {
      jQuery('#button').fadeOut();
    }
  });
  jQuery('#button').click(function () {
    jQuery("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });
  
});

// Slider
jQuery(document).ready(function() {
  jQuery('#slider-cat .owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav:true,
    navText: ["<i class='fa-solid fa-circle-chevron-left'></i>", "<i class='fa-solid fa-circle-chevron-right'></i>"], 
    dots:false,
    rtl:false,
    items: 1,
    autoplay:true,
  })
});

// Category Slider
jQuery(document).ready(function() {
  jQuery('#trending_section .owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav:true,
    navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i>"], 
    dots:false,
    rtl:false,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1000: {
        items: 3
      },
      1200: {
        items: 4
      }
    },
    autoplay:true,
  })
});