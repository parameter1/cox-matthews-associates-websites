const NativeXConfiguration = require('@parameter1/base-cms-marko-web-native-x/config');

const config = new NativeXConfiguration('https://diverseeducation.native-x.parameter1.com');

config.enabled = true;

config
  .setAliasPlacements('default', [
    { name: 'load-more', id: '61f8393dbf6bab0001e0629f' },
  ]);

module.exports = config;
