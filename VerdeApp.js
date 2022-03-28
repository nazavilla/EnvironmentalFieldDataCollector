

//home button    
function home(){
  document.querySelector("#recentCitiesAdded").style.display = "block";
}


//CITY FORM 
function myFunction(){
  document.querySelector("#popUp_superMain").style.display = "block";
  document.querySelector("#popUPBackground").style.display = "block";
  document.querySelector("#recentCitiesAdded").style.display = "none";
}

//function that will show error or done message after Save button
function succedTryAgain(){
    let x = document.forms["myForm"]["fname"].value;
    var exito = document.querySelector("#successCard");
    var errorCard = document.querySelector("#tryagaing");
    //if pop up values are empty show error popup
    if (x == ""){
      errorCard.style.display = "block";
    }
    //debug success Message popup when values are entered
    else{
      exito.style.display = "block";
    }
}

//Save Button NOT CONNECTED TO A DATABASE YET
function save(){
    document.querySelector("#popUp_superMain").style.display = "none";
    document.querySelector("#popUPBackground").style.display = "none";
    document.querySelector("#recentCitiesAdded").style.display = "block";
    succedTryAgain();
}


//ERROR-SUCCESS BUTTONS OFF

//Success message done button function using default parameters.
const done = (success = document.querySelector("#successCard")) =>  success.style.display = "none";

//tryAgain button function using default parameters.
const tryAgaing = (tryagain = document.querySelector("#tryagaing") ) => tryagain.style.display = "none";



//TABLES

  var bodyTable = document.querySelector("#main");
  var tbl = document.querySelector("#tables");
    // create elements <tbody>
  var tblBody = document.createElement("tbody");


  // cells creation
  for (var j = 0; j <= 10; j++) {
    // table row creation
    var row = document.createElement("tr");

    for (var i = 0; i < 6; i++) {

        
      var cell = document.createElement("td");
      var cellText = document.createTextNode(""); 

      cell.appendChild(cellText);
      row.appendChild(cell);

    }

    //row added to end of table body
    tblBody.appendChild(row);
  }

  // append the <tbody> inside the <table>
  tbl.appendChild(tblBody);
  // put <table> in the <body>
  bodyTable.appendChild(tbl);

//Added a class to the tblBody
  tblBody.classList.add("tablebody");


//Maps
  function maps(location) {
            
    var map = null;
            
    if (map !== undefined && map !== null) { map.remove(); }

    map = L.map( 'mapid', {
    center: [location[1], location[2]],
    minZoom: 2,
     zoom: 13
    });
         
     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
   }).addTo(map);

   L.marker([location[1], location[2]]).addTo(map).bindPopup(location[0])

}

maps(['New York', 40.6971494, -74.2598757]);