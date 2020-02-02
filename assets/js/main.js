document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".button-signup").addEventListener("click", event => {
    event.preventDefault();
    document.querySelector(".modal").classList.toggle("hidden");
  });
});

const switchModal = () => {
  document.querySelector(".modal").classList.toggle("hidden");
};
