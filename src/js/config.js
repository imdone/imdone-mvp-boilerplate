var config = require('../../.config');

module.exports = /prod/i.test(process.env.NODE_ENV) ? config.prod : config.dev;
