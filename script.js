console.log("Loja Online 🔥");

document.addEventListener("DOMContentLoaded", function(){

const API = "https://docs.google.com/spreadsheets/d/1OAA883uAREpPG-h7pupwizHH8WAEsIp3rHxbuGlIsrA/edit#gid=0";


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

fetch(API,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
data:{
nome:nome,
preco:preco,
imagem:imagem
}
})
})
.then(()=>{

alert("Produto cadastrado com sucesso ✅");

form.reset();

mostrarLoja();

});

});

}


// =========================
// MOSTRAR LOJA
// =========================

function mostrarLoja(){

const loja = document.getElementById("loja");

if(!loja) return;

fetch(API)
.then(res=>res.json())
.then(produtos=>{

loja.innerHTML="";

produtos.forEach(p=>{

loja.innerHTML+=`
<div class="produto">
<img src="${p.imagem}">
<h3>${p.nome}</h3>
<p>R$ ${p.preco}</p>
<button onclick="comprar('${p.nome}')">Comprar</button>
</div>
`;

});

});

}


// =========================
// WHATSAPP
// =========================

window.comprar=function(produto){

let numero="5551998084487";

let msg=`Olá quero comprar: ${produto} 🔥`;

window.open(`https://wa.me/${numero}?text=${encodeURIComponent(msg)}`);

}

mostrarLoja();

});