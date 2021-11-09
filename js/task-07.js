const refs = {
  input: document.querySelector("input#font-size-control"),
  nameText: document.querySelector("span#text"),
};

refs.input.addEventListener("input", onInputText);

function onInputText(event) {
  console.log(event.currentTarget.value);
  refs.nameText.style.fontSize = event.target.value + "px";
}
