const products = require('@cox-matthews-associates/package-shared/templates/published-content/products');

module.exports = (app) => {
  app.get('/products', (_, res) => { res.marko(products); });
};
