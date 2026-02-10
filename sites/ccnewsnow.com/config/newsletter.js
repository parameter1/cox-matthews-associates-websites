const baseConfig = {
  action: 'https://cma.dragonforms.com/CCNewsNow',
  hiddenInputs: [],
};

module.exports = {
  signupFooter: {
    ...baseConfig,
    name: 'CCNewsNow e-Newsletter',
    description: 'Connecting you with news and resources related to community colleges.',
  },
  modal: {
    ...baseConfig,
    enabled: false,
    cookieValueToMatch: 1,
    name: 'CCNewsNow e-Newsletter',
    description: 'Connecting you with news and resources related to community colleges.',
  },
};
