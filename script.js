function toggleTimer(id) {
  const el = document.getElementById(id);
  el.classList.toggle("hidden");
}

// FUNÇÃO DO TEMPO
function atualizarTimer(id, dataFinal) {
  const agora = new Date().getTime();
  const distancia = dataFinal - agora;

  if (distancia < 0) {
    document.getElementById(id).innerHTML = "Conquistado 🎉";
    return;
  }

  const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

  document.getElementById(id).innerHTML =
    `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}

// 📅 DATAS REALISTAS PRA VOCÊ (17 anos)

const objetivo1 = new Date("2027-01-15").getTime(); // entrar na faculdade
const objetivo2 = new Date("2028-06-01").getTime(); // comprar moto
const objetivo3 = new Date("2033-01-01").getTime(); // casa própria
const objetivo4 = new Date("2029-07-01").getTime(); // viagem

setInterval(() => {
  atualizarTimer("timer1", objetivo1);
  atualizarTimer("timer2", objetivo2);
  atualizarTimer("timer3", objetivo3);
  atualizarTimer("timer4", objetivo4);
}, 1000);
