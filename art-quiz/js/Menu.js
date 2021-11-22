"use strict";
import { createAnswers } from "./answers";
import { createPicturesAnswers } from "./picturesAnswer";
import { getPictures } from "./pictures";
import { createArtistQuiz } from "./artistQuiz";

// Переключение страниц
function pagesMenu() {
  let quizButtons = document.querySelectorAll(".quiz-button");
  let settingsBtns = document.querySelectorAll(".settings-btn");
  let artistBtn = document.getElementById("artist-quiz-btn");
  let picturesBtn = document.getElementById("pictures-quiz-btn");
  let mainPageBtn = document.getElementById("main-page-btn");
  let categoriesBtns = document.querySelectorAll(".categories-btn");

  let answerBtns = document.querySelectorAll(".question-button-text");
  let answerBtnsPictres = document.querySelectorAll(".question-button-picture");
  let dots = document.querySelectorAll(".dot-bg");

  let pages = document.querySelectorAll(".page");
  let index = document.querySelector(".index");
  let settings = document.querySelector(".settings");
  let categories = document.querySelector(".categories");
  let question = document.querySelector(".question-container");

  let quizPicture = document.querySelector(".question-pic");

  let pictures = document.querySelectorAll(".question-button-picture-pic");

  let typeOfQuiz;

  for (let quizButton of quizButtons) {
    quizButton.addEventListener("click", () => {
      typeOfQuiz = quizButton.dataset.category;
      console.log(typeOfQuiz);
    });
  }

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

  // Переходы к настройкам
  for (let settingsBtn of settingsBtns) {
    showPage(settingsBtn, settings);
  }

  showPage(mainPageBtn, index);
  showPage(artistBtn, categories);
  showPage(picturesBtn, categories);

  createArtistQuiz(categoriesBtns, showPage);
  // let quizArray;
  // let step = 0;

  // for (let categoriesBtn of categoriesBtns) {
  //   showPage(categoriesBtn, question, async (elem) => {
  //     const id = elem.dataset.id;
  //     const pictures = await getPictures();
  //     quizArray = pictures.artist[id];

  //     // Путь первой картинки
  //     quizPicture.src = `./images/image-data/full/${quizArray[step].imageNum}full.jpg`;

  //     createAnswers(answerBtns, quizArray, quizArray[step].author);

  //     createPicturesAnswers(
  //       answerBtnsPictres,
  //       quizArray,
  //       quizArray[step].imageNum
  //     );

  //     // Массив с результатами boolean
  //     let booleanArrayOfAnswers = [];
  //     for (let answerBtn of answerBtns) {
  //       answerBtn.addEventListener("click", () => {
  //         if (answerBtn.textContent !== quizArray[step].author) {
  //           booleanArrayOfAnswers.push(false);
  //         } else {
  //           booleanArrayOfAnswers.push(true);
  //         }

  //         // Красим точки в цвет
  //         if (booleanArrayOfAnswers[step]) {
  //           dots[step].classList.add("green");
  //         } else {
  //           dots[step].classList.add("red");
  //         }

  //         step++;
  //         quizPicture.src = `./images/image-data/full/${quizArray[step].imageNum}full.jpg`;

  //         createAnswers(answerBtns, quizArray, quizArray[step].author);

  //         createPicturesAnswers(
  //           answerBtnsPictres,
  //           quizArray,
  //           quizArray[step].imageNum
  //         );

  //         // console.log(booleanArrayOfAnswers);
  //       });
  //     }
  //   });
  // }
}

pagesMenu();

// Шаг 1 Добавить в index.html 10 кружков ✔
// Шаг 2 Два класса для кружков. border-radius. Добавлять класс кружку в зав. от ответа.
// Шаг 3 Через filter отфильтровать массив и вывести число правильных ответов. Вывод модального окна. Кнопка
// Шаг 4 Local Storage. Запись и чтение.
// Шаг 5 Раздел с картинами.
// Опц. Разбить menu на несколько файлов. x
