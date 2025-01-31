let n1 = [12, 33, 45]
let n2 = [11, 22, 33, 44, 55]
let n3 = [...n1, ...n2] // Espalha todos os elementos do n1 e do n2     

const soma = (v1, v2, v3) => {
    return v1 + v2 + v3
}

console.log("n1: ", n1)
console.log("n2 : ", n2)

const jogador1 = { nome: "Do raio", energia: 145, vida: 100, poder: 7500 }
const jogador2 = { nome: "Cruce", energia: 145, vida: 130, magia: 123, velocidade: 500 }
const jogador3 = { ...jogador1, ...jogador2 }

console.log("Jogador 1: ", jogador1)
console.log("Jogador 2: ", jogador2)
console.log("Jogador 3: ", jogador3)

console.log("----------------------------------")

let valores = [10, 3, 2]

console.log(soma(valores))// jeito errado
console.log(soma(...valores))

console.log("----------------------------------")

const obj1 = document.getElementsByTagName("Div")//coleção em Html, que só recebe objetos html.
const obj2 = [...document.getElementsByTagName("Div")]// Pode ser qualquer coisa.


/*
    obj1.forEach(element => {    
    console.log(element) vai dar erro, pois não é um metodo HTML o forEach
});
*/
    obj2.forEach(element => {//Vai dar certo pois aceita tudo
        console.log(element)  
    });

console.log(obj1)
console.log(obj2)