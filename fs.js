// Import es la sintaxis de ES6, otra forma de hacerlo en con require
//import fs from "fs";
const fs = require("fs");

function leer(ruta, cb) {
  fs.readFile(ruta, (err, data) => {
    //leido
    console.log(data.toString());
  });
}

function validar(err){
  if (err){
    console.error("No se ha podido ejecutar la instruccion... ",err)
  }else{
    console.log("Se ha realizado correctamente la funcion")
  }
}

function escribir(ruta,contenido,callback){
  fs.writeFile(ruta,contenido,callback)
}

function borrar(ruta,callback){
  fs.unlink(ruta,callback)
}
//leer(__dirname + "/archivo.txt");
//escribir(__dirname + "/archivo2.txt","Creado con fs write function",validar)
borrar(__dirname+"/archivo1.txt",validar)