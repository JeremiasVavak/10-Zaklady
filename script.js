console.log("JavaScript funguje!");

console.log(Math.floor(Math.random()*100));
/*
let mojeBarvaVlasu = prompt("Zadejte svoji barvu vlasů")
*/

function pozdrav(){
    console.log("Ahoj")
}

let rok = prompt("Zadejte rok svého narození");
let dnesniDatum = new Date();
pozdrav();
let stari = dnesniDatum.getFullYear() - rok;

console.log("Uživatel má " + stari + " let");
