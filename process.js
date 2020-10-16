//Acceder al proceso de node

process.on('beforeExit',()=>{
    console.log('El proceso va a terminar')
});

process.on('exit',()=>{
    console.log('El proceso acabo')
    setTimeout(()=>{
        console.log("Esto no saldra pues ya nos desconectamos del Event loop")
    },0)
});

//Dispara el evento en un error no controlado
process.on("uncaughtException",(err,origen)=>{
    console.error("Exepcion no controlada");
    console.error(origen);
    console.error(err);
    
})

//funcionParaDarError()
console.log("Esto si el error no se recoje no sale")