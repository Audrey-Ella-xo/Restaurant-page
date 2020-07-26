import './style.css'

function comp() {
    const element = document.createElement('h2')

    element.innerText = `Hello World`

    return element;
}

document.body.appendChild(comp());

