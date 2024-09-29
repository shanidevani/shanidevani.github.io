// pythoncss progress circular bar 
let pythonProgress = document.querySelector(".python-css"),
  pythonValue = document.querySelector(".python-progress");

let pythonStartValue = 0,
  pythonEndValue = 90,
  pythonspeed = 30;

let progresspython = setInterval(() => {
  pythonStartValue++;

  pythonValue.textContent = `${pythonStartValue}%`;
  pythonProgress.style.background = `conic-gradient(#fca61f ${
    pythonStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (pythonStartValue == pythonEndValue) {
    clearInterval(progresspython);
  }
}, pythonspeed);

// power bi css progress circular bar 
let powerbiProgress = document.querySelector(".power-bi-css"),
  powerbiValue = document.querySelector(".power-bi-progress");

let powerbiStartValue = 0,
  powerbiEndValue = 80,
  powerbispeed = 30;

let progresspowerbi = setInterval(() => {
  powerbiStartValue++;

  powerbiValue.textContent = `${powerbiStartValue}%`;
  powerbiProgress.style.background = `conic-gradient(#fca61f ${
    powerbiStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (powerbiStartValue == powerbiEndValue) {
    clearInterval(progresspowerbi);
  }
}, powerbispeed);

// Rcss progress circular bar 
let rProgress = document.querySelector(".r-css"),
  rValue = document.querySelector(".r-progress");

let rStartValue = 0,
  rEndValue = 80,
  rspeed = 30;

let progressr = setInterval(() => {
  rStartValue++;

  rValue.textContent = `${rStartValue}%`;
  rProgress.style.background = `conic-gradient(#6f34fe ${
    rStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (rStartValue == rEndValue) {
    clearInterval(progressr);
  }
}, rspeed);

// tableau css progress circular bar 
let tableauProgress = document.querySelector(".tableau-css"),
  tableauValue = document.querySelector(".tableau-progress");

let tableauStartValue = 0,
  tableauEndValue = 80,
  tableauspeed = 30;

let progresstableau = setInterval(() => {
  tableauStartValue++;

  tableauValue.textContent = `${tableauStartValue}%`;
  tableauProgress.style.background = `conic-gradient(#6f34fe ${
    tableauStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (tableauStartValue == tableauEndValue) {
    clearInterval(progresstableau);
  }
}, tableauspeed);

// odoocss progress circular bar 
let odooProgress = document.querySelector(".odoo-css"),
  odooValue = document.querySelector(".odoo-progress");

let odooStartValue = 0,
  odooEndValue = 70,
  odoospeed = 30;

let progressodoo = setInterval(() => {
  odooStartValue++;

  odooValue.textContent = `${odooStartValue}%`;
  odooProgress.style.background = `conic-gradient(#20c997 ${
    odooStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (odooStartValue == odooEndValue) {
    clearInterval(progressodoo);
  }
}, odoospeed);

// datacss progress circular bar 
let dataProgress = document.querySelector(".data-css"),
  dataValue = document.querySelector(".data-progress");

let dataStartValue = 0,
  dataEndValue = 90,
  dataspeed = 30;

let progressdata = setInterval(() => {
  dataStartValue++;

  dataValue.textContent = `${dataStartValue}%`;
  dataProgress.style.background = `conic-gradient(#20c997 ${
    dataStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (dataStartValue == dataEndValue) {
    clearInterval(progressdata);
  }
}, dataspeed);

// htmlcss progress circular bar 
let htmlProgress = document.querySelector(".html-css"),
  htmlValue = document.querySelector(".html-progress");

let htmlStartValue = 0,
  htmlEndValue = 85,
  htmlspeed = 30;

let progresshtml = setInterval(() => {
  htmlStartValue++;

  htmlValue.textContent = `${htmlStartValue}%`;
  htmlProgress.style.background = `conic-gradient(#3f396d ${
    htmlStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (htmlStartValue == htmlEndValue) {
    clearInterval(progresshtml);
  }
}, htmlspeed);

// excelcss progress circular bar 
let excelProgress = document.querySelector(".excel-css"),
  excelValue = document.querySelector(".excel-progress");

let excelStartValue = 0,
  excelEndValue = 85,
  excelspeed = 30;

let progressexcel = setInterval(() => {
  excelStartValue++;

  excelValue.textContent = `${excelStartValue}%`;
  excelProgress.style.background = `conic-gradient(#3f396d ${
    excelStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (excelStartValue == excelEndValue) {
    clearInterval(progressexcel);
  }
}, excelspeed);

// filter using javascript
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show("1000");
    } else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
  });
});


// javascript for sticky navbar even if u scroll the navbar will be fixed
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar-top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar-top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 


// adding funtionality to back to top button 

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click",function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});