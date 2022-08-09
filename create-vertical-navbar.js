function createVerticalNavBar(li, ...liNames) {
    const parentLi = document.querySelector(`#${li}`)
    const ul = document.createElement('ul')
    let halfValue = liNames.length / 2
    ul.classList.add('vertical-ul', 'left-side')
    for (let liName of liNames) {
        const li = document.createElement('li')
        li.classList.add('vertical-ul-li')
        li.textContent = `${liName}`
        ul.append(li)
    }
    parentLi.append(ul)
}
export { createVerticalNavBar }
