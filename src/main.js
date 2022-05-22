"use strict";

//User Input DOM
let cityName = document.getElementById("fname");
let AQI = document.getElementById("floatingSelectGrid");
let Noise = document.getElementById("floatingSelectGrid2");
let pollutants = document.getElementById("inputGroupSelect01");
let comment = document.getElementById("commentsId");
let bodyTable = document.querySelector("#main");
let tbl = document.querySelector("#tables");
let tblBody = document.createElement("tbody");
let row1 = document.createElement("tr");

//TABLES
//just one
//reduce code with express framework
let allowSubmit = true;
function city() {
  if (allowSubmit) {
    row1.appendChild(
      document
        .createElement("td")
        .appendChild(document.createTextNode(cityName.value))
    );
    row1.appendChild(
      document
        .createElement("td")
        .appendChild(
          document.createTextNode(AQI.options[AQI.selectedIndex].value)
        )
    );
    row1.appendChild(
      document
        .createElement("td")
        .appendChild(
          document.createTextNode(Noise.options[Noise.selectedIndex].value)
        )
    );
    row1.appendChild(
      document
        .createElement("td")
        .appendChild(
          document.createTextNode(
            pollutants.options[pollutants.selectedIndex].value
          )
        )
    );
    row1.appendChild(
      document
        .createElement("td")
        .appendChild(document.createTextNode(comment.value))
    );
    tblBody.appendChild(row1);
    tbl.appendChild(tblBody);
    bodyTable.appendChild(tbl);
  }
  allowSubmit = false;
}

//Save Button NOT CONNECTED TO A DATABASE YET
document.getElementById("save").addEventListener("click", function save() {
  document.querySelector("#popUp_superMain").style.display = "none";
  document.querySelector("#popUPBackground").style.display = "none";
  document.querySelector("#recentCitiesAdded").style.display = "block";
  succedTryAgain();
  city();
  document.getElementById("myForm").reset(); //clear city
  AQI.selectedIndex = 0; //clear AQI
  Noise.selectedIndex = 0; //clear Noise
  pollutants.selectedIndex = 0; //clear pollutants
  comment.value = "  ";
});

//CITY FORM
document
  .getElementById("Form")
  .addEventListener("click", function myFunction() {
    document.querySelector("#popUp_superMain").style.display = "block";
    document.querySelector("#popUPBackground").style.display = "block";
    document.querySelector("#recentCitiesAdded").style.display = "none";
  });

//function that will show error or donie message after Save button
function succedTryAgain() {
  var x = document.forms["myForm"]["fname"].value;
  var exito = document.querySelector("#successCard");
  var errorCard = document.querySelector("#tryagaing");
  //if pop up values are empty show error popup
  if (x == "") {
    errorCard.style.display = "block";
  }
  //debug success Message popup when values are entered
  else {
    exito.style.display = "block";
  }
}

//ERROR-SUCCESS BUTTONS OFF

//Success message donie button function using default parameters.
document
  .getElementById("successCard")
  .addEventListener("click", function done() {
    document.querySelector("#successCard").style.display = "none";
  });

//tryAgain button function using default parameters.
document
  .getElementById("tryagaing")
  .addEventListener("click", function tryAgaing() {
    document.querySelector("#tryagaing").style.display = "none";
  });

//comment letter count
document
  .getElementById("commentsId")
  .addEventListener("keyup", function gotkey() {
    let commentLength = comment.value.length;
    let output;
    if (commentLength > 40) {
      output = "Sorry, that's too many characters";
      comment.disabled = "disabled";
    } else {
      output = "Character count: " + commentLength;
    }
    document.getElementById("status").innerHTML = output;
  });

function maps(location) {
  var map = null;

  if (map !== undefined && map !== null) {
    map.remove();
  }

  map = L.map("mapid", {
    center: [location[1], location[2]],
    minZoom: 2,
    zoom: 13,
  });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  L.marker([location[1], location[2]]).addTo(map).bindPopup(location[0]);
}

maps(["New York", 40.6971494, -74.2598757]);
