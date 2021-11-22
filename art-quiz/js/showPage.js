let pages = document.querySelectorAll(".page");

export function showPage(button, page, onEnter) {
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
