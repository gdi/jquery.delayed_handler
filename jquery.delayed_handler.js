/**
* jquery delayed function execution.
* Primarily useful if you are binding to keystrokes and want throttle actual event processing (like recalculation or ajax).
*   A Matt Wilson job, (c) 2010 Greenview Data, Inc. <mwilson@greenviewdata.com>. Released under the MIT License.
*
*  Sample Usage:
*  $('#my_text_input').bind('keyup', function() {
*    $.delayedHandler(function() {
*      // do the actual handling here!
*    }, 200); // the actual handling will be executed 200ms after the last event is sent.
*  });
**/
(function($) {
  $.delayedHandler = (function() {
    var timer_id = 0;
    return function(wrapper, delay) {
      clearTimeout(timer_id);
      timer_id = setTimeout(wrapper, delay);
    };
  })();
})(jQuery);
