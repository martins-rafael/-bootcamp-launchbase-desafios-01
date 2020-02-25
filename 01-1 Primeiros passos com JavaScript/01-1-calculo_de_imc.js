// Cálculo de IMC

const nome = 'João'
const peso = 90
const altura = 1.91

const imc = peso / (altura * altura)

let mensagem

if (imc >= 30) {
    mensagem = `${nome} você esta acima do peso.`
} else {
    mensagem = `${nome} você não esta acima do peso.`
}

console.log(mensagem)