/* jQuery.ease v1.0
 * https://github.com/vanderlee/easing
 *
 * Copyright (c) 2011 Martijn W. van der Lee
 * Licensed under the MIT.
 *
 * Access jQuery easing methods easily.
 */
 
(function( $ ){ 
	jQuery.ease = function(method, fraction) {
		return jQuery.easing[method](null, fraction, 0, 1, 1);
	};
})( jQuery );