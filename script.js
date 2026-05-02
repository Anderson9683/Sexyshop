const url =
"https://docs.google.com/spreadsheets/d/1OAA883uAREpPG-h7pupwizHH8WAEsIp3rHxbuGlIsrA/export?format=csv";

fetch(url)
  .then(response => response.text())
  .then(data => {
    const linhas = data.split("\n").slice(1);

    const produtosDiv = document.getElementById("produtos");

    linhas.forEach(linha => {
      const colunas = linha.split(",");

      const nome = colunas[0];
      const preco = colunas[1];
      const imagem = colunas[2];
      const descricao = colunas[3];

      produtosDiv.innerHTML += `
        <div class="produto">
          <img src="${imagem}" width="200">
          <h3>${nome}</h3>
          <p>R$ ${preco}</p>
          <p>${descricao}</p>
        </div>
      `;
    });
  });