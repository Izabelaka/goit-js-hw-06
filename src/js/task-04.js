// const counterValue = document.querySelector('#value');
// let value = 0

// document.querySelectorAll('button[data-action]').forEach(button => {
//     button.addEventListener('click', () => {
//         if (button.dataset.action === 'increment') {
//             value++;
//         } else if (button.dataset.action === 'decrement') {
//             value--;
//         }
//         counterValue.textContent = value;
//     });
// });

// ---------------------------------------------
    const counterValue = document.getElementById('value');
let value = 0;

const buttons = document.querySelectorAll('button[data-action]');
const decrementButton = buttons[0];
const incrementButton = buttons[1];

decrementButton.addEventListener('click', () => {
  value--;
  counterValue.textContent = value;
});

incrementButton.addEventListener('click', () => {
  value++;
  counterValue.textContent = value;
});

// ----------------------------------------------------------

