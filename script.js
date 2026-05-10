const produtosDiv = document.getElementById("produtos");

if (produtosDiv) {

fetch("https://docs.google.com/spreadsheets/d/1OAA883uAREpPG-h7pupwizHH8WAEsIp3rHxbuGlIsrA/export?format=csv")
.then(res => res.text())
.then(data => {

const linhas = data.split("\n").slice(1);

produtosDiv.innerHTML = "";

linhas.forEach(linha => {

if(!linha.trim()) return;

const colunas = linha.split(";");

const nome = colunas[0];
const preco = colunas[1];
const imagem = colunas[2];
const descricao = colunas[3];

produtosDiv.innerHTML += `
<div class="produto">
<img src="${imagem}">
<h3>${nome}</h3>
<p>R$ ${preco}</p>
<p>${descricao || ""}</p>
</div>
`;

});

});

}
