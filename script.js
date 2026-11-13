const produtos = [
  {
    nome: "Notebook",
    preco: 3500,
    imagem: "imagens/notebook.jpg"
  },
  {
    nome: "Mouse",
    preco: 120,
    imagem: "imagens/mouse.jpg"
  },
  {
    nome: "Teclado",
    preco: 250,
    imagem: "imagens/teclado.jpg"
  },
  {
    nome: "Monitor",
    preco: 1000,
    imagem: "imagens/monitor.jpg"
  }
];

// Cria um card reutilizável para cada produto
function criarCard(produto) {
  const card = document.createElement("article");
  card.className = "card";

  const imagem = document.createElement("img");
  imagem.src = produto.imagem;
  imagem.alt = produto.nome;

  const nome = document.createElement("h3");
  nome.textContent = produto.nome;

  const preco = document.createElement("p");
  preco.className = "preco";
  preco.textContent = produto.preco.toLocaleString(
    "pt-BR",
    { style: "currency", currency: "BRL" }
  );

  const botao = document.createElement("button");
  botao.type = "button";
  botao.textContent = "Ver detalhes";

  botao.addEventListener("click", function() {
    alert("Produto: " + produto.nome);
  });

  card.append(imagem, nome, preco, botao);
  return card;
}

// Exibe cada card no catálogo
function mostrarProdutos() {
  const lista = document.getElementById(
    "lista-produtos"
  );

  produtos.forEach(function(produto) {
    const card = criarCard(produto);
    lista.appendChild(card);
  });
}

mostrarProdutos();