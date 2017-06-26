function changeHeading()
{
    const heading = document.querySelector('h1')
    heading.textContext = 'Ye Olde Person Stats'
}

const btn = document.querySelector('button')
btn.addEventListener('click', changeHeading())
