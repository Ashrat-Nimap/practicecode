async function firstfunc() {
    setTimeout(() =>{
        console.log("This is printing after 2 second");
    },2000)
}

async function secondfunc() {
    setTimeout(() =>{
        console.log("this is printing after 1 second");
    },1000)
}
firstfunc();
secondfunc();