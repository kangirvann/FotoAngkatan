const togglemenu = document.getElementById('toggle-menu')
const navbar = document.getElementById('navbar-nav')
const navlink = document.querySelectorAll('.nav-link')

togglemenu.addEventListener('click', function() {
    navbar.classList.toggle('show')
})

for(let i = 0; i < navlink.length; i++) {
    navlink[i].addEventListener('click', function() {
    navbar.classList.toggle('show')
    })
}