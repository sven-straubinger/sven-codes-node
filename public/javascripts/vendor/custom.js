'use strict';

// Scroll to bottom of page
$("#scroll-indicator").click(function() {
  $("html, body").animate({ scrollTop: $(document).height()-$(window).height() }, 400, "swing");
  return false;
});
