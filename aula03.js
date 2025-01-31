"use strict"

//Com var, vocẽ pode usar a variavel em todo lugar(menos dentro de função). Já com let, vocẽ so pode usar no escopo aonde ela foi criada.

function teste() {
    let nome = "Bruno"
    if (true) {
        console.log("Teste dentro do if: " + nome)
    }
    console.log("dentro de tester: " + nome)
}

const seila = "nome" // não pode alterar o valor mais(const).

teste();
