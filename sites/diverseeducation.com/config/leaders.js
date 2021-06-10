module.exports = {
  enabled: process.env.LEADERS_ENABLED || false,
  title: 'Leaders in Education',
  alias: process.env.LEADERS_ALIAS || 'leaders-2021',
  header: {
    imgSrc: process.env.LEADERS_LOGO || 'TBD',
  },
};
