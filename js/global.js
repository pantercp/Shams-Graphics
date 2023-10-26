// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode'); 

const LogoIm = document.querySelector('#logoIm');
const LogoIm2 = document.querySelector('#logoIm2');

const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('darkmode');

  LogoIm.src = "images/shams-dark-notext.png"
  LogoIm2.src = "images/shams-dark-notext.png"

  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('darkmode');

  LogoIm.src = "images/shams-light-notext.png"
  LogoIm2.src = "images/shams-light-notext.png"

  // 2. Update darkMode in localStorage 
  localStorage.setItem('darkMode', null);
}
 
// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode();
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

