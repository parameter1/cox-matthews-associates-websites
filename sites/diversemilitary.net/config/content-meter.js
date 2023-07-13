const defaultConfig = require('@cox-matthews-associates/package-global/config/content-meter');

module.exports = {
  ...defaultConfig,
  enable: process.env.ENABLE_CONTENT_METER === 'false',
};
