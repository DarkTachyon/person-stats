function changeHeading(ev, er)
{
    ev.preventDefault()
    const f = ev.target
    const name = f.personName.value
    const some = f.something.value
    //debugger
    const div = document.querySelector('div#stats')
    const paraDiv = document.querySelector('#div-para')
    //div.textContent = name
    paraDiv.textContent = name + ' ' + some
    //debugger
    if (name === 'blue' || some === 'blue')
        paraDiv.style.color = 'blue'
}
const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', changeHeading)
