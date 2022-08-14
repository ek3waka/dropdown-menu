import { createHorizontalNavBar } from "./create-horizontal-navbar.js"
import { createVerticalNavBar } from "./create-vertical-navbar.js"

const header = document.querySelector('header')
const navbar = document.querySelector('.navbar')


const horizontalUl = createHorizontalNavBar('Football', 'Hockey', 'Basketball', 'Auto', 'MMA', 'Biathlon', 'Chess', 'Cybersports')



navbar.append(horizontalUl)

createVerticalNavBar('Football', 'Matches', 'News', 'Blogs', 'Statuses', 'Transfers', 'Calendars')
createVerticalNavBar('Hockey', 'Matches', 'News', 'Blogs', 'Statuses', 'Transfers', 'Calendars')
createVerticalNavBar('Basketball', 'Matches', 'News', 'Blogs', 'Statuses', 'Transfers', 'Calendars')
createVerticalNavBar('Auto', 'Matches', 'News', 'Blogs', 'Statuses', 'Transfers', 'Calendars')
createVerticalNavBar('MMA', 'Matches', 'News', 'Blogs', 'Statuses', 'Transfers', 'Calendars')
createVerticalNavBar('Biathlon', 'Matches', 'News', 'Blogs', 'Statuses', 'Transfers', 'Calendars')
createVerticalNavBar('Chess', 'Matches', 'News', 'Blogs', 'Statuses', 'Transfers', 'Calendars')
createVerticalNavBar('Cybersports', 'Matches', 'News', 'Blogs', 'Statuses', 'Transfers', 'Calendars')

const sports = document.querySelectorAll('.horizontal-ul-li')
const menus = document.querySelectorAll('.vertical-ul-li')


sports.forEach(sport => {
    const menu = document.querySelector(`#${sport.id}>ul`)

    sport.addEventListener('mouseover', () => {
        menus.forEach(menu => {
            menu.classList.remove('active')
        })
        menu.classList.add('active')
        sport.classList.add('pushed')
    })

    menu.addEventListener('mouseleave', () => {
        menu.classList.remove('active')
        sport.classList.remove('pushed')
    })
    sport.addEventListener('mouseleave', () => {
        menu.classList.remove('active')
        sport.classList.remove('pushed')
    })
    
})

const images = document.querySelector('.images')
const imageslider = document.querySelectorAll('img')
const imagesArray = Array.from(imageslider)

const rightButton = document.querySelector('.arrow-right')
const leftButton = document.querySelector('.arrow-left')
const slider = document.querySelector('.slider')
imagesArray.forEach((image, index) => {
    image.style.order = `${index}`
    image.id = index
})



leftButton.addEventListener('click', () => {
    imagesArray.forEach((image, index, imagesArray) => {
        image.style.order = `${Number(image.style.order)+1}`
        switch (image.style.order) {
            case '0':
                image.style.order = `${imagesArray.length-1}`;
                break;
            case `${imagesArray.length}`:
                image.style.order = '0';
                break;
            }
        
    })

})

rightButton.addEventListener('click', () => {
   rightClick()
})


function rightClick() {
    imagesArray.forEach((image, index, imagesArray) => {
        image.style.order = `${Number(image.style.order)-1}`
        switch (image.style.order) {
            case `${imagesArray.length}`:
                image.style.order = '0';
                break;
            case '-1':
                image.style.order = `${imagesArray.length-1}`
            }
    })
}

setInterval(rightClick, 5000)