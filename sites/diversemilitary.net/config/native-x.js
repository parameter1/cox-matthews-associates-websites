const configureNativeX = require('@cox-matthews-associates/package-global/config/native-x');

const config = configureNativeX();

config.enabled = true;

config
  .setAliasPlacements('default', [
    { name: 'default', id: '61f8393dbf6bab0001e0629f' },
  ]);

module.exports = config;
