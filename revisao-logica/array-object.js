const nomes= ["Danilo", "Maria", ""]
const pessoa = {nome: "Danilo", idade: 10, email: ""}
const pessoa1 ={}

const pessoas = [{
    nome:"Danilo",
    idade: 21
}, {
    nome:"Helena",
    idade: 45
}, {
    nome:"João",
    idade: 30
}]

for(let i = 0; i < pessoas.length; i++){
    console.log(`$${pessoas[i].nome} possui ${pessoas[i].idade} anos`)
}