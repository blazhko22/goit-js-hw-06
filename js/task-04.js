let counterValue = 0;
let valueNamber = document.querySelector("#value").value;

const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);

decrementButton.addEventListener("click", () => {
  counterValue -= 1;
  valueNamber = counterValue;
  console.log(valueNamber);
});

incrementButton.addEventListener("click", () => {
  counterValue += 1;
  valueNamber = counterValue;
  console.log(valueNamber);
});
console.log(counterValue);
