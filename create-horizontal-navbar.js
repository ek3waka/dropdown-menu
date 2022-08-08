function createHorizontalNavBar(...liNames) {
    const ul = document.createElement('ul')
    ul.classList.add('horizontal-ul')
    for (let liName of liNames) {
        const li = document.createElement('li')
        li.classList.add('horizontal-ul-li')
        li.textContent = `${liName}`
        //еще один модуль сделать, мб вид спорта сделать объектом с массивом ссылок: матчи, новости и вся хуйня
        ul.append(li)
    }
    return ul
}

export { createHorizontalNavBar }
