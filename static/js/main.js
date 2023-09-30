// ----------------------------------------------------------
var y=3;
var x=5;

function handleButtonClick(event) {
  // Prevent the form submission
  event.preventDefault();

  // Call your JavaScript function
  f1();
}

function f1() {
  if (y === 2) {
    document.getElementById("xy").style.visibility = "hidden";
    document.getElementById("cnd").style.backgroundColor ="#d9c8f0";
    clearInput();
    y = 3;
  } else {
    document.getElementById("xy").style.visibility = "visible";
    document.getElementById("cnd").style.backgroundColor = "#b68deb";
    clearInput();
    y = 2;
  }
}

function clearInput() {
  document.getElementById("x").value = "";
  document.getElementById("y").value = "";
}

function f2() {
  y = 2;
}

//==========================================================

function solveAnother() {
  document.getElementById("solveforms").reset();
  // document.getElementById("resetForm").style.display = "none";
  document.getElementById("button3id").style.display = "none";
  document.getElementById("xyFormid").style.display = "none";

  var button2id2 = document.getElementById("button2id");
  var newMarginLeft3 = "-10px";
  // button2id.style.marginLeft = newMarginLeft3;
}

function toggleDivs() {
  var div3 = document.getElementById("div3");
  var div2 = document.getElementById("div2");

  if (div3.style.display !== "none") {
    div3.style.display = "none";
    div2.style.display = "block";
    document.addEventListener("DOMContentLoaded", function() {
      var dx = document.getElementById("dx");
      dx.autofocus = true;
  });
  
  }
}

function xyFormShow() {
  document.getElementById("xyFormid").style.display = "block";
  var div4 = document.getElementById("div4");
  var div5 = document.getElementById("div5");

  if (div5.style.display !== "none" && x == 6) {
    div5.style.display = "none";
    div4.style.display = "block";
  }
}

function backtostart() {
  var div3 = document.getElementById("div3");
  var div2 = document.getElementById("div2");

  if (div2.style.display !== "none") {
    div3.style.display = "block";
    div2.style.display = "none";
  }
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function checkXAndToggle(button) {
  if (x === 5) {
    button.disabled = true;
    button.style.cursor = "not-allowed";
  } else {
    button.disabled = false;
    button.style.cursor = "pointer";
  }
}

// /////////////////////////////////////////////////////
