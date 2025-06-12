const configureGAM = require('@cox-matthews-associates/package-global/config/gam');

const config = configureGAM({ basePath: 'ccn' });

config.lazyLoad = {
  enabled: true, // set to true to enable lazy loading
  fetchMarginPercent: 100, // fetch ad when one viewport away
  renderMarginPercent: 50, // render ad when half viewport away
  mobileScaling: 2, // double these on mobile
};

config
  .setAliasAdUnits('default', [
    { name: 'leaderboard', templateName: 'LEADERBOARD', path: 'leaderboard' },
    { name: 'rail', templateName: 'RAIL', path: 'rotation' },
    { name: 'rotation', templateName: 'ROTATION', path: 'rotation' },
    { name: 'rotation-300', templateName: 'ROTATION-300', path: 'rotation' },
    { name: 'inline-content-mobile', templateName: 'INLINE-CONTENT-MOBILE', path: 'rotation' },
    { name: 'inline-content-desktop', templateName: 'INLINE-CONTENT-DESKTOP', path: 'rotation' },
    { name: 'right-rail', templateName: 'RIGHT-RAIL_300X350', path: 'right-rail_300x250' },
  ]);

const aliases = [
  // channel Aliases
];

aliases.forEach((alias) => config.setAliasAdUnits(alias, [
  { name: 'leaderboard', templateName: 'LEADERBOARD', path: `${alias}-leaderboard` },
  { name: 'rail', templateName: 'RAIL', path: `${alias}-rotation` },
  { name: 'rotation', templateName: 'ROTATION', path: `${alias}-rotation` },
  { name: 'rotation-300', templateName: 'ROTATION-300', path: `${alias}-rotation` },
  { name: 'inline-content-mobile', templateName: 'INLINE-CONTENT-MOBILE', path: `${alias}-rotation` },
  { name: 'inline-content-desktop', templateName: 'INLINE-CONTENT-DESKTOP', path: `${alias}-rotation` },
]));

module.exports = config;
