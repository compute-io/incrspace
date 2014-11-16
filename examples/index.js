'use strict';

var incrspace = require( './../lib' ),
	roundn = require( 'compute-roundn' ),
	out;

// Default behavior:
console.log( '\nDefault:' );
out = incrspace( 0, 10 );
console.log( out.join( '\n' ) );

// Specify increment:
console.log( '\nIncrement 2:' );
out = incrspace( 0, 10, 2 );
console.log( out.join( '\n' ) );

console.log( '\nIncrement 2:' );
out = incrspace( 0, 11, 2 );
console.log( out.join( '\n' ) );

console.log( '\nIncrement 0.02:' );
out = incrspace( 0, 1.01, 0.02 );
console.log( out.join( '\n' ) );

// Account for floating point errors:
console.log( '\nIncrement 0.02 (roundn):' );
out = incrspace( 0, 1.01, 0.02 );
roundn( out, -2 );
console.log( out.join( '\n' ) );

// Create an array using a negative increment:
console.log( '\nDecremented values:' );
out = incrspace( 10, 0, -2 );
console.log( out.join( '\n' ) );
