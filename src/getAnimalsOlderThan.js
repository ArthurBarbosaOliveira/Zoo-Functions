const data = require('../data/zoo_data');

/* Uso o método find para verificar o nome de entrada do animal, após isso faço a condição com a idade la no residents pelo every */

function getAnimalsOlderThan(animal, age) {
  const bicho = data.species.find((element) => element.name === animal);

  return bicho.residents.every((idade) => idade.age >= age);
}

module.exports = getAnimalsOlderThan;
