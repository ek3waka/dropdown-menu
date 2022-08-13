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


const images = document.querySelectorAll('img')

const rightButton = document.querySelector('.arrow-right')
const leftButton = document.querySelector('.arrow-left')
const slider = document.querySelector('.slider')


let rightOffset = 0

rightButton.addEventListener('click', () => {
    slider.style.right = `${rightOffset+=832}px`
    console.log(slider.style.right)
    
})

leftButton.addEventListener('click', () => {
    slider.style.right = `${rightOffset-=832}px`

    console.log(slider.style.right)

})