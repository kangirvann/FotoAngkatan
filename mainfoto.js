let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length -1])
})

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