// Seleciona os links do portfólio e o som
const links = document.querySelectorAll("#portifolio a");
const clickSound = document.getElementById("click-sound");

// Reproduz som e mostra emoji
links.forEach(link => {
  link.addEventListener("click", (e) => {
    clickSound.play();
  });
});

// Contador de visitas (localStorage)
let count = localStorage.getItem("visitCount");
count = count ? parseInt(count) + 1 : 1;
localStorage.setItem("visitCount", count);

const visitDisplay = document.createElement("p");
visitDisplay.textContent = `Você visitou este site ${count} vez(es).`;
visitDisplay.style.marginTop = "1rem";
visitDisplay.style.fontStyle = "italic";
visitDisplay.style.color = "#ccc";

// Coloca o contador no final da página
document.body.appendChild(visitDisplay);


