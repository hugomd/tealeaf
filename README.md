# tealeaf 🍵
[![Build status](https://img.shields.io/travis/hugomd/tealeaf.svg)](https://travis-ci.org/hugomd/tealeaf)

A Hapi 17 plugin that adds `/teapot` and has a 0.00001% chance of forcing any request to return 418.

# Installation
```
npm i tealeaf
```

# Usage
```js
const hapi = require('hapi');
const tealeaf = require('tealeaf');

(async function() {
  const server = hapi.server({port: 3000});

  await server.register([
    {
      plugin: tealeaf,
      options: {
        chance: 50 // Percent
      }
    }
  ]);

  await server.start();
})();
```
