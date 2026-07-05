// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Fade in animation
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";
        }
    });
},{threshold:.2});

document.querySelectorAll(".quote,.letter,.music,.gallery img").forEach(el=>{
    el.style.opacity="0";
    el.style.transform="translateY(50px)";
    el.style.transition="all .8s ease";
    observer.observe(el);
});

// Fullscreen gallery
document.querySelectorAll(".gallery img").forEach(img=>{

img.onclick=()=>{

const overlay=document.createElement("div");

overlay.style.cssText=`
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:rgba(0,0,0,.92);
display:flex;
justify-content:center;
align-items:center;
z-index:99999;
cursor:pointer;
`;

const photo=document.createElement("img");

photo.src=img.src;

photo.style.cssText=`
max-width:90%;
max-height:90%;
border-radius:20px;
box-shadow:0 20px 60px rgba(0,0,0,.5);
`;

overlay.appendChild(photo);

overlay.onclick=()=>overlay.remove();

document.body.appendChild(overlay);

}

});

// Hero button animation
const btn=document.querySelector("button");

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});
