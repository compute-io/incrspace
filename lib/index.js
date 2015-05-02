'use strict';

// MODULES //

var isNumber = require( 'validate.io-number-primitive' );


// VARIABLES //

var MAXLENGTH = Math.pow( 2, 32 ) - 1;


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
function incrspace( x1, x2, increment ) {
	var arr,
		len,
		inc,
		i;
	if ( !isNumber( x1 ) ) {
		throw new TypeError( 'incrspace()::invalid input argument. Start must be numeric. Value: `' + x1 + '`.' );
	}
	if ( !isNumber( x2 ) ) {
		throw new TypeError( 'incrspace()::invalid input argument. Stop must be numeric. Value: `' + x2 + '`.' );
	}
	if ( arguments.length < 3 ) {
		inc = 1;
	} else {
		inc = increment;
		if ( !isNumber( inc ) ) {
			throw new TypeError( 'incrspace()::invalid input argument. Increment must be numeric. Value: `' + inc + '`.' );
		}
	}
	len = Math.ceil( ( x2-x1 ) / inc );

	if ( len > MAXLENGTH ) {
		throw new RangeError( 'incrspace()::invalid input arguments. Generated array exceeds maximum array length.' );
	}
	if ( len <= 1 ) {
		return [ x1 ];
	}
	if ( len > 64000 ) {
		// Ensure fast elements...
		arr = [];
		arr.push( x1 );
		for ( i = 1; i < len; i++ ) {
			arr.push( x1 + inc*i );
		}
	} else {
		arr = new Array( len );
		arr[ 0 ] = x1;
		for ( i = 1; i < len; i++ ) {
			arr[ i ] = x1 + inc*i;
		}
	}
	return arr;
} // end FUNCTION incrspace()


// EXPORTS //

module.exports = incrspace;
