//bcrypt allow us to use cryptography functions

const bcrypt = require('bcrypt');

const password = "1234segura00"

// bcrypt.hash(password,5,(err,hash)=>{
//     console.log(hash);
//     // this function compare the password and say if the 
//     //hash matches
//     bcrypt.compare(password,hash,(err,res)=>{
//         console.log(res);
//     })
// })

//bcrypt con promesas

let h = new Promise((resolve,reject)=>{
    bcrypt.hash(password,5,(err,hash)=>{
        if (err){
            reject(err)
        }else{
            resolve(hash)
        }
    })
})
h.then((hash)=>{
    console.log(hash)
})