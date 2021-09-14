const gql = require('graphql-tag');
const IdentityX = require('@parameter1/base-cms-marko-web-identity-x');
const { getAsObject, get } = require('@parameter1/base-cms-object-path');
const { asyncRoute } = require('@parameter1/base-cms-utils');
const rapidIdentify = require('@parameter1/base-cms-marko-web-omeda-identity-x/routes/rapid-identify');
const omedaConfig = require('../config/omeda');
const authenticate = require('../templates/user/authenticate');
const login = require('../templates/user/login');
const logout = require('../templates/user/logout');
const register = require('../templates/user/register');
const profile = require('../templates/user/profile');

const { isArray } = Array;

const countQuery = gql`
  query CountComments($identifier: String!) {
    commentsForStream(input: { identifier: $identifier }) {
      totalCount
    }
  }
`;

module.exports = (app) => {
  const { site } = app.locals;
  const config = getAsObject(app, 'locals.identityX');
  IdentityX(app, config);
  const enable = site.get('idxNavItems.enable');

  if (enable) {
    const navConfig = [
      {
        href: config.getEndpointFor('login'),
        label: 'Log In',
        when: 'logged-out',
        modifiers: ['user'],
      },
      {
        href: config.getEndpointFor('profile'),
        label: 'My Profile',
        when: 'logged-in',
        modifiers: ['user'],
      },
      {
        href: config.getEndpointFor('logout'),
        label: 'Log Out',
        when: 'logged-in',
        modifiers: ['user'],
      },
      {
        href: config.getEndpointFor('register'),
        label: 'Register',
        when: 'logged-out',
        modifiers: ['user'],
      },
    ];

    // add to tertiary nav items to left of search icon in header
    const headerNav = site.get('navigation.tertiary.items');
    if (isArray(headerNav)) headerNav.unshift(...navConfig);

    const mobileNav = site.get('navigation.mobileMenu.secondary');
    if (isArray(mobileNav)) mobileNav.push(...navConfig);

    const desktopMenuNav = site.get('navigation.desktopMenu.about');
    if (isArray(desktopMenuNav)) desktopMenuNav.push(...navConfig);
  }

  app.get(config.getEndpointFor('authenticate'), (_, res) => {
    res.marko(authenticate);
  });

  app.get(config.getEndpointFor('login'), (_, res) => {
    res.marko(login);
  });

  app.get(config.getEndpointFor('logout'), (_, res) => {
    res.marko(logout);
  });

  app.get(config.getEndpointFor('register'), (_, res) => {
    res.marko(register);
  });

  app.get(config.getEndpointFor('profile'), (_, res) => {
    res.marko(profile);
  });

  app.use('/__idx/omeda-rapid-ident', rapidIdentify({
    brandKey: omedaConfig.brandKey,
    productId: get(omedaConfig, 'rapidIdentification.productId'),
  }));

  app.get('/__idx/comment-count/:identifier', asyncRoute(async (req, res) => {
    const { identityX } = req;
    const { identifier } = req.params;
    const variables = { identifier };
    const { data } = await identityX.client.query({ query: countQuery, variables });
    res.json(data.commentsForStream);
  }));
};
