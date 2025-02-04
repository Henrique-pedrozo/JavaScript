const soma = (...valores) => {
    let somar = val => {
        let res = 0
        for (v of val) 
            res += v
        return res
    }
    return somar(valores)
}

console.log(soma(12, 12, 12))