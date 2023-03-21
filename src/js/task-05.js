const input = document.querySelector('#name-input');
let output = document.querySelector('#name-output');

input.addEventListener('input', () => {
    if (input.value === '') {
        output.textContent = "Anonymous";
    } else {
        output.textContent = input.value;
    }
});

// 2 sposób ---------------------------------
// input.addEventListener("input", () => {
//   output.textContent = input.value || "Anonymous";
// });