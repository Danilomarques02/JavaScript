let idade = 19;
let paisPresentes = false;
let comprouBilhete = true;
const podeViajar =(idade >= 18 || paisPresentes) && comprouBilhete;

    console.log(`Pode viajar: ${podeViajar}`);
    
    if(!comprouBilhete){
        console.log("Não comprou o bilhete");
    }else{
        if(idade >= 18){
            console.log("Pode viajar")
        }else{
          console.log("Opa!! não vai poder viajar")
        }
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