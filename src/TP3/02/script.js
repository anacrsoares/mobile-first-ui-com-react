const menuIcon = document.querySelector("#menu-icon");
const navLinks = document.querySelector("#nav-links");
const logo = document.querySelector(".logo");

menuIcon.addEventListener("click", () => {
  // Verifica o estado atual da exibição
  if (navLinks.style.display === "flex") {
    navLinks.style.display = "none";
    logo.style.display = "block";
  } else {
    navLinks.style.display = "flex"; // Expande o menu
    navLinks.style.flexDirection = "column"; // Direção vertical (coluna)
    logo.style.display = "none";
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024) {
    navLinks.style.display = "";
    navLinks.style.display = "flex";
    navLinks.style.flexDirection = "row";
    logo.style.display = "block";
  } else {
    navLinks.style.display = "none";
    logo.style.display = "hidden";
  }
});
