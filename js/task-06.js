const inputEl = document.querySelector("input#validation-input");

inputEl.addEventListener("blur", inputlLength);

function inputlLength() {
  if (inputEl.value.length >= inputEl.dataset.length) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
}
