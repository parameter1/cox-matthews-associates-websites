import Browser from '@parameter1/base-cms-marko-web/browser';
import DefaultTheme from '@parameter1/base-cms-marko-web-theme-default/browser';
import GCSE from '@parameter1/base-cms-marko-web-gcse/browser';
import Global from '@cox-matthews-associates/package-global/browser';

const SalaryBarChart = () => import(/* webpackChunkName: "salary-bar-chart" */ './salary-bar-chart.vue');

Global(Browser);
DefaultTheme(Browser);
GCSE(Browser);
Browser.register('SalaryBarChart', SalaryBarChart);

export default Browser;
