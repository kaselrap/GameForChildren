(function($) {

  $('.first.circle').circleProgress({
    value: .80
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(80 * progress) + '<i>%</i>');
  });
})(jQuery);
