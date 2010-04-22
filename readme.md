## Delayed Function Execution in jQuery.

Useful for throttling event handling from keystrokes; or at least that was the purpose for which I built it.

Ridiculously easy:

    $('#my_text_input').bind('keyup', function() {
      $.delayedHandler(function() {
        // do the actual handling here!
      }, 200); // the actual handling will be executed 200ms after the last event is sent.
    });
    
Or just check out the functional test.

by Matt Wilson, Greenview Data, Inc. 2010. Dual licensed (MIT/GPL), like jQuery itself. But also trivial :).