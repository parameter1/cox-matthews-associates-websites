import GCSE from '@mindful-web/marko-web-gcse/browser';
import ContactUs from '@mindful-web/marko-web-contact-us/browser';
import MonoRail from '@mindful-web/marko-web-theme-monorail/browser';

const GlobalPremiumEmployers = () => import(/* webpackChunkName: "global-premium-employers" */ './premium-employers.vue');

export default (Browser) => {
  GCSE(Browser);
  ContactUs(Browser);
  MonoRail(Browser);
  Browser.register('GlobalPremiumEmployers', GlobalPremiumEmployers);
};
