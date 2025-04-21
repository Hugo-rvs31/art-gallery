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

const container1 = document.querySelector(".container-1");
const container2 = document.querySelector(".container-2");
const barreLeft = document.querySelector(".barre-on");
const barreRight = document.querySelector(".barre-off");
const popUpConversation = document.getElementById("pop-up-conversation");
const popUpInner = document.getElementById("pop-up-inner");
const LeavePopUp = document.querySelector(".leave-pop-up");
const header1 = document.querySelector(".header-1");
const header2 = document.querySelector(".header-2");
const header3 = document.querySelector(".header-3");

barreLeft.addEventListener("click", () => {
  container1.style.visibility = "visible";
  container2.style.visibility = "hidden";
  barreLeft.style.background = "black";
  barreRight.style.background = "rgb(205 202 202 / 92%)";
  console.log("gvhjvj");
});

barreRight.addEventListener("click", () => {
  container2.style.visibility = "visible";
  container1.style.visibility = "hidden";
  barreRight.style.background = "black";
  barreLeft.style.background = "rgb(205 202 202 / 92%)";
  console.log("dgfdh");
});

popUpConversation.addEventListener("click", () => {
  popUpInner.style.visibility = "visible";
});

LeavePopUp.addEventListener("click", () => {
  popUpInner.style.visibility = "hidden";
});

barre1.addEventListener("click", () => {
  header1.style.visibility = "visible";
  header2.style.visibility = "hidden";
  header3.style.visibility = "hidden";
  barre1.style.background = "white";
  barre1.style.height = "6px";
  barre1.style.width = "32px";
  barre2.style.background = "grey";
  barre2.style.height = "3px";
  barre2.style.width = "20px";
  barre3.style.background = "grey";
  barre3.style.height = "3px";
  barre3.style.width = "20px";
});

barre2.addEventListener("click", () => {
  header1.style.visibility = "hidden";
  header3.style.visibility = "hidden";
  header2.style.visibility = "visible";
  barre2.style.background = "white";
  barre2.style.height = "6px";
  barre2.style.width = "32px";
  barre1.style.background = "grey";
  barre1.style.height = "3px";
  barre1.style.width = "20px";
  barre3.style.background = "grey";
  barre3.style.height = "3px";
  barre3.style.width = "20px";
});

barre3.addEventListener("click", () => {
  header1.style.visibility = "hidden";
  header2.style.visibility = "hidden";
  header3.style.visibility = "visible";
  barre3.style.background = "white";
  barre3.style.height = "6px";
  barre3.style.width = "32px";
  barre2.style.background = "grey";
  barre2.style.height = "3px";
  barre2.style.width = "20px";
  barre1.style.background = "grey";
  barre1.style.height = "3px";
  barre1.style.width = "20px";
});
