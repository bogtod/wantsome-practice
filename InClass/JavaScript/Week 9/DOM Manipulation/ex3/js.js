const list = document.querySelector('ul')

const newItem = document.createElement('li')

newItem.textContent = 'Python'
list.appendChild(newItem)

const anotherNewItem = document.createElement('li')
anotherNewItem.textContent = '.Net'
list.insertBefore(anotherNewItem, list.firstElementChild)

const newerItem = document.createElement('li')
newerItem.textContent = 'More JavaScript'
list.replaceChild(newerItem, list.children[0])

list.removeChild(list.lastElementChild)





