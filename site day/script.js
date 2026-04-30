function toggleTimer(id) {
  const el = document.getElementById(id);

  if (el.classList.contains("hidden")) {
    el.classList.remove("hidden");

    setTimeout(() => {
      el.classList.add("show");
    }, 10);

  } else {
    el.classList.remove("show");

    setTimeout(() => {
      el.classList.add("hidden");
    }, 300);
  }
}

function atualizarTimer(id, dataFinal) {
  const agora = new Date().getTime();
  const distancia = dataFinal - agora;

  if (distancia < 0) {
    document.getElementById(id).innerHTML = "💖 Conquistado!";
    return;
  }

  const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

  document.getElementById(id).innerHTML =
    `💗 ${dias}d ${horas}h ${minutos}m ${segundos}s`;
}

// Datas
const objetivo1 = new Date("2027-01-15").getTime();
const objetivo2 = new Date("2028-06-01").getTime();
const objetivo3 = new Date("2033-01-01").getTime();
const objetivo4 = new Date("2029-07-01").getTime();

setInterval(() => {
  atualizarTimer("timer1", objetivo1);
  atualizarTimer("timer2", objetivo2);
  atualizarTimer("timer3", objetivo3);
  atualizarTimer("timer4", objetivo4);
}, 1000);
// glitter seguindo o mouse
document.addEventListener("mousemove", function(e) {
  const sparkle = document.createElement("div");

  sparkle.style.position = "fixed";
  sparkle.style.left = e.clientX + "px";
  sparkle.style.top = e.clientY + "px";
  sparkle.style.width = "6px";
  sparkle.style.height = "6px";
  sparkle.style.background = "#ffb6d9";
  sparkle.style.borderRadius = "50%";
  sparkle.style.pointerEvents = "none";
  sparkle.style.zIndex = "999";

  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.style.transition = "0.5s";
    sparkle.style.opacity = "0";
    sparkle.style.transform = "scale(2)";
  }, 10);

  setTimeout(() => {
    sparkle.remove();
  }, 500);
});
const heartsContainer = document.querySelector(".hearts");

window.addEventListener("DOMContentLoaded", () => {

  const heartsContainer = document.querySelector(".hearts");

  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💗";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 10 + 12) + "px";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 6000);

  }, 500);

});