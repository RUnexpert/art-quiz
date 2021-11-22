// Функция создания случайного числа
export function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}
// Функция перемешать массив
export function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}
