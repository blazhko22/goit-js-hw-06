const refs = {
  input: document.querySelector("input#name-input"),
  nameInput: document.querySelector("span#name-output"),
};

refs.input.addEventListener("input", onInputText);

function onInputText(event) {
  console.log(event.currentTarget.value);
  refs.nameInput.textContent = event.currentTarget.value;
}
