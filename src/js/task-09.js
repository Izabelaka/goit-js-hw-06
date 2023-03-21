// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// // 1)
// const btn = document.querySelector(".change-color");
// const colorCode = document.querySelector(".color");

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// btn.addEventListener("click", () => {
//   colorCode.innerHTML = getRandomHexColor();
//   document.body.style.backgroundColor = getRandomHexColor();
// });
const body = document.querySelector('body');
const colorSpan = document.querySelector('span.color');
const changeColorButton = document.querySelector('button.change-color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

changeColorButton.addEventListener('click', function() {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  colorSpan.textContent = newColor;
});
//Kod ten nasłuchuje na kliknięcie na button.change-color, a następnie generuje losowy kolor za pomocą funkcji getRandomHexColor(). Ustawia ten kolor jako wartość stylu backgroundColor elementu <body> oraz wyświetla wartość koloru w elemencie span.color.