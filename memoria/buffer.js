//Reserva el espacio en memoria que se indique
//let buffer = Buffer.alloc(1)

//Cada elemento en el arreglo es asociado a un byte en el buffer
//let buffer = Buffer.from([1,2,3,4])


//Con datos mas complejos como strings el buffer guarda en cada
//espacio la representacion hexadecimal de cada caracter
//let hola = Buffer.from("Hola")
//console.log(hola)
// console.log(buffer)

//Crear las letras del abcedario
//Se crea buffer de 26 espacios, uno por cada letra
let abc = Buffer.alloc(26)

for(let i = 0; i < 26; i++){
    //97 es el valor de la letra a en ASCII 
    abc[i] = i + 97;
}

console.log(abc.toString())