//User Input DOM
let cityName = document.getElementById("fname");
let AQI = document.getElementById("floatingSelectGrid");
let AQIVal = AQI.options[AQI.selectedIndex].value;
let pollutants = document.getElementById("inputGroupSelect01");
let garbage  = document.getElementById("flexCheckChecked");
let comment = document.getElementById("commentsId");
let bodyTable = document.querySelector("#main");
let tbl = document.querySelector("#tables");
let tblBody = document.createElement("tbody");
let row1 = document.createElement("tr");


//TABLESs
function city(){
  let cell1 = document.createElement("td");
  let cellText1 = document.createTextNode(`${cityName.value}`);
  //let cell2 = document.createElement('td');
  //let cellText2 = document.createTextNode(`${AQIVal}`);
  cell1.appendChild(cellText1);
  //cell2.appendChild(cellText2);
  row1.appendChild(cell1);
  //row1.appendChild(cell2);
  tblBody.appendChild(row1);
  tbl.appendChild(tblBody);
  bodyTable.appendChild(tbl);}

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
    city()
}

//ERROR-SUCCESS BUTTONS OFF

//Success message done button function using default parameters.
const done = (success = document.querySelector("#successCard")) =>  success.style.display = "none";

//tryAgain button function using default parameters.
const tryAgaing = (tryagain = document.querySelector("#tryagaing") ) => tryagain.style.display = "none";



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