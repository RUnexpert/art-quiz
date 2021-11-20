"use strict";

// Переключение страниц
function pagesMenu() {
  let settingsBtns = document.querySelectorAll(".settings-btn");
  let artistBtn = document.getElementById("artist-quiz-btn");
  let picturesBtn = document.getElementById("pictures-quiz-btn");
  let mainPageBtn = document.getElementById("main-page-btn");
  let categoriesBtns = document.querySelectorAll(".categories-btn");

  let pages = document.querySelectorAll(".page");
  let index = document.querySelector(".index");
  let settings = document.querySelector(".settings");
  let categories = document.querySelector(".categories");
  let question = document.querySelector(".question-container");

  function showPage(button, page, onEnter) {
    button.addEventListener("click", function (event) {
      for (let page of pages) {
        if (!page.classList.contains("hide")) {
          page.classList.add("hide");
        }
      }
      page.classList.remove("hide");
      onEnter && onEnter(this);
    });
  }

  for (let settingsBtn of settingsBtns) {
    showPage(settingsBtn, settings);
  }

  showPage(mainPageBtn, index);
  showPage(artistBtn, categories);
  showPage(picturesBtn, categories);

  for (let categoriesBtn of categoriesBtns) {
    showPage(categoriesBtn, question, async (elem) => {
      const id = elem.dataset.id;
      const pictures = await getPictures();
      console.log(pictures.artist[id]);
    });
  }
}

async function getPictures() {
  const pictures = "images-en.json";
  const res = await fetch(pictures);
  const data = await res.json();

  let arr = [];

  for (let i = 0; i < data.length; i += 10) {
    arr.push(data.slice(i, i + 10));
  }
  return { artist: arr.slice(0, 12), pictures: arr.slice(12, 24) };
  console.log(arr);
}
// cnosole.log(getPictures());
pagesMenu();

// Шаг 1 Добавить id ко всем кнопкам.
// Шаг 2 Поменять путь к картинке в коллбэке.
// Шаг 3 Взять всех авторов 10 массива. Нужен массив с именами художников.
// Шаг 4 Выбрать 3 варианта ответа из шага 3 и добавить к правильному и перемешать.
// И вывести их в ответах на вопросы.
// Шаг 5 Сделать клики по вариантам ответа и проверять правильного автора.
// Шаг 6 Записывать в массив results boolean true | false ответа.
// Шаг 7 Перекидывать на следующий вопрос.
// Опц. Разбить на несколько файлов. Установить вебпак.
// 15:00
