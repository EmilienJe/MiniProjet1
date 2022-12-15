'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/

const buttonRandom = document.getElementById("random");
const buttonPlayPause = document.getElementById("play-pause");
const navPrev = document.getElementById('prev');
const navNext = document.getElementById("next");
const slide2 = document.querySelectorAll(".slider-figure");
const navBar = document.querySelector('.slider-navigation');

console.log(navBar);


let sliderStart = 0;
let player = false;
let interval;




/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/

// -------------------------FONCTION POUR PASSER A L'IMAGE SUIVANTE---------------------
function nextImg() {
    let prevslider = slide2[sliderStart];
    prevslider.classList.toggle('active');
    sliderStart++;
    if (sliderStart >= slide2.length) {
        sliderStart = 0;
    }
    let nextslider = slide2[sliderStart];
    nextslider.classList.toggle('active');
};
// -------------------------FONCTION POUR PASSER A L'IMAGE PRECEDENTE---------------------
function prevImg() {
    let prevslider = slide2[sliderStart];
    prevslider.classList.toggle('active');
    sliderStart--;
    if (sliderStart < 0) {
        sliderStart = slide2.length - 1;
    }
    let nextslider = slide2[sliderStart];
    nextslider.classList.toggle('active');
};

// -------------------------FONCTION POUR FAIRE DEFILER MON CARROUSEL---------------------
function playPause() {
    if (player) {
        clearInterval(interval);
        player = false;
    } else {
        interval = setInterval(nextImg, 1000);
        player = true;
    }
}
// -------------------------FONCTION POUR AVOIR UNE IMAGE ALEATOIRE DU CARROUSEL---------------------
function randomImg() {
    let prevslider = slide2[sliderStart];
    prevslider.classList.toggle('active');
    let randomSlider = Math.floor(Math.random() * slide2.length);
    sliderStart = randomSlider;
    let randomImg = slide2[randomSlider];
    randomImg.classList.toggle('active');
}


/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/


// =============================== EVENEMENT AVEC LA SOURIS ===============================
navNext.addEventListener('click', nextImg);
navPrev.addEventListener('click', prevImg);
buttonPlayPause.addEventListener('click', playPause);
buttonRandom.addEventListener('click', randomImg);

// =============================== EVENEMENT SUR LE CLAVIER ===============================

document.onkeydown = function (event) {
    let key = event.code;
    switch (key) {
        case 'Space':
            playPause();
            break;
        case 'ArrowLeft':
            prevImg();
            break;
        case 'ArrowRight':
            nextImg();
            break;
        case 'Enter':
            randomImg();
            break;

    }
};

// =============================== CREATION DE LA LISTE ET DES PUCES  ===============================
let list = document.createElement("ul");
list.classList.add("slider-dots");
for (let i = 0; i < slide2.length; i++) {
    let puce = document.createElement("li");
    // puce.addEventListener("click", function () {
    // });
    list.appendChild(puce);
}
navBar.appendChild(list);





/**
 * Code principal : code JavaScript exécuté dès le chargement de la page
 *
 * Pour s'assurer que le DOM est chargé (puisqu'on va le manipuler), on écoute l'événement 'DOMContentLoaded'
 * sur le document entier. Cet événement est lancé lorsque le navigateur a terminé de constuire le DOM.
 *
 * https://developer.mozilla.org/fr/docs/Web/Events/DOMContentLoaded
 *
 * On utilise en général comme fonction gestionnaire d'événement associée une fonction anonyme car
 * on ne l'appellera jamais ailleurs nous-même.
*/

// <== {
//     "key": "ArrowLeft",
//     "keyCode": 37,
//     "which": 37,
//     "code": "ArrowLeft",
//     "location": 0,
//     "altKey": false,
//     "ctrlKey": false,
//     "metaKey": false,
//     "shiftKey": false,
//     "repeat": false
//    }

// ==>

// {
//     "key": "ArrowRight",
//     "keyCode": 39,
//     "which": 39,
//     "code": "ArrowRight",
//     "location": 0,
//     "altKey": false,
//     "ctrlKey": false,
//     "metaKey": false,
//     "shiftKey": false,
//     "repeat": false
//    }

// [-]
// {
//     "key": " ",
//     "keyCode": 32,
//     "which": 32,
//     "code": "Space",
//     "location": 0,
//     "altKey": false,
//     "ctrlKey": false,
//     "metaKey": false,
//     "shiftKey": false,
//     "repeat": false
//    }