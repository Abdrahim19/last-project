
const shadow = document.querySelector('.bg-shadow');
const navlinks_tab = document.getElementById('navlinsk');
const nav_menu = document.getElementById('menu-button');

// buttons
const S_inscrire_button = document.querySelector('.navbar-link');



// handeling nav menu 
nav_menu.addEventListener('click', () => {
  navlinks_tab.classList.add('active');
  shadow.classList.add('active');
});


// handelimg on click shadow
shadow.addEventListener('click', () => {
    shadow.classList.remove('active');
    navlinks_tab.classList.remove('active');
  });


// handel loding page 

const loader = document.querySelector('.loding-container')

window.addEventListener("load" , function(){
    loader.style.display = "none";
})