const fs = require('fs');
const stream = require('stream')
const util = require('util')

let data  = '';

//Create a readableStream

let readableStream = fs.createReadStream(__dirname + '/input.txt');
//Estableciendo el encoding se puede leer la informacion decodificada
//de otro modo viene en hexadecimal
readableStream.setEncoding('UTF8')
readableStream.on('data',(chunk)=>{
    //chunk es cada paquete
    console.log(chunk)
})

//Al escribir a la salida estandar del sistema se hace a traves de
//streams de escritura
// process.stdout.write('Hola')
// process.stdout.write('como')
// process.stdout.write('estas')
// process.stdout.write('persona')

//Crear stream bidireccional, Trasform es la clase e implementa ambos metodos de lectura y escritura.
const Transform = stream.Transform;

function Mayus(){
    Transform.call(this)
}

//Indicamos que la funcion Mayus tomara metodos desde transform o sea que hereda de el.
util.inherits(Mayus,Transform)

Mayus.prototype._transform = function(chunk,codif, cb){
    chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus);
    cb();
}

let mayus = new Mayus();

readableStream
    .pipe(mayus)
    .pipe(process.stdout);