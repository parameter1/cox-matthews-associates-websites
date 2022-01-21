import GCSE from '@parameter1/base-cms-marko-web-gcse/browser';
import GTM from '@parameter1/base-cms-marko-web-gtm/browser';
import GAM from '@parameter1/base-cms-marko-web-gam/browser';
import Search from '@parameter1/base-cms-marko-web-search/browser';
import SocialSharing from '@parameter1/base-cms-marko-web-social-sharing/browser';
import NativeX from '@parameter1/base-cms-marko-web-native-x/browser';
import OmedaRapidIdentityX from '@parameter1/base-cms-marko-web-omeda-identity-x/browser/rapid-identify.vue';
import ContactUs from '@parameter1/base-cms-marko-web-contact-us/browser';

const BlockLoader = () => import(/* webpackChunkName: "global-block-loader" */ './block-loader.vue');
const MenuToggleButton = () => import(/* webpackChunkName: "global-menu-toggle-button" */ './menu-toggle-button.vue');
const WufooForm = () => import(/* webpackChunkName: "global-wufoo-form" */ './wufoo-form.vue');
const TopStoriesMenu = () => import(/* webpackChunkName: "global-top-stories-menu" */ './top-stories-menu.vue');

export default (Browser) => {
  GCSE(Browser);
  ContactUs(Browser);
  GTM(Browser);
  GAM(Browser);
  Search(Browser);
  SocialSharing(Browser);
  NativeX(Browser);

  Browser.register('GlobalBlockLoader', BlockLoader);
  Browser.register('GlobalMenuToggleButton', MenuToggleButton);
  Browser.register('GlobalTopStoriesMenu', TopStoriesMenu);
  Browser.register('WufooForm', WufooForm);

  Browser.register('OmedaRapidIdentityX', OmedaRapidIdentityX, {
    on: {
      'encrypted-id-found': (encryptedId) => {
        if (encryptedId && window.p1events) {
          window.p1events('setIdentity', `omeda.rrpcd.customer*${encryptedId}~encrypted`);
        }
      },
    },
  });
};
