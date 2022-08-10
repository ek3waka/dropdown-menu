function createHorizontalNavBar(...liNames) {
    const ul = document.createElement('ul')
    ul.classList.add('horizontal-ul')
    for (let liName of liNames) {
        const li = document.createElement('li')
        li.classList.add('horizontal-ul-li')
        li.id = `${liName}`
        const a = document.createElement('a')
        a.href = '#'
        a.textContent = `${liName}`
        li.append(a)
        ul.append(li)
    }
    return ul
}
export { createHorizontalNavBar }
