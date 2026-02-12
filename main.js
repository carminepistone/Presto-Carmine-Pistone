let navabar = document.querySelector("#navbar");
let links = document.querySelectorAll(".nav-link");
let logoNavbar = document.querySelector("#logoNavbar");
let lightsaber = document.querySelector("#lightsaber");
let collapse = document.querySelector("#collapse");
let check = false;
console.dir(lightsaber);
 
window.addEventListener("scroll", () => {
    let scrolled = window.scrollY;
    if(scrolled > 0){
        navabar.classList.remove("bg-black");
        navabar.classList.add("bg-yellow");
        collapse.classList.remove("bg-black");
        collapse.classList.add("bg-yellow");
        navabar.style.height = "70px";
        links.forEach((link) => {
            link.style.color = "var(--black)";
        });
        logoNavbar.src = "http://127.0.0.1:5500/Media/logo-black.png";
    } else {
        navabar.classList.remove("bg-yellow"); // ❌ ERRORE: avevi "add" invece di "remove"
        navabar.classList.add("bg-black");
        collapse.classList.remove("bg-yellow"); // ❌ ERRORE: avevi "add" invece di "remove"
        collapse.classList.add("bg-black");
        navabar.style.height = "140px";
        links.forEach((link) => {
            link.style.color = "var(--yellow)";
        });
        logoNavbar.src = "http://127.0.0.1:5500/Media/logo-yellow.png";
    }
});

lightsaber.addEventListener("click", () => {
    if(check == false){
        lightsaber.style.transform = "rotate(-90deg)";
        check = true;
    } else {
        lightsaber.style.transform = "rotate(0deg)";
        check = false;
    }
});

window.addEventListener("scroll", () => {
    let scrolled = window.scrollY;
    if(scrolled > 0){
        lightsaber.src = "http://127.0.0.1:5500/Media/laser-black.png";
        console.log("Immagine cambiata in black");
    } else {
        lightsaber.src = "http://127.0.0.1:5500/Media/laser-yellow.png";
        console.log("Immagine cambiata in yellow");
    }
});

// Chiamate Asincrone:
let firstNumber = document.querySelector("#firstNumber");
let secondNumber = document.querySelector("#secondNumber");
let thirdNumber = document.querySelector("#thirdNumber");
let confirm = true;

function createInterval(n, element, time){
    let counter = 0;
    let interval = setInterval(() => {
        if(counter < n){
            counter++;
            element.innerHTML = counter;
        } else {
            clearInterval(interval);
        }
    }, time);

    setTimeout(() => {
        confirm = true;
    }, 8000);
}

let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting && confirm){
            createInterval(100, firstNumber, 100);
            createInterval(200, secondNumber, 50);
            createInterval(300, thirdNumber, 20);
            confirm = false;
        }
    });
});


observer.observe(firstNumber); 


// Card
let reviews =[
    {user: "User 1", description: `Bello`, rank: 5},
    {user: "User 2", description: `Brutto`, rank: 1},
    {user: "User 3", description: `Discreto`, rank: 3},
    {user: "User 4", description: `Meh`, rank: 2}
]


let swiperWrapper = document.querySelector(".swiper-wrapper");

reviews.forEach((recensione) => {
    let div = document.createElement("div");
    div.classList.add("swiper-slide");
    div.innerHTML = `
        <div class="card-review">
            <p class="lead text-center">${recensione.description}</p>
            <p class="h4 text-center">${recensione.user}</p>
            <div class="d-flex justify-content-center star">
                ${'<i class="fa-solid fa-star"></i>'.repeat(recensione.rank)}
            </div>
        </div>
    `;
    swiperWrapper.appendChild(div);
});



// Swiper Js

const swiper = new Swiper('.swiper', {
  // Optional parameters
    loop: true,
    effect: "flip",
    grabCursor: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});