const { spawn } = require('child_process')

//con exec se puede ejecutar un proceso y acceder a traves del callback a su salida
//estandar
// exec('ls', (err,stdout,stderr)=>{
//     if (err){
//         console.error(err)
//         return false;
//     }
//     console.log(stdout)
// })

let proceso = spawn('ls',['-la'])

console.log(proceso.pid)
console.log(proceso.connected)

proceso.stdout.on('data',(dato)=>{
    console.log(dato.toString())
})

proceso.on('exit',()=>{
    console.log("Se termino el proceso")
    console.log("Se murio el processo? ")
    console.log(proceso.killed)
})