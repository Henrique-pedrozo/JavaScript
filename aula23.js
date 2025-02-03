function soma(...valores){
    let tam =  valores.length// pega a quantidade de valores
    let res = 0
    for(let i=0; i<tam;i++){
        res+=valores[i]
    } 
    /*
    for(let v of valores){
        res += v
    }
    */
    return res
}

console.log(soma(12,1231,23,1231,2312,3))