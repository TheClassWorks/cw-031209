let toTop = document.querySelector(".toTop");
//BOM
window.addEventListener("scroll", function () {
  if (this.window.scrollY > 400) {
    toTop.classList.add("active");
  } else toTop.classList.remove("active");
});
