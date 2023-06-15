const IdentityXConfiguration = require('@parameter1/base-cms-marko-web-identity-x/config');
const { get } = require('@parameter1/base-cms-object-path');
const newrelic = require('newrelic');

const { log } = console;

module.exports = ({
  appId,
  apiToken = process.env.IDENTITYX_API_TOKEN,
  hiddenFields = [
    'organizationTitle',
    'phoneNumber',
    'street',
    'addressExtra',
    'city',
    'postalCode',
    'regionCode',
    'countryCode',
  ],
  requiredServerFields = [
    'givenName',
    'familyName',
    'organization',
  ],
  requiredClientFields = [
    // 'regionCode',
    // 'countryCode',
    // 'postalCode',
  ],
  requiredCreateFields = [],
} = {}) => {
  const config = new IdentityXConfiguration({
    appId,
    apiToken,
    hiddenFields,
    requiredServerFields,
    requiredClientFields,
    requiredCreateFields,
    onHookError: (e) => {
      if (process.env.NODE_ENV === 'development') {
        log('ERROR IN IDENTITY-X HOOK', e);
        if (e.networkError) log('Network Error', get(e, 'networkError.result.errors.0'));
      }
      newrelic.noticeError(e);
    },
  });
  return config;
};
