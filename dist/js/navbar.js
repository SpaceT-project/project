//Function for the menu button of navigation bar
const navBurger = document.querySelector('.navBurger');
const navBar = document.querySelector('.navBar');

navBurger.addEventListener('click', toggleNavMenu);

let showMenu = false;

function toggleNavMenu(){
    if(!showMenu){
        navBurger.innerHTML = '<i class="navBurgerBtn fas fa-times"></i>';
        navBurger.style.color = 'white';
        navBar.classList.add('open');
        showMenu = true;
    } else {
        navBurger.innerHTML = '<i class="navBurgerBtn fas fa-bars"></i>';
        navBurger.style.color = 'black';
        navBar.classList.remove('open');
        showMenu = false;
    }
}