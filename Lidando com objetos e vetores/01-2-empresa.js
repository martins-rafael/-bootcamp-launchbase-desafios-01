// Empresa - Construção e impressão de objetos

const user = {
    nome: 'Diego',
    empresa: {
        nome: 'Rocketseat',
        cor: 'Roxo',
        foco: 'Programação',
        endereco: {
            rua: 'Rua Guilherme Gembala',
            numero: 260
        }
    }
}

console.log(`A ${user.empresa.nome} está localizada em ${user.empresa.endereco.rua}, ${user.empresa.endereco.numero}.`)