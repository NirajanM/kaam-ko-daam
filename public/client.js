const list = document.getElementsByClassName('toggle-button')[0];
const navbar = document.getElementsByClassName('navbar-links')[0];
const main = document.getElementById('main-link');
const about = document.getElementById('about-link');
const services = document.getElementById('services-link');
const contact = document.getElementById('contact-link');
list.addEventListener('click', () => {
    navbar.classList.toggle('active')
})
main.addEventListener('click', () => {
    navbar.classList.toggle('active')
})
about.addEventListener('click', () => {
    navbar.classList.toggle('active')
})
services.addEventListener('click', () => {
    navbar.classList.toggle('active')
})
contact.addEventListener('click', () => {
    navbar.classList.toggle('active')
})