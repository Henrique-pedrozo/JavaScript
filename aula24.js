let f = function(...valores){
    let res = 0
    for (v of valores){
        res += v
    }
    return res
}
const f2 = new Function("v1","v2","return v1+v2")//Função construtor

console.log(f(23,54))

console.log(f2(12,12))
