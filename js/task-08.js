const form = document.querySelector("form.login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return console.log("All fields must be filled in !!!");
  }

  console.log("Email:", email.value);
  console.log("Password:", password.value);
  event.currentTarget.reset();
}
