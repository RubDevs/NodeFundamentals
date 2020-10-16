//El modulo addon previamente es compilado desde el archivo hola.cc
//Posteriormente se utiliza node-gyp para hacer el build, hace uso del archivo 
//binding.gyp

const miAddon = require('./build/Release/addon')

console.log(miAddon.Hola())