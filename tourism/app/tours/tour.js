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
    tabela.innerHTML = "";
    if (ture) {
        for (let i = 0; i < ture.length; i++) {
            let tr = document.createElement("tr");

            let rb = document.createElement("td")
            let naziv = document.createElement("td");
            let duzina = document.createElement("td");

            rb.textContent = i + 1;
            naziv.textContent = ture[i].naziv;
            duzina.textContent = ture[i].duzina;

            tr.appendChild(rb);
            tr.appendChild(naziv);
            tr.appendChild(duzina);
            tr.addEventListener("click", function () {
                displayToursDetails(ture[i]);
            })
            tabela.appendChild(tr);
        }
    }
}
function initializationTours() {
    ture = JSON.parse(localStorage.getItem("tureJSON"));
    createToursRows();
    creatingNewTagRowsOnSubmitionForm();
    handlerFormSubmission();
}
document.addEventListener("DOMContentLoaded", initializationTours());

function displayToursDetails(tura) {
    let p = document.createElement("p");
    p.innerHTML = `Naziv: ${tura.naziv} <br><br> Opis: ${tura.opis} <br><br> Dužina ture: ${tura.duzina} km <br><br> Tagovi: ${tura.tagovi.join(", ")}`

    let detalji = document.querySelector("#tour-details");
    if (detalji.firstChild) {
        detalji.firstChild.remove();
    }
    detalji.appendChild(p);
}

function creatingNewTagRowsOnSubmitionForm() {
    let buttonAdd = document.querySelector("#addTag");
    buttonAdd.addEventListener('click', function () {
        let input = document.createElement("input");
        input.type = "text";
        input.name = "tag"
        input.required = true
        let unosTaga = document.querySelector("#display-tagRows");
        unosTaga.appendChild(input);
    })
}


function handlerFormSubmission() {
    let submitBtn = document.querySelector("#submitBtn");
    submitBtn.addEventListener('click', function (event) {
        const form = document.querySelector("#form");
        const formData = new FormData(form);

        const naziv = formData.get("naziv");
        const opis = formData.get("opis");
        const duzina = formData.get("duzina");
        const tagovi = formData.getAll("tag")

        const novaTura = new Tura(naziv, opis, duzina, tagovi);
        if (ture) {
            ture.push(novaTura);
        } else {
            ture = [];
            ture.push(novaTura);
        }

        localStorage.setItem("tureJSON", JSON.stringify(ture))
        createToursRows()
        let input = document.querySelector("input");
        
    })
}