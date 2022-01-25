const data = require('../data/zoo_data');

/* Mentoria agora de tarde ajudou bastante na lógica */

function getSpeciesByIds(...ids) {
  return ids.map((id) => data.species.find((element) => element.id === id));
}

console.log(getSpeciesByIds('89be95b3-47e4-4c5b-b687-1fabf2afa274'));

module.exports = getSpeciesByIds;
