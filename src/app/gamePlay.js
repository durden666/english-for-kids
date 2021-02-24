import { MAIN_PAGE_ORDER, STATE_PAGE_ORDER } from './constant'
import cards from '../data/cards';
import winStar from '../assets/img/star-win.svg';
import loseStar from '../assets/img/star-lose.svg';
import correct from '../assets/audio/correct.mp3';
import error from '../assets/audio/error.mp3';
import success from '../assets/img/success.jpg';
import failure from '../assets/img/failure.jpg';
import successSound from '../assets/audio/success.mp3';
import failureSound from '../assets/audio/failure.mp3';
import activeBurgerMenu from './burger'
import createMainContent from './homePage';

const menuList = document.querySelector('.menu-ul');
const container = document.querySelector('.container');
const raiting = document.querySelector('.raiting');
const gameModeSwitch = document.querySelector("#checkbox");
const startGame = document.querySelector(".start-button");

let currentCardObject = [];
let currentList;
let errors = 0;

function mainPageToGameMode () {
  const activePageOrder = menuList.querySelector(".active-menu").dataset.order; 
  const rotate = document.querySelectorAll('.rotate-icon');
  const scaleImage = document.querySelectorAll('.image-scale');
  const wordsToGame = document.querySelectorAll('.card__info');
  const nameTrainMode = document.querySelector(".train");
  const namePlayMode = document.querySelector(".play");

  if (gameModeSwitch.checked) {
    wordsToGame.forEach((item) => {
      item.classList.add('none');
    });
    
    scaleImage.forEach((item) => {
      item.classList.add('image-active');
    });

    rotate.forEach((item) => {
      item.classList.add('none');
    });
   
    if (activePageOrder === MAIN_PAGE_ORDER) {
      startGame.classList.remove('show');
    } else {
      startGame.classList.add('show');
    }

    if (activePageOrder === STATE_PAGE_ORDER) {
      startGame.classList.remove('show');
    }

    document.body.classList.add('body-play');
    namePlayMode.classList.remove('none');
    nameTrainMode.classList.add('none');
  }

  else {
    wordsToGame.forEach((item) => {
      item.classList.remove('none');
    });
   
    scaleImage.forEach((item) => {
      item.classList.remove('image-active');
    });

    rotate.forEach((item) => {
      item.classList.remove('none');
    });
      
    document.body.classList.remove('body-play');
    namePlayMode.classList.add('none');
    nameTrainMode.classList.remove('none');
    startGame.classList.remove('show');
  }
}

function soundToGameMode(url) {
  const mp3 = new Audio(url);
  mp3.play();
}


function counterErorrs () {
  errors += 1;
}	

function resetGame () {
  container.innerHTML = '';

  if (gameModeSwitch.checked) {
    gameModeSwitch.checked = false;
    startGame.classList.remove('show');
  } 
  startGame.classList.remove('repeat');
  activeBurgerMenu(MAIN_PAGE_ORDER); 
  createMainContent();
}

function checkWord(e) {
  const card = e.target.closest('.card'); 
  const {word} = currentList;
  const checkStarLose = document.querySelectorAll('.star-lose');

  if (card.dataset.word === word) {
    raiting.insertAdjacentHTML('beforeEnd', `
      <img src="${winStar}" class="star-win">
    `);

    soundToGameMode(correct);
    card.classList.add('blur');

    if (currentCardObject.length === 0) {
      if (checkStarLose.length === 0) {
        raiting.innerHTML = '';
        container.innerHTML = '';
        container.insertAdjacentHTML('beforeEnd', `
        <div class="success-content">
          <h2 class="success__title">
            Вы не сделали ошибок!
          </h2> 
          <div class="success__image">
            <img src="${success}">
          </div>
        </div>`
        );
        soundToGameMode(successSound);

        setTimeout(function () {
          resetGame();
        }, 3000);

      } else {
        errors += 1;
        raiting.innerHTML = '';
        container.innerHTML = '';
        container.insertAdjacentHTML('beforeEnd', `
        <div class="failure-content">
          <h2 class="failure__title">
            Вы сделали ${errors - 1} ошибок!
          </h2>
          <div class="failure__image">
            <img src="${failure}">
          </div>
        </div>`
        );
        soundToGameMode(failureSound);

        setTimeout(function () {
          resetGame();
        }, 3000);
      }     
    }
    currentList = currentCardObject.pop();
    soundToGameMode(currentList.audioSrc);
  }
  else {
    counterErorrs()

    if ([...card.classList].includes('blur')) {
      return  
    } 
    raiting.insertAdjacentHTML('beforeEnd', `
      <img src="${loseStar}" class="star-lose">
    `);
    soundToGameMode(error);
  }
}

function gameStart () {
  const currentCategory = cards[menuList.querySelector(".active-menu").dataset.order];

  currentCardObject = currentCategory.slice().sort(() => Math.random() - 0.5);

  currentList = currentCardObject.pop();
  soundToGameMode(currentList.audioSrc);

  container.onclick = (e) => {
    const card = e.target.closest('.card');
    if (!card) return;
    checkWord(e);
  };
  startGame.classList.toggle('repeat');
}

startGame.onclick = () => {
  startGame.innerHTML = 'repeat';
  if (startGame.classList.contains('repeat')) {
    soundToGameMode(currentList.audioSrc);
  } else {
    gameStart()
  }
}

export {
  mainPageToGameMode,
  soundToGameMode,
  gameStart
}