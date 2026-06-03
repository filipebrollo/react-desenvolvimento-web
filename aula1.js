// function Pessoa (nome, idade, bairro, elegivel, habilitato) {
//         this.nome = nome,
//             this.idade = idade,
//             this.bairro = bairro,
//             this.elegivel = elegivel,
//             this.habilitato = habilitato
//     }

// const pessoa = new Pessoa('Max', 32, 'Petrópolis', true, true)
// console.log(pessoa)



// Crie uma classe chamada dev com os seguintes atributos:
// nome, sobrenome, bairro, cor, filme, musica, livro , linguagem, time, possuiPet
// class Dev {
//     constructor(nome, sobrenome, bairro, cor, filme, musica, livro, linguagem, time, possuiPet) {
//         this.nome = nome
//         this.sobrenome = sobrenome
//         this.bairro = bairro
//         this.cor = cor
//         this.filme = filme
//         this.musica = musica
//         this.livro = livro
//         this.linguagem = linguagem
//         this.time = time
//         this.possuiPet = possuiPet
//     }
// }

// const dev = new Dev('Maxwell','Santos','São Sebastião','Azul','Armageddon','Helloween - Forever and One','Java - Guia do Programador','Java','Flamengo',false
// )

// console.log(dev)



// Crie uma função chamada dev com os seguintes atributos:
// nome, sobrenome, bairro, cor, filme, musica, livro , linguagem, time, possuiPet
// function Dev (nome, sobrenome, bairro, cor, filme, musica, livro, linguagem, time, possuiPet) {
//         this.nome = nome
//         this.sobrenome = sobrenome
//         this.bairro = bairro
//         this.cor = cor
//         this.filme = filme
//         this.musica = musica
//         this.livro = livro
//         this.linguagem = linguagem
//         this.time = time
//         this.possuiPet = possuiPet
//     }

// const dev = new Dev('Maxwell','Santos','São Sebastião','Azul','Armageddon','Helloween - Forever and One','Java - Guia do Programador','Java','Flamengo',false
// )

// console.log(dev)



// function habilitado(anoAtual, anoNascimento) {
//     const idade = anoAtual - anoNascimento
//     let elegivel = false
//     if (idade >= 18) {
//         elegivel = true
//         return 'Elegivel'
//     } else {
//         return 'Inelegivel'
//     }
// }

// console.log(habilitado(2026, 1994))



// Crie uma função chamada checar que receba:
// - 2 notas de um aluno - frequência
// exiba aprovado se média > 8 e frequência >= 75
// reprovado em qualquer outro caso
// function checar(nota1, nota2, frequencia) {
//     let media = (nota1 + nota2) / 2;

//     if (media > 8 && frequencia >= 75) {
//         return 'Aprovado';
//     } else {
//         return 'Reprovado';
//     }
// }

// console.log(checar(10, 10, 75));



// const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const novaLista = lista.map((lista) => {
//     if (lista%2==0) {
//         return lista * 2
//     } else {
//         return lista
//     }
// })
// console.log(novaLista)



// Exercicio 01
// A nova lista deve exibir par onde forem pares e impar onde forem impares
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const novoArray = arr.map((n) => {
//     if (n % 2 === 0) {
//         return 'Par'
//     } else {
//         return 'Impar'
//     }
// })

// console.log(novoArray)



// Exercicio 02
// A nova lista deve exibir o número subsequence nos elementos menores que 5
// para os demais deve aparecer o antecessor
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const elementos = arr.map((n) => {
//     if (n <= 5) {
//         return n + 1
//     } else {
//         return n - 1
//     }
// })
// console.log (elementos)



const alunos = [
    {
        matricula: 1,
        nome: 'Max',
        media: 100,
        pendencia: false
    },
    {
        matricula: 2,
        nome: 'Elisa',
        time: 'Botafogo',
        pendencia: true
    }
]
const resultado = alunos.map(aluno => {
    if (aluno.pendencia === false) {
        return aluno
    }
    return null
})

console.log(resultado)