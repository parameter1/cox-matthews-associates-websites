const { asyncRoute } = require('@parameter1/base-cms-utils');
const mppwsa = require('../templates/static-pages/mppwsa');

module.exports = (app) => {
  app.get('/:alias(awards-honors/mppwsa)', asyncRoute(async (req, res) => {
    const { alias } = req.params;
    return res.marko(
      mppwsa,
      {
        alias,
      },
    );
  }));
};
