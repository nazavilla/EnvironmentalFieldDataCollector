
    //USER MUST BE ABLE TO UPLOAD PHOTO



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




///image saver GALLERY

  const imagenInput = document.querySelector("#image_input");
  
  imagenInput.addEventListener("change", function() {
  const reader = new FileReader();
  reader.addEventListener("load", () =>{
       const uploaded_image = reader.result;
       document.querySelector("#display_image").style.backgroundImage = `url(${uploaded_image})`;

  });

  reader.readAsDataURL(this.files[0]);

});