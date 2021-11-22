import { getPictures } from "./pictures";
import { createPicturesAnswers } from "./picturesAnswers";

let questionText = document.getElementById("question-picture");
let answerBtns = document.querySelectorAll(".question-button-picture-pic");
let question = document.querySelector(".question-pictures");
let answerBtnsPictres = document.querySelectorAll(".question-button-picture");
let dots = document.querySelectorAll(".dot-pic");

let quizArray;
let step = 0;
let score = 0;
// Массив с результатами boolean
let booleanArrayOfAnswers = [];

export function createPicturesQuiz(categoriesBtns, showPage) {
  for (let categoriesBtn of categoriesBtns) {
    showPage(categoriesBtn, question, async (elem) => {
      const id = elem.dataset.id;
      const pictures = await getPictures();
      quizArray = pictures.pictures[id];

      // Первый вопрос
      questionText.textContent = `Which is ${quizArray[step].author} picture?`;

      createPicturesAnswers(
        answerBtnsPictres,
        quizArray,
        quizArray[step].imageNum
      );

      for (let answerBtn of answerBtns) {
        answerBtn.addEventListener("click", () => {
          if (answerBtn.dataset.imageNum !== quizArray[step].imageNum) {
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
          score = booleanArrayOfAnswers.filter(Boolean).length;
          step++;
          questionText.textContent = `Which is ${quizArray[step].author} picture?`;

          createPicturesAnswers(
            answerBtnsPictres,
            quizArray,
            quizArray[step].imageNum
          );
        });
      }
    });
  }
}
