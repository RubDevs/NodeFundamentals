function asincrona(callback){
    //Todo
    setTimeout(function(){
        try {
            let a = 3 + z
            callback(null, a)
        } catch (error) {
            callback(error, null)
        }
    },1000)
}
asincrona(function(error,dato){
    if (error) {
        console.error('Hubo error')
        console.error(error)
        return false
        //throw err //No funciona en funciones asincronas
    }

    console.log('Todo salio bien, mi dato es ',dato)
})