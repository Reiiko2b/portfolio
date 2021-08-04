const items = document.querySelectorAll('img');
const bSlide = items.length;
const suivant = document.querySelector('.right');
const précédent = document.querySelector('.left');
let count = 0;

function slideSuivante() {
    items[count].classList.remove('active');

    if(count < bSlide -1) {
        count++;
    } else {
        count = 0;
    }

    items[count].classList.add("active");
    console.log(count)

}
suivant.addEventListener("click", slideSuivante);

function slidePrecedent() {
    items[count].classList.remove('active');
    
    if(count > 0) {
        count--;
    } else {
        count = bSlide -1;
    }

    items[count].classList.add('active');
    console.log(count)
}
précédent.addEventListener("click", slidePrecedent);