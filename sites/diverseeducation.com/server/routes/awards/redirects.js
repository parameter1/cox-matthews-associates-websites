const { asyncRoute } = require('@parameter1/base-cms-utils');

const fromTo = [
  // Arthur Ashe Landing Page
  {
    from: 'ashe',
    to: 'awards-honors/arthur-ashe',
  },
  // Arthur Ashe 2021 Winners
  {
    from: '2021-ashe-winners',
    to: 'awards-honors/arthur-ashe/2021',
  },
  // Arthur Ashe 2021 Finalists
  {
    from: '2021-ashe-finalists',
    to: 'awards-honors/arthur-ashe/2021',
  },
  // Arthur Ashe 2020 Winners
  {
    from: '2020-arthur-ashe-jr-winners',
    to: 'awards-honors/arthur-ashe/2020',
  },
  // Arthur Ashe 2020 Finalists
  {
    from: '2020-arthur-ashe-jr-finalists',
    to: 'awards-honors/arthur-ashe/2020',
  },
  // Arthur Ashe 2019 Winners
  {
    from: '2019-ashe-winners',
    to: 'awards-honors/arthur-ashe/2019',
  },
  // Arthur Ashe 2019 Finalists
  {
    from: '2019-ashe-award-finalists',
    to: 'awards-honors/arthur-ashe/2019',
  },
  // Arthur Ashe 2018 Winners
  {
    from: '2018-ashe-winners',
    to: 'awards-honors/arthur-ashe/2018',
  },
  // Arthur Ashe 2018 Finalists
  {
    from: '2018-ashe-award-finalists',
    to: 'awards-honors/arthur-ashe/2018',
  },
  // Arthur Ashe 2017 Winners
  {
    from: 'arthur-ashe-jr-sport-scholars-2017',
    to: 'awards-honors/arthur-ashe/2017',
  },
  // Arthur Ashe 2017 Finalists
  {
    from: '94911-2',
    to: 'awards-honors/arthur-ashe/2017',
  },
  // Arthur Ashe 2016
  {
    from: 'arthur-ashe-jr-sports-scholars-2016',
    to: 'awards-honors/arthur-ashe/2016',
  },
  // MPPWSA
  {
    from: 'Most_Promising_Places_to_Work_in_Student_Affairs/index.html',
    to: 'awards-honors/mppwsa',
  },
  // MPPWCC
  {
    from: 'Most-Promising-Places-to-Work-in-Community-Colleges/index.html',
    to: 'awards-honors/mppwcc',
  },
  // Divers Champ
  {
    from: 'champions',
    to: 'awards-honors/diverse-champions',
  },
];


module.exports = (app) => {
  // Arthur Ashe with query params
  app.get('/ashewinners', (req, res) => {
    const { asyear } = req.query;
    const year = parseInt(asyear, 10);
    if (year >= 2010 && year <= 2015) {
      res.redirect(301, `/awards-honors/arthur-ashe/${year}`);
    } else {
      const error = new Error('Not found.');
      error.statusCode = 404;
      throw error;
    }
  });
  // Emerging Scholars with query Params
  app.get('/article/category/emerging-scholars', (req, res) => {
    const { zyear } = req.query;
    const year = parseInt(zyear, 10);
    if (year >= 2008 && year <= 2020) {
      res.redirect(301, `/awards-honors/emerging-scholars/${year}`);
    } else {
      const error = new Error('Not found.');
      error.statusCode = 404;
      throw error;
    }
  });
  // Award redirects in fromTo array
  fromTo.forEach((awardRedirect) => {
    const { from, to } = awardRedirect;
    app.get(`/${from}`, asyncRoute(async (res) => {
      res.redirect(301, `/${to}`);
    }));
  });
};
