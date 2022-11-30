// 1-misol
// let num = +prompt('son kiriting')
// if(num/1>=1){
//     console.log('number');
// }
// else{
//     console.log('number emas');
// }

// // 2-misol
// let num = prompt("son kiriting");
// if ((num >= -9999 && num <= -1000) || (num >= 1000 && num <= 9999)) {
//   console.log("4 xonali son");
// }
// if ((num >= -999 && num <= -100) || (num >= 100 && num <= 999)) {
//   console.log("3 xonali son");
// }
// if ((num >= -99 && num <= -10) || (num >= 10 && num <= 99)) {
//   console.log("2 xonali son");
// }
// if (num >= -9 && num <= 9) {
//   console.log("1 xonali son");
// }

// // 3-misol
// let a = prompt("a sonini kiriting");
// let b = prompt("b sonini kiriting");
// let c = prompt("c sonini kiriting");
// console.log(Math.max(a, b, c));

// 4-misol
// let a = prompt("a sonini kiriting");
// let b = prompt("b sonini kiriting");
// let c = prompt("c sonini kiriting");
// if (a >= b && b >= c) {
//   console.log(a);
// }
// if (a >= c && c >= b) {
//   console.log(a);
// }
// if (b >= a && a >= c) {
//   console.log(b);
// }
// if (b >= c && c >= a) {
//   console.log(b);
// }
// if (c >= b && b >= a) {
//   console.log(c);
// }
// if (c >= a && a >= b) {
//   console.log(c);
// }

// Travel
const form = document.getElementById("form");
const input = document.querySelector("#inp");
const text = document.getElementById("text");

const airplane = 800;
const car = 70;
const bicycle = 20.1;
const onFoot = 3.6;

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const inputValue = input.value;

  const airplaneResult = Math.floor(inputValue / airplane);
  const carResult = Math.floor(inputValue % airplane / car);
  const bicycleResult = Math.floor(inputValue % airplane % car / bicycle);
  const onFootResult = Math.floor(inputValue % airplane % car % bicycle / onFoot);

  text.textContent = `Airplane: ${airplaneResult}, Car: ${carResult}, Bicycle: ${bicycleResult}, OnFoot: ${onFootResult}`;
  form.reset();
});
