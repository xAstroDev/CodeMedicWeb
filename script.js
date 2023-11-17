const navbar = document.querySelector('.navbar');
const navbarLinks = document.querySelector('.navbar-links');

navbar.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});
