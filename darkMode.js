const btn = document.getElementById("darkModeButton");
const heading = document.getElementById("heading");

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
