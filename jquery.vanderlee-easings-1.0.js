/* Vanderlee Easing methods v1.0
 *
 * Copyright (c) 2011 Martijn W. van der Lee
 * Licensed under the MIT.
 *
 * More jQuery easing methods
 */

jQuery.extend(jQuery.easing, {
	_random: function (x, t, b, c, d, s) {	
		var lin = b + (c * t / d);
		var range = Math.min(lin, 1. - lin) / s;
		return lin + (Math.random() * range * 2) - range;
	},
	random: function (x, t, b, c, d) 		{	return jQuery.easing._random(x, t, b, c, d, 1);	},	
	halfRandom: function (x, t, b, c, d) 	{	return jQuery.easing._random(x, t, b, c, d, 2);	},	
	quarterRandom: function (x, t, b, c, d) {	return jQuery.easing._random(x, t, b, c, d, 4);	},	
	eighthRandom: function (x, t, b, c, d) 	{	return jQuery.easing._random(x, t, b, c, d, 8);	},	
	
	chance: function (x, t, b, c, d) {
		//TODO Digitized
		return (Math.random() * d) > t? b : b + c;
	},
	
	cosBounceIn: function (x, t, b, c, d) {
		var cos = Math.cos(Math.PI * 1.5 * t / d);
		if (cos < 0)	cos *= -.5;
		return b + ((1 - cos) * c);
	},
	
	cosBounceOut: function (x, t, b, c, d) {					
		return (b + c) - jQuery.easing.cosBounceIn(x, d - t, b, c, d);
	},
	
	cosBounceInOut: function (x, t, b, c, d) {					
		if (t < d / 2) return jQuery.easing.cosBounceIn (x, t * 2, 0, c, d) * .5 + b;
		return jQuery.easing.cosBounceOut (x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
	},
	
	_waves: function (x, t, b, c, d, f, r) {	
		var range = Math.min(t / d, 1 - (t / d)) * f;
		return b + (c * t / d) + (Math.sin(Math.PI * 2 * r * t / d) * range);
	},
	
	twoLightWaves: function (x, t, b, c, d) 	{	return jQuery.easing._waves(x, t, b, c, d, .1, 2);	},
	twoWaves: function (x, t, b, c, d) 			{	return jQuery.easing._waves(x, t, b, c, d, .2, 2);	},
	twoHeavyWaves: function (x, t, b, c, d) 	{	return jQuery.easing._waves(x, t, b, c, d, .4, 2);	},
	fourLightWaves: function (x, t, b, c, d) 	{	return jQuery.easing._waves(x, t, b, c, d, .1, 4);	},
	fourWaves: function (x, t, b, c, d) 		{	return jQuery.easing._waves(x, t, b, c, d, .2, 4);	},
	fourHeavyWaves: function (x, t, b, c, d) 	{	return jQuery.easing._waves(x, t, b, c, d, .4, 4);	},
	eightLightWaves: function (x, t, b, c, d) 	{	return jQuery.easing._waves(x, t, b, c, d, .1, 8);	},
	eightWaves: function (x, t, b, c, d) 		{	return jQuery.easing._waves(x, t, b, c, d, .2, 8);	},
	eightHeavyWaves: function (x, t, b, c, d) 	{	return jQuery.easing._waves(x, t, b, c, d, .4, 8);	},			
	sixteenLightWaves: function (x, t, b, c, d) {	return jQuery.easing._waves(x, t, b, c, d, .1, 16);	},
	sixteenWaves: function (x, t, b, c, d) 		{	return jQuery.easing._waves(x, t, b, c, d, .2, 16);	},
	sixteenHeavyWaves: function (x, t, b, c, d) {	return jQuery.easing._waves(x, t, b, c, d, .4, 16);	},
	
	_steps: function (x, t, b, c, d, s) {						
		return b + (Math.ceil((s - 1) * t / d) / s * c);
	},

	twoSteps: function (x, t, b, c, d) 			{	return jQuery.easing._steps(x, t, b, c, d, 2);	},
	fourSteps: function (x, t, b, c, d) 		{	return jQuery.easing._steps(x, t, b, c, d, 4);	},
	eightSteps: function (x, t, b, c, d) 		{	return jQuery.easing._steps(x, t, b, c, d, 8);	},
	sixteenSteps: function (x, t, b, c, d) 		{	return jQuery.easing._steps(x, t, b, c, d, 16);	}
});