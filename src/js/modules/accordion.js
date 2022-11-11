document.addEventListener("DOMContentLoaded", () => {
  const block = document.querySelector(".accordion");
  const acc = document.querySelectorAll(".accordion__header");
  const content = document.querySelectorAll(".accordion__body");

  acc.forEach((e) => {
    e.addEventListener("click", accordionEvent);
  });

  function accordionEvent(e) {
    content.forEach((e) => {
      e.classList.add("accordion__body--hide");
    });
    const currentElement = e.path[1];
    const currentContent = currentElement.querySelector(".accordion__body");
    const height = currentContent.scrollHeight + 10;
    block.style.setProperty("--adaptive-height", `${height}px`);
    currentContent.classList.remove("accordion__body--hide");
  }
});
