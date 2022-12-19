// /*************************************************************************************************/
// /* ****************************************** DONNEES ****************************************** */
// /*************************************************************************************************/


// const buttonRandom = document.getElementById("random");
// const buttonPlayPause = document.getElementById("play-pause");
// const navPrev = document.getElementById('prev');
// const navNext = document.getElementById("next");
// const slides = document.querySelectorAll(".slider-figure");
// const navBar = document.querySelector('.slider-navigation');

// let indexDisplay = 0;
// let player = false;
// let interval;


// // /*************************************************************************************************/
// // /* ***************************************** FONCTIONS ***************************************** */
// // /*************************************************************************************************/


// // =========================================== FONCTION QUI PERMET L'AFFICHAGE ===================================

// function showImage(index) {
//     slides[indexDisplay].classList.toggle('active');
//     indexDisplay = index;
//     if (indexDisplay >= slides.length) {
//         indexDisplay = 0;
//     } else if (indexDisplay < 0) {
//         indexDisplay = slides.length - 1;
//     }
//     slides[indexDisplay].classList.toggle('active');
//     updatePuces(indexDisplay);
// }


// // =========================================== FONCTION POUR FAIRE DEFILER MON CARROUSEL ==============================
// function playPause() {
//     if (player) {
//         clearInterval(interval);
//         player = false;
//     } else {
//         interval = setInterval(function () {
//             showImage(indexDisplay + 1);
//         }, 1000);
//         player = true;
//     }
// }
// // =========================================== FONCTION POUR AVOIR UNE IMAGE ALEATOIRE DU CARROUSEL ==============================
// function showRandom() {
//     slides[indexDisplay].classList.toggle('active');
//     let randomIndex = Math.floor(Math.random() * slides.length);
//     slides[indexDisplay].classList.toggle('active');
//     showImage(randomIndex);

// }

// // =========================================== FONCTION POUR INDEXER MES PUCES ==============================
// function updatePuces(index) {
//     document.querySelectorAll('.slider-dots li').forEach(function (puce) {
//         if (puce.getAttribute('data-index') == index) {
//             puce.classList.add('selected');
//         } else {
//             puce.classList.remove('selected');
//         }
//     });
// }
// // /*************************************************************************************************/
// // /* ************************************** CODE PRINCIPAL *************************************** */
// // /*************************************************************************************************/


// // // =============================== EVENEMENT AVEC LA SOURIS ===============================

// navNext.addEventListener('click', function () {
//     showImage(indexDisplay + 1);
// });
// navPrev.addEventListener('click', function () {
//     showImage(indexDisplay - 1);
// });

// buttonPlayPause.addEventListener('click', playPause);
// buttonRandom.addEventListener('click', showRandom);


// // // =============================== EVENEMENT SUR LE CLAVIER ===============================

// document.onkeydown = function (event) {
//     let key = event.code;
//     switch (key) {
//         case 'Space':
//             playPause();
//             break;
//         case 'ArrowLeft':
//             showImage(indexDisplay + -1);
//             break;
//         case 'ArrowRight':
//             showImage(indexDisplay + 1);
//             break;
//         case 'Enter':
//             showRandom();
//             break;
//     }
// };


// // // =============================== CREATION DE LA LISTE ET DES PUCES  ===============================

// let listPuces = document.createElement('ul');
// listPuces.classList.add("slider-dots");
// for (let i = 0; i < slides.length; i++) {
//     let puce = document.createElement('li');
//     puce.setAttribute('data-index', i);
//     puce.addEventListener('click', function () {
//         showImage(i);
//     });
//     listPuces.appendChild(puce);
// }

// navBar.appendChild(listPuces);

