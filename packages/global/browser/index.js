import GCSE from '@mindful-web/marko-web-gcse/browser';
import MonoRail from '@mindful-web/marko-web-theme-monorail/browser';

const GlobalPremiumEmployers = () => import(/* webpackChunkName: "global-premium-employers" */ './premium-employers.vue');

export default (Browser) => {
  GCSE(Browser);
  MonoRail(Browser);
  Browser.register('GlobalPremiumEmployers', GlobalPremiumEmployers);
};
