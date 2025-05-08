"use strict";
class Tura {
    constructor(naziv, opis, duzina, tagovi) {
        this.naziv = naziv;
        this.opis = opis;
        this.duzina = duzina;
        this.tagovi = tagovi;
    }
}
let ture = [];

function createToursRows() {
    let tabela = document.querySelector("#tours-body")
   

    for (let i = 0; i < ture.length; i++) {
        let tr = document.createElement("tr");

        let rb = document.createElement("td")
        let naziv = document.createElement("td");
        let duzina = document.createElement("td");
        
        rb.textContent = i+1;
        naziv.textContent = ture[i].naziv;
        duzina.textContent = ture[i].duzina;
        
        tr.appendChild(rb);
        tr.appendChild(naziv);
        tr.appendChild(duzina);       
        tr.addEventListener("click", function(){
            displayToursDetails(ture[i]);
        })
        tabela.appendChild(tr);
    }
}
function initializationTours() {
    ture = [
        new Tura("Pancevo", "Divni grad", 15, ["Grad", "Renesansa", "Restorani"]),
        new Tura("Novi Sad", "srpska Atina", 15, ["Grad", "Dunav", "Restorani"]),
        
    ]
    createToursRows();
}
document.addEventListener("DOMContentLoaded", initializationTours());

function displayToursDetails(tura){
    let p  = document.createElement("p");
    p.innerHTML = `Naziv: ${tura.naziv} <br><br> Opis: ${tura.opis} <br><br> Dužina ture: ${tura.duzina} km <br><br> Tagovi: ${tura.tagovi.join(", ")}`

    let detalji = document.querySelector("#tour-details");
    if(detalji.firstChild){
        detalji.firstChild.remove();
    }
    detalji.appendChild(p);}

