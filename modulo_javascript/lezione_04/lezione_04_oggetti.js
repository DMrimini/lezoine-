// let etichetta = "nomeProprieta";
// let oggetto = {
//     [etichetta]: "ciao"
// }

// console.log(oggetto.nomeProprieta);
// console.log(oggetto[etichetta]);
// console.log(oggetto["nomeProprieta"]);
// console.log(etichetta);



// let etichetta1 = "nomeProprieta";
// let oggetto = {
//     ["etichetta"]: "ciao"
// }
// let oggetto1 = {
//     "etichetta": "ciao"
// }
// let oggetto2 = {
//     etichetta: "ciao"
// }

// console.log(oggetto.nomeProprieta);
// console.log(oggetto[etichetta1]);
// console.log(oggetto["nomeProprieta"]);
// console.log(etichetta);

let calciatore = {};

calciatore.nome = "Lorenzo";

calciatore.cognome = "Pellegrini";

calciatore.nome = "Giuseppe";

delete calciatore.cognome;




// function isEmpty(obj)
//     return {
//         if
//     }


// function isEmpty(obj) {
//     if (obj === null || obj === undefined)
//         return "l'oggetto non è definito"
//     for (let key in obj) {
//         return false; // se c'è almeno una proprietà, l'oggetto non è vuoto
//     }
//     return true; // se non ci sono proprietà, l'oggetto è vuoto
// }


var calciatori = [
    {nome: "Lorenzo", cognome: "Pellegrini", maglia: 10 },
    {nome: "Edin", cognome: "Dzeko", maglia: 23 },
    {nome: "Federico", cognome: "Chiesa", maglia: 99 },
    {nome: "Paulo", cognome: "Dybala", maglia: 10 },
    {nome: "Lorenzo", cognome: "Insigne", maglia: 10 },
    {nome: "Andrea", cognome: "Belotti", maglia: 9 },
    {nome: "Antonio", cognome: "Vacca", maglia: undefined },
];


// function maglia10(obj){
//     for (calciatore of obj){
//         if (calciatorel.maglia == 10){
//             console.log (calciatore.nome + " " + calciatore.cognome),
//         }
//     }
// }
// maglia10(calciatori);

function stampaCalciatoriNumeroMaglia10() {
    for (let i = 0; i < calciatori.length; i++) {
        let calciatore = calciatori[i];
        if (calciatore.maglia === 10) {
            console.log(calciatore.nome + " " + calciatore.cognome);
        }
        if (calciatore.maglia ===99){
            console.log (calciatore.nome + " " + calciatore.cognome);
        }
    }
}
stampaCalciatoriNumeroMaglia10();