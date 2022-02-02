const data = require('../data/zoo_data');

function getAnimalMap(options) {
  if (options === undefined) {
    return {
      NE: data.species.filter((element) => element.location === 'NE'),
      SE: 0,
      SW: 0,
    };
  }
}

module.exports = getAnimalMap;
