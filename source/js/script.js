// GLOBAL
var noJs = document.querySelector('html');
// INDEX.HTML
var header = document.querySelector('.block-header');
var headerLogoWhite = header.querySelector('.block-header__logo--white');
var headerLogoBlue = header.querySelector('.block-header__logo--blue');
var mainNav = document.querySelector('.main-nav');
var mainNavToggle = mainNav.querySelector('.main-nav__toggle');
var mainNavWrapper = mainNav.querySelector('.main-nav__wrapper');
var priceLink = document.querySelector(".price__link");
var tariff = document.querySelector(".tariff");
var tariffClose = document.querySelector(".tariff__close");
// CATALOG.HTML
var filterContinent = document.querySelector('.filter-continent');
var filterContinentClose = document.querySelector('.filter-continent__close');
var filterContinentOpen = document.querySelector('.filter-continent__open');
var filterContinentToggle = document.querySelector('.filter__toggle');
var filterAlphabet = document.querySelector('.filter-alphabet');
var filterClose = document.querySelector('.filter__close');
// INITIAL
noJs.classList.remove('nojs');
mainNav.classList.remove('main-nav--opened');
mainNav.classList.add('main-nav--closed');
if (filterContinent) { filterBlockToggle() }
// INDEX.HTML TOGGLE
if (mainNavToggle) {
  mainNavToggle.addEventListener("click", function(evt) {
    evt.preventDefault();
    if (mainNav.classList.contains("main-nav--closed")) {
      header.classList.add("block-header--blue");
      headerLogoWhite.style.display = "none";
      headerLogoBlue.style.display = "block";
      mainNav.classList.remove("main-nav--closed");
      mainNav.classList.add("main-nav--opened");
      mainNavWrapper.style.display = "block";
    } else {
      header.classList.remove("block-header--blue");
      headerLogoWhite.style.display = "block";
      headerLogoBlue.style.display = "none";
      mainNav.classList.remove("main-nav--opened");
      mainNav.classList.add("main-nav--closed");
      mainNavWrapper.style.display = "none";
    }
  });
}
if (priceLink) {
  priceLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    tariff.classList.remove("visually-hidden");
  });
}
if (tariffClose) {
  tariffClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    tariff.classList.add("visually-hidden");
  });
}
// CATALOG.HTML TOGGLE
function filterBlockToggle() {
  if (filterContinent.classList.contains('filter-continent--hide')) {
    filterContinent.classList.remove('filter-continent--hide');
  } else {
    filterContinent.classList.add('filter-continent--hide');
  }
  if (filterContinentClose.classList.contains('filter-continent__close--hide')) {
    filterContinentClose.classList.remove('filter-continent__close--hide');
  } else {
    filterContinentClose.classList.add('filter-continent__close--hide');
  }
  if (filterContinentOpen.classList.contains('filter-continent__open--hide')) {
    filterContinentOpen.classList.remove('filter-continent__open--hide');
  } else {
    filterContinentOpen.classList.add('filter-continent__open--hide');
  }
  if (filterAlphabet.classList.contains('filter-alphabet--hide')) {
    filterAlphabet.classList.remove('filter-alphabet--hide');
  } else {
    filterAlphabet.classList.add('filter-alphabet--hide');
  }
  if (filterClose.classList.contains('filter__close--hide')) {
    filterClose.classList.remove('filter__close--hide');
  } else {
    filterClose.classList.add('filter__close--hide');
  }
}
if (filterContinent) {
  filterContinentOpen.addEventListener("click", function() {
    filterBlockToggle();
  });
  filterContinentClose.addEventListener("click", function() {
    filterBlockToggle();
  });
  filterContinentToggle.addEventListener("click", function() {
    filterBlockToggle();
  });
  filterClose.addEventListener("click", function() {
    filterBlockToggle();
  });
}
