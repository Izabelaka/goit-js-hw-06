const input = document.querySelector("#font-size-control");
 const span = document.querySelector("#text");


function changeSize() {
    span.style.fontSize = `${input.value}px`;
}
input.addEventListener("input", changeSize);
// input.addEventListener("input", (e) => {
//     span.style.fontSize = e.currentTarget.value + "px"; 
// })