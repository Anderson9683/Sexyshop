function comprar(produto){

let numero="5551998084487";

let msg=`Olá quero comprar: ${produto} 🔥`;

window.open(`https://wa.me/${numero}?text=${encodeURIComponent(msg)}`);

}