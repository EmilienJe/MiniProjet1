'use strict';   // Mode strict du JavaScript

class Carousel {
    constructor() {

        this.buttonRandom = document.getElementById("random");
        this.buttonPlayPause = document.getElementById("play-pause");
        this.navPrev = document.getElementById('prev');
        this.navNext = document.getElementById("next");
        this.slides = document.querySelectorAll(".slider-figure");
        this.navBar = document.querySelector('.slider-navigation');

        this.indexDisplay = 0;
        this.player = false;
        this.interval;

        // ==============================================================================
        // =============================== MES EVENEMENTS ===============================
        // ==============================================================================

        //---------------------------------- SOURIS -------------------------------------

        this.navNext.addEventListener('click', () => {
            this.showImage(this.indexDisplay + 1);
        });
        this.navPrev.addEventListener('click', () => {
            this.showImage(this.indexDisplay - 1);
        });

        this.buttonPlayPause.addEventListener('click', () => {
            this.playPause();
        });
        this.buttonRandom.addEventListener('click', () => {
            this.showRandom();
        });

        //---------------------------------- CLAVIER -------------------------------------

        document.onkeydown = (event) => {
            let key = event.code;
            switch (key) {
                case 'Space':
                    this.playPause();
                    break;
                case 'ArrowLeft':
                    this.showImage(this.indexDisplay + -1);
                    break;
                case 'ArrowRight':
                    this.showImage(this.indexDisplay + 1);
                    break;
                case 'Enter':
                    this.showRandom();
                    break;
            }
        };

        // ==============================================================================
        // =============================== LISTE DE PUCES ===============================
        // ==============================================================================

        //----------------------- CREATION DE LA LISTE DE PUCE --------------------------

        let listPuces = document.createElement('ul');
        listPuces.classList.add("slider-dots");
        for (let i = 0; i < this.slides.length; i++) {
            let puce = document.createElement('li');
            puce.setAttribute('data-index', i);
            puce.addEventListener('click', () => {
                this.showImage(i);
            });
            listPuces.appendChild(puce);
        }

        this.navBar.appendChild(listPuces);
    }

    // ==============================================================================
    // ================================ MES METHODES ================================
    // ==============================================================================

    //---------------------------------- IMAGE --------------------------------------

    showImage(index) {
        this.slides[this.indexDisplay].classList.toggle('active');
        this.indexDisplay = index;
        if (this.indexDisplay >= this.slides.length) {
            this.indexDisplay = 0;
        } else if (this.indexDisplay < 0) {
            this.indexDisplay = this.slides.length - 1;
        }
        this.slides[this.indexDisplay].classList.toggle('active');
        this.updatePuces(this.indexDisplay);
    }

    //---------------------------------- PLAY PAUSE ---------------------------------

    playPause() {
        if (this.player) {
            clearInterval(this.interval);
            this.player = false;
        } else {
            this.interval = setInterval(() => {
                this.showImage(this.indexDisplay + 1);
            }, 1000);
            this.player = true;
        }
    }

    //---------------------------------- RANDOM --------------------------------------

    showRandom() {
        this.slides[this.indexDisplay].classList.toggle('active');
        let randomIndex = Math.floor(Math.random() * this.slides.length);
        this.slides[this.indexDisplay].classList.toggle('active');
        this.showImage(randomIndex);
    }

    //--------------------------------- INDEXPUCES -----------------------------------

    updatePuces(index) {
        document.querySelectorAll('.slider-dots li').forEach((puce) => {
            if (puce.getAttribute('data-index') == index) {
                puce.classList.add('selected');
            } else {
                puce.classList.remove('selected');
            }
        });
    }
}




const carousel = new Carousel();


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


