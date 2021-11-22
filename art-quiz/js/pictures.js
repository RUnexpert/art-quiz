// Получаем картинки из JSON и разбиваем на два массива
export async function getPictures() {
  const pictures = "images-en.json";
  const res = await fetch(pictures);
  const data = await res.json();

  let arr = [];

  for (let i = 0; i < data.length; i += 10) {
    arr.push(data.slice(i, i + 10));
  }
  return { artist: arr.slice(0, 12), pictures: arr.slice(12, 24) };
}
