import { createAnswers } from "./answers";
import { createPicturesAnswers } from "./picturesAnswer";
import { getPictures } from "./pictures";

let quizArray;
let step = 0;

let answerBtns = document.querySelectorAll(".question-button-text");
let answerBtnsPictres = document.querySelectorAll(".question-button-picture");
let dots = document.querySelectorAll(".dot-bg");
let question = document.querySelector(".question-container");
let quizPicture = document.querySelector(".question-pic");

export function createArtistQuiz(categoriesBtns, showPage) {
  for (let categoriesBtn of categoriesBtns) {
    showPage(categoriesBtn, question, async (elem) => {
      const id = elem.dataset.id;
      const pictures = await getPictures();
      quizArray = pictures.artist[id];

      // Путь первой картинки
      quizPicture.src = `./images/image-data/full/${quizArray[step].imageNum}full.jpg`;

      createAnswers(answerBtns, quizArray, quizArray[step].author);

      createPicturesAnswers(
        answerBtnsPictres,
        quizArray,
        quizArray[step].imageNum
      );

      // Массив с результатами boolean
      let booleanArrayOfAnswers = [];
      for (let answerBtn of answerBtns) {
        answerBtn.addEventListener("click", () => {
          if (answerBtn.textContent !== quizArray[step].author) {
            booleanArrayOfAnswers.push(false);
          } else {
            booleanArrayOfAnswers.push(true);
          }

          // Красим точки в цвет
          if (booleanArrayOfAnswers[step]) {
            dots[step].classList.add("green");
          } else {
            dots[step].classList.add("red");
          }

          step++;
          quizPicture.src = `./images/image-data/full/${quizArray[step].imageNum}full.jpg`;

          createAnswers(answerBtns, quizArray, quizArray[step].author);

          createPicturesAnswers(
            answerBtnsPictres,
            quizArray,
            quizArray[step].imageNum
          );

          // console.log(booleanArrayOfAnswers);
        });
      }
    });
  }
}
