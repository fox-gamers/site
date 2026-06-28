// =========================
// MENU AO ROLAR
// =========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(5,18,35,.95)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

    } else {

        header.style.background = "rgba(5,18,35,.75)";
        header.style.boxShadow = "none";

    }

});

// =========================
// BOTÃO TOPO
// =========================

const topButton = document.getElementById("topButton");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.style.opacity = "1";
        topButton.style.pointerEvents = "all";

    } else {

        topButton.style.opacity = "0";
        topButton.style.pointerEvents = "none";

    }

});

// =========================
// CONTADORES
// =========================

function contador(id, numero){

    let valor = 0;

    const elemento = document.getElementById(id);

    const velocidade = numero / 120;

    const intervalo = setInterval(()=>{

        valor += velocidade;

        if(valor >= numero){

            valor = numero;

            clearInterval(intervalo);

        }

        elemento.innerHTML = Math.floor(valor);

    },15);

}

let iniciou = false;

window.addEventListener("scroll",()=>{

    const cards = document.querySelector(".cards");

    if(!cards) return;

    const posicao = cards.offsetTop - window.innerHeight + 150;

    if(window.scrollY > posicao && !iniciou){

        iniciou = true;

        contador("clientes",10);

        contador("equipamentos",4500);

    }

});

// =========================
// FAQ
// =========================

const perguntas = document.querySelectorAll(".item");

perguntas.forEach(item=>{

    const botao = item.querySelector("button");

    const resposta = item.querySelector(".resposta");

    botao.onclick=()=>{

        const aberta = resposta.style.display=="block";

        document.querySelectorAll(".resposta").forEach(r=>{

            r.style.display="none";

        });

        if(!aberta){

            resposta.style.display="block";

        }

    }

});

// =========================
// ANIMAÇÃO AO ROLAR
// =========================

const revelar = document.querySelectorAll(
".card,.service,.numero,.passo,.foto,.depoimento,.item,form");

const observer = new IntersectionObserver((entradas)=>{

    entradas.forEach((entrada)=>{

        if(entrada.isIntersecting){

            entrada.target.style.opacity="1";

            entrada.target.style.transform="translateY(0)";

        }

    });

},{
    threshold:.15
});

revelar.forEach((el)=>{

    el.style.opacity="0";

    el.style.transform="translateY(50px)";

    el.style.transition=".8s";

    observer.observe(el);

});

// =========================
// EFEITO PARALLAX
// =========================

const heroImage = document.querySelector(".hero-image img");

window.addEventListener("mousemove",(e)=>{

    if(!heroImage) return;

    const x = (window.innerWidth/2 - e.clientX)/45;

    const y = (window.innerHeight/2 - e.clientY)/45;

    heroImage.style.transform =
    `translate(${x}px,${y}px)`;

});

// =========================
// EFEITO NOS CARDS
// =========================

document.querySelectorAll(".service").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        card.style.background=
        `radial-gradient(circle at ${x}px ${y}px,#1d4ed8,#10253d)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.background="#10253d";

    });

});

// =========================
// TEXTO DIGITANDO
// =========================

const titulo = document.querySelector(".hero h1");

if(titulo){

const texto = titulo.innerHTML;

titulo.innerHTML="";

let i=0;

function escrever(){

    if(i<texto.length){

        titulo.innerHTML+=texto.charAt(i);

        i++;

        setTimeout(escrever,25);

    }

}

setTimeout(escrever,400);

}

// =========================
// BARRA DE PROGRESSO
// =========================

const barra = document.createElement("div");

barra.style.position="fixed";
barra.style.top="0";
barra.style.left="0";
barra.style.height="4px";
barra.style.width="0%";
barra.style.background="#14b8ff";
barra.style.zIndex="999999";

document.body.appendChild(barra);

window.addEventListener("scroll",()=>{

    const altura =
    document.documentElement.scrollHeight-
    document.documentElement.clientHeight;

    const progresso =
    window.scrollY/altura*100;

    barra.style.width=progresso+"%";

});
window.onload = () => {
    ...
}
const menu = document.querySelector(".menu-toggle");

const nav = document.querySelector("nav");

menu.onclick = () => {

    nav.classList.toggle("active");

}
const slides=document.querySelector(".slides");

let indice=0;

setInterval(()=>{

indice++;

if(indice>=3){

indice=0;

}

slides.style.transform=
`translateX(-${indice*100}%)`;

},4000);
/*==========================
CURSOR COM RASTRO
==========================*/

const cursor = document.querySelector(".cursor");
const glow = document.querySelector(".cursor-glow");

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let glowX = mouseX;
let glowY = mouseY;

document.addEventListener("mousemove", (e) => {

    mouseX = e.clientX;
    mouseY = e.clientY;

    cursor.style.left = mouseX + "px";
    cursor.style.top = mouseY + "px";

});

function animarCursor(){

    glowX += (mouseX - glowX) * 0.15;
    glowY += (mouseY - glowY) * 0.15;

    glow.style.left = glowX + "px";
    glow.style.top = glowY + "px";

    requestAnimationFrame(animarCursor);

}

animarCursor();
