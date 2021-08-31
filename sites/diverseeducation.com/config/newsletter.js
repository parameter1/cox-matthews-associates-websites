const baseConfig = {
  action: 'https://responses.diverseeducation.com/DiverseDaily',
  hiddenInputs: [
    // { name: 'omedasite', value: 'diverse_subscriptions' },
  ],
};

module.exports = {
  signupFooter: {
    ...baseConfig,
    name: '<strong><em>Diverse</em></strong> Daily and Weekly Recap e-Newsletters',
    description: 'Keeping you abreast of late-breaking news and insights.',
  },
};
