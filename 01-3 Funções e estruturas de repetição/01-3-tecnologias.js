// Usuários e tecnologias

const users = [
    { nome: 'João', tecnologias: ['HTML', 'CSS']},
    { nome: 'Tamires', tecnologias: ['PHP', 'CSS']},
    { nome: 'Tanaka', tecnologias: ['Python', 'Ruby']},
    { nome: 'Diego', tecnologias: ['React', 'Node.js']},
    { nome: 'Rafael', tecnologias: ['HTML', 'CSS']},
]

for (let user of users) {
    console.log(`${user.nome} trabalha com ${user.tecnologias}.`)
}

//Busca por tecnologia (CSS)
function cssCheck(user) {
    for (let tecnologia of user.tecnologias) {
        if (tecnologia == 'CSS') return true
    } 

    return false
}

for (let i = 0; i < users.length; i++) {
    const userTrabalhaComCSS = cssCheck(users[i]);

    if (userTrabalhaComCSS) {
        console.log(`O usuário ${users[i].nome} trabalha com CSS.`)
    }
}