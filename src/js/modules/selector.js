document.addEventListener("DOMContentLoaded", () => {
  const selectors = document.querySelectorAll(".select__button");
  const imageContainer = document.querySelector(".select__picture");
  const picture = document.querySelector(".select__picture source");
  const image = document.querySelector(".select__picture img");

  selectors.forEach((e) => {
    e.addEventListener("click", (e) => {
      for (let i = 0; i < selectors.length; i++) {
        
        if (e.target !== selectors[i]) {
          selectors[i].classList.remove("select__button--active");
        }

        if (
          e.target === selectors[i] &&
          !selectors[i].classList.contains("select__button--active")
        ) {
          e.target.classList.add("select__button--active");

          imageContainer.animate([{ opacity: 1 }, { opacity: 0 }], {
            fill: "forwards",
            duration: 300
          });

          setTimeout(() => {
            picture.setAttribute("srcset", `img/select/${i + 1}.webp`);
            image.setAttribute("src", `img/select/${i + 1}.png`);
          }, 280);

          imageContainer.animate([{ opacity: 0 }, { opacity: 1 }], {
            fill: "forwards",
            delay: 310,
            duration: 300
          });
        }
      }
    });
  });
});
