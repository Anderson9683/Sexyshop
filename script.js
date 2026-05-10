const URL =
"https://docs.google.com/spreadsheets/d/1OAA883uAREpPG-h7pupwizHH8WAEsIp3rHxbuGlIsrA/export?format=csv";

fetch(URL)
.then(res => res.text())
.then(texto => {

const linhas = texto.split("\n").slice(1);

const area = document.getElementById("produtos");

area.innerHTML = "";

linhas.forEach(linha => {

const dados = linha.split(",");

const nome = dados[0];
const preco = dados[1];
const imagem = dados[2];

if(!nome) return;

area.innerHTML += `
<div class="produto">
<img src="${imagem}" alt="${nome}">
<h3>${nome}</h3>
<p>R$ ${preco}</p>
<button onclick="comprar('${nome}')">
Comprar
</button>
</div>
`;

});

});

function comprar(produto){
window.open(
"https://wa.me/5551998084487?text=Quero comprar "+produto,
"_blank"
);
}