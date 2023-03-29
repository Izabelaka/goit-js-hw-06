const input = document.getElementById("validation-input");
const expectedLength = input.getAttribute("data-length");

input.addEventListener("blur", () => {
  const actualLength = input.value.length;

  if (actualLength === parseInt(expectedLength)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
});
