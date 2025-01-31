let num = [10, 20, 30, 40, 50]
const obj = document.getElementsByTagName("div")


for (n in num) {//Esse é o for in
    console.log(num[n])
}

console.log("-----------------------")

for (n of num){//Esse é o for of
    console.log(n)
}

console.log("-----------------------")

for (let i = 0; i < num.length; i++) { //Esse é o normal
    console.log(num[i])
}

console.log("----------------------")

for (i of obj){
    console.log(i)
}