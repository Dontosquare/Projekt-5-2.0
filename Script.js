
// Burger menu javascript //
const hamMenu = document.querySelector('.ham-menu');

const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})



document.getElementById('forside').onclick = function () {
    location.href = 'index.html';
}
document.getElementById('produkter').onclick = function () {
    location.href = 'produkter.html';
}
document.getElementById('sek').onclick = function () {
    location.href = 'bygenkurv.html'
}
document.getElementById('kontakt').onclick = function () {
    location.href = 'kontakt.html'
}
// alder verification //
/* 
let age = prompt('indtast din alder')

if(age < 16){
    alert('beklager, du opfylder ikke alderskravene for denne hjemmeside')
    location.href = 'https://www.google.dk/?hl=da'
}

else if (age >= 16){
    alert(Velkommen)
}
*/
