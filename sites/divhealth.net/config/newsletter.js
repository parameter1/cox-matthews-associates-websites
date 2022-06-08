const baseConfig = {
  action: 'https://cma.dragonforms.com/DiverseHealth',
  hiddenInputs: [
    // { name: 'omedasite', value: 'diverse_subscriptions' },
  ],
};

module.exports = {
  signupFooter: {
    ...baseConfig,
    name: '<strong><em>Diverse</em></strong> Health e-Newsletters',
    description: 'Connecting you with the organizations and resources that address diversity and inclusion in the fields of health and healthcare.',
  },
};
