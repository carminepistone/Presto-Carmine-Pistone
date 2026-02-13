let opener = document.querySelector(".opener");
let circle = document.querySelector(".circle");
let teachers = [
    {name: "Matteo", description: "Docente", url: "https://picsum.photos/50/50"},
    {name: "Marco", description: "Docente2", url: "https://picsum.photos/51/51"},
    {name: "Mario", description: "Docente3", url: "https://picsum.photos/52/52"},
    {name: "Massimo", description: "Docente4", url: "https://picsum.photos/53/53"},
];

teachers.forEach((docente)=>{
    let div = document.createElement("div");
    div.classList.add("moved");
    div.style.backgroundImage = `url(${docente.url})`;
    circle.appendChild(div);
})

let movedDivs = document.querySelectorAll(".moved");

let check = false;

let flipCard = document.querySelector(".flip-card");

opener.addEventListener("click", ()=>{
    if(check == false){
    opener.style.transform = "rotate(45deg)";
    movedDivs.forEach((moved, i)=>{
        let angle = (360 * i) / movedDivs.length;
        moved.style.transform = `rotate(${angle}deg) translate(150px) rotate(-${angle}deg)`;
    });
    check = true;
    }else{
    check = false;
    opener.style.transform = "";
    movedDivs.forEach((moved, i)=>{
        moved.style.transform = ``;
    });
    flipCard.classList.add("d-none");
    }
});


let innerFace = document.querySelector(".inner-face");
let cardName = document.querySelector("#cardName");
let cardDescription = document.querySelector("#cardDescription");



movedDivs.forEach( (moved, i)=>{ 
    moved.addEventListener("click", ()=>{
        flipCard.classList.remove("d-none");
        let docente = teachers[i];
        innerFace.style.backgroundImage = `url(${docente.url})`;
        cardName.innerHTML = docente.name;
        cardDescription.innerHTML = docente.description;

    });
});
 


