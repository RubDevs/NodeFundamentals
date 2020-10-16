const http = require('http')
const puerto = 3000
http.createServer(router).listen(puerto,(err)=>{
    if (err){
        console.error("Could not connect to the server");
        console.error(err.message)
    }
    console.info(`> Ready on http://localhost:${puerto}`)
})

function router(req,res){
    console.log("Nueva peticion");
    console.log(req.url);

    switch(req.url){
        case '/hola':
            // Escribir en la respuesta
            res.write("Hola! Desde el servidor HTTTP de Ruben")
            res.end();
            break
        case '/adios':
            // Escribir en la respuesta
            res.write("Adios! Vuelve pronto")
            res.end();
            break
    }

    //Escribir cabecera
    //res.writeHead(201,{"Content-type" : "text/plain"})
}


