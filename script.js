/*
let specialBtn = document.querySelector("#special-btn");
let display = document.querySelector(".input-box input");
let minus = "-";

specialBtn.addEventListener("click", () => {
  specialBtn.classList.toggle("minus");
  if (specialBtn.classList.contains("minus")) {
    display.value = `${minus}${display.value}`;
  } else {
    display.value = display.value.toString().slice(1);
  }
});
*/