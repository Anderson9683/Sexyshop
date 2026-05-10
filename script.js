document.addEventListener("DOMContentLoaded", function () {

const produtos = [
{
nome:"Vibrador Luxo",
preco:"R$ 89,90",
img:"https://via.placeholder.com/250"
},
{
nome:"Algemas Sensuais",
preco:"R$ 39,90",
img:"https://via.placeholder.com/250"
},
{
nome:"Gel Beijável",
preco:"R$ 29,90",
img:"https://via.placeholder.com/250"
}
];

const lista = document.getElementById("produtos");

produtos.forEach(p => {
const card = `
<div class="card">
<img src="${p.img}">
<h3>${p.nome}</h3>
<p>${p.preco}</p>
</div>
`;

lista.innerHTML += card;
});

});
