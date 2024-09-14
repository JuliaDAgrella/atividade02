

const string = "Bem-vindo ao meu site!";
const array = ["João", "Maria", "Leonardo", "Alice"];
const objeto = {
    nome: "João",
    idade: 30,
    profissão: "Desenvolvedor",
    cidade: "São Paulo"
};

// Função para criar o título
function criarTitulo(texto) {
    const titulo = document.createElement("h1");
    titulo.textContent = texto;
    return titulo;
}
// Ordenando os itens da lista em odem alfabética usando sort 
array.sort();

// Função para criar a lista não ordenada
function criarLista(itens) {
    const ul = document.createElement("ul");
    itens.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
    });
    return ul;
    
}

// Função para criar a seção com os dados do objeto
function criarSecaoDados(obj) {
    const secao = document.createElement("section");

    // Percorre as propriedades do objeto e cria parágrafos para cada uma
    for (let chave in obj) {
        const paragrafo = document.createElement("p");
        paragrafo.textContent = `${chave.charAt(0).toUpperCase() + chave.slice(1)}: ${obj[chave]}`;
        secao.appendChild(paragrafo);
    }

    return secao;
}

// Manipulação do DOM
const container = document.getElementById("container");

// Adicionando o título
container.appendChild(criarTitulo(string));

// Adicionando a lista não ordenada
container.appendChild(criarLista(array));

// Adicionando a seção com as informações do objeto
container.appendChild(criarSecaoDados(objeto));



