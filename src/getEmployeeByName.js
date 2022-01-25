/* eslint-disable no-unreachable */
const data = require('../data/zoo_data');

/* Usei correção rápida do lint por max de caract... na linha */

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  // eslint-disable-next-line max-len
  const empregados = data.employees.find((element) => element.firstName === employeeName || element.lastName === employeeName);
  return empregados;
}

module.exports = getEmployeeByName;
