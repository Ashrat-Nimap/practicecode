function* idgenerator(){
    let id = 1;
    while(true){
        yield id++;
    }
}

const gen = idgenerator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
