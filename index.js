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

function choose()
{
    const heyyey = "https://www.youtube.com/embed/ZZ5LpwO-An4?autoplay=1"
    const cooking = "https://www.youtube.com/embed/K5tVbVu9Mkg?autoplay=1"
    const shootingStars = "https://www.youtube.com/embed/feA64wXhbjo?autoplay=1"
    const macintosh = "https://www.youtube.com/embed/cU8HrO7XuiE?autoplay=1"
    const reposted = "https://www.youtube.com/embed/4feUSTS21-8?autoplay=1"
    const rickRoll = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
    const gandalf = "https://www.youtube.com/embed/Sagg08DrO5U?autoplay=1"
    const september = "https://www.youtube.com/embed/Gs069dndIYk?autoplay=1"
    const running = "https://www.youtube.com/embed/BJ0xBCwkg3E?autoplay=1"
    const random = Math.random() * 100

    if (random >= 0 && random < 9)
        return heyyey
    else if (random >= 10 && random < 20)
        return kazoo
    else if (random >= 20 && random < 30)
        return cooking
    else if (random >= 30 && random < 40)
        return shootingStars
    else if (random >= 40 && random < 50)
        return macintosh
    else if (random >= 50 && random < 60)
        return reposted
    else if (random >= 60 && random < 70)
        return rickRoll
    else if (random >= 70 && random < 80)
        return gandalf
    else if (random >= 80 & random < 90)
        return september
    else
        return running
}

function doStuff()
{
    const somethingCool = choose()
    const body = document.querySelector('body')
    const thatDiv = document.querySelector('#some')
    const thatFrame = document.querySelector('#something')
    thatFrame.src = somethingCool

    if (thatDiv.style.display === 'block')
        thatDiv.style.display = 'none'
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

    doStuff()
}
document.querySelector('#some').style.display = 'block'
const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', handleSubmit)
