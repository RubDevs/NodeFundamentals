console.time('todo')
let suma = 0;
console.time('bucle')
for (let i = 0; i < 10000000; i++) {
    suma += 1;    
}
console.timeEnd('bucle')
console.time('asincrono')
console.log('Comienza proceso async')
asincrono().then(()=>{
    console.timeEnd('asincrono')
})
console.timeEnd('todo')

function asincrono(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('Termina Proceso async')
            resolve()
        },1000)
    })
}