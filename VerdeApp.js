
    //USER MUST BE ABLE TO UPLOAD PHOTO

//CALENDAR //CALENDAR //CALENDAR //CALENDAR //CALENDAR //CALENDAR //CALENDAR //CALENDAR //CALENDAR //CALENDAR //CALENDAR //CALENDAR //CALENDAR

const calendarElement = document.querySelector('#container2');
const monthElement = document.querySelector('#month');
const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#previous');
const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const days = ['Sun.','Mon.','Tue.','Wed.','Thu.','Fri.','Sat.'];
const monthDays = [31,28,31,30,31,30,31,31,30,31,30,31];
const year=2020;
let currentMonthNumber = 0;

nextBtn.addEventListener('click',() => {
    if(currentMonthNumber<11) {
        currentMonthNumber+=1;
        depopulateCalendar();
        populateCalendar(currentMonthNumber);
    } 
});

prevBtn.addEventListener('click', () => {
    if(currentMonthNumber>0) {
        currentMonthNumber-=1;
        depopulateCalendar();
        populateCalendar(currentMonthNumber);
    }
});

function determineDay(date) {
    const d = new Date(months[currentMonthNumber]+' '+date+','+year);
    return days[d.getDay()];
}

function getDateElement(date) {
    let ele = document.createElement('div');
    ele.id = date;
    ele.classList.add('date');
    ele.addEventListener("mouseover", ($event) => {
        ele.textContent=determineDay(ele.id);
    });
    ele.addEventListener('mouseleave',($event)=>{
        ele.textContent=ele.id;
    });
    ele.textContent = date;
    return ele;
}

function populateCalendar(monthNumber) {
    monthElement.textContent= months[monthNumber];
    for(let i=1;i<=monthDays[monthNumber];i++) {
        calendarElement.appendChild(getDateElement(i));
    }
}

function depopulateCalendar() {
    calendarElement.innerHTML='';
}

populateCalendar(currentMonthNumber);




/////////////////////////////////////////////
//FORM 
function myFunction(){
    var popUp_superMain = document.querySelector("#popUp_superMain");
    var popUp_superMain2 = document.querySelector("#popUPBackground");


  if (popUp_superMain.style.display === "none") {

    popUp_superMain2.style.display = "block";
    popUp_superMain.style.display = "block";

    
  } else {
    popUp_superMain.style.display = "none";
  }
}




///Save Button NOT CONNECTED TO A DATABASE

function save(){
        var popUp_superMain = document.querySelector("#popUp_superMain");
    var popUp_superMain2 = document.querySelector("#popUPBackground");


  if (popUp_superMain.style.display === "block") {

    popUp_superMain2.style.display = "none";
    popUp_superMain.style.display = "none";

    
  } else {
    popUp_superMain.style.display = "block";
  }

}