/**
*
*	COMPUTE: incrspace
*
*
*	DESCRIPTION:
*		- Generates a linearly spaced numeric array using a provided increment.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014-2015. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

'use strict';

// MODULES //

var isNumber = require( 'validate.io-number-primitive' );

// INCRSPACE //

/**
* FUNCTION: incrspace( start, stop[, increment] )
*	Generates a linearly spaced numeric array using a provided increment.
*
* @param {Number} start - first array value
* @param {Number} stop - array element bound
* @param {Number} [increment] - increment
* @returns {Array} linearly spaced numeric array
*/
function incrspace( x1, x2, inc ) {
	var arr, len, i;
	if ( !isNumber( x1 ) ) {
		throw new TypeError( 'incrspace()::invalid input argument. Start must be numeric. Value: `' + x1 + '`.' );
	}
	if ( !isNumber( x2 ) ) {
		throw new TypeError( 'incrspace()::invalid input argument. Stop must be numeric. Value: `' + x2 + '`.' );
	}
	if ( arguments.length < 3 ) {
		inc = 1;
	} else {
		if ( !isNumber( inc ) ) {
			throw new TypeError( 'incrspace()::invalid input argument. Increment must be numeric. Value: `' + inc + '`.' );
		}
	}
	// Calculate the array length:
	len = Math.ceil( ( x2-x1 ) / inc );
	if ( len < 0 ) {
		return [ x1 ];
	}

	// Build the output array...
	if ( len > 64000 ) {
		// Ensure fast elements...
		arr = [];
		arr.push( x1 );
		for ( i = 1; i < len; i++ ) {
			arr.push( x1 + inc*i );
		}
		return arr;
	}
	arr = new Array( len );
	arr[ 0 ] = x1;
	for ( i = 1; i < len; i++ ) {
		arr[ i ] = x1 + inc*i;
	}
	return arr;
} // end FUNCTION incrspace()


// EXPORTS //

module.exports = incrspace;
