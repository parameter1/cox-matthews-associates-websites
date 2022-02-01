const configureNativeX = require('@cox-matthews-associates/package-global/config/native-x');

const config = configureNativeX();

config.enabled = true;

config
  .setAliasPlacements('default', [
    { name: 'default', id: '61f83822a182000001d6e640' },
  ]);

module.exports = config;
