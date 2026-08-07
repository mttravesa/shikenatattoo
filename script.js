/* ==========================================
   SHIKENA TATTOO
   SCRIPT.JS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       LIGHTBOX
    ========================== */

    const galleryImages = document.querySelectorAll(".gallery img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".close");

    galleryImages.forEach(img => {

        img.addEventListener("click", () => {

            lightbox.style.display = "flex";

            lightboxImg.src = img.src;

        });

    });

    if(closeBtn){

        closeBtn.addEventListener("click", () => {

            lightbox.style.display = "none";

        });

    }

    if(lightbox){

        lightbox.addEventListener("click",(e)=>{

            if(e.target===lightbox){

                lightbox.style.display="none";

            }

        });

    }


    /* ==========================
       SCROLL SUAVE
    ========================== */

    document.querySelectorAll('nav a').forEach(anchor=>{

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


    /* ==========================
       ANIMACIÓN AL HACER SCROLL
    ========================== */

    const observer=new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("visible");

            }

        });

    },{

        threshold:.15

    });

    document.querySelectorAll(".gallery-section,.video-section,.cta").forEach(sec=>{

        observer.observe(sec);

    });

});


/* ==========================================
   BOTÓN VOLVER ARRIBA
========================================== */

const topButton=document.createElement("button");

topButton.innerHTML="↑";

topButton.className="topButton";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topButton.style.opacity="1";

        topButton.style.pointerEvents="auto";

    }else{

        topButton.style.opacity="0";

        topButton.style.pointerEvents="none";

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/* ==========================================
   AÑO AUTOMÁTICO FOOTER
========================================== */

const year=new Date().getFullYear();

const copyright=document.querySelector(".copyright");

if(copyright){

    copyright.innerHTML=`© ${year} Shikena Tattoo · All Rights Reserved`;

}
