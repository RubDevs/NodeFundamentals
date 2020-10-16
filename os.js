//Get info from OS and resources RAM processors etc
const os = require('os')

const SIZE = 1024;

function kb(bytes){
    return bytes / SIZE
}

function mb(bytes){
    return kb(bytes) / SIZE
}

function gb (bytes){
    return mb(bytes) / SIZE
}
// //arquitectura
// console.log(os.arch())
// //plataforma
// console.log(os.platform())
// //nucleos CPU
// console.log(os.cpus().length)
// //constantes
// console.log(os.constants)
// Memoria RAM libre
// console.log(gb(os.freemem()))
// //Memoria RAM total
// console.log(gb(os.totalmem()))
// //Directorio raiz del usuario
// console.log(os.homedir())
// //Directorio temporales
// console.log(os.tmpdir())
// //Nombre de la maquina
// console.log(os.hostname())
//Interfaces de red
console.log(os.networkInterfaces())