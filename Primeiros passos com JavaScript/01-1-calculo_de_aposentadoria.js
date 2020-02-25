// Cálculo de aposentadoria

const nome = 'Ricardo'
const sexo = 'M'
const idade = 60
const contribuicao = 35

let mensagem

if (sexo == 'M') {
    if ((contribuicao >= 35) && (idade + contribuicao >= 95)) {
        mensagem = `${nome}, você já pode se aposentar!`
    } else mensagem = `${nome}, você ainda não pode se aposentar!`
}   

if (sexo == 'F') {
        if ((contribuicao >= 30) && (idade + contribuicao >= 85)) {
        mensagem = `${nome}, você já pode se aposentar`
    }    else mensagem = `${nome}, você ainda não pode se aposentar`
}

console.log(mensagem)