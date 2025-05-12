
// Burger menu javascript //
const hamMenu = document.querySelector('.ham-menu');

const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})


/*
let params = new URLSearchParams('product_id=produkter&quantity=42');

for(let param of params){
    console.log(param)
}

for(let [product_id, produkter] of params){
    console.log(product_id)
    console.log(produkter)
}

*/

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
