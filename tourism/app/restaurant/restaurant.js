class Restaurant {
  constructor(name, description, types) {
    this.name = name;
    this.description = description;
    this.types = types;
  }
}

let restaurants = [
  new Restaurant("Monaco", "Opis restorana monaco", [
    " Italijanska",
    " Americka"
  ]),
  new Restaurant("Oh-la-la", "Opis restorana ohlala", [
    " Italijanska",
    " Americka",
    " Meksicka"
  ])
];

function createRestaurantsRows() {
  let table = document.querySelector("#table-body");
  table.innerHTML = "";

  for (let i = 0; i < restaurants.length; i++) {
    let tr = document.createElement("tr");
    let tdName = document.createElement("td");
    let tdTypes = document.createElement("td");

    tdName.textContent = restaurants[i].name;
    tdTypes.textContent = restaurants[i].description;

    tr.addEventListener('click', function(){
        let details = document.querySelector("#restaurant-details");
        details.innerHTML= "";

        details.style.display = "flex";
        
        let p = document.createElement("p");
        p.innerHTML = "Naziv: " + restaurants[i].name + "<br>" + "Opis: " +restaurants[i].description + "<br>"
        + "Tipovi kuhinje: " + restaurants[i].types;

        details.appendChild(p);
    })

    tr.appendChild(tdName);
    tr.appendChild(tdTypes);
    table.appendChild(tr);
  }
}

document.addEventListener("DOMContentLoaded", createRestaurantsRows());