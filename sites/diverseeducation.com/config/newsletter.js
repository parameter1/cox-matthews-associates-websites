const baseConfig = {
  action: 'https://cma.dragonforms.com/DiverseDaily',
  hiddenInputs: [],
};

module.exports = {
  signupFooter: {
    ...baseConfig,
    name: '<strong>The EDU Ledger</strong> Daily and Weekly Recap e-Newsletters',
    description: 'Keeping you abreast of late-breaking news and insights.',
  },
  modal: {
    ...baseConfig,
    enabled: false,
    cookieValueToMatch: 1,
    name: '<strong>The EDU Ledger</strong> Daily and Weekly Recap e-Newsletters',
    description: 'Keeping you abreast of late-breaking news and insights.',
  },
};
