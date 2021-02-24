import cards from '../data/cards';

const container = document.querySelector('.container');

function createMainContent() {
  for (let i = 0; i < cards[0].length; i += 1) {
    const categoryIndex = cards[0][i];
    const titleList = cards[0][i];
    const imageIndex = cards[1][i];

    const cardsList = document.createElement('div');
          cardsList.className = 'category';
          cardsList.id = categoryIndex;
          container.appendChild(cardsList);

    const link = document.createElement('a');
          link.setAttribute('href', `#${categoryIndex}`);
          link.setAttribute('data-order', i + 2);
          cardsList.appendChild(link);

    const cardImg = document.createElement('div');
          cardImg.className = 'card__image';
          link.appendChild(cardImg);
  
    const img = document.createElement('img');
          img.setAttribute('src', `assets/img/${imageIndex}`);
          cardImg.appendChild(img);

    const title = document.createElement('div');
          title.className = 'card__title';
          title.textContent = titleList;
          link.appendChild(title);            
  }
}

export default createMainContent