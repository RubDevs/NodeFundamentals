function saludar(){
    console.log("Holaa!")
}

//para poder utilizar la funcion en otro archivo se debe exportar
module.exports = {
    saludar,
    prop1: "Que onda"
};