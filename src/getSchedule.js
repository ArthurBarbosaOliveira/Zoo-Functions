const { hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

/* criaremos uma const com uma key de horas do data */
const horas = Object.keys(data.hours);
/* criaremos uma const aonde vai mapear e adicionar no array pelo name */
const specie = data.species.map((element) => element.name);

/* com ajuda de colegas, a função retorna com filter nas species e guardar o element que no parâmetro
 incluído na propriedade availability, mapeando pelo name. */
function bichoDia(dia) {
  return data.species.filter((ele) => ele.availability.includes(dia)).map((ele) => ele.name);
}
/* 'se "Monday" for passado por parâmetro, deverá informar que o zoológico está fechado'
const expected = {'Monday': { 'officeHour': 'CLOSED', 'exhibition': 'The zoo will be closed!' }, */
/* criando uma const para esse test especifico */
/* se fir monday exibir  que está fechado,
 se não retorne a programção do dia, usando as propriedades com template literals retornando frase esperada */
const criarObjectDaSemana = (element) => {
  if (element === 'Monday') {
    return { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  }

  const programçãoDoDia = {
    officeHour: `Open from ${hours[element].open}am until ${hours[element].close}pm`,
    exhibition: bichoDia(element) };
  return programçãoDoDia;
};

/* useu o reduce com call back vai interar com as datas.hours, atualizando a cada interação o valor. */
function agendaSemana() {
  return horas.reduce((acc, curr) => {
    acc[curr] = criarObjectDaSemana(curr);
    return acc;
  }, {});
}
/* se for passado um animal, deverá retornar um array com os dias em que ele está em exibição
 usando um find para verificar a condição e retornar um novo array */
function bichoSemana(bicho) {
  return data.species.find((element) => element.name === bicho).availability;
}

function getSchedule(scheduleTarget) {
  // seu código aqui
  if (scheduleTarget === 'Monday') { /* teste 3 */
    return { Monday: criarObjectDaSemana(scheduleTarget) };
  }
  if (horas.includes(scheduleTarget)) { /* teste 2 */
    const retornoEsperado = {};
    retornoEsperado[scheduleTarget] = criarObjectDaSemana(scheduleTarget);
    return retornoEsperado;
  }
  if (specie.includes(scheduleTarget)) { /* teste 5 */
    return bichoSemana(scheduleTarget);
  }
  return agendaSemana(); /* teste 1 */
}

/* montei no bloco de notas lendo todas verificação de testes, tive dicas assistindo dúvidas na mentoria de alguns colegas, para ter essa lógica de separação de funções e constantes para ser chamada na função principal.
 nas hofs tive dificuldade do passo a passo delas, fui revendo o course e tirando algumas dúvidas no privado do slack com colegas e juntando tudo que fiz no projeto e vi na mentoria ajudou. */
module.exports = getSchedule;
