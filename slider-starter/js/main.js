// 'use strict';   // Mode strict du JavaScript

// /*************************************************************************************************/
// /* ****************************************** DONNEES ****************************************** */
// /*************************************************************************************************/


const buttonRandom = document.getElementById("random");
const buttonPlayPause = document.getElementById("play-pause");
const navPrev = document.getElementById('prev');
const navNext = document.getElementById("next");
const slides = document.querySelectorAll(".slider-figure");
const navBar = document.querySelector('.slider-navigation');

let indexDisplay = 0;
let player = false;
let interval;


// /*************************************************************************************************/
// /* ***************************************** FONCTIONS ***************************************** */
// /*************************************************************************************************/


// =========================================== FONCTION QUI PERMET L'AFFICHAGE ===================================

function showImage(index) {
    slides[indexDisplay].classList.toggle('active');
    indexDisplay = index;
    if (indexDisplay >= slides.length) {
        indexDisplay = 0;
    } else if (indexDisplay < 0) {
        indexDisplay = slides.length - 1;
    }
    slides[indexDisplay].classList.toggle('active');
}
// =========================================== FONCTION POUR FAIRE DEFILER MON CARROUSEL ==============================
function playPause() {
    if (player) {
        clearInterval(interval);
        player = false;
    } else {
        interval = setInterval(function () {
            showImage(indexDisplay + 1);
        }, 1000);
        player = true;
    }
}
// =========================================== FONCTION POUR AVOIR UNE IMAGE ALEATOIRE DU CARROUSEL ==============================
function showRandom() {
    slides[indexDisplay].classList.toggle('active');
    indexDisplay = Math.floor(Math.random() * slides.length);
    slides[indexDisplay].classList.toggle('active');
}

// /*************************************************************************************************/
// /* ************************************** CODE PRINCIPAL *************************************** */
// /*************************************************************************************************/


// // =============================== EVENEMENT AVEC LA SOURIS ===============================

navNext.addEventListener('click', function () {
    showImage(indexDisplay + 1);
});
navPrev.addEventListener('click', function () {
    showImage(indexDisplay - 1);
});

buttonPlayPause.addEventListener('click', playPause);
buttonRandom.addEventListener('click', showRandom);


// // =============================== EVENEMENT SUR LE CLAVIER ===============================

document.onkeydown = function (event) {
    let key = event.code;
    switch (key) {
        case 'Space':
            playPause();
            break;
        case 'ArrowLeft':
            showImage(indexDisplay + 1);
            break;
        case 'ArrowRight':
            showImage(indexDisplay + -1);
            break;
        case 'Enter':
            showRandom();
            break;
    }
};


// // =============================== CREATION DE LA LISTE ET DES PUCES  ===============================

let listPuces = document.createElement('ul');
listPuces.classList.add("slider-dots");
for (let i = 0; i < slides.length; i++) {
    let puce = document.createElement('li');
    puce.addEventListener('click', function () {
        showImage(i);
    });
    listPuces.appendChild(puce);
}

navBar.appendChild(listPuces);

// // =============================== EVENEMENT SUR LA LISTE DE PUCE  ===============================

listPuces.addEventListener('click', function (e) {
    // merci OpenAi
    if (e.target.tagName === 'LI') {
        let index = Array.prototype.indexOf.call(listPuces.children, e.target);
        e.target.classList.add("selected");
        console.log(e.target);
        for (let i = 0; i < listPuces.children.length; i++) {
            if (i !== index) {
                listPuces.children[i].classList.remove("selected");
            }
        }
    }
});


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










