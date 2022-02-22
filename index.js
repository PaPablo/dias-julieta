const setContador = () => {
  const hoy = new Date();
  const llegada = new Date(2022, 2, 2, 19);

  const diff = Math.floor((llegada - hoy) / 1000);

  const dias = Math.floor(diff / 3600 / 24);
  const horas = Math.floor((diff / 3600) % 24);
  const minutos = Math.floor(diff / 60) % 60;
  const segundos = diff % 60;

  const diasSpan = document.querySelector(".dias");
  const horasSpan = document.querySelector(".horas");
  const minutosSpan = document.querySelector(".minutos");
  const segundosSpan = document.querySelector(".segundos");

  diasSpan.innerHTML = `${dias}`;
  horasSpan.innerHTML = `${horas}`;
  minutosSpan.innerHTML = `${minutos}`;
  segundosSpan.innerHTML = `${segundos}`;
};

document.addEventListener("DOMContentLoaded", (event) => {
  setContador();
});

setInterval(setContador, 1000);
