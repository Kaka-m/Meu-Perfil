console.log("Funcionou!");

const nome = document.querySelector("h1");
nome.textContent = "Olá, eu sou Kauan Deivid!";

const botaoTema = document.querySelector("#alternar-tema");
const corpo = document.querySelector("body");

botaoTema.addEventListener("click", () => {
	document.body.classList.toggle("modo-escuro");
});
function atualizarRelogio(){
    const agora = new Date ()
    const horas = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');
    const segundos = String(agora.getSeconds()).padStart(2, '0');



    const horarioFormatado = `${horas}:${minutos}:${segundos}`;
    document.getElementById('relogio-digital').textContent = horarioFormatado;
}

setInterval(atualizarRelogio, 1000);
atualizarRelogio();