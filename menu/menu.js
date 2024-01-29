"use strict";

const menuBtn = document.querySelector(".menuBtn");
const menu = document.querySelector(".menu");
const content = document.querySelectorAll(".content");
menuBtn.addEventListener("click", () => {
  content.forEach((e) => e.classList.toggle("blur"));
  menu.classList.toggle("menuActive");
});
