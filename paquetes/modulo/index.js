//Traer nuestro modulo
const modulo = require('./modulo');
//Ejecutar una funcion del modulo

//Ejecutar asi si el modulo exporta por ejemplo solo una funcion
//modulo()
//Si el modulo contiene varias funciones o prpiedades
console.log(modulo.prop1)
modulo.saludar()