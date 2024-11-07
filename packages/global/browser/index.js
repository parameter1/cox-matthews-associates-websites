import GCSE from '@parameter1/base-cms-marko-web-gcse/browser';
import ContactUs from '@parameter1/base-cms-marko-web-contact-us/browser';
import MonoRail from '@parameter1/base-cms-marko-web-theme-monorail/browser';

const GlobalPremiumEmployers = () => import(/* webpackChunkName: "global-premium-employers" */ './premium-employers.vue');
const ContentMeterTrack = () => import(/* webpackChunkName: "content-meter-tracker" */ './track-content-meter.vue');

export default (Browser) => {
  GCSE(Browser);
  ContactUs(Browser);
  MonoRail(Browser);
  Browser.register('GlobalPremiumEmployers', GlobalPremiumEmployers);
  Browser.register('ContentMeterTrack', ContentMeterTrack);
};
