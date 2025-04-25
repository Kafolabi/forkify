import icons from 'url:/public/icons.svg';
import View from './view';

class CardView {
  constructor() {
    this.cardsRow = document.querySelector('#cardsRow');
    this.cards = [];
  }

  // This function is used to render the cards in the view
  _generateMarkup(cards = []) {
    this.cardsRow.innerHTML = '';

    const firstMarkup = cards
      .map(card => {
        return `<div class="card">
              <div>
               <i class="fas fa-${card.icon}"></i>

              </div>
              <h2 class="card__header">${card.title}</h2>
              <p> ${card.description}
              </p>
            </div>
            `;
      })
      .join('');

    this.cardsRow.innerHTML = firstMarkup;

    return this.cardsRow.innerHTML;
  }

  clearCards() {
    this.cardsRow.innerHTML = '';
  }
}

export default new CardView();
