Incrspace
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Generates a linearly spaced numeric array using a provided increment.


## Installation

``` bash
$ npm install compute-incrspace
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage


``` javascript
var incrspace = require( 'compute-incrspace' );
```


#### incrspace( start, stop[, increment] )

Generates a linearly spaced numeric `array`. If an `increment` is not provided, the default `increment` is `1`.

``` javascript
var arr = incrspace( 0, 11, 2 );
// returns [ 0, 2, 4, 6, 8, 10 ]
```


## Notes

The output `array` is guaranteed to include the `start` value but does __not__ include the `stop` value. Beware that values subsequent to the `start` value are subject to floating point errors. Hence,

``` javascript
var arr = incrspace( 0.1, 0.5, 0.2 );
// returns [ 0, ~0.3 ]
```

where `arr[1]` is only guaranteed to be approximately equal to `0.3`.


If you desire more control over element precision, consider using [compute-roundn](https://github.com/compute-io/roundn):

``` javascript
var roundn = require( 'compute-roundn' );

// Create an array subject to floating point errors:
var arr = incrspace( 0, 1.01, 0.02 );

// Round each value to the nearest hundredth:
roundn( arr, -2 );

console.log( arr.join( '\n' ) );
```


This function is similar to [compute-linspace](https://github.com/compute-io/incrspace).


## Examples

``` javascript
var incrspace = require( 'compute-incrspace' ),
	out;

// Default behavior:
out = incrspace( 0, 10 );
console.log( out.join( '\n' ) );

// Specify increment:
out = incrspace( 0, 10, 2 );
console.log( out.join( '\n' ) );

out = incrspace( 0, 11, 2 );
console.log( out.join( '\n' ) );

// Create an array using a negative increment:
out = incrspace( 10, 0, -2 );
console.log( out.join( '\n' ) );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2014-2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/compute-incrspace.svg
[npm-url]: https://npmjs.org/package/compute-incrspace

[travis-image]: http://img.shields.io/travis/compute-io/incrspace/master.svg
[travis-url]: https://travis-ci.org/compute-io/incrspace

[coveralls-image]: https://img.shields.io/coveralls/compute-io/incrspace/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/incrspace?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/incrspace.svg
[dependencies-url]: https://david-dm.org/compute-io/incrspace

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/incrspace.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/incrspace

[github-issues-image]: http://img.shields.io/github/issues/compute-io/incrspace.svg
[github-issues-url]: https://github.com/compute-io/incrspace/issues
