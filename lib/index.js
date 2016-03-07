(function($) {
  $(function() {
    setTimeout(function() {
      $('iframe[id*="adsIfrme"]').each(function() {
        $(this).remove();
      });
      $('.divCloseBut').each(function() {
        $(this).remove();
      });
    }, 3000);
  });
}(jQuery));