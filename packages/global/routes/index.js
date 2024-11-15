const htmlSitemap = require('@parameter1/base-cms-marko-web-html-sitemap/routes');
const renderBlock = require('@parameter1/base-cms-marko-web-theme-monorail/routes/render-block');
const taxonomy = require('@parameter1/base-cms-marko-web-theme-monorail/routes/taxonomy');
const magazine = require('@parameter1/base-cms-marko-web-theme-monorail-magazine/routes');
const getAdvertisingPostAsNativeStory = require('@parameter1/base-cms-mindful/marko-web/middleware/get-advertising-post-as-native-story');

const advertisingPostTemplate = require('../templates/content/advertising-post');
const dynamicPage = require('./dynamic-page');
const feed = require('./feed');
const printContent = require('./print-content');
const publicFiles = require('./public-files');
const redirects = require('./redirects');
const search = require('./search');

module.exports = (app, siteConfig) => {
  // HTML Sitemap
  htmlSitemap(app);

  // Feed
  feed(app);

  // magazine
  magazine(app);

  // NativeX (Story rendering)
  getAdvertisingPostAsNativeStory(app, {
    route: '/sponsored/:section/:slug/:id',
    tenant: 'diverse',
    template: advertisingPostTemplate,
  });

  // Shared Print Content
  printContent(app);

  // Shared Public Files (e.g. ads.txt)
  publicFiles(app);

  // Redirects
  redirects(app);

  // Remote component/block loader
  renderBlock(app);

  // Search routes
  search(app, siteConfig);

  // Taxonomy pages (for handling redirects from old WP sites)
  taxonomy(app);

  // Dynamic Pages
  dynamicPage(app);
};
