const NativeXConfiguration = require('@parameter1/base-cms-marko-web-native-x/config');

const config = new NativeXConfiguration('https://diverse.native-x.parameter1.com');

config.enabled = true;

config
  .setAliasPlacements('default', [
    { name: 'load-more', id: '61f83822a182000001d6e640' },
  ]);

module.exports = config;
