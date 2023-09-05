navList = document.querySelector('.nav-list')
logo = document.querySelector('#logo')
hamburger = document.querySelector('.hamburger')
Navbar = document.querySelector('#navbar')

hamburger.addEventListener('click', () => {
    navList.classList.toggle('v-class-resp');
    navList.classList.toggle('h-nav-resp');
    Navbar.classList.toggle('h-nav-resp');
    logo.classList.toggle('v-class-resp');
})