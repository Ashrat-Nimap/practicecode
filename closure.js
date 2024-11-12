function multfunc(){
    let mult = 9;
    return function(val){
        mult *= val;
        return mult;
    }
}
const mult = multfunc();
console.log(mult(12));