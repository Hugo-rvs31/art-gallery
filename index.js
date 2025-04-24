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

  if ((lastScroll < 800) & (estStop == 0)) {
    monTimer();
    estStop = 1;
  }
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
const header = document.querySelector(".header");
const headerPrincipal = document.querySelector("header");
let barreAffichee;
let estStop;
const DivCarrousel = document.querySelector(".center-section-9");
const eachDivCarrousel = document.querySelector(".each-div-section-9");
const buttonLeft = document.querySelector(".button-angle-left");
const buttonRight = document.querySelector(".button-angle-right");
let slides, slideWidth;

let compteur = 0;

function affBarre1() {
  barreAffichee = "1";
  header1.style.opacity = "1";
  header2.style.opacity = 0;
  header3.style.opacity = 0;
  barre1.style.background = "white";
  barre1.style.height = "6px";
  barre1.style.width = "32px";
  barre2.style.background = "grey";
  barre2.style.height = "3px";
  barre2.style.width = "20px";
  barre3.style.background = "grey";
  barre3.style.height = "3px";
  barre3.style.width = "20px";
}

function affBarre2() {
  barreAffichee = "2";
  header1.style.opacity = 0;
  header3.style.opacity = 0;
  header2.style.opacity = "1";
  barre2.style.background = "white";
  barre2.style.height = "6px";
  barre2.style.width = "32px";
  barre1.style.background = "grey";
  barre1.style.height = "3px";
  barre1.style.width = "20px";
  barre3.style.background = "grey";
  barre3.style.height = "3px";
  barre3.style.width = "20px";
}

function affBarre3() {
  barreAffichee = "3";
  header1.style.opacity = 0;
  header2.style.opacity = 0;
  header3.style.opacity = "1";
  barre3.style.background = "white";
  barre3.style.height = "6px";
  barre3.style.width = "32px";
  barre2.style.background = "grey";
  barre2.style.height = "3px";
  barre2.style.width = "20px";
  barre1.style.background = "grey";
  barre1.style.height = "3px";
  barre1.style.width = "20px";
}

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
  affBarre1();
});

barre2.addEventListener("click", () => {
  affBarre2();
});

barre3.addEventListener("click", () => {
  affBarre3();
});

function monTimer() {
  console.log("mmmm");

  if (barreAffichee == "1") {
    affBarre2();
  } else if (barreAffichee == "2") {
    affBarre3();
  } else if (barreAffichee == "3") {
    affBarre1();
  }
  if (lastScroll < 800) {
    setTimeout(monTimer, 3000);
  } else estStop = 0;
}

window.onload = () => {
  barreAffichee = "3";
  monTimer();

  let firstDiv = DivCarrousel.firstElementChild.cloneNode(true);
  let secondDiv = DivCarrousel.children[1].cloneNode(true);
  let thirdDiv = DivCarrousel.children[2].cloneNode(true);
  let fourthDiv = DivCarrousel.children[3].cloneNode(true);

  let tenDiv = DivCarrousel.lastElementChild.cloneNode(true);
  let nineDiv = DivCarrousel.children[8].cloneNode(true);
  let eightDiv = DivCarrousel.children[7].cloneNode(true);
  let sevenDiv = DivCarrousel.children[6].cloneNode(true);

  DivCarrousel.appendChild(firstDiv);
  DivCarrousel.appendChild(secondDiv);
  DivCarrousel.appendChild(thirdDiv);
  DivCarrousel.appendChild(fourthDiv);

  DivCarrousel.appendChild(tenDiv);
  DivCarrousel.appendChild(nineDiv);
  DivCarrousel.appendChild(eightDiv);
  DivCarrousel.appendChild(sevenDiv);

  slides = Array.from(DivCarrousel.children);

  slideWidth = eachDivCarrousel.getBoundingClientRect().width;

  buttonLeft.addEventListener("click", slidePrevious);
};

function slideNext() {
  compteur++;

  let decal = -slideWidth * compteur;
  DivCarrousel.style.transform = `translateX(${decal}px)`;

  if (compteur >= slides.length - 4) {
    compteur = 0;
  }
}

buttonRight.addEventListener("click", slideNext);

function slidePrevious() {
  compteur--;

  if (compteur < 4) {
    compteur = slides.length - 4;
    let decal = -slideWidth * compteur;
    DivCarrousel.style.transform = `translateX(${decal}px)`;
  }

  let decal = -slideWidth * compteur;
  DivCarrousel.style.transform = `translateX(${decal}px)`;
}

buttonLeft.addEventListener("click", slidePrevious);
