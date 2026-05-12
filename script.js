window.addEventListener("scroll", function () {
    const nav = document.getElementById("navbar");
    if (window.scrollY > window.innerHeight * 0.8) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});

const hamburguer = document.getElementById("hamburguer");
const menu = document.getElementById("menu");

hamburguer.addEventListener("click", () => {
    menu.classList.toggle("active");
    hamburguer.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {

    const numeros = [
        "+5519989132598",
        "+5519992947773"
    ];

    const botoes = document.querySelectorAll(".whatsapp-btn");

    botoes.forEach(btn => {
        btn.addEventListener("click", function(e) {
            e.preventDefault();

            const numeroEscolhido = numeros[Math.floor(Math.random() * numeros.length)];

            const mensagem = "Olá, gostaria de mais informações sobre adquirir a minha CNH!";
            const url = `https://wa.me/${numeroEscolhido}?text=${encodeURIComponent(mensagem)}`;

            window.open(url, "_blank");
        });
    });
});