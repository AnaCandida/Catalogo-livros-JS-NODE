//recebe um array de objetos simulando um json

const livros = [
  {
    id: 1,
    nome: 'Digital Minimalism',
    autor: 'Cal Newport',
    categoria: 'PRODUTIVIDADE',
    paginas: 254,
    recomenda: false,
    leu: false,
  },
  {
    id: 2,
    nome: 'O genocídio do negro brasileiro',
    autor: 'Abdias do Nascimento',
    categoria: 'HISTÓRIA',
    paginas: 254,
    recomenda: false,
    leu: false,
  },
  {
    id: 3,
    nome: 'As veias abertas da américa latina',
    autor: 'Eduardo Galeano',
    categoria: 'AMÉRICAS',
    paginas: 400,
    recomenda: true,
    leu: true,
  },
  {
    id: 4,
    nome: 'Algoritmos para viver',
    autor: 'Brian Cristian',
    categoria: 'TECNOLOGIA',
    paginas: 412,
    recomenda: true,
    leu: true,
  },
  {
    id: 5,
    nome: 'Thinking, fast and slow',
    autor: 'Daniel Kahneman',
    categoria: 'ESTILO DE VIDA',
    paginas: 418,
    recomenda: true,
    leu: true,
  },
  {
    id: 6,
    nome: 'Padrões Javascript',
    autor: 'Stoyan Stefanov',
    categoria: 'TECNOLOGIA',
    paginas: 400,
    recomenda: true,
    leu: true,
  },
];
//node permite exportar arquivos js. usa o module.exports
//precisa disso para poder usar

module.exports = livros;
