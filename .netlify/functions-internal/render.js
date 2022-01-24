const { init } = require('../handler.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set([]),
	_: {
		mime: {},
		entry: {"file":"start-1ca6e837.js","js":["start-1ca6e837.js","chunks/vendor-e44b2885.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js'))
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				a: [0,2],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/quote\.json$/,
				params: null,
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/quote.json.ts.js'))
			}
		]
	}
});
