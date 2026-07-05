// Smooth scroll for all links
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(target){
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// Fade in gallery images
const images = document.querySelectorAll(".gallery img");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";
        }

    });

});

images.forEach(img=>{

    img.style.opacity="0";
    img.style.transform="translateY(40px)";
    img.style.transition="0.7s";

    observer.observe(img);

});


// Click image to open in full screen
images.forEach(img=>{

    img.addEventListener("click",()=>{

        const overlay=document.createElement("div");

        overlay.style.position="fixed";
        overlay.style.top="0";
        overlay.style.left="0";
        overlay.style.width="100%";
        overlay.style.height="100%";
        overlay.style.background="rgba(0,0,0,0.9)";
        overlay.style.display="flex";
        overlay.style.justifyContent="center";
        overlay.style.alignItems="center";
        overlay.style.zIndex="9999";

        const photo=document.createElement("img");

        photo.src=img.src;
        photo.style.maxWidth="90%";
        photo.style.maxHeight="90%";
        photo.style.borderRadius="15px";

        overlay.appendChild(photo);

        overlay.onclick=()=>overlay.remove();

        document.body.appendChild(overlay);

    });

});
