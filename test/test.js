/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	incrspace = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'compute-incrspace', function tests() {

	it( 'should export a function', function test() {
		expect( incrspace ).to.be.a( 'function' );
	});

	it( 'should throw an error if the `start` value is not a numeric value', function test() {
		var values = [
			'5',
			null,
			true,
			undefined,
			NaN,
			[],
			{},
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				incrspace( value, 10 );
			};
		}
	});

	it( 'should throw an error if the `stop` value is not a numeric value', function test() {
		var values = [
			'5',
			null,
			true,
			undefined,
			NaN,
			[],
			{},
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				incrspace( 0, value );
			};
		}
	});

	it( 'should throw an error if the `increment` is not a numeric value', function test() {
		var values = [
			'5',
			null,
			true,
			undefined,
			NaN,
			[],
			{},
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				incrspace( 0, 10, value );
			};
		}
	});

	it( 'should return a linearly spaced array', function test() {
		var start, stop, expected, actual;

		start = 0;
		stop = 10;

		// Default behavior:
		actual = incrspace( start, stop );
		expected = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
		assert.deepEqual( actual, expected );

		// Specify the increment:
		actual = incrspace( start, stop, 2 );
		expected = [ 0, 2, 4, 6, 8 ];
		assert.deepEqual( actual, expected );

		actual = incrspace( start, 11, 2 );
		expected = [ 0, 2, 4, 6, 8, 10 ];
		assert.deepEqual( actual, expected );

		// Decrement:
		actual = incrspace( stop, start, -2 );
		expected = [ 10, 8, 6, 4, 2 ];

		assert.deepEqual( actual, expected );

		// Large array:
		actual = incrspace( start, 1e6, 1 );
		assert.strictEqual( actual.length, 1e6 );
	});

	it( 'should return a single element array for incompatible increments', function test() {
		assert.deepEqual( incrspace(0,10,-1), [ 0 ] );
		assert.deepEqual( incrspace(0,10,11), [ 0 ] );
	});

});
