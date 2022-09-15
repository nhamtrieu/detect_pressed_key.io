let eKey = document.querySelector('.card.key p:last-child');
let eLocation = document.querySelector('.card.location p:last-child');
let eWhich = document.querySelector('.card.which p:last-child');
let eName = document.querySelector('.card.name p:last-child');
let alertEml = document.querySelector('.alert');
let boxElm = document.querySelector('.box');
let result = document.querySelector('.result');

document.addEventListener('keydown', e => {
    result.innerHTML = e.code
    eKey.innerText = e.key;
    eLocation.innerText = e.location;
    eWhich.innerText = e.which;
    eName.innerText = e.code;

    alertEml.classList.add('hide');
    boxElm.classList.remove('hide')
})