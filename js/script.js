const shadow = document.querySelector('.bg-shadow');
const navlinks_tab = document.getElementById('navlinsk');
const nav_menu = document.getElementById('menu-button')

console.log(navlinks_tab);

nav_menu.addEventListener('click' , () => {
    navlinks_tab.classList.add('active');
    shadow.classList.add('active');
})
shadow.addEventListener('click' , () => {
    shadow.classList.remove('active');
    navlinks_tab.classList.remove('active');
})

