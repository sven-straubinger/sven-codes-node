// Scroll to sections
$("*[href='#!/#projects']").click(function() {
  $("html, body").animate({ scrollTop: $('#projects').position().top }, 500, "swing");
  return false;
});

$("*[href='#!/#accounts']").click(function() {
  $("html, body").animate({ scrollTop: $('#accounts').position().top }, 600, "swing");
  return false;
});
