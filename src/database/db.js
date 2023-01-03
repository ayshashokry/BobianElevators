const data = require('./data.json');
// const data = require('./data3.json');

export default {
  findAll: () => data,
  findByType: type => data.filter(product => product.type === type)
};
