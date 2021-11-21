"use strict";

// Переключение страниц
function pagesMenu() {
  let settingsBtns = document.querySelectorAll(".settings-btn");
  let artistBtn = document.getElementById("artist-quiz-btn");
  let picturesBtn = document.getElementById("pictures-quiz-btn");
  let mainPageBtn = document.getElementById("main-page-btn");
  let categoriesBtns = document.querySelectorAll(".categories-btn");
  let answerBtns = document.querySelectorAll(".question-button");

  let pages = document.querySelectorAll(".page");
  let index = document.querySelector(".index");
  let settings = document.querySelector(".settings");
  let categories = document.querySelector(".categories");
  let question = document.querySelector(".question-container");

  let quizPicture = document.querySelector(".question-pic");

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

  let quizArray;
  let step = 0;

  for (let categoriesBtn of categoriesBtns) {
    showPage(categoriesBtn, question, async (elem) => {
      const id = elem.dataset.id;
      const pictures = await getPictures();
      quizArray = pictures.artist[id];
      // console.log(pictures.artist[id]);
      // console.log(quizArray[0].imageNum);
      // Путь первой картинки
      quizPicture.src = `./images/image-data/full/${quizArray[step].imageNum}full.jpg`;

      // Массив с авторами
      let authorArr = [];
      for (let elem of pictures.artist[id]) {
        authorArr.push(elem.author);
      }

      // Функция создания случайного числа
      function randomInteger(min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
      }
      // Функция перемешать массив
      function shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
      }

      let createAuthor = () => {
        return quizArray[randomInteger(0, 9)].author;
      };

      // Создаем массив с 4 вариантами ответа и перемешиваем его
      let arrAnswers = [];
      arrAnswers.push(quizArray[step].author);
      console.log(arrAnswers);
      for (let i = 0; i < 3; i++) {
        let answer = createAuthor();
        while (arrAnswers.indexOf(answer) != -1) {
          answer = createAuthor();
        }
        arrAnswers.push(answer);
      }
      arrAnswers = shuffle(arrAnswers);

      // Заполняем кнопки авторами
      let i = 0;
      for (let answerBtn of answerBtns) {
        answerBtn.textContent = arrAnswers[i];
        i++;
      }

      // Массив с результатами boolean
      let booleanArrayOfAnswers = [];
      for (let answerBtn of answerBtns) {
        answerBtn.addEventListener("click", () => {
          if (answerBtn.textContent !== quizArray[step].author) {
            booleanArrayOfAnswers.push(false);
          } else {
            booleanArrayOfAnswers.push(true);
          }
          step++;
          quizPicture.src = `./images/image-data/full/${quizArray[step].imageNum}full.jpg`;

          // ******************************* */
          // Создаем массив с 4 вариантами ответа и перемешиваем его
          let arrAnswers = [];
          arrAnswers.push(quizArray[step].author);
          console.log(arrAnswers);
          for (let i = 0; i < 3; i++) {
            let answer = createAuthor();
            while (arrAnswers.indexOf(answer) != -1) {
              answer = createAuthor();
            }
            arrAnswers.push(answer);
          }
          arrAnswers = shuffle(arrAnswers);

          // Заполняем кнопки авторами
          let i = 0;
          for (let answerBtn of answerBtns) {
            answerBtn.textContent = arrAnswers[i];
            i++;
          }
          //******************************** */

          console.log(booleanArrayOfAnswers);
        });
      }
    });
  }
}
// Получаем картинки из JSON и разбиваем на два массива
async function getPictures() {
  const pictures = "images-en.json";
  const res = await fetch(pictures);
  const data = await res.json();

  let arr = [];

  for (let i = 0; i < data.length; i += 10) {
    arr.push(data.slice(i, i + 10));
  }
  return { artist: arr.slice(0, 12), pictures: arr.slice(12, 24) };
}

pagesMenu();

// Шаг 1 Добавить id ко всем кнопкам.✔
// Шаг 2 Поменять путь к картинке в коллбэке.✔
// Шаг 3 Взять всех авторов 10 массива. Нужен массив с именами художников.✔
// Шаг 4 Выбрать 3 варианта ответа из шага 3 и добавить к правильному и перемешать.✔
// И вывести их в ответах на вопросы.✔
// Шаг 5 Сделать клики по вариантам ответа и проверять правильного автора. ✔
// Шаг 6 Записывать в массив results boolean true | false ответа.✔
// Шаг 7 Перекидывать на следующий вопрос. ?
// Установить вебпак.✔
// Опц. Разбить на несколько файлов. x
