function changeHeading(ev)
{
    //debugger
    ev.target.textContent = 'Clickity click'
}

const btn = document.querySelector('button')
btn.addEventListener('click', changeHeading)

const p = document.querySelector('p#instructions')
p.addEventListener('click', changeHeading)
