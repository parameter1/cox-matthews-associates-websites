const data = require('./deleted-companies.json');

module.exports = ({ from }) => {
  const { groups: { id } } = /\/(?<id>[0-9]{8})/.exec(from);
  if (data[id]) return { to: `/${data[id]}` };
  return null;
};
