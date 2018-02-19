const {name, version} = require('./package');

const plugin = {
  name,
  version,
  // 0.00001% chance of redirecting to 418 by default
  register: (server, {chance = 0.00001}) => {
    server.ext({
      type: 'onRequest',
      method: (request, h) => {
        const float = chance * 0.01;
        if (Math.random() < float) {
          request.setUrl('/teapot');
        }
        return h.continue;
      },
    });

    server.route({
      method: 'GET',
      path: '/teapot',
      handler: (request, h) => {
        return h.response().code(418);
      },
    });
  },
};

module.exports = plugin;
