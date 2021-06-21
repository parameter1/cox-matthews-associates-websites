import Browser from '@parameter1/base-cms-marko-web/browser';
import DefaultTheme from '@parameter1/base-cms-marko-web-theme-default/browser';
import GTM from '@parameter1/base-cms-marko-web-gtm/browser';
import GAM from '@parameter1/base-cms-marko-web-gam/browser';
import GCSE from '@parameter1/base-cms-marko-web-gcse/browser';
import RevealAd from '@parameter1/base-cms-marko-web-reveal-ad/browser';
import Global from '@cox-matthews-associates/package-global/browser';

Global(Browser);
DefaultTheme(Browser);
GTM(Browser);
GAM(Browser);
GCSE(Browser);
RevealAd(Browser);

export default Browser;
