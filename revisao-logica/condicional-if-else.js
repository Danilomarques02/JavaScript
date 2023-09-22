let idade = 27;
let paisPresentes = false;
let comprouBilhete = true;
const podeViajar =(idade >= 18 || paisPresentes) && comprouBilhete;

    console.log(`Pode viajar: ${podeViajar}`);
    
   // let  msgMaiorIdade = ""
   // if(idade >= 18){
   //    msgMaiorIdade = "É maior de 18 anos"
   //}else{
   //   msgMaiorIdade = "É menor de 18 anos"
  //}
   let msgMaiorIdade = (idade >= 18)? "É maior de 18 anos" : "É menor de 18 anos"
    if(!comprouBilhete){
        console.log("Não comprou o bilhete");
    }else{
    console.log(msgMaiorIdade);
    }

let n1 = 0;
let n2 = 7;
let media = (n1 + n2) / 2;
console.log(`Média : ${media}`);

if(n1 === 0 || n2 === 0){
    console.log("Reprovado");
} else if( media <  7){
    console.log("Reprovado, mais ainda tem a recuperação")
}else{
    console.log("Aprovado");
}

console.log("saiu do bloco if");