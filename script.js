import { createHorizontalNavBar } from "./create-horizontal-navbar.js"

const header = document.querySelector('header')

const horizontalUl = createHorizontalNavBar('Football', 'Hockey', 'Basketball', 'Auto', 'MMA', 'Biathlon', 'Chess', 'Cybersports')


header.append(horizontalUl)

