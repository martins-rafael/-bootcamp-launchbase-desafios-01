// Programador - Vetores e objetos

const dev =  {
    nome: 'Rafael',
    idade: 27,
    tecnologias: [
        {nome: 'HTML5', especialidade: 'Web/Mobile'},
        {nome: 'CSS3', especialidade: 'Web/Mobile'},
        {nome: 'JavaScript', especialidade: 'Web/Mobile'},
    ]
}

console.log(`O usuário ${dev.nome} tem ${dev.idade} anos e usa a tecnologia ${dev.tecnologias[0].nome} com especialidade em ${dev.tecnologias[0].especialidade}.`)