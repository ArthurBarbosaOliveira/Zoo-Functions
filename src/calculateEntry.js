const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const resultado = {
    adult: 0,
    child: 0,
    senior: 0,
  };
  resultado.adult = entrants.filter((usuario) => usuario.age >= 18 && usuario.age < 50).length;
  resultado.child = entrants.filter((usuario) => usuario.age < 18).length;
  resultado.senior = entrants.filter((usuario) => usuario.age >= 50).length;
  return resultado;
  /* NÃO FUNCIONOU NÃO SEI DESCOBRIR POR QUER, aí tive que fazer declarando uma constante
  e adicionando por cada key a condição. return {
    adult: entrants.filter((usuario) => usuario.age >= 18 && usuario.age < 50).length,
    child: entrants.filter((usuario) => usuario.age < 18).length,
    senior: entrants.filter((usuario) => usuario.age >= 50).length,
  }; */
  /* irei percorrer com o filter o array de entrada, verificando com o length todos valores e retornando true o que satisfaz a condição em um novo array */
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  return countEntrants(entrants).adult * data.prices.adult
   + countEntrants(entrants).child * data.prices.child
    + countEntrants(entrants).senior * data.prices.senior;
}
/* fiz uma condição para verificar se é underfined e se a entrada é object com as keys = a 0 para retornar 0.
 se não for retorna ja o valor do preço. */
module.exports = { calculateEntry, countEntrants };
