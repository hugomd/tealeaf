const {test} = require('ava');
const hapi = require('hapi');
const plugin = require('./index');

const options = {
	method: 'GET',
	url: '/'
};

let server;
test.before(async t => {
  server = hapi.server();
  await server.register([{plugin, options: {chance: 100}}]);
});

test('should redirect to teapot', async t => {
	const {statusCode} = await server.inject(options);
	t.is(statusCode, 418);
});

test('/teapot should return 418', async t => {
	const {statusCode} = await server.inject({...options, url: '/teapot'});
	t.is(statusCode, 418);
});
