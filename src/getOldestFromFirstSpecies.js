const data = require('../data/zoo_data');
const { employess, species } = data;

function getOldestFromFirstSpecies(id) {
  /* vamos pegar o valor do array employees que satisfaça minha condição e guardar ela.
   to verificando o id do funcionario passado como parametro para encontrar
   com === id e responsibleFor[0] o primeiro animal gerenciado pelo funcionario */
  const funcionarios = employess.find((element) => element.id === id).responsibleFor[0];
  console.log(funcionarios); 
  /* irie usar o find para pegar todas informações do residents que satisfaça minha condição e guaradr na const como um array */
  const informações = species.find((element) => element.id === funcionarios).residents;
  /* e aqui faço o reduce com callback, aonde irei atualizar o valor a cada interação, passando pela condição com o ternaty operator */
  const bichos = informações.reduce((acc, curr ) => (acc.age > curr.age ? acc : curr ));
  /* ele espera um objeto com os dados no resultado */
  return Object.values(bichos);
};

module.exports = getOldestFromFirstSpecies;
