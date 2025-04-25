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
const buttonOpen = document.getElementById("pop-up-conversation");
const buttonclosed = document.querySelector(".leave-pop-up");
const logoAccueil = document.getElementById("logo-accueil");
const logoConversation = document.getElementById("logo-conversation");

//même élement mais trois const
const PageBoth = document.querySelector(".pop-up-inner");
const Pageleft = document.querySelector(".pop-up-left");
const Pageright = document.querySelector(".pop-up-right");
let slides, slideWidth;

let compteur = 0;

buttonOpen.addEventListener("click", () => {
  buttonOpen.style.visibility = "hidden";
  buttonclosed.style.visibility = "visible";
  PageBoth.style.visibility = "visible";
});

buttonclosed.addEventListener("click", () => {
  buttonclosed.style.visibility = "hidden";
  buttonOpen.style.visibility = "visible";
  PageBoth.style.visibility = "hidden";
});

logoConversation.addEventListener("click", () => {
  Pageleft.style.visibility = "hidden";
  Pageright.style.visibility = "visible";
});

logoAccueil.addEventListener("click", () => {
  Pageright.style.visibility = "hidden";
  Pageleft.style.visibility = "visible";
});

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
    setTimeout(monTimer, 7000);
  } else estStop = 0;
}

window.onload = () => {
  barreAffichee = "3";
  monTimer();

  let firstDiv = DivCarrousel.firstElementChild.cloneNode(true);
  let secondDiv = DivCarrousel.children[1].cloneNode(true);
  let thirdDiv = DivCarrousel.children[2].cloneNode(true);
  let fourthDiv = DivCarrousel.children[3].cloneNode(true);

  DivCarrousel.appendChild(firstDiv);
  DivCarrousel.appendChild(secondDiv);
  DivCarrousel.appendChild(thirdDiv);
  DivCarrousel.appendChild(fourthDiv);

  slides = Array.from(DivCarrousel.children);

  slideWidth = eachDivCarrousel.getBoundingClientRect().width;

  buttonRight.addEventListener("click", slideNext);
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

function slidePrevious() {
  compteur--;

  if (compteur < 0) {
    compteur = slides.length - 4;
    let decal = -slideWidth * compteur;
    DivCarrousel.style.transform = `translateX(${decal}px)`;
    setTimeout(slidePrevious, 1);
  }

  let decal = -slideWidth * compteur;
  DivCarrousel.style.transform = `translateX(${decal}px)`;
}
