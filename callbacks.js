function callback(){
    console.log("this is call back function");
}

function secondfunc(name){
    console.log("hello" +name);
    callback();
}

secondfunc("Ashrat");