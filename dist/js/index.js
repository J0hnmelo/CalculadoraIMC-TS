"use strict";
class IMC {
    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
        this.imc = this.calcIMC();
    }
    calcIMC() {
        return this.peso / (this.altura * this.altura);
    }
}
const btn = document.querySelector(".btn");
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', () => {
    const nome = document.querySelector("#name");
    const altura = parseFloat(document.querySelector("#height").value);
    const peso = parseFloat(document.querySelector("#weight").value);
    const res = document.querySelector(".resposta");
    const pessoa = new IMC(nome.value, peso, altura);
    const nomeValue = nome.value;
    if (nomeValue === "" || isNaN(altura) || isNaN(peso)) {
        window.alert("[ERROR] Preencha todos os campos!");
    }
    else {
        res.innerText = `Olá ${nomeValue}, seu IMC é ${pessoa.imc.toFixed(2)}`;
    }
});
