function changeHeading(ev, er)
{
    ev.preventDefault()
    const f = ev.target
    const name = f.personName.value
    const some = f.something.value
    const color = f.color.value
    //debugger
    const div = document.querySelector('div#stats')
    const paraDiv = document.querySelector('#div-para')
    //can be done with document.querySelector(#stats p or #stats > p)
    //div.textContent = name
    paraDiv.textContent = `${name} ${some}`
    //debugger
    paraDiv.style.color = color
}
const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', changeHeading)
