// Header
// HAMBURGER MENU & Navigation Links

const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const hoverLine = document.querySelector('.hover-line');
const hoverEffect = document.getElementById('hover-effect');


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
function hoverEffectBefore(){
    hoverLine.style.translate = '0 3px';
    hoverLine.style.transition = 'all 1s ease';
    hoverLine.style.display = 'block';
}
function hoverEffectAfter(){
    hoverLine.style.display = 'none';
}