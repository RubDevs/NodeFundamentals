//Moment nos permite trabajar con fechas
const moment = require('moment');

let ahora = moment();

//imprime todas las opciones del objeto
console.log(ahora)

//imprime la fecha
console.log(ahora.toString())

//formatear la fecha
console.log(ahora.format('DD/MM/YYYY - HH:mm'))