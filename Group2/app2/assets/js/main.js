let totop = document.querySelector(".totop");
// totop.addEventListener("click", function () {
//   //   totop.classList.add("test");
// //   totop.classList.remove("alaki");
// totop.classList.toggle("test")
// });

window.addEventListener("scroll", function () {
  if (this.window.scrollY > 400) {
    totop.classList.add("active");
  } else {
    totop.classList.remove("active");
  }
});
