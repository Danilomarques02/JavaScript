// + - * / % ** 

let n1 = 10;
let n2 = 5;
console.log(n1 + n2);
console.log(n1 - n2);
console.log(n1 * n2);
console.log(n1 / n2);
console.log(n1 % n2);
console.log(2 ** 3);

let n3 = 21;
// n3 = n3 * 2;
n3%=2;
console.log(n3);

//INCRENTO E DECREMENTO

let i = 0;
console.log(i--);
i++;
i++;
i++;
console.log(i);

//COMPARAÇÃO
/*
igualdade de valor ==
igualdade de valor e tipo ===
<, >, <=, >=
!= valores diferentes
!== valores e tipos diferentes

*/

console.log(n1, n2, n3);

console.log(n1 != "10");
console.log(n1 !== "10");

//OPERADORES LÓGICOS 
/*
Para uma pessoa viajar para o exterior:
- precisar ser maior de 18 anos
OU 
Acompanhada com os pais 
E 
ter comprado bilhete
*/

let idade = 21;
let paisPresentes = false;
let comprouBilhete = false;
const podeViajar =idade >= 18 || (paisPresentes && comprouBilhete );
console.log(`Pode viajar: ${podeViajar}`);


