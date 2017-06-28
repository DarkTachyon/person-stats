function renderColor(favColor)
{
    const tempDiv = document.createElement('div')
    tempDiv.style.backgroundColor = favColor
    tempDiv.style.width = '6rem'
    tempDiv.style.height = '3rem'

    return tempDiv
}

function renderListItem(listText)
{
    const tempItem = document.createElement('li')
    tempItem.textContent = listText

    return tempItem
}

function renderList(name, age, color)
{
    const tempList = document.createElement('ul')

    const nameItem = renderListItem(`Name: ${name}`)
    tempList.appendChild(nameItem)

    const ageItem = renderListItem(`Age: ${age}`)
    tempList.appendChild(ageItem)

    const colorItem = renderListItem(`Color: ${color}`)

    const colorDiv = renderColor(color)
    colorItem.appendChild(colorDiv)

    tempList.appendChild(colorItem)

    return tempList
}

function handleSubmit(ev)
{
    ev.preventDefault()
    const f = ev.target
    const name = f.personName.value
    const age = f.personAge.value
    const color = f.color.value

    const div = document.querySelector('div#stats')

    const list = renderList(name, age, color)

    div.appendChild(list)
}
const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', handleSubmit)
