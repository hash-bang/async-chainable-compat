var async = require('async');

module.exports = function() {
	// Async compat functionality - so this module becomes a drop-in replacement {{{
	// Collections
	this.each = async.each;
	this.eachSeries = async.eachSeries;
	this.eachLimit = async.eachLimit;
	this.map = async.map;
	this.mapSeries = async.mapSeries;
	this.mapLimit = async.mapLimit;
	this.filter = async.filter;
	this.filterSeries = async.filterSeries;
	this.reject = async.reject;
	this.rejectSeries = async.rejectSeries;
	this.reduce = async.reduce;
	this.reduceRight = async.reduceRight;
	this.detect = async.detect;
	this.detectSeries = async.detectSeries;
	this.sortBy = async.sortBy;
	this.some = async.some;
	this.every = async.every;
	this.concat = async.concat;
	this.concatSeries = async.concatSeries;

	// Control Flow
	// See main .series() and .parallel() code for async compatibility
	this.parallelLimit = async.parallelLimit;
	this.whilst = async.whilst;
	this.doWhilst = async.doWhilst;
	this.until = async.until;
	this.doUntil = async.doUntil;
	this.forever = async.forever;
	this.waterfall = async.waterfall;
	this.compose = async.compose;
	this.seq = async.seq;
	this.applyEach = async.applyEach;
	this.applyEachSeries = async.applyEachSeries;
	this.queue = async.queue;
	this.priorityQueue = async.priorityQueue;
	this.cargo = async.cargo;
	this.auto = async.auto;
	this.retry = async.retry;
	this.iterator = async.iterator;
	this.apply = async.apply;
	this.nextTick = async.nextTick;
	this.times = async.times;
	this.timesSeries = async.timesSeries;
	this.Utils = async.Utils;

	// Utils
	this.memoize = async.memoize;
	this.unmemoize = async.unmemoize;
	this.log = async.log;
	this.dir = async.dir;
	this.noConflict = async.noConflict;
	// }}}
};
