var expect = require('chai').expect;
var asyncChainable = require('async-chainable')
	.use(require('..'));

describe('async functions exist', function() {
	it('should have access to async functions', function() {
		expect(async().each).to.be.a.function;
		expect(async().eachSeries).to.be.a.function;
		expect(async().eachLimit).to.be.a.function;
		expect(async().map).to.be.a.function;
		expect(async().mapSeries).to.be.a.function;
		expect(async().mapLimit).to.be.a.function;
		expect(async().filter).to.be.a.function;
		expect(async().filterSeries).to.be.a.function;
		expect(async().reject).to.be.a.function;
		expect(async().rejectSeries).to.be.a.function;
		expect(async().reduce).to.be.a.function;
		expect(async().reduceRight).to.be.a.function;
		expect(async().detect).to.be.a.function;
		expect(async().detectSeries).to.be.a.function;
		expect(async().sortBy).to.be.a.function;
		expect(async().some).to.be.a.function;
		expect(async().every).to.be.a.function;
		expect(async().concat).to.be.a.function;
		expect(async().concatSeries).to.be.a.function;

		expect(async().parallelLimit).to.be.a.function;
		expect(async().whilst).to.be.a.function;
		expect(async().doWhilst).to.be.a.function;
		expect(async().until).to.be.a.function;
		expect(async().doUntil).to.be.a.function;
		expect(async().forever).to.be.a.function;
		expect(async().waterfall).to.be.a.function;
		expect(async().compose).to.be.a.function;
		expect(async().seq).to.be.a.function;
		expect(async().applyEach).to.be.a.function;
		expect(async().applyEachSeries).to.be.a.function;
		expect(async().queue).to.be.a.function;
		expect(async().priorityQueue).to.be.a.function;
		expect(async().cargo).to.be.a.function;
		expect(async().auto).to.be.a.function;
		expect(async().retry).to.be.a.function;
		expect(async().iterator).to.be.a.function;
		expect(async().apply).to.be.a.function;
		expect(async().nextTick).to.be.a.function;
		expect(async().times).to.be.a.function;
		expect(async().timesSeries).to.be.a.function;

		expect(async().Utils).to.be.an.object;

		expect(async().memoize).to.be.a.function;
		expect(async().unmemoize).to.be.a.function;
		expect(async().log).to.be.a.function;
		expect(async().dir).to.be.a.function;
		expect(async().noConflict).to.be.a.function;
	});
});
