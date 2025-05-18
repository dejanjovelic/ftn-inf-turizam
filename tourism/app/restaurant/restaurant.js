class Restaurant {
  constructor(name, description, types) {
    this.name = name;
    this.description = description;
    this.types = types;
  }
}

let restaurants = [];

function initializeRestaurants() {
  restaurants = JSON.parse(localStorage.getItem("restaurants"));
  createRestaurantsRows();
  createTypeInput();
  handleForm();
}

function createRestaurantsRows() {
  let table = document.querySelector("#table-body");
  table.innerHTML = "";

  if (restaurants) {
    for (let i = 0; i < restaurants.length; i++) {
      let tr = document.createElement("tr");
      let tdName = document.createElement("td");
      let tdTypes = document.createElement("td");

      tdName.textContent = restaurants[i].name;
      tdTypes.textContent = restaurants[i].description;

      tr.addEventListener("click", function () {
        let details = document.querySelector("#restaurant-details");
        details.innerHTML = "";

        details.style.display = "flex";

        let p = document.createElement("p");
        p.innerHTML =
          "Naziv: " +
          restaurants[i].name +
          "<br>" +
          "Opis: " +
          restaurants[i].description +
          "<br>" +
          "Tipovi kuhinje: " +
          restaurants[i].types;

        details.appendChild(p);
      });

      tr.appendChild(tdName);
      tr.appendChild(tdTypes);
      table.appendChild(tr);
    }
  }
}

function handleForm() {
  let buttonAddRestaurant = document.querySelector("#add-restaurant");
  buttonAddRestaurant.addEventListener("click", function () {
    const form = document.querySelector("#restaurant-form");
    const formData = new FormData(form);

    const restaurantName = formData.get("name");
    const restaurantDescription = formData.get("description");
    const restaurantTypes = formData.getAll("types");

    const newRestaurant = new Restaurant(
      restaurantName,
      restaurantDescription,
      restaurantTypes
    );
    if (restaurants) {
      restaurants.push(newRestaurant);
    } else {
      restaurants = [];
      restaurants.push(newRestaurant);
    }

    localStorage.setItem("restaurants", JSON.stringify(restaurants));
    createRestaurantsRows();
  });
}

function createTypeInput() {
  let buttonAdd = document.querySelector("#add-type");
  buttonAdd.addEventListener("click", function () {
    let typesDiv = document.createElement("div");
    typesDiv.className = "types-input";

    let form = document.querySelector("#restaurant-form");

    let input = document.createElement("input");
    input.type = "text";
    input.name = "types";

    let buttonRemove = document.createElement("button");
    buttonRemove.textContent = "-";
    buttonRemove.id = "add-type";
    buttonRemove.addEventListener("click", function () {
      form.removeChild(typesDiv);
    });

    typesDiv.appendChild(input);
    typesDiv.appendChild(buttonRemove);
    form.appendChild(typesDiv);
  });
}

document.addEventListener("DOMContentLoaded", initializeRestaurants());
