// ======================================================
// SHIKENA TATTOO
// SCRIPT.JS
// PARTE 1
// ======================================================

// ==========================================
// MENÚ MÓVIL
// ==========================================

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if(menuToggle){

    menuToggle.addEventListener("click",()=>{

        mainNav.classList.toggle("open");

    });

}

// ==========================================
// CERRAR MENÚ AL PULSAR UN ENLACE
// ==========================================

document.querySelectorAll(".nav-link").forEach(link=>{

    link.addEventListener("click",()=>{

        mainNav.classList.remove("open");

    });

});

// ==========================================
// HEADER AL HACER SCROLL
// ==========================================

const header=document.getElementById("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        header.style.background="rgba(5,5,5,.98)";
        header.style.backdropFilter="blur(18px)";
        header.style.borderBottom="1px solid rgba(255,255,255,.08)";

    }else{

        header.style.background="rgba(5,5,5,.92)";
        header.style.backdropFilter="blur(14px)";
        header.style.borderBottom="1px solid rgba(255,255,255,.05)";

    }

});

// ==========================================
// SCROLL SUAVE
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const destino=document.querySelector(this.getAttribute("href"));

        if(destino){

            destino.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// ==========================================
// BOTONES GALERÍA
// ==========================================

const botones=document.querySelectorAll(".tab-btn");

const galerias=document.querySelectorAll(".gallery-grid");

botones.forEach(boton=>{

    boton.addEventListener("click",()=>{

        botones.forEach(btn=>btn.classList.remove("active"));

        boton.classList.add("active");

        galerias.forEach(grid=>{

            grid.classList.remove("active-grid");

        });

        const categoria=boton.dataset.category;

        const destino=document.getElementById(categoria);

        if(destino){

            destino.classList.add("active-grid");

        }

    });

});

// ==========================================
// EFECTO HOVER TÁCTIL
// ==========================================

document.querySelectorAll(".gallery-item").forEach(item=>{

    item.addEventListener("touchstart",()=>{

        item.classList.add("hover");

    });

    item.addEventListener("touchend",()=>{

        setTimeout(()=>{

            item.classList.remove("hover");

        },250);

    });

});
// ======================================================
// SHIKENA TATTOO
// SCRIPT.JS
// PARTE 2
// ======================================================

// ==========================================
// LISTA DE VÍDEOS
// ==========================================

const videoList = [

"VID-2026O630-WA0030.mp4",
"VID-2026O714-WA0028.mp4",
"VID-2026O714-WA0030.mp4",
"VID-2026O728-WA0045.mp4",
"VID-2026O729-WA0059.mp4",
"VID-2026O729-WA0060.mp4",
"VID-2026O729-WA0071.mp4",
"VID-2026O729-WA0072.mp4",
"VID-2026O729-WA0073.mp4",
"VID-2026O729-WA0074.mp4"

];

const videosGrid = document.getElementById("videosGrid");

if(videosGrid){

    videoList.forEach(video=>{

        const card=document.createElement("div");

        card.className="video-item";

        card.innerHTML=`

            <video controls preload="metadata">

                <source src="videos/${video}" type="video/mp4">

                Tu navegador no soporta vídeo.

            </video>

            <div class="video-info">

                ${video.replace(".mp4","")}

            </div>

        `;

        videosGrid.appendChild(card);

    });

}

// ==========================================
// LIGHTBOX GALERÍA
// ==========================================

const lightbox=document.createElement("div");

lightbox.id="lightbox";

lightbox.innerHTML=`

<span id="closeLightbox">&times;</span>

<img id="lightboxImage">

`;

document.body.appendChild(lightbox);

const lightboxImg=document.getElementById("lightboxImage");

const closeLightbox=document.getElementById("closeLightbox");

document.querySelectorAll(".gallery-item img").forEach(img=>{

    img.addEventListener("click",()=>{

        lightbox.classList.add("show");

        lightboxImg.src=img.src;

        lightboxImg.alt=img.alt;

        document.body.style.overflow="hidden";

    });

});

closeLightbox.addEventListener("click",()=>{

    lightbox.classList.remove("show");

    document.body.style.overflow="auto";

});

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.classList.remove("show");

        document.body.style.overflow="auto";

    }

});

// ==========================================
// ANIMACIONES AL HACER SCROLL
// ==========================================

const observer=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("visible");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(

".section,.gallery-item,.video-item,.hero-img"

).forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});

// ==========================================
// EFECTO SUAVE EN BOTONES
// ==========================================

document.querySelectorAll("button,.btn-hero,.contact-btn").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transition=".3s";

    });

});
