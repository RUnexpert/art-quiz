"use strict";
import { createArtistAnswers } from "./artistAnswers";
import { createPicturesAnswers } from "./picturesAnswers";
import { getPictures } from "./pictures";
import { createArtistQuiz } from "./artistQuiz";
import { createPicturesQuiz } from "./picturesQuiz";
import { showPage } from "./showPage";

// Переключение страниц
function pagesMenu() {
  let quizButtons = document.querySelectorAll(".quiz-button");
  let settingsBtns = document.querySelectorAll(".settings-btn");

  let artistBtn = document.getElementById("artist-quiz-btn");
  let picturesBtn = document.getElementById("pictures-quiz-btn");

  let mainPageBtn = document.getElementById("main-page-btn");
  let categoriesBtns = document.querySelectorAll(".categories-btn");

  let index = document.querySelector(".index");
  let settings = document.querySelector(".settings");
  let categories = document.querySelector(".categories");

  let answerBtns = document.querySelectorAll(".question-button-text");
  let answerBtnsPictres = document.querySelectorAll(".question-button-picture");
  let dots = document.querySelectorAll(".dot-bg");
  let pages = document.querySelectorAll(".page");
  let question = document.querySelector(".question-container");
  let quizPicture = document.querySelector(".question-pic");
  let pictures = document.querySelectorAll(".question-button-picture-pic");

  for (let quizButton of quizButtons) {
    quizButton.addEventListener("click", () => {
      if (quizButton.dataset.category == "artist") {
        createArtistQuiz(categoriesBtns, showPage);
      } else {
        createPicturesQuiz(categoriesBtns, showPage);
      }
    });
  }

  // Переходы к настройкам
  for (let settingsBtn of settingsBtns) {
    showPage(settingsBtn, settings);
  }

  showPage(mainPageBtn, index);

  showPage(artistBtn, categories);
  showPage(picturesBtn, categories);

  // createArtistQuiz(categoriesBtns, showPage);
  // createPicturesQuiz(categoriesBtns, showPage);
}

pagesMenu();

// Шаг 1 Добавить в index.html 10 кружков ✔
// Шаг 2 Два класса для кружков. border-radius. Добавлять класс кружку в зав. от ответа.✔
// Шаг 3 Через filter отфильтровать массив и вывести число правильных ответов. Вывод модального окна. Кнопка
// Шаг 4 Local Storage. Запись и чтение.
// Шаг 5 Раздел с картинами.
// Опц. Разбить menu на несколько файлов. x
