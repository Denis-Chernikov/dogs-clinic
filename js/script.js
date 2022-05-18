'use strict'

const header = document.querySelector('.header')
const menuBurger = document.querySelector('.menu-burger')
const nav = document.querySelector('.nav')
const introImg = document.querySelector('.intro__img')
const introInfoText = document.querySelector('.intro__info-text')
const btnScrollTop = document.querySelector('.scroll-top')



window.addEventListener('scroll', () => {
    if (scrollY > 200 && screen.width > 1140) {
        header.classList.add('active')
    } else {
        header.classList.remove('active')
    }
})

menuBurger.addEventListener('click', () => {
    nav.classList.toggle('active')
    document.body.classList.toggle('hidden')
})

if (window.innerWidth <= 960) {
    introInfoText.after(introImg);
}

window.addEventListener('scroll', () => {
    if (scrollY > window.innerHeight) {
        btnScrollTop.classList.add('active')
    } else {
        btnScrollTop.classList.remove('active')
    }
})

btnScrollTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})

window.addEventListener('resize',  () => {
    window.location = window.location;
});