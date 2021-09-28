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
  glutenFreeCrust: false
};

const btnValue = {
    pepperoni: 'btn-pepperoni',
    mushrooms: 'btn-mushrooms',
    greenPeppers: 'btn-green-peppers',
    whiteSauce: 'btn-sauce',
    glutenFreeCrust: 'btn-crust'
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
  document.querySelectorAll('.green-pepper').forEach((oneGpep) => {
    if (state.greenPeppers) {
      oneGpep.style.visibility = 'visible';
    } else {
      oneGpep.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
    const sauce = document.querySelector('.sauce');
    if (state.whiteSauce)
        sauce.classList.add('sauce-white');
    else
        sauce.classList.remove('sauce-white');
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const crust = document.querySelector('.crust');
    if (state.glutenFreeCrust)
        crust.classList.add('crust-gluten-free');
    else
        crust.classList.remove('crust-gluten-free');
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  document.querySelectorAll('.btn').forEach((el, i) => {
    if (state[Object.keys(state)[i]])
        el.classList.add('active');
    else
        el.classList.remove('active');
  });
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
    let list = document.querySelector('.panel.price ul');
    list.innerHTML = '';
    let price = Object.keys(ingredients).reduce((total, key) => {
        if (state[key]) {
            list.innerHTML += `<li>$${ingredients[key].price} ${ingredients[key].name}</li>`;
            return total + ingredients[key].price;
        }
        return total;
    }, 0) + 10;
    document.querySelector('.panel.price strong').textContent = `$${price}`;
}

renderEverything();

function changeState(event) {
    for (key in btnValue) {
        if (event.target.classList.contains(btnValue[key]))
            state[key] = !state[key];
    }
    renderEverything();
}

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
(function () {
    document.querySelectorAll('.btn').forEach((el) => el.addEventListener('click', changeState));
})();
// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
