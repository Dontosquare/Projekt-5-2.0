

const hamMenu = document.querySelector('.ham-menu');

const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})

let params = new URLSearchParams('product_id=produkter&quantity=42');

for(let param of params){
    console.log(param)
}

for(let [product_id, produkter] of params){
    console.log(product_id)
    console.log(produkter)
}
