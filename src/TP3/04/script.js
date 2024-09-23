// Seleciona o botão de alternância e o menu de navegação
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelectorAll(".bottom-nav ul li");
const bottomNav = document.querySelector(".bottom-nav");

// Adiciona o evento de clique ao botão
menuToggle.addEventListener("click", () => {
  // Itera sobre todos os itens de navegação e alterna a classe "hide"
  navLinks.forEach((link) => {
    link.classList.toggle("hide");
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    navLinks.style.display = "flex";
    menuToggle.style.display = "hidden";
  } else {
    navLinks.forEach((link) => {
      link.classList.remove("hide");
    });
  }
});
