import Browser from '@parameter1/base-cms-marko-web/browser';
import DefaultTheme from '@parameter1/base-cms-marko-web-theme-default/browser';
import GCSE from '@parameter1/base-cms-marko-web-gcse/browser';
import Global from '@cox-matthews-associates/package-global/browser';

const SalaryBarChart = () => import(/* webpackChunkName: "site-salary-bar-chart" */ './salary-bar-chart.vue');

Global(Browser);
DefaultTheme(Browser);
GCSE(Browser);
Browser.register('SiteSalaryBarChart', SalaryBarChart);

export default Browser;
