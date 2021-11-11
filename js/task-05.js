const input = document.querySelector("input#name-input");
let nameInput = document.querySelector("span#name-output");

input.addEventListener("input", onInputText);

function onInputText(event) {
  console.log(event.currentTarget.value);
  if (input.value === "") {
    nameInput.textContent = "Anonymous";
  } else {
    nameInput.textContent = event.currentTarget.value;
  }
}
