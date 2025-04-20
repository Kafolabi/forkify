import View from './view';

class ShoppingListView extends View {
  #handlerAttached = false;

  get _parentElement() {
    return document.querySelector('.upload2');
  }

  get _overlay() {
    return document.querySelectorAll('.overlay')[1];
  }

  get _window() {
    return document.querySelectorAll('.add-recipe-window')[1];
  }

  get _btnOpen() {
    return document.querySelector('.search__btn-menu');
  }

  _errorMessage =
    'No ingredients found for this recipe. Please try another one!';
  _message = '';

  toggleWindow() {
    const overlay = this._overlay;
    const windowEl = this._window;

    if (!overlay || !windowEl) {
      console.warn('toggleWindow failed: overlay or window not found');
      return;
    }

    overlay.classList.toggle('hidden');
    windowEl.classList.toggle('hidden');
  }

  _addHandlerShowWindow() {
    if (this.#handlerAttached) return;

    const btn = this._btnOpen;

    if (!btn) {
      console.warn('Show button not found');
      return;
    }

    btn.addEventListener('click', this.toggleWindow.bind(this));
    this.#handlerAttached = true;
    console.log('Handler attached to open button');
  }

  _addHandlerHideWindow() {
    const overlay = this._overlay;

    if (!overlay) {
      console.warn('Overlay not found for closing');
      return;
    }

    overlay.addEventListener('click', this.toggleWindow.bind(this));
  }

  // renderShoppingList(list) {  
  //   const parent = this._parentElement;
  //   if (!parent) {
  //     console.warn('Parent element not found');
  //     return;
  //   }

  //   const markup =
  //     `<h1>SHOPPING LIST</h1>` +
  //     list
  //       .map(
  //         item => `
  //     <li class="recipe__ingredient" style="font-size: 1.6rem !important; padding-top: 2.5rem !important">
  //       <i class="fa-solid fa-check recipe__icon"></i>
  //         ${item.textContent}
  //     </li>`
  //       )
  //       .join('');
  //   parent.innerHTML = markup;

  //   // Now the DOM is ready, safely attach handlers
  //   this.#handlerAttached = false; // reset just in case
  //   this._addHandlerShowWindow();
  //   this._addHandlerHideWindow();
  // }

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
          // If it's an object, try to access `textContent`, else treat as string
          const content = typeof item === 'object' ? item.textContent || '' : item;
          return `
        <li class="recipe__ingredient" style="font-size: 1.6rem !important; padding-top: 2.5rem !important">
          <i class="fa-solid fa-check recipe__icon"></i>
          ${content.trim()}
        </li>`;
        })
        .join('');
  
    parent.innerHTML = markup;
  
    // Reset and reattach handlers
    this.#handlerAttached = false;
    this._addHandlerShowWindow();
    this._addHandlerHideWindow();
  }  

  _generateMarkup() {}
}

export default new ShoppingListView();
