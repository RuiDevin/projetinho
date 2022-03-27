'use strict';

const images = [
    { 'id': '1', 'url':'./img/ps5.jpg' },
    { 'id': '2', 'url':'./img/controle.jpg' },
    { 'id': '3', 'url':'./img/acessorios.jpg' },
]

const container = document.querySelector('#container-items')

const loadImages = (images, container) => {
    images.forEach (image => {
        container.innerHTML += `
        <div class='item'>
        <img scr= '${image.url}'> 
        </div>
        `
    })

}

loadImages( images, container );