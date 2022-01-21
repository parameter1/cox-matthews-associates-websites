import GTM from '@parameter1/base-cms-marko-web-gtm/browser';
import GAM from '@parameter1/base-cms-marko-web-gam/browser';
import Search from '@parameter1/base-cms-marko-web-search/browser';
import SocialSharing from '@parameter1/base-cms-marko-web-social-sharing/browser';
import NativeX from '@parameter1/base-cms-marko-web-native-x/browser';
import OmedaRapidIdentityX from '@parameter1/base-cms-marko-web-omeda-identity-x/browser/rapid-identify.vue';

const ThemeBlockLoader = () => import(/* webpackChunkName: "theme-block-loader" */ './block-loader.vue');
const ThemeMenuToggleButton = () => import(/* webpackChunkName: "theme-menu-toggle-button" */ './menu-toggle-button.vue');
const ThemeWufooForm = () => import(/* webpackChunkName: "theme-wufoo-form" */ './wufoo-form.vue');
const ThemeTopStoriesMenu = () => import(/* webpackChunkName: "theme-top-stories-menu" */ './top-stories-menu.vue');

export default (Browser) => {
  GTM(Browser);
  GAM(Browser);
  Search(Browser);
  SocialSharing(Browser);
  NativeX(Browser);

  Browser.register('ThemeBlockLoader', ThemeBlockLoader);
  Browser.register('ThemeMenuToggleButton', ThemeMenuToggleButton);
  Browser.register('ThemeTopStoriesMenu', ThemeTopStoriesMenu);
  Browser.register('WufooForm', ThemeWufooForm);

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
