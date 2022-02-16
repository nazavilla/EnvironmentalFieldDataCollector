
  /*JS Definitions to be added in this project:
  
  -scopes
  
  
  */

  //SECTIONS TO BE ADDED

    //USER MUST BE ABLE TO UPLOAD PHOTO
  
// city FORM 
function myFunction(){
    var popUp_superMain = document.querySelector("#popUp_superMain");
    var popUp_superMain2 = document.querySelector("#popUPBackground");
    var galleryhide = document.querySelector("#Gallery");
    var citiesListHide = document.querySelector("#recentCitiesAdded");

  if (popUp_superMain.style.display === "none") {

    popUp_superMain2.style.display = "block";
    popUp_superMain.style.display = "block";
    galleryhide.style.display = "none";
    citiesListHide.style.display = "none";
    
  } else {
    popUp_superMain.style.display = "none";
  }
}


///Save Button NOT CONNECTED TO A DATABASE YET

function save(){
    var popUp_superMain = document.querySelector("#popUp_superMain");
    var popUp_superMain2 = document.querySelector("#popUPBackground");
    var galleryhide = document.querySelector("#Gallery");
    var citiesListHide = document.querySelector("#recentCitiesAdded");
    var success = document.querySelector("#successCard");

  if (popUp_superMain.style.display === "block") {

    popUp_superMain2.style.display = "none";
    popUp_superMain.style.display = "none";
    galleryhide.style.display = "block";
    citiesListHide.style.display = "block";
    success.style.display = "block";
    
  }  else {
    popUp_superMain.style.display = "block";
  }

  //ADD if pop up values are empty show error popup

}


//TABLES

//Whatever user enter into the city form, is gonna be added to the tables  
//PRUEBA si puedes a#adir CLASSSes to this section
//PRUEBA si puedes aaplicar: Creating String Using Literals (from freecodeCamp - ES6) 

  var body = document.querySelector("#main");
  var tbl = document.querySelector("#tables");
    // create elements <tbody>
  var tblBody = document.createElement("tbody");



  //move this sectiono to inside a function when SQL is added to the project
  //This is a GLOBAL SCOPE
  // cells creation
  for (var j = 0; j <= 10; j++) {
    // table row creation
    var row = document.createElement("tr");

    for (var i = 0; i < 6; i++) {

        
      // create element <td> and text node 
      //Make text node the contents of <td> element
      // put <td> at end of the table row
      var cell = document.createElement("td");
      var cellText = document.createTextNode(""); //Add here table values after SQL is added to project

      cell.appendChild(cellText);
      row.appendChild(cell);

    }

    //row added to end of table body
    tblBody.appendChild(row);
  }

  // append the <tbody> inside the <table>
  tbl.appendChild(tblBody);
  // put <table> in the <body>
  body.appendChild(tbl);

//Added a class to the tblBody
  tblBody.classList.add("tablebody");




  //ERROR-SUCCESS BUTTONS


//Success message done button function using default parameters.
const done = (success = document.querySelector("#successCard")) =>  success.style.display = "none";

/*ADD SECTION WHEN USER DOES NOT CLICK ON SAVE BUTTON IT SHOW ERRORCARD*/
//tryAgain button function using default parameters.
const tryAgaing = (tryagain = document.querySelector("#tryagaing") ) => tryAgaing.style.display = "none";