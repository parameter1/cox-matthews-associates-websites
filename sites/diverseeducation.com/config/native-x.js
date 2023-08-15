const configureNativeX = require('@cox-matthews-associates/package-global/config/native-x');

const config = configureNativeX();

config.enabled = true;

config
  .setAliasPlacements('default', [
    { name: 'default', id: '61f837a0a182000001d6e5f4' },
    { name: 'promotion', id: '64db7690ae9a5e0001fc90f1' },
  ]);

module.exports = config;
