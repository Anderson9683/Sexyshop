console.log("🔥 Valendo Sexy Shop Online");

// Espera página carregar
document.addEventListener("DOMContentLoaded", function () {

const produtosDiv = document.getElementById("produtos");

if (!produtosDiv) return;

// LINK CSV DA PLANILHA
const url =
"https://docs.google.com/spreadsheets/d/1OAA883uAREpPG-h7pupwizHH8WAEsIp3rHxbuGlIsrA/export?format=csv";

// Buscar produtos
fetch(url)
.then(res => res.text())
.then(data => {

const linhas = data.split("\n").slice(1);

produtosDiv.innerHTML = "";

linhas.forEach(linha => {

if(!linha.trim()) return;

// IMPORTANTE → separado por vírgula
const colunas = linha.split(",");

const nome = colunas[0];
const preco = colunas[1];
const imagem = colunas[2];
const descricao = colunas[3] || "";

produtosDiv.innerHTML += `
<div class="produto">

<img src="${imagem}" alt="${nome}">

<h3>${nome}</h3>

<p>R$ ${preco}</p>

<p>${descricao}</p>

<button onclick="comprar('${nome}')">
Comprar no WhatsApp
</button>

</div>
`;

});

});

// BOTÃO COMPRAR
window.comprar = function(produto){

const numero = "5551998084487";

const msg = `Olá! Quero comprar: ${produto} 🔥`;

window.open(
`https://wa.me/${numero}?text=${encodeURIComponent(msg)}`
);

};

});