//select dom elements
const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

//initail state
let count = 0;

//event listeners
incrementEl.addEventListener("click", () => {
  count++;
  counterEl.innerText = count;
});

decrementEl.addEventListener("click", () => {
  count--;
  counterEl.innerText = count;
});

// //select dom elements
// const counterEl2 = document.getElementById("counter2");
// const incrementEl2 = document.getElementById("increment2");
// const decrementEl2 = document.getElementById("decrement2");

// //initail state
// let count2 = 0;

// //event listeners
// incrementEl2.addEventListener("click", () => {
//   count2++;
//   counterEl2.innerText = count2;
// });

// decrementEl2.addEventListener("click", () => {
//   count2--;
//   counterEl2.innerText = count2;
// });
