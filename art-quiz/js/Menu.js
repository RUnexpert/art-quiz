"use strict";

// Переключение страниц
function pagesMenu() {
  let settingsBtns = document.querySelectorAll(".settings-btn");
  let artistBtn = document.getElementById("artist-quiz-btn");
  let picturesBtn = document.getElementById("pictures-quiz-btn");
  let mainPageBtn = document.getElementById("main-page-btn");
  let categoriesBtn = document.querySelector(".categories-btn");

  let pages = document.querySelectorAll(".page");
  let index = document.querySelector(".index");
  let settings = document.querySelector(".settings");
  let categories = document.querySelector(".categories");
  let question = document.querySelector(".question-container");

  function showPage(button, page) {
    button.addEventListener("click", function () {
      for (let page of pages) {
        if (!page.classList.contains("hide")) {
          page.classList.add("hide");
        }
      }
      page.classList.remove("hide");
    });
  }

  for (let settingsBtn of settingsBtns) {
    showPage(settingsBtn, settings);
  }

  showPage(mainPageBtn, index);
  showPage(artistBtn, categories);
  showPage(picturesBtn, categories);
  showPage(categoriesBtn, question);
}
pagesMenu();

async function getPictures() {
  const pictures = "images-en.json";
  const res = await fetch(pictures);
  const data = await res.json();
}

//Создаем категории
function createCategories(arr) {
  console.log();
}
