
// Burger menu javascript //

const hamMenu = document.querySelector('.ham-menu');
    const offScreenMenu = document.querySelector('.off-screen-menu');

    hamMenu.addEventListener('click', () => {
        hamMenu.classList.toggle('active');
        offScreenMenu.classList.toggle('active');
    });


const menuItems = [
    { name: 'Forside', link: 'index.html'},
    { name: 'Produkter', link: 'produkter.html'},
    { name: 'Saml en kurv', link: 'bygenkurv.html'},
    { name: 'Kontakt', link: 'kontakt.html'},
];

const menuContainer = document.getElementById('menu');

for (let i = 0; i < menuItems.length; i++)  {
    menuContainer.innerHTML += '<li><a href="' + menuItems[i].link + '">' + menuItems[i].name;
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

/* har bare prøvet at lave noget loop

const productItems = document.getElementsByClassName('produkter__varer')

for (let i = 0; i < 5; i++){
    productItems.innerHTML += '<div>' + productItems[i];
}
*/


/* Mads https://www.w3schools.com/jsref/met_element_getboundingclientrect.asp */
addEventListener("scroll", onScroll)

var falsk = false

function onScroll() {
    var offsets
    if (document.URL.includes("index.html") ) {
        offsets = document.getElementById('brun__boks').getBoundingClientRect();
    }
    if (document.URL.includes("produkter.html")) {
        offsets = document.getElementById('indenfor').getBoundingClientRect();
    }
    if (window.scrollY >= offsets.bottom && falsk == false) {
        falsk = true
        produkterFremkald()
    }
    console.log("scrolling")
}

const produkterSynlighed = [
  {
    opacity: 0,
  },
  {
    opacity: 1,
  }
]

const produkterSynlighedTiming = {
  duration: 1000,
  iterations: 1,
}

function produkterFremkald() {
    let produkt = document.getElementsByClassName("produkt__wrapper")
    for (let i = 0; i < produkt.length; i++) {
        produkt[i].animate (produkterSynlighed, produkterSynlighedTiming)
    }
    opacitySetEn()
}

function opacitySetEn() {
    let produkt = document.getElementsByClassName("produkt__wrapper")
    for (let i = 0; i < produkt.length; i++) {
        produkt[i].style.opacity = 1
    }
}

