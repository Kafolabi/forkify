import View from './view';

class ShoppingListView extends View {
  // Use direct properties instead of getters
  _parentElement = document.querySelector('.upload2');
  _overlay = document.querySelectorAll('.overlay')[1];
  _window = document.querySelectorAll('.add-recipe-window')[1];
  _btnOpen = document.querySelector('.search__btn-menu');
  _btnClose = document.querySelectorAll('.btn--close-modal')[1]; // Get the close button for this modal
  _iconClose = document.querySelector('.upload2');

  _errorMessage =
    'No ingredients found for this recipe. Please try another one!';
  _message = '';

  constructor() {
    super();
    this._addHandlerShowWindow();
    this._addHandlerHideWindow();
  }

  toggleWindow() {
    console.log('window toggled');
    this._overlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
  }

  _addHandlerShowWindow() {
    if (!this._btnOpen) {
      console.warn('Show button not found');
      return;
    }

    this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
    console.log('Handler attached to open button');
  }

  addHandlerDeleteIngredient(handler) {
    const parent = this._iconClose;
    parent.addEventListener('click', function (e) {
      const ingredient = e.target.closest('.recipe__ingredient');
      handler(ingredient);

      const btn = e.target.closest('.recipe__icon');
      if (!btn) return;
      console.log('Shopping list deleted');
    });
  }

  addHandlerDeleteShoppingList(handler) {
    const parent = this._iconClose;
    parent.addEventListener('click', function (e) {
      const btn = e.target.closest('.fa-trash-can');
      if (!btn) return;
      handler();
      console.log('Shopping list deleted');
    });
  }

  _addHandlerHideWindow() {
    if (!this._overlay) {
      console.warn('Overlay not found for closing');
      return;
    }

    this._overlay.addEventListener('click', this.toggleWindow.bind(this));
    console.log('Handler attached to overlay');

    // Add event listener to close button
    if (this._btnClose) {
      this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
      console.log('Handler attached to close button');
    } else {
      console.warn('Close button not found');
    }
  }

  addHandlerRender(handler) {
    // Run on page load
    window.addEventListener('load', handler);

    // Run when List button is clicked
    if (this._btnOpen) {
      this._btnOpen.addEventListener('click', handler);
    }
  }

  renderShoppingList(list) {
    const parent = this._parentElement;
    if (!parent) {
      console.warn('Parent element not found');
      return;
    }

    const markup =
      `<h1>SHOPPING LIST</h1>` +
      list
        .map(item => {
          const content =
            typeof item === 'object' ? item.textContent || '' : item;
          return `
        <li class="recipe__ingredient" style="font-size: 1.6rem !important; padding-top: 2rem !important">
          <i class="fa-solid fa-check recipe__icon" ></i>
          ${content.trim()}
        </li>`;
        })
        .join('') +
      `<i class="recipe__icon fa-solid fa-trash-can" style="margin-top: 5rem"></i>`;

    parent.innerHTML = markup;
  }

  _generateMarkup() {}
}

export default new ShoppingListView();
