import icons from '/icons.svg';
import View from './view';

class CardView {
  constructor() {
    this.cardsfirstRow = document.querySelector('#firstCardRow');
    this.cardssecondRow = document.querySelector('#secondCardRow');
    console.log(this.cardssecondRow);
    this.cards = [];
  }

  _generateMarkup(cards = []) {
    const firstRowCards = cards.slice(0, 2);
    const secondRowCards = cards.slice(2, 4);
    console.log(secondRowCards);

    this.cardsfirstRow.innerHTML = '';
    this.cardssecondRow.innerHTML = '';

    const firstMarkup = firstRowCards
      .map(card => {
        return `<div class="card">
              <div>
                <svg>
                  <use href="${icons}#${card.icon}"></use>
                </svg>
              </div>
              <h2 class="card__header">${card.title}</h2>
              <p> ${card.description}
              </p>
            </div>
            `;
      })
      .join('');
    const secondMarkup = secondRowCards
      .map(card => {
        return `<div class="card">
              <div>
                <svg>
                  <use href="/public/icons.svg#${card.icon}"></use>
                </svg>
              </div>
              <h2 class="card__header">${card.title}</h2>
              <p> ${card.description}
              </p>
            </div>
            `;
      })
      .join('');

    this.cardsfirstRow.innerHTML = firstMarkup;
    this.cardssecondRow.innerHTML = secondMarkup;

    return this.cardsfirstRow.innerHTML + this.cardssecondRow.innerHTML;
  }

  clearCards() {
    this.cardsContainer.innerHTML = '';
  }
}

export default new CardView();
