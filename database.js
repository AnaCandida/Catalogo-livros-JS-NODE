//recebe um array de objetos simulando um json

const livros = [
  {
    id: 1,
    nome: 'Digital Minimalism',
    autor: 'Cal Newport',
    categoria: 'PRODUTIVIDADE',
    seletor: '1',
    paginas: 254,
    recomenda: false,
    leu: false,
  },
  {
    id: 2,
    nome: 'O genocídio do negro brasileiro',
    autor: 'Abdias do Nascimento',
    categoria: 'HISTÓRIA',
    seletor: '2',
    paginas: 254,
    recomenda: false,
    leu: false,
  },
  {
    id: 3,
    nome: 'As veias abertas da américa latina',
    autor: 'Eduardo Galeano',
    categoria: 'AMÉRICAS',
    seletor: '3',
    paginas: 400,
    recomenda: true,
    leu: true,
  },
  {
    id: 4,
    nome: 'Algoritmos para viver',
    autor: 'Brian Cristian',
    categoria: 'TECNOLOGIA',
    seletor: '4',
    paginas: 412,
    recomenda: true,
    leu: true,
  },
  {
    id: 5,
    nome: 'Thinking, fast and slow',
    autor: 'Daniel Kahneman',
    categoria: 'ESTILO DE VIDA',
    seletor: '5',
    paginas: 418,
    recomenda: true,
    leu: true,
  },
  {
    id: 6,
    nome: 'Padrões Javascript',
    autor: 'Stoyan Stefanov',
    categoria: 'TECNOLOGIA',
    seletor: '4',
    paginas: 400,
    recomenda: true,
    leu: true,
  },
];
//node permite exportar arquivos js. usa o module.exports
//precisa disso para poder usar

module.exports = livros;
