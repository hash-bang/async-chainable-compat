var expect = require('chai').expect;
var asyncChainable = require('async-chainable');
var asyncChainableCompat = require('..');

describe('async functions exist', function() {

	it('should have access to async collection functions', function() {
		var async = asyncChainable()
			.use(asyncChainableCompat);

		['concat', 'concatSeries', 'detect', 'detectLimit', 'detectSeries', 'each', 'eachLimit', 'eachOf', 'eachOfLimit', 'eachOfSeries', 'eachSeries', 'every', 'everyLimit', 'everySeries', 'filter', 'filterLimit', 'filterSeries', 'map', 'mapLimit', 'mapSeries', 'mapValues', 'mapValuesLimit', 'mapValuesSeries', 'reduce', 'reduceRight', 'reject', 'rejectLimit', 'rejectSeries', 'some', 'someLimit', 'someSeries', 'sortBy', 'transform']
		.forEach(function(func) {
			expect(async[func]).to.be.a.function;
		});
	});


	it('should have access to async control flow functions', function() {
		var async = asyncChainable()
			.use(asyncChainableCompat);

		['applyEach', 'applyEachSeries', 'auto', 'autoInject', 'cargo', 'compose', 'doDuring', 'doUntil', 'doWhilst', 'during', 'forever', 'parallel', 'parallelLimit', 'priorityQueue', 'queue', 'race', 'retry', 'retryable', 'seq', 'series', 'times', 'timesLimit', 'timesSeries', 'until', 'waterfall', 'whilst']
		.forEach(function(func) {
			expect(async[func]).to.be.a.function;
		});
	});


	it('should have access to async util functions', function() {
		var async = asyncChainable()
			.use(asyncChainableCompat);

		['apply', 'asyncify', 'constant', 'dir', 'ensureAsync', 'log', 'memorize', 'nextTick', 'reflect', 'reflectAll', 'setImmediate', 'timeout', 'unmemoize']
		.forEach(function(func) {
			expect(async[func]).to.be.a.function;
		});
	});

});
