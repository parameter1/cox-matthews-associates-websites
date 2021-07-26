const NativeXConfiguration = require('@parameter1/base-cms-marko-web-native-x/config');

const config = new NativeXConfiguration('https://diverseeducation.native-x.parameter1.com');

config
  .setAliasPlacements('default', [
    { name: 'load-more', id: 'TBD' },
  ]);

module.exports = config;
