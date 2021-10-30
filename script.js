let hamburger = document.querySelector(".hamburger");
let mobile_menu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", function () {
  console.log("clicked");
  mobile_menu.classList.toggle("active");
});
