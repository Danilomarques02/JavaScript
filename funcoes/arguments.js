function somar(arr){
    let total = 0;
    for(let i = 0; i < arr.length; i++){
        total += arr[i]
    }
    return total
}

console.log(somar([1, 2, 3]))