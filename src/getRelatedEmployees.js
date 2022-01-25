const data = require('../data/zoo_data');

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';

/* Verificação de true e falsea, e outro verificação com includes. */

function isManager(id) {
  return data.employees.some((empregado) => empregado.managers.includes(id));
}

/* Condição com a function anterior em cima do parametro passado,
retornando um filter de verificação com includes no parametro passado,
percorrendo com o map para ter a saída.
a mentoria ajudou bastante nesse requisito */

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    return data.employees.filter((empregado) => empregado.managers.includes(managerId))
      .map((nomeEmpregado) => `${nomeEmpregado.firstName} ${nomeEmpregado.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
console.log(getRelatedEmployees(stephanieId));
module.exports = { isManager, getRelatedEmployees };
