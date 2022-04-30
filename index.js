const menu = document.getElementById('navmenu')

function openMenu (){
    if (menu.style.display === "block") {
        menu.style.display = "none"
    } else {
        menu.style.display = "block"
    }
}

console.log(menu);

ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
});

ScrollReveal().reveal('.logo', {
    delay: 500
});

ScrollReveal().reveal('.hero__title', {
    delay: 600,
    origin: 'left'
});
