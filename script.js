console.log("Valendo Sexy Shop Online 🔥");

document.addEventListener("DOMContentLoaded", function(){

// =========================
// CADASTRAR PRODUTO
// =========================

const form = document.getElementById("formProduto");

if(form){

form.addEventListener("submit", function(e){

e.preventDefault();

let nome = document.getElementById("nome").value;
let preco = document.getElementById("preco").value;
let imagem = document.getElementById("imagem").value;

fetch("COLE_AQUI_SEU_LINK_SHEETDB")
.then(response => response.json())
.then(produtos => {

const loja = document.getElementById("loja");

if(!loja) return;

loja.innerHTML = "";

produtos.forEach(p => {

loja.innerHTML += `
<div class="produto">
<img src="${p.imagem}">
<h3>${p.nome}</h3>
<p>R$ ${p.preco}</p>
<button onclick="comprar('${p.nome}')">Comprar</button>
</div>
`;

});

});

produtos.push({nome, preco, imagem});

localStorage.setItem("produtos", JSON.stringify(produtos));

alert("Produto cadastrado com sucesso!");

form.reset();

mostrarProdutos();
mostrarLoja();

});

}

// =========================
// ADMIN LISTA
// =========================

function mostrarProdutos(){

let lista = document.getElementById("listaProdutos");

if(!lista) return;

let produtos = JSON.parse(localStorage.getItem("produtos")) || [];

lista.innerHTML = "";

produtos.forEach((p,i)=>{

lista.innerHTML += `
<div>
<img src="${p.imagem}" width="80">
<b>${p.nome}</b> - R$ ${p.preco}
<button onclick="remover(${i})">Excluir</button>
</div>
`;

});

}

window.remover = function(i){

let produtos = JSON.parse(localStorage.getItem("produtos"));

produtos.splice(i,1);

localStorage.setItem("produtos",JSON.stringify(produtos));

mostrarProdutos();
mostrarLoja();

}

// =========================
// LOJA
// =========================

function mostrarLoja(){

let loja = document.getElementById("loja");

if(!loja) return;

let produtos = JSON.parse(localStorage.getItem("produtos")) || [];

loja.innerHTML = "";

produtos.forEach(p=>{

loja.innerHTML += `
<div class="produto">
<img src="${p.imagem}">
<h3>${p.nome}</h3>
<p>R$ ${p.preco}</p>
<button onclick="comprar('${p.nome}')">Comprar</button>
</div>
`;

});

}

window.comprar = function(produto){

let numero="5551998084487";

let msg=`Olá quero comprar: ${produto} 🔥`;

window.open(`https://wa.me/${numero}?text=${encodeURIComponent(msg)}`);

}

mostrarProdutos();
mostrarLoja();

});
