const activeButton = document.querySelector(".buttons");

activeButton.addEventListener("click", (e) => {
  e.preventDefault();

  const gamingButton = document.querySelector(".Gaming-button");
  const musicButton = document.querySelector(".Music-button");
  const techButton = document.querySelector(".Tech-button");

  if (activeButton.innerText === "Gaming") {
    musicButton.classList.remove("is-active");
    techButton.classList.remove("is-active");
    gamingButton.classList.add("is-active");
  } else if (activeButton.innerText === "Music") {
    gamingButton.classList.remove("is-active");
    techButton.classList.remove("is-active");
    musicButton.classList.add("is-active");
  } else if (activeButton.innerText === "Tech") {
    gamingButton.classList.remove("is-active");
    musicButton.classList.remove("is-active");
    techButton.classList.add("is-active");
  }
});


/*
const activeButton = document.querySelector(".buttons");

activeButton.addEventListener("click", () => {
  if (activeButton.innerText === "Gaming") {
    activeButton.classList.add("is-active");
  }
})
*/