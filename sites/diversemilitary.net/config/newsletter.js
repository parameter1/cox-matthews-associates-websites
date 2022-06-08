const baseConfig = {
  action: 'https://cma.dragonforms.com/DiverseMilitary',
  hiddenInputs: [
    // { name: 'omedasite', value: 'diverse_subscriptions' },
  ],
};

module.exports = {
  signupFooter: {
    ...baseConfig,
    name: '<strong><em>Diverse</em></strong> Military e-Newsletters',
    description: 'News, policies, transition issues and information related to higher education in the military.',
  },
};
