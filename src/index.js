import Login from './login'

const login = new Login()

const btnEntrar = document.getElementsByClassName('btn-entrar')[0]
const btnMeadota = document.getElementsByClassName('meAdota')[0]
const btnMeadota2 = document.getElementsByClassName('meAdota')[1]


btnEntrar.addEventListener('click', function(event) {
    event.preventDefault()
    login.fazerLogin()
})

btnMeadota.addEventListener('click', function(event) {
    event.preventDefault()
    console.log('adota vaca')
})

btnMeadota2.addEventListener('click', function(event) {
    event.preventDefault()
    console.log('adota burro')
})

// SCROLL AUTOMÁTICO

/* $('nav a').click(function(e) {
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top,
        menuHeight = $('nav').innerHeight();
$('html, body').animate({
    scrollTop: targetOffset -100
}, 500)
}) */

const menuItems = document.querySelectorAll('.opcao');

// console.log(menuItems);

menuItems.forEach(item => {
    item.addEventListener('click', scroll);
})

function scroll(event) {
    const element = event.target;
    const id = element.getAttribute('href');
    const section = document.querySelector(id);
    // console.log(section);
}