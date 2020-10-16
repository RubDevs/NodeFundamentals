import modulo from "./modulo.mjs"


//Nota: Para poder ejecutar este archivo que usa la sintaxis de 
//modulos de ES6 se debe ejecutar con el flag --experimental-modules
//ya que no se ha incluido en Node aun.

//Si se exporto una sola funcion o proppiedad
//modulo()

//Si se exportaron varias funciones o props
console.log(modulo.prop1)
modulo.saludar()