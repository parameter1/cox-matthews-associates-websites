const NativeXConfiguration = require('@parameter1/base-cms-marko-web-native-x/config');

const config = new NativeXConfiguration('https://diverse.native-x.parameter1.com');

config.enabled = true;

config
  .setAliasPlacements('default', [
    { name: 'default', id: '61f837a0a182000001d6e5f4' },
  ]);

module.exports = config;
