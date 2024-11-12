function findfactorial(num){
    if(num === 0) return 1;
    let factorial = num * findfactorial(num - 1)
    return factorial;
}
console.log(findfactorial(5));