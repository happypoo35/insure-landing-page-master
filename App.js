const hamburger = document.querySelector(".hamburger");
const menu = document.getElementById("menu");
const container = document.querySelector(".container");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
  container.classList.toggle("active");
});
