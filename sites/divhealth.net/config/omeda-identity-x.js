const configure = require('@cox-matthews-associates/package-global/config/omeda-identity-x');
const omedaConfig = require('./omeda');
const idxConfig = require('./identity-x');

module.exports = configure({
  omedaConfig,
  idxConfig,
  rapidIdentProductId: 15,
  websiteBehaviorAttributeId: 21149,
});
