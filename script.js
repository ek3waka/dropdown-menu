import { createHorizontalNavBar } from "./create-horizontal-navbar.js"
import { createVerticalNavBar } from "./create-vertical-navbar.js"

const header = document.querySelector('header')

const horizontalUl = createHorizontalNavBar('Football', 'Hockey', 'Basketball', 'Auto', 'MMA', 'Biathlon', 'Chess', 'Cybersports')



header.append(horizontalUl)

createVerticalNavBar('Football', 'Matches', 'News', 'Blogs', 'Statuses', 'Transfers', 'Calendars')
createVerticalNavBar('Hockey', 'Matches', 'News', 'Blogs', 'Statuses', 'Transfers', 'Calendars')
createVerticalNavBar('Basketball', 'Matches', 'News', 'Blogs', 'Statuses', 'Transfers', 'Calendars')
createVerticalNavBar('Auto', 'Matches', 'News', 'Blogs', 'Statuses', 'Transfers', 'Calendars')
createVerticalNavBar('MMA', 'Matches', 'News', 'Blogs', 'Statuses', 'Transfers', 'Calendars')
createVerticalNavBar('Biathlon', 'Matches', 'News', 'Blogs', 'Statuses', 'Transfers', 'Calendars')
createVerticalNavBar('Chess', 'Matches', 'News', 'Blogs', 'Statuses', 'Transfers', 'Calendars')
createVerticalNavBar('Cybersports', 'Matches', 'News', 'Blogs', 'Statuses', 'Transfers', 'Calendars')

const sports = document.querySelectorAll('.horizontal-ul-li')
console.log(sports)

sports.forEach(sport => {
    const menu = document.querySelector(`#${sport.id}>ul`)

    sport.addEventListener('mouseover', () => {
        menu.classList.add('active')
    })
    
    menu.addEventListener('mouseleave', () => {
        menu.classList.remove('active')
    })

})