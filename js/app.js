'use strict';

document.addEventListener('keydown', function(event) {
    switch(event.code) {
        case 'KeyA':
            animate(document.querySelectorAll('.key')[0]);
            return;
        
        case 'KeyS':
            animate(document.querySelectorAll('.key')[1]);
            return;
        
        case 'KeyD':
            animate(document.querySelectorAll('.key')[2]);
            return;

        case 'KeyF':
            animate(document.querySelectorAll('.key')[3]);
            return;

        case 'KeyG':
            animate(document.querySelectorAll('.key')[4]);
            return;

        case 'KeyH':
            animate(document.querySelectorAll('.key')[5]);
            return;

        case 'KeyJ':
            animate(document.querySelectorAll('.key')[6]);
            return;

        case 'KeyK':
            animate(document.querySelectorAll('.key')[7]);
            return;
    }
});

document.querySelector('.main').addEventListener('click', function(event) {
    let target = event.target.closest('.key');
    if (!target || !document.querySelector('.main').contains(target)) return;

    animate(target);
});

document.querySelector('.main').onmousedown = () => false;

let timerId;
function animate(elem) {
    // let sound = elem.lastElementChild.cloneNode();
    // sound.play();
    
    let sound = elem.lastElementChild;
    sound.currentTime = 0;
    sound.play();

    if (elem.classList.contains('animate')) {
        elem.classList.remove('animate');
        clearTimeout(timerId);
    }

    elem.classList.add('animate');
    timerId = setTimeout(() => elem.classList.remove('animate'), 70);
}