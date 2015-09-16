async-chainable-compat
======================
Plugin for [async-chainable](https://github.com/hash-bang/async-chainable) that provides a compatibility layer like the original [async](https://www.npmjs.com/package/async) NPM.


	var asyncChainable = require('async-chainable');
	var asyncChainableCompat = require('async-chainable-exec');

	asyncChainable()
		.use(asyncChainableCompat)
		.mapLimit(); // Access to async functions from this point onwards
