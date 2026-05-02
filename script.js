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

let produtos = JSON.parse(localStorage.getItem("produtos")) || [];

produtos.push({nome, preco, imagem});

localStorage.setItem("produtos", JSON.stringify(produtos));

alert("Produto cadastrado!");

form.reset();

mostrarProdutos();

});
}

// =========================
// MOSTRAR PRODUTOS ADMIN
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

function remover(i){

let produtos = JSON.parse(localStorage.getItem("produtos"));

produtos.splice(i,1);

localStorage.setItem("produtos",JSON.stringify(produtos));

mostrarProdutos();

}

mostrarProdutos();
