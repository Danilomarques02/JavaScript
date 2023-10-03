function sum(n1, n2){
    if(typeof n1 !== "number" || typeof n2 !== "number" ){
        throw Error("sum aceita apenas numeros")
    }
    return n1 + n2
}

let soma =""
try{
   soma = sum(3, "a")
}catch(e){
   console.log("Ocorreu um erro")
   console.log(e.message)
}
console.log(soma)