var getQuote = document.getElementById("get-quote-menu");
var hamButton = document.getElementById("ham-button");
var navWrapper = document.getElementById("navigation-wrapper");
var sideBarWrapper = document.getElementById("sidebar-wrapper");
var overlay = document.getElementById("overlay");
var quoteButton = document.getElementById("quote-button");
var getQButton = document.getElementById("get-quote-button");
var closeButton = document.getElementById("close-button");
var navCloseButton = document.getElementById("nav-close-button");
var bannerText = document.getElementById("ban-text");

overlay.onclick = function () {
  sideBarWrapper.style.display = "none";
};

closeButton.onclick = function () {
  sideBarWrapper.style.display = "none";
};

getQuote.onclick = function () {
  sideBarWrapper.style.display = "block";
};

getQButton.onclick = function () {
  sideBarWrapper.style.display = "block";
};

quoteButton.onclick = function () {
  sideBarWrapper.style.display = "block";
};

hamButton.onclick = function () {
  navWrapper.style.display = "flex";
  bannerText.style.display = "none";
  hamButton.style.display = "none";
  navCloseButton.style.display = "block";
};

navCloseButton.onclick = function () {
  navWrapper.style.display = "none";
  navCloseButton.style.display = "none";
  hamButton.style.display = "flex";
  bannerText.style.display = "block";
};

function myFunction(x) {
  if (x.matches) { // If media query matches        
    navWrapper.style.display = "flex";
    hamButton.style.display = "none";
    navCloseButton.style.display = "none";
    bannerText.style.display = "block";
  }
  else {
    navWrapper.style.display = "none";
    hamButton.style.display = "flex";
    bannerText.style.marginTop = "30px";
  }
}

var x = window.matchMedia("(min-width: 992px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) 