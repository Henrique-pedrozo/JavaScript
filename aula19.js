//Break:Ele para o loop, saindo do loop e continuando o programa.
//Continue: Cancela a interação e vai para proxima.

let n = 0 
let max = 100
let pares = 0
while (n < max){
    console.log("Dollinho seu amiguinho - " + n)
    if(n > 10){
        break
    }
    n++
}

for (let i = 0; i < max; i++){
    if (!(i%2 == 0)){
        continue
    }
    pares++
}
console.log("Quantidade de pares: " + pares)