const promise = new Promise((resolve,reject) =>{
    // resolve("promise resolve");
    reject("promise get rejected");
})

promise
.then((res) => console.log(res))
.catch((err) => console.log(err));