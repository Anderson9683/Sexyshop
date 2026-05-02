document.addEventListener("DOMContentLoaded", function(){

const produtosDiv = document.getElementById("produtos");

if(!produtosDiv) return;

// LINK DO SEU GOOGLE SHEETS
fetch("https://docs.google.com/spreadsheets/d/1OAA883uAREpPG-h7pupwizHH8WAEsIp3rHxbuGlIsrA/export?format=csv")

.then(res => res.text())

.then(data => {

const linhas = data.split("\n").slice(1);

produtosDiv.innerHTML = "";

linhas.forEach(linha => {

const colunas = linha.split(",");

const nome = colunas[0];
const preco = colunas[1];
const imagem = colunas[2];
const descricao = colunas[3];

if(!nome) return;

produtosDiv.innerHTML += `
<div class="produto">
<img src="${imagem}">
<h3>${nome}</h3>
<p>R$ ${preco}</p>
<p>${descricao}</p>

<a href="https://wa.me/5551998084487?text=Olá quero comprar ${nome}">
<button>Comprar</button>
</a>

</div>
`;

});

});

});