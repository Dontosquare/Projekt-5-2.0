
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
