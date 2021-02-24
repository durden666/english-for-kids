import "../css/style.css";
import activeBurgerMenu from './burger';
import cards from '../data/cards';
import { MAIN_PAGE_ORDER, STATE_PAGE_ORDER } from './constant';
import createMainContent from './homePage';
import { mainPageToGameMode } from './gamePlay';
import state from './statistic';

const container = document.querySelector('.container');
const raiting = document.querySelector('.raiting');
const gameModeSwitch = document.querySelector("#checkbox");
const startGame = document.querySelector(".start-button");
const menuList = document.querySelector('.menu-ul');

const createPageContent = (pageNumber) => {
  let title; let image;
  if (gameModeSwitch.checked) {
    title = 'none';
    image = 'image-active';
  } else {
    title = ''
    image = '';
  }
  container.innerHTML = cards[pageNumber].map(item =>
    `<div class = "card__container">
      <div class="card" data-audiosrc=${item.audioSrc} data-word=${item.word}>
        <div class="card__face">
          <div class="card__face-image">
            <img class="image-scale ${image}" src=${item.image}>
          </div>
          <div class="rotate-icon"></div>
          <div class="card__info ${title}">
            <div class="info__word">${item.word}</div>
          </div>
        </div>
        <div class="card__back">
          <div class="card__back-image"></div>
          <div class="card__info">
            <div class="info__word">${item.translation}</div>
          </div>
        </div> 
      </div>
    </div>`).join('');
}

function rotateCard(e) {
  const card = e.target.closest('.card');

  if(!card) return

  if (e.target.closest('.rotate-icon')) {
    if (gameModeSwitch.checked) {
      card.classList.remove('translate');
    } else {
      card.classList.add('translate');
      card.onmouseleave = () => card.classList.remove('translate');
    }
  }
}

function playSound(e) {
  const card = e.target.closest('.card');
  
  if (!card) return;
  
  const audio = new Audio(card.dataset.audiosrc);

  if (gameModeSwitch.checked) {
    return
  }
  
  audio.play();
} 

function showButton (numberPage) {
  const rotate = document.querySelectorAll('.rotate-icon'); 

  if (gameModeSwitch.checked) {
    if (numberPage === MAIN_PAGE_ORDER) {
      startGame.classList.remove('show');
    }
    else {
      startGame.classList.add('show');
      startGame.innerHTML = 'Start Game';
      rotate.forEach((item) => {
        item.classList.add('none');
      });
    }
  }
}

function pageNavigation(e) {
  const numberPage = e.target.closest('[data-order]');

  if (e.target.dataset.order === STATE_PAGE_ORDER) {
    container.innerHTML = '';
    startGame.classList.remove('show');
    activeBurgerMenu(STATE_PAGE_ORDER);
    state();
  }
  if (e.target.dataset.order === MAIN_PAGE_ORDER) {
    container.innerHTML = '';
    createMainContent();
    activeBurgerMenu(MAIN_PAGE_ORDER);
  }
  else if (numberPage) {
    createPageContent(numberPage.dataset.order);
    activeBurgerMenu(numberPage.dataset.order);
    showButton(numberPage)
  }
}

menuList.addEventListener('click', (e) => {
  startGame.innerHTML = 'Start Game';
  startGame.classList.remove('repeat');
  raiting.innerHTML = '';
  pageNavigation(e);
  showButton(e);
  mainPageToGameMode();
});

function gameToTrainMode () {
  container.addEventListener('click', (e) => {
    pageNavigation(e);
    rotateCard(e);
    playSound(e);
  });
}

gameModeSwitch.addEventListener('click', () => { 
  startGame.innerHTML = 'Start Game';
  raiting.innerHTML = '';
  mainPageToGameMode();
});

activeBurgerMenu(MAIN_PAGE_ORDER); 
createMainContent();
gameToTrainMode();