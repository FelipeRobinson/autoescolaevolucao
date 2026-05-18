/* FUNÇÃO SCROLL */
window.addEventListener("scroll", function () {
    const nav = document.getElementById("navbar");
    if (window.scrollY > window.innerHeight * 0.8) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});


/* MENU HAMBURGUER */
const hamburguer = document.getElementById("hamburguer");
const menu = document.getElementById("menu");

hamburguer.addEventListener("click", () => {
    menu.classList.toggle("active");
    hamburguer.classList.toggle("active");
});


document.addEventListener("DOMContentLoaded", function () {
    /* FUNÇÃO ANIMAÇÃO QUEM SOMOS */
    const historySection = document.querySelector(".history");

    if (historySection) {
        const showHistorySection = () => {
            historySection.classList.add("show");
        };

        const hideHistorySection = () => {
            historySection.classList.remove("show");
        };

        if ("IntersectionObserver" in window) {
            const historyObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        showHistorySection();
                    } else {
                        hideHistorySection();
                    }
                });
            }, {
                threshold: 0.35,
                rootMargin: "0px 0px -12% 0px"
            });

            historyObserver.observe(historySection);
        } else {
            showHistorySection();
        }
    }

    /* FUNÇÃO CAMINHO DA HISTÓRIA */
    const journeySteps = document.querySelectorAll(".journey-step");
    const journeyTitle = document.getElementById("journey-title");
    const journeyText = document.getElementById("journey-text");
    const journeyCard = document.querySelector(".journey-card");

    const storyContent = {
        sonho: {
            title: "Um sonho que virou autoescola",
            text: "A Evolução nasceu da vontade de ensinar direção com mais proximidade, cuidado e propósito."
        },
        experiencia: {
            title: "Experiência prática de verdade",
            text: "Anos formando alunos e aperfeiçoando condutores ajudaram a criar um ensino mais humano e seguro."
        },
        suporte: {
            title: "Apoio em cada etapa da CNH",
            text: "Do primeiro contato até a conclusão do processo, a missão é simplificar o caminho do aluno."
        }
    };

    const changeStory = (storyKey) => {
        const selectedStory = storyContent[storyKey];

        if (!selectedStory || !journeyTitle || !journeyText || !journeyCard) {
            return;
        }

        journeySteps.forEach(step => {
            step.classList.toggle("active", step.dataset.story === storyKey);
        });

        journeyTitle.textContent = selectedStory.title;
        journeyText.textContent = selectedStory.text;
        journeyCard.classList.remove("changing");
        void journeyCard.offsetWidth;
        journeyCard.classList.add("changing");
    };

    journeySteps.forEach(step => {
        step.addEventListener("mouseenter", () => changeStory(step.dataset.story));
        step.addEventListener("click", () => changeStory(step.dataset.story));
    });

    if (journeySteps.length > 0) {
        let currentStory = 0;

        setInterval(() => {
            if (!historySection || !historySection.classList.contains("show")) {
                return;
            }

            currentStory = (currentStory + 1) % journeySteps.length;
            changeStory(journeySteps[currentStory].dataset.story);
        }, 3500);
    }

    const historyToggle = document.querySelector(".history-toggle");

    if (historyToggle && historySection) {
        historyToggle.addEventListener("click", () => {
            const isExpanded = historySection.classList.toggle("expanded");

            historyToggle.setAttribute("aria-expanded", isExpanded);
            historyToggle.firstChild.textContent = isExpanded ? " Recolher história " : " Ler história completa ";
        });
    }

    /* FUNÇÃO ANIMAÇÃO FALE CONOSCO */
    const contactSection = document.querySelector(".sixth");

    if (contactSection) {
        const showContactSection = () => {
            contactSection.classList.add("show");
        };

        const hideContactSection = () => {
            contactSection.classList.remove("show");
        };

        if ("IntersectionObserver" in window) {
            const contactObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        showContactSection();
                    } else {
                        hideContactSection();
                    }
                });
            }, {
                threshold: 0.3,
                rootMargin: "0px 0px -10% 0px"
            });

            contactObserver.observe(contactSection);
        } else {
            showContactSection();
        }
    }

    /* FUNÇÃO ANIMAÇÃO DOS CARDS */
    const cardsPacotes = document.querySelectorAll(".pacotes");

    cardsPacotes.forEach(card => {
        card.addEventListener("pointermove", function(e) {
            if (e.pointerType === "touch") {
                return;
            }

            const cardPosition = card.getBoundingClientRect();
            const x = e.clientX - cardPosition.left;
            const y = e.clientY - cardPosition.top;
            const centerX = cardPosition.width / 2;
            const centerY = cardPosition.height / 2;

            const rotateY = ((x - centerX) / centerX) * 5;
            const rotateX = ((centerY - y) / centerY) * 5;

            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
            card.style.setProperty("--rotate-x", `${rotateX}deg`);
            card.style.setProperty("--rotate-y", `${rotateY}deg`);
        });

        card.addEventListener("pointerleave", function() {
            card.style.setProperty("--mouse-x", "50%");
            card.style.setProperty("--mouse-y", "50%");
            card.style.setProperty("--rotate-x", "0deg");
            card.style.setProperty("--rotate-y", "0deg");
        });
    });


    /* FUNÇÃO CONTATO ALEATÓRIO */
    const cadastroForm = document.querySelector(".cadastro");

    if (cadastroForm) {
        cadastroForm.addEventListener("submit", function(e) {
            e.preventDefault();
        });
    }

    const numeros = [
        "5519989132598",
        "5519992947773"
    ];

    const botoes = document.querySelectorAll("#botao, #botao-menu, .whatsapp-btn");

    const abrirWhatsAppAleatorio = (mensagem) => {
        const numeroEscolhido = numeros[Math.floor(Math.random() * numeros.length)];
        const url = `https://wa.me/${numeroEscolhido}?text=${encodeURIComponent(mensagem)}`;

        window.open(url, "_blank");
    };

    botoes.forEach(btn => {
        btn.addEventListener("click", function(e) {
            e.preventDefault();

            let mensagem = "Olá, vim pelo site e gostaria de mais informações sobre adquirir a minha CNH!";

            if (btn.classList.contains("signup-submit")) {
                const email = document.getElementById("cadastro-email")?.value.trim();
                const numero = document.getElementById("cadastro-numero")?.value.trim();

                mensagem = "Olá, vim pelo site e gostaria de fazer meu cadastro.";

                if (email) {
                    mensagem += ` Meu e-mail: ${email}.`;
                }

                if (numero) {
                    mensagem += ` Meu telefone: ${numero}.`;
                }
            }

            abrirWhatsAppAleatorio(mensagem);
        });
    });
});
