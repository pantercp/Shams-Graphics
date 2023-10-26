// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode');

const LogoIm = document.querySelector('#logoIm');
const LogoIm2 = document.querySelector('#logoIm2');

const moonIcon = document.querySelector("#moon");

const darkModeToggle = document.querySelector('#dark-mode-toggle');

const activateMoon = () => {

  if (darkModeToggle.classList.contains("day")) {
    console.log("CONTAINS DAY")
    darkModeToggle.classList.remove("day")
    console.log("REMOVED DAY")
    moonIcon.classList.remove("sun")
    console.log("REMOVED SUN")
  }
  else {
    console.log("DOESN'T CONTAIN DAY")
  }
}

const activateSun = () => {

  if (darkModeToggle.classList.contains("day")) {
    console.log("ALREADY CONTAINS DAY")
  }
  else {
    darkModeToggle.classList.add("day")
    console.log("DAY ADDED")
    moonIcon.classList.add("sun")
    console.log("SUN ADDED")
  }
}


const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('darkmode');

  // 2. Add moon to toggle switch
  activateMoon();

  LogoIm.src = "images/shams-dark-notext.png"
  LogoIm2.src = "images/shams-dark-notext.png"

  // 3. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('darkmode');

  // 2. Add Sun to toggle switch
  activateSun();
  LogoIm.src = "images/shams-light-notext.png"
  LogoIm2.src = "images/shams-light-notext.png"


  darkModeToggle.classList.add("day")
  moonIcon.classList.add("sun")


  // 3. Update darkMode in localStorage 
  localStorage.setItem('darkMode', null);
}

// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode();
}
else{
  disableDarkMode()
}


// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  darkMode = localStorage.getItem('darkMode');

  // if it not current enabled, enable it
  if (darkMode !== 'enabled') {
    enableDarkMode();
    // if it has been enabled, turn it off  
  } else {
    disableDarkMode();
  }
});

// -----------New Toggle--------


// $('.tdnn').click(function () {
//   // $("body").toggleClass('light');
//   $(".moon").toggleClass('sun');
//   $(".tdnn").toggleClass('day');
// });

//   <!--See version 2.0 withoug jQuery-->

// darkModeToggle.classList.toggle(".day")


// -----------Header--------

const burgerBtn = document.querySelector('.menu-btn');
const dropMenu = document.querySelector('.row-menu');

let menuOpen = false;
burgerBtn.addEventListener('click', () => {
  if (!menuOpen) {
    burgerBtn.classList.add('open');
    dropMenu.classList.add('open');
    menuOpen = true;
  } else {
    burgerBtn.classList.remove('open');
    dropMenu.classList.remove('open');
    menuOpen = false;
  }
});

