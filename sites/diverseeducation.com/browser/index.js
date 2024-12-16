import Browser from '@mindful-web/marko-web/browser';
import Global from '@cox-matthews-associates/package-global/browser';

const SalaryBarChart = () => import(/* webpackChunkName: "site-salary-bar-chart" */ './salary-bar-chart.vue');

Global(Browser);
Browser.register('SiteSalaryBarChart', SalaryBarChart);

export default Browser;
