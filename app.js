// iniciar um projeto node:
// 1) dentro da pasta do projeto, no terminal   usar o comando: npm init-y. vai add o arquivo package.json.
//2) mudar no package.json a parte dos scripts, original de "testes" para "start" e inserir a string com o comando para incializar a app

//biblioteca readline = permite que a gente receba a entrada de pessoas usuárias. Simula isso. equilave ao input.value do front  . Usamos no terminal o comando "npm i readline-sync"
//criar um arquivo ".gitignore" e dentro iserir o nomde do que é para ser ignorado
//3) importar para o app o database. crio a variavel e uso o comando require("./database")

//pegar o input da pessoa, se sela escolhe por categoria

//const readline = require('readline-sync'); //consigo acessar toda a biblioteca redline

//const entradainicial = readline.question('Deseja buscar um livro? S/N'); //question metodo nativo da biblioteca, que permite fazer perguntas para a entrada da pessoa usuaria

// ---SIM -mostra as categorias e pergunta qual escolhe

//---NÃO - mostra todos os livros em ordem crescente pela quantidade de páginas;

const livros = require('./database');

const readline = require('readline-sync'); //consigo acessar toda a biblioteca redline

const entradaInicial = readline.question(
  'Deseja buscar um livro por categoria? S/N',
);

if (entradaInicial.toLocaleUpperCase() === 'S') {
  console.log('Essas são as categorias disponíveis:');
  console.log(
    'Produtividade |',
    'Historia |',
    'Americas |',
    'Tecnologia |',
    'Estilo de vida',
  );
  const entradaCategoria = readline.question('Qual é a categoria  desejada? ');

  const retorno = livros.filter(livro => livro.categoria === entradaCategoria);
  console.table(retorno);
  console.log('Boa leitura!!');
} else {
  const livrosOrdenados = livros.sort((a, b) => a.paginas - b.paginas);
  console.log('Esses são todos os livros disponíveis:');
  console.table(livrosOrdenados);
  console.log('Boa leitura!!');
}
