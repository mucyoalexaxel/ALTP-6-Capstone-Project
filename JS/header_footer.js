// Header
// HAMBURGER MENU

const openMenu = document.querySelector('.hamburger');
const mainMenu1 = document.querySelector('.left-side');
const mainMenu2 = document.querySelector('.right-side');
const hideLogo = document.querySelector('.middle-header-title');
const hideHamburger = document.querySelector('.ham-menu-bar');
const closeMenu = document.querySelector('.closeMenu');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu1.style.display = 'flex';
    mainMenu1.style.top = '0';
    mainMenu2.style.display = 'flex';
    mainMenu2.style.top = '0';
    hideLogo.style.display = 'none';
    hideHamburger.style.display = 'none';
    closeMenu.style.display = 'block';
}
function close(){
    mainMenu1.style.top = '-100%';
    mainMenu2.style.top = '-100%';
}