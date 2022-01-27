const data = require('../data/zoo_data');

/* 3 condições para verificar, uma com parametro vazio ou sem, uma só com a specie e outra com specie e sexo. */

function countAnimals(animal) {
  const objeto = {};
  data.species.forEach((element) => {
    objeto[element.name] = element.residents.length;
  });
  /* Aqui tive que fazer um forEach(ele retorna nada, sendo fundamental, guardei na const como elemento de objecto usando os [ex.name])
   para percorrer no data.species, colocando o nome no objeto em element e também igualando com a quantidade dele no residents.length isso vai retornar quando não if a seguir */
  if (!animal) {
    return objeto;
  }
  if (!animal.sex) {
    const pesquisandoBicho = data.species.find((element) => element.name.includes(animal.specie));
    /* Aqui eu tive que pegar um valor da posição do array, com a condição do name desse valor possui o animal.specie. guardando o retorno na const */
    return pesquisandoBicho.residents.length;
    /* achando ele, preciso apenas da quantidade dele, com isso return na tela com .residents.length */
  }
  /* se não for sem parametros, e apenas parâmetro com objeto specie e sex, vamos retornar ele */
  return data.species.find((element) => element.name === animal.specie)
    .residents.filter((sex) => sex.sex === animal.sex).length;
}
/* fazendo a verificação do nome da specie, achando ele com o find, irei agora ir na chave de residents dele para verificar com o filter
  se é igual ou não o sex com o sex de entrada, com o length retorna um número de true, tendo a quantidade do bicho no seu sexo */
console.log(countAnimals());
console.log(countAnimals({ specie: 'penguins' }));
console.log(countAnimals({ specie: 'giraffes' }));
console.log(countAnimals({ specie: 'elephants', sex: 'male' }));

/* Tive ajuda no dia 26/01 na mentoria, de Ana, colegas na sala, e no dia 27/01 novamente com Ana, Raphael Martins, Airton, tudo na mentoria */
module.exports = countAnimals;
