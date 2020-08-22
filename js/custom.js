//============================== header =========================

jQuery(document).ready(function($) {

    var navbar = $('.navbar-main'),
        $window = $(window);

	    $window.scroll(function() {
	    	if(($window.scrollTop() >= 200) && ($(".navbar-default").hasClass("navbar-main")))
	        {
	          	navbar.addClass("navbar-fixed");
	        } else {
	            navbar.removeClass("navbar-fixed");
	        }
	    });
	
});

//============================== Smooth Scroll =========================
$(document).ready(function () {
  $("body").niceScroll({
    autohidemode:false,
    cursorcolor: "#424242", // change cursor color in hex
    cursorwidth: "5px", // cursor width in pixel (you can also write "5px")
    cursorborder: "1px solid #424242", // css definition for cursor border
    cursorborderradius: "0", // border radius in pixel for cursor
    zindex: "1111" // change z-index for scrollbar div
  });
  $('.navbar-nav').onePageNav({
    currentClass: 'active',
    scrollSpeed: 700
  });

  $('.navbar-nav li a, .navbar-brand').click(function (event) {
    event.preventDefault();
    var link = this;
    $.smoothScroll({
      speed: 500,
      offset: -70,
      scrollTarget: link.hash
    });
  });
  $('.scroll').click(function (event) {
    event.preventDefault();
    var link = this;
    $.smoothScroll({
      speed: 500,
      offset: -70,
      scrollTarget: link.hash
    });
  });
});

//============================== Parralax UP =========================
jQuery(document).ready(function ($) {
  $("banner-area").paroller();
  $("counter-area").paroller();
  $("testimonial-area").paroller();
});

//============================== Counter UP =========================
jQuery(document).ready(function ($) {
  // Display the progress bar calling progressbar.js
  $('.progressbar1').progressBar({
    shadow: false,
    percentage: true,
    animation: true,
    height : "20",
    barColor : "#01accb"
  });
});

//============================== Counter UP =========================
jQuery(document).ready(function ($) {
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });
});

//============================== Portfolio Filter =========================
jQuery(document).ready(function () {

  // get the action filter option item on page load
  var $filterType = $('#filter li.active a').attr('class');

  // get and assign the portfolio element to the
  // $holder varible for use later
  var $holder = $('ul.portfolio-gallery');

  // clone all items within the pre-assigned $holder element
  var $data = $holder.clone();

  // attempt to call Quicksand when a filter option
  // item is clicked
  $('#filter li a').on('click', function (e) {
    // reset the active class on all the buttons
    $('#filter li').removeClass('active');

    // assign the class of the clicked filter option
    // element to our $filterType variable
    var $filterType = $(this).attr('class');
    $(this).parent().addClass('active');

    if ($filterType == 'all') {
      // assign all li items to the $filteredData var when
      // the 'All' filter option is clicked
      var $filteredData = $data.find('li');
    } else {
      // find all li elements that have our required $filterType
      // values for the data-type element
      var $filteredData = $data.find('li[data-type=' + $filterType + ']');
    }

    // call quicksand and assign transition parameters
    $holder.quicksand($filteredData, {
      duration: 600,
      easing: 'easeInOutQuad'
    });
    return false;
  });

}); // End of Portfolio Filter 

//============================== Portfolio Filter =========================
$(document).ready(function () {

  $("#testimonial-slider").owlCarousel({

    autoPlay: 3000, //Set AutoPlay to 3 seconds
    navigation: false,
    navigationText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    pagination: true,
    items: 2,
    itemsDesktop: [1199, 2],
    itemsDesktopSmall: [979, 2],
    itemsDesktopSmall: [768, 1],
    itemsDesktopSmall: [479, 1]

  });
});
