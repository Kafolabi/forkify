import * as model from './model.js';
import { MODAL_CLOSE_SEC } from './config.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';
import shoppingListView from './views/shoppingListView.js';
import ThemeToggle from './views/toggler.js';
import cardView from './views/cardView.js';
import { toggleSelector } from './views/toggler.js';

import 'core-js/stable';
import { async } from 'regenerator-runtime';

// https://forkify-api.herokuapp.com/v2
///////////////////////////////////////
// src/js/controller.js

const controlCards = function () {
  const cardData = [
    {
      icon: 'search',
      title: 'SEARCH OVER 1,000,000 RECIPES',
      description: `
                Bookmark them, add recipes to your weekly meal planner and
                select what ingredients you need to buy. They will be waiting
                for you in your shopping list!`,
    },
    // {
    //   icon: 'clock',
    //   title: 'TAILORED FOR AFRICANS',
    //   description: `Search for hundreds of Nigerian recipes ranging from the
    //             sumptuous egusi soup to the much acclaimed jollof rice. We have
    //             it all!`,
    // },
    {
      icon: 'edit',
      title: 'ADD YOUR FAVORITE RECIPES',
      description: `Give us an URL of your favorite recipe on the Internet, an URL
                of its image and some more details. We will keep your dearest
                recipes safe and handy!`,
    },
  ];

  // Generate markup and render it
  cardView._generateMarkup(cardData);
  // cardView.cardsContainer.innerHTML = markup1;
};

// Call the controller function when needed
controlCards();

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    // 0) Update results view to mark selected search result
    resultsView.update(model.getSearchResultsPage());

    // Updating bookmarks view
    bookmarksView.update(model.state.bookmarks);

    // 1) Loading recipe
    await model.loadRecipe(id);

    // 2) Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    console.log(err);
    recipeView.renderError();
    console.error(err);
  }
};

const controlSearchResults = async function () {
  try {
    // 1) Get search query
    const query = searchView.getQuery();
    if (!query) return;

    resultsView.renderSpinner();

    // 2) Load search results
    await model.loadSearchResults(query);

    // Render results
    console.log(model.state.search.results);
    resultsView.render(model.getSearchResultsPage());

    // Render the initial pagination buttons
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};
// controlSearchResults();

const controlPagination = function (gotoPage) {
  // 1) Render NEW results
  resultsView.render(model.getSearchResultsPage(gotoPage));

  // Render NEW pagination buttons
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  // Update the recipe servings (in state)
  model.updateServings(newServings);

  // Update the view
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  // Add/remove bookmark
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  // 2) Update recipe view
  recipeView.update(model.state.recipe);

  // 3) Render bookmarks
  bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

const controlAddRecipe = async function (newRecipe) {
  try {
    // Show loading spinner
    addRecipeView.renderSpinner();

    // Upload new recipe data
    await model.uploadRecipe(newRecipe);
    console.log(model.state.recipe);

    // Render recipe
    recipeView.render(model.state.recipe);

    // Success message
    addRecipeView.renderMessage();

    // Render bookmark view
    bookmarksView.render(model.state.bookmarks);

    // Change ID in the URL
    window.history.pushState(null, '', `#${model.state.recipe.id}`);

    // Close form window
    setTimeout(function () {
      addRecipeView.toggleWindow();
    }, MODAL_CLOSE_SEC * 1000);
  } catch (err) {
    console.error('💥', err);
    addRecipeView.renderError(err.message);
  }
};

const controlDeleteIngredient = function (ingredient) {
  model.deleteIngredient(ingredient);
  shoppingListView.renderShoppingList(model.state.shoppingList);
};

const controlAddIngredient = function (ingredient) {
  // Add ingredient to the shopping list
  model.addToShoppingList(ingredient);
  shoppingListView.renderShoppingList(model.state.shoppingList);
};

const controlClearIngredient = function () {
  // Clear the shopping list
  model.clearShoppingList();
  shoppingListView.renderShoppingList(model.state.shoppingList);
};

const controlShoppingList = function () {
  shoppingListView.renderShoppingList(model.state.shoppingList);
};

const init = function () {
  new ThemeToggle(toggleSelector);
  model.restoreShoppingList();

  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  recipeView.addHandlerShoppingList(controlAddIngredient);

  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);

  shoppingListView.addHandlerRender(controlShoppingList);
  shoppingListView.addHandlerDeleteIngredient(controlDeleteIngredient);
  shoppingListView.addHandlerDeleteShoppingList(controlClearIngredient);
};

init();
