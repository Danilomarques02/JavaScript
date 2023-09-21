//string, nomber (int, floats), boolean 

let minhaVar = "minha string"
let minhavar2 = "minha 'string' com aspas duplas";

var minhavar3 = `minha template literal`;


let idade = 40
//let msg = "eu possuo "+ idade +" anos";
let msg = `eu possuo ${idade} anos`;


console.log(msg);
console.log("Hello " + "world")
console.log(typeof msg, typeof idade, typeof minhaVar, " -- ", 20);


const n1 = 10;
const n2 = 1.1;
console.log(`O tipo de n1 é ${typeof n1} e seu valor é ${n1}`);
console.log(`O tipo de n2 é ${typeof n2} e seu valor é ${n2}`);
