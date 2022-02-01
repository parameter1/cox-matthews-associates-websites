const configureNativeX = require('@cox-matthews-associates/package-global/config/native-x');

const config = configureNativeX();

config.enabled = true;

config
  .setAliasPlacements('default', [
    { name: 'default', id: '61f838b0bf6bab0001e06258' },
  ]);

module.exports = config;
