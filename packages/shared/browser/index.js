import Inquiry from '@parameter1/base-cms-marko-web-inquiry/browser';
import Leaders from '@parameter1/base-cms-marko-web-leaders/browser';
import IdentityX from '@parameter1/base-cms-marko-web-identity-x/browser';
import P1Events from '@parameter1/base-cms-marko-web-p1-events/browser';

const OmedaRapidIdentityX = () => import(/* webpackChunkName: "refresh-theme-rapid-identify" */ '@parameter1/base-cms-marko-web-omeda-identity-x/browser/rapid-identify.vue');

export default (Browser) => {
  Inquiry(Browser);
  Leaders(Browser);
  IdentityX(Browser);
  P1Events(Browser);

  Browser.register('OmedaRapidIdentityX', OmedaRapidIdentityX, {
    on: {
      'encrypted-id-found': (encryptedId) => {
        if (encryptedId && window.p1events) {
          window.p1events('setIdentity', `omeda.pmmicd.customer*${encryptedId}~encrypted`);
        }
      },
    },
  });
};
