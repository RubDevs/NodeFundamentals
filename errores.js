function otrafunion(){
    //Incluso si el error sucede en la funcion que se llama desde aqui
    //el error sera capturado por el catch.
    //Los errores se van pasando hacia arriba hasta que son capturados
    error()
}

function error(){
    return 3+z
}

function errorAsincrono(){
    setTimeout(()=>{
        //se debe ejecutar dentro de try catch para que el error sea capturado
        try{
            return 3+z
        }catch(err){
            console.error("Error en funcion asincrona")
            console.error(err.message)
        }
    },500)
    
}

try{
    errorAsincrono()
    //otrafunion()
}catch(err){
    //al regresar err se imprime la traza completa del error
    //se puede regresar solo el mensaje con .message
    console.error("Hubo un error",err)
}
console.log("esto si pasa")
