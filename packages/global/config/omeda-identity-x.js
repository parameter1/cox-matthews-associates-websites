const { getOmedaCustomerRecord } = require('@parameter1/base-cms-marko-web-omeda-identity-x/omeda-data');
const { get, getAsArray } = require('@parameter1/base-cms-object-path');

module.exports = ({
  omedaConfig,
  idxConfig,
  rapidIdentProductId,
  websiteBehaviorAttributeId,
  // Passed through, if specified.
  appendPromoCodeToHook = [],
  appendBehaviorToHook = [],
  appendDemographicToHook = [],
}) => ({
  clientKey: omedaConfig.clientKey,
  brandKey: omedaConfig.brandKey,
  appId: omedaConfig.appId,
  inputId: omedaConfig.inputId,
  rapidIdentProductId,
  idxConfig,

  /**
   * Behavior config is now mandatory and can be generated by the CLI.
   * @see https://github.com/parameter1/identity-x-omeda-cli
   *  */
  behaviors: {
    logIn: 9,
    verifyEmail: 11,
    submitProfile: 10,
  },
  behaviorAttributes: {
    website: {
      id: 7,
      valueId: websiteBehaviorAttributeId,
    },
    actionSource: {
      id: 6,
      valueIds: {
        default: 21141,
        newsletterSignup: 21143,
        comments: 21145,
        contentGate: 21139,
      },
    },
    newsletterSignupType: {
      id: 4,
      valueIds: {
        default: 21138,
        pushdown: 21136,
        inlineContent: 21144,
        inlineSection: 21142,
        footer: 21134,
      },
    },
    contentGateType: {
      id: 5,
      valueIds: {
        default: 21135,
        metered: 21137,
        printPreview: 21140,
      },
    },
  },
  appendPromoCodeToHook,
  appendBehaviorToHook,
  appendDemographicToHook,
  onAuthenticationSuccessFormatter: (async ({
    req,
    payload,
    loginSource,
    additionalEventData,
  }) => {
    // BAIL if omedaGraphQLCLient isnt available return payload.
    if (!req.$omedaGraphQLClient) return payload;

    const identityXOptInHooks = req.app.locals.site.getAsObject('identityXOptInHooks');
    const omeda = req.app.locals.site.getAsObject('omeda');
    if (identityXOptInHooks.onAuthenticationSuccess) {
      const { productIds, promoCode } = identityXOptInHooks.onAuthenticationSuccess;
      const { user } = payload;

      const found = getAsArray(user, 'externalIds')
        .find(({ identifier, namespace }) => identifier.type === 'encrypted'
          && namespace.provider === 'omeda'
          && namespace.tenant === omeda.brandKey);

      // BAIL if no encryptedCustomerId and return payload
      if (!found) return payload;
      const encryptedCustomerId = get(found, 'identifier.value');

      // Retrive the omeda customer
      const omedaCustomer = await getOmedaCustomerRecord({
        omedaGraphQLClient: req.$omedaGraphQLClient,
        encryptedCustomerId,
      });
      // Get the current user subscriptions
      const subscriptions = getAsArray(omedaCustomer, 'subscriptions');
      // For each autoOptinProduct check if they have a subscription.
      // Sign the user up if they do not

      const newSubscriptions = productIds.filter(
        (id) => !subscriptions.some(({ product }) => product.deploymentTypeId === id),
      );
      if (newSubscriptions && newSubscriptions.length) {
        // eslint-disable-next-line no-param-reassign
        additionalEventData.autoSignups = [];
        const deploymentTypes = newSubscriptions.map((id) => {
          // eslint-disable-next-line no-param-reassign
          additionalEventData.autoSignups.push({
            userId: user.id,
            productId: id,
            loginSource,
          });
          return { id, optedIn: true };
        });
        return ({
          ...payload,
          deploymentTypes,
          promoCode,
          appendPromoCodes: [
            { promoCode },
          ],
        });
      }
    }
    return payload;
  }),
});
