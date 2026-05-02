console.log("Valendo Sexy Shop Online 🔥");

document.addEventListener("DOMContentLoaded", function(){

const API = "https://sheetdb.io/api/v1/9ljb5e8ydc070";


// =========================
// CADASTRAR PRODUTO ONLINE
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
data:[{nome,preco,imagem}]
})
})
.then(()=>{

alert("Produto cadastrado ONLINE 🚀");

form.reset();

mostrarLoja();
mostrarAdmin();

});

});

}


// =========================
// MOSTRAR PRODUTOS NA LOJA
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
// MOSTRAR ADMIN
// =========================

function mostrarAdmin(){

const lista=document.getElementById("listaProdutos");

if(!lista) return;

fetch(API)
.then(res=>res.json())
.then(produtos=>{

lista.innerHTML="";

produtos.forEach(p=>{

lista.innerHTML+=`
<div>
<img src="${p.imagem}" width="80">
<b>${p.nome}</b> - R$ ${p.preco}
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
mostrarAdmin();

});
