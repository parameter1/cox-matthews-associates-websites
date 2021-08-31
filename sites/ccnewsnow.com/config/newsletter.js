const baseConfig = {
  action: 'https://responses.diverseeducation.com/CCNewsNow',
  hiddenInputs: [
    // { name: 'omedasite', value: 'diverse_subscriptions' },
  ],
};

module.exports = {
  signupFooter: {
    ...baseConfig,
    name: 'CCNewsNow e-Newsletter',
    description: 'Connecting you with news and resources related to community colleges.',
  },
};
