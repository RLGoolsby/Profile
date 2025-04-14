
$(function () {
    var navBar = $('#ulMasthead');
    var navBarHeight = 224; // Fixed top position of the sidebar when fixed
    // var footerBuffer = 60;  // A small buffer to prevent overlap with the footer
    var marginAdjustment = 10; //Margin adjustment to align content correctly

    // navBar link click event to highlight active link
    $('.navigation_link').click(function () {
        $('.navigation_link.active').removeClass("active");
        $(this).addClass("active");
    });

    // Update positions of elements dynamically
    function updatePositions() {
        var navbarBottom = $('.navigation').offset().top + $('.navigation').outerHeight();
        //   var footerTop = $('#footerWrapper').offset().top;
        var navBarHeight = navBarHeight.outerHeight();
        var maxScrollTop = navBarHeight;

        return {
            navbarBottom: navbarBottom,
            maxScrollTop: maxScrollTop
        };
    }

    function adjustNavbar() {
        var scrollTop = $(window).scrollTop();
        var positions = updatePositions();
        var navbarBottom = positions.navbarBottom;
        var maxScrollTop = positions.maxScrollTop;

        // navBar should be fixed when scrolling past the hero image
             
      if (scrollTop >= navbarBottom - navBarHeight) {
        if (scrollTop < maxScrollTop) {
          navBar.addClass('fixed').removeClass('absolute').css({ top: navBarHeight + 'px' });
        } else {
          navBar.removeClass('fixed').addClass('absolute').css({ top: maxScrollTop - navbarBottom + navBarHeight + 'px' });
        }
      } else {
        navBar.removeClass('fixed absolute').css({ top: navbarBottom + 'px' });
      }
    }

    // Initial adjustment
    adjustNavbar();

    // Adjust on scroll and resize
    $(window).on('scroll resize', adjustNavbar);

    // Smooth scrolling for sidebar links
    $('#ulMasthead a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        // Get the target element ID
        var targetId = $(this).attr('href');

        // Calculate the offset considering the navbar height
        var targetOffset = $(targetId).offset().top - navBarHeight - marginAdjustment;

        // Smoothly scroll to the target element
        $('html, body').animate({
            scrollTop: targetOffset
        }, 500); // Adjust the duration as needed
    });
});



$(window).scroll(function () {
    var scrollDistance = $(window).scrollTop();

    // Show/hide menu on scroll
    //if (scrollDistance >= 850) {
    //		$('nav').fadeIn("fast");
    //} else {
    //		$('nav').fadeOut("fast");
    //}

    // Assign active class to nav links while scrolling
    $('.page-section').each(function (i) {
        if ($(this).position().top <= scrollDistance) {
            $('.navigation .navigation_link a.active').removeClass('active');
            $('.navigation .navigation_link a').eq(i).addClass('active');
        }
    });
}).scroll();