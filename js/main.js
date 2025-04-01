(function ($) {
  "use strict";

  // Preloader (if the #preloader div exists)
  $(window).on('load', function() {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function() {
        $(this).remove();
      });
    }
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

  // Initiate the wowjs animation library
  new WOW().init();

  // Header scroll class
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // footer menu dropdown
  
  $('#footer .top-nav li a').on('click', function(){
    $('#footer .top-nav li a.current').removeClass('current');
    $(this).addClass('current');
});
  
//Toggle Menu
	$(".sign-in > a, .agent-que").click(function(){
	  $(".login_nav_drop").toggleClass('d-block');
	  $(".logout_menu").click(function(){
		  $(".login_nav_drop").removeClass('d-block');
		  
	  });
	});

//show other language
$(".hide-others").click(function(){
	$('.hide-others').addClass('hide');
	$('.back-to-hide').addClass('show');
	$('.show-others').toggleClass('d-block');
	
});
// $(".back-to-hide.show").click(function(){
	// $('.hide-others').addClass('show');
	// $('.show-others').toggleClass('d-none');
	
// });
//show other language
$(".agentview").click(function(){
	$('.viewagentdetail').toggleClass('d-block');
	$('.agentview').addClass('d-none');
	// $('.show-others').toggleClass('d-block');
	$('.agent_view.active').removeClass('active');
	$('.agent_view').addClass('active');
	
});
//image slider for agent meeting
$('.img-slider').owlCarousel({
    loop:false,
    margin:1,
	nav: true,
	navText:["<div class='nav-btn prev-slide'><img src='img/icons/listing/ic_left.png'></div>","<div class='nav-btn next-slide'><img src='img/icons/listing/ic_right.png'></div>"],
	dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

/* FOR NAV TOGGLES */
$('.btn--filters-js').click(function () {
	$(this).toggleClass("is-active");
	$('html').toggleClass("show-filters-js");
});
$('body').click(function (e) {
	if ($(e.target).parents('.filter-cell').length == 0) {
		$('.filter-trigger-js').siblings('.filter-target-js').hide();
		$('.filter-trigger-js').removeClass('is-active');
		$('body').removeClass('filter-active');
	}
});



/* FUNCTION FOR COLLAPSEABLE LINKS */
	$('.filter-trigger-js').click(function () {
		let isFilterMore = $(this).hasClass('filter-more-js');
		let magaFilter = $('.filter-maga');
		let isParMegaBody = $(this).parents('.maga-body-js').length;
		console.log(isParMegaBody, 'isParMegaBody');
		console.log(magaFilter, 'magaFilter');
		console.log($(this).hasClass("is-active"), 'is-active');
		if ($(this).hasClass("is-active")) {
			if (isParMegaBody == 0) {
				$(this).removeClass("is-active").siblings('.filter-target-js').hide();
				$('body').removeClass('filter-active');
			}
			if (isFilterMore) {
				$('.filter-maga__body .filter-trigger-js').removeClass('is-active');
				$('.filter-maga__body .filter-target-js').hide();
			}
			return;
		}
		if (isParMegaBody) {
			$('.filter-maga__body .filter-trigger-js').removeClass('is-active');
			$('.filter-maga__body .filter-target-js').hide();
			$(this).addClass("is-active").siblings('.filter-target-js').show();
			if ($(document).width() <= 767) {
				$('.filter-trigger-js').removeClass('is-active');
				$('.filter-target-js').hide();
				$(this).addClass("is-active").siblings('.filter-target-js').slideDown();
			}
		} else {
			$('.filter-trigger-js').removeClass('is-active');
			$('.filter-target-js').hide();
			$(this).addClass("is-active").siblings('.filter-target-js').slideDown();
		}
		$('body').addClass('filter-active');
		if (isFilterMore) {
			let megaBodyItem = magaFilter.find('.filter-trigger-js:first');
			megaBodyItem.addClass('is-active').siblings('.filter-target-js').show();
		}
	});
	if ($(document).width() <= 767) {
		$('.language-filter-js').click();
	}
	
//	chat toggle
$(document).ready(function(){
$('#action_menu_btn').click(function(){
	$('.action_menu').toggle();
});
	});
// range slider
var valueBubble = '<output class="rangeslider__value-bubble" />';

var unit = $('input[type="range"]').attr('unit');
var detail = $('input[type="range"]').attr('detail');

function updateValueBubble(pos, value, context) {
  pos = pos || context.position;
  value = value || context.value;
  var $valueBubble = $('.rangeslider__value-bubble', context.$range);
  var tempPosition = pos + context.grabPos;
  var position = (tempPosition <= context.handleDimension) ? context.handleDimension : (tempPosition >= context.maxHandlePos) ? context.maxHandlePos : tempPosition;

  if ($valueBubble.length) {
    $valueBubble[0].style.left = Math.ceil(position) + 'px';
    $valueBubble[0].innerHTML = detail + value + " " + unit;
  }
}

$('input[type="range"]').rangeslider({
  polyfill: false,
  onInit: function() {
    this.$range.append($(valueBubble));
    updateValueBubble(null, null, this);
  },
  onSlide: function(pos, value) {
    updateValueBubble(pos, value, this);
  }
});
// write a review
})(jQuery);
