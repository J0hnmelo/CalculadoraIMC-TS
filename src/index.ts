class IMC {
    nome: string;
    peso: number;
    altura: number;
    imc: number;

    constructor(nome: string, peso: number, altura: number){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
        this.imc = this.calcIMC(); 
    }

    calcIMC(): number {
        return this.peso/(this.altura * this.altura)
    }
}

const btn = document.querySelector(".btn");
btn?.addEventListener('click', () => {
    const nome = document.querySelector("#name") as HTMLInputElement;
    const altura = parseFloat((document.querySelector("#height") as HTMLInputElement).value);
    const peso = parseFloat((document.querySelector("#weight") as HTMLInputElement).value);
    const res = document.querySelector(".resposta") as HTMLElement
    const pessoa = new IMC(nome.value, peso, altura);
    const nomeValue = nome.value;
    
    if(nomeValue === "" || isNaN(altura)|| isNaN(peso) ){
        window.alert("[ERROR] Preencha todos os campos!")
    }
    else{
        res.innerText = `Olá ${nomeValue}, seu IMC é ${pessoa.imc.toFixed(2)}`
    }
});