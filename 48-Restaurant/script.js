let inputEl = document.getElementById("input-el");
let btnEl = document.getElementById("btn");
let msgEl = document.getElementById("msg");

function orderPizza(pizzaType) {
  return new Promise((resolve, reject) => {
    console.log(`Ordering ${pizzaType}...`);
    msgEl.textContent = `Ordering ${pizzaType}...`;

    setTimeout(() => {
      let pizzaReady = Math.random() > 0.3;
      if (pizzaReady) {
        resolve(`Your ${pizzaType} is ready!`);
      } else {
        reject(`Sorry! We ran out of ${pizzaType}`);
      }
    }, 2000);
  });
}

// Event listener on button
btnEl.addEventListener("click", () => {
  let pizzaType = inputEl.value;
  inputEl.value = "";
  // Call the promise function
  orderPizza(pizzaType)
    .then((message) => {
      msgEl.textContent = message;
      console.log(message);
    })
    .catch((error) => {
      msgEl.textContent = error;
      console.log(error);
    });
});
