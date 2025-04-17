let lastScroll = 0;
let navPrincipal = document.querySelector(".nav-principal");

window.addEventListener("scroll", () => {
  console.log("window.scrollY : " + window.scrollY);
  console.log("lastscroll :" + lastScroll);

  if (window.scrollY < lastScroll) {
    navPrincipal.style.top = 0;
  } else {
    navPrincipal.style.top = "-160px";
  }

  lastScroll = window.scrollY;
});
