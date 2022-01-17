// Header
// HAMBURGER MENU & Navigation Links

const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');


openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

hoverEffect.addEventListener('mouseover',hoverEffectBefore);
hoverEffect.addEventListener('mouseout',hoverEffectAfter);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.right = '0';
}
function close(){
    mainMenu.style.right = '-100%';
}


