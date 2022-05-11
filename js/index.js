// Write your Pizza Builder JavaScript in this file.
// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false,
  activePep: true,
  activeMush: true,
  activePepper: true,
  activeSauce: true,
  activeGluten: true
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((onePepper) => {
    if (state.greenPeppers) {
      onePepper.style.visibility = 'visible';
    } else {
      onePepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach((sauce) => {
    if (state.whiteSauce === false) {
      sauce.classList.add('sauce-white');
    } else {
      sauce.classList.remove('sauce-white');
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach((crust) => {
    if (state.glutenFreeCrust === false) {
      crust.classList.add('crust-gluten-free');
    } else {
      crust.classList.remove('crust-gluten-free');
    }
  });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  let pepActive = document.querySelector('.btn.btn-pepperoni');
  if (state.activePep === false) {
    pepActive.classList.remove('active');
  } else {
    pepActive.classList.add('active');
  }
  let activeMush = document.querySelector('.btn.btn-mushrooms');
  if (state.activeMush === false) {
    activeMush.classList.remove('active');
  } else {
    activeMush.classList.add('active');
  }
  let pepperActive = document.querySelector('.btn.btn-green-peppers');
  if (state.activePepper === false) {
    pepperActive.classList.remove('active');
  } else {
    pepperActive.classList.add('active');
  }
  let sauceActive = document.querySelector('.btn.btn-sauce');
  if (state.activeSauce === false) {
    sauceActive.classList.remove('active');
  } else {
    sauceActive.classList.add('active');
  }
  let glutenActive = document.querySelector('.btn.btn-crust');
  if (state.activeGluten === false) {
    glutenActive.classList.remove('active');
  } else {
    glutenActive.classList.add('active');
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let originalPrice = 21;
  let total = document.querySelector('.panel strong');
  if (state.activePep) originalPrice += 1;
  if (state.activeMush) originalPrice += 1;
  if (state.activePepper) originalPrice += 1;
  if (state.activeSauce) originalPrice += 3;
  if (state.activeGluten) originalPrice += 5;
  total.innerHTML = originalPrice;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document
  .querySelector('.btn.btn-pepperoni')
  .addEventListener('click', function () {
    state.pepperoni = !state.pepperoni;
    state.activePep = !state.activePep;
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document
  .querySelector('.btn.btn-mushrooms')
  .addEventListener('click', function () {
    state.mushrooms = !state.mushrooms;
    state.activeMush = !state.activeMush;
    renderEverything();
  });
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document
  .querySelector('.btn.btn-green-peppers')
  .addEventListener('click', function () {
    state.greenPeppers = !state.greenPeppers;
    state.activePepper = !state.activePepper;
    renderEverything();
  });
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  state.activeSauce = !state.activeSauce;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  state.activeGluten = !state.activeGluten;
  renderEverything();
});
document.querySelector('.btn').addEventListener('click', function () {
  state.active = !state.active;
  renderEverything();
});
