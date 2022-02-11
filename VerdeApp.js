
    //USER MUST BE ABLE TO UPLOAD PHOTO

//create tables
  var body = document.querySelector("#main");
  var tbl = document.querySelector("#tables");
    // create elements <tbody>
  var tblBody = document.createElement("tbody");


  // cells creation
  for (var j = 0; j <= 10; j++) {
    // table row creation
    var row = document.createElement("tr");

    for (var i = 0; i < 6; i++) {

        
      // create element <td> and text node 
      //Make text node the contents of <td> element
      // put <td> at end of the table row
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
  body.appendChild(tbl);

//Added a class to the tblBody
  tblBody.classList.add("tablebody");



/////////////////////////////////////////////
//FORM 
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




///Save Button NOT CONNECTED TO A DATABASE

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


function done(){
       var success = document.querySelector("#successCard");
           success.style.display = "none";
        

}

  /*ADD SECTION WHEN USER DOES NOT CLICK ON SAVE BUTTON IT SHOW ERRORCARD*/
function tryAgaing(){
    var tryagain = document.querySelector("#tryagaing");
        tryagain.style.display = "none";

}
