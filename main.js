let navabar = document.querySelector("#navbar")
let links = document.querySelectorAll(".nav-link")
let logoNavbar = document.querySelector("#logoNavbar")

console.dir(logoNavbar);
 
window.addEventListener("scroll", ()=>{
    let scrolled = window.scrollY;

    if(scrolled > 0){
        navabar.classList.remove("bg-black");
        navabar.classList.add("bg-yellow");
        navabar.style.height = "70px";
        links.forEach((link)=>{
            link.style.color = "var(--black)";
        });
        logoNavbar.src = "http://127.0.0.1:5500/Media/logo-black.png";
    }else{
        navabar.classList.add("bg-black");
        navabar.classList.add("bg-yellow");
        navabar.style.height = "140px";
       links.forEach((link)=>{
            link.style.color = "var(--yellow)";
        });
        logoNavbar.src = "http://127.0.0.1:5500/Media/logo-yellow.png";
    };
})