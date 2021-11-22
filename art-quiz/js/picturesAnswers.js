import { randomInteger, shuffle } from "./random";

let createAuthor = (quizArray) => {
  return quizArray[randomInteger(0, 9)].imageNum;
};

export function createPicturesAnswers(buttons, quizArray, rightAnswer) {
  // Создаем массив с 4 вариантами ответа и перемешиваем его
  let arrAnswers = [];
  arrAnswers.push(rightAnswer);
  for (let i = 0; i < 3; i++) {
    let answer = createAuthor(quizArray);
    while (arrAnswers.indexOf(answer) != -1) {
      answer = createAuthor(quizArray);
    }
    arrAnswers.push(answer);
  }
  arrAnswers = shuffle(arrAnswers);

  // Заполняем кнопки авторами
  let i = 0;
  for (let button of buttons) {
    button.querySelector("img").dataset.imageNum = arrAnswers[i];
    button.querySelector(
      "img"
    ).src = `./images/image-data/img/${arrAnswers[i]}.jpg`;
    i++;
  }
}
