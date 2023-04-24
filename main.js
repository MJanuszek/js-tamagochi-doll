const drawBtn = document.querySelector(".draw-btn");
const tamaDoll = document.querySelector(".tama-doll");
let ageDiv = document.querySelector(".age");
const happiness = document.querySelector(".happiness");
const health = document.querySelector(".health");
const tiredness = document.querySelector(".tiredness");
const careOptions = document.getElementById("taking-care");
const careBtn = document.querySelector(".take-care-btn");

let tamagotchiImage
let age = 0;

//  
const tamagotchi = [
    "url('img/carter-baran-75IgLbgqRls-unsplash.jpg')",
    "url('img/rock-n-roll-monkey-LEPhZkQbUrk-unsplash.jpg')",
    "url('img/alison-wang-mou0S7ViElQ-unsplash.jpg')",
]
// -----------------------------------------------
let startAging;
let happinesIntervalId;
// 
const drawTamagotchi = () => {
    startAging = setInterval(isGettingOlder, 1000);
    tamagotchiImage = tamagotchi[Math.floor(Math.random() * tamagotchi.length)];
    tamaDoll.style.backgroundImage = tamagotchiImage;
    drawBtn.disabled = true;
    happinesIntervalId = setInterval(removeHappiness, 1000);
    
}

const isGettingOlder = () => {
    if (happiness.firstChild === null){
        clearInterval(startAging)
    }
    age++;
    ageDiv.textContent = `Your tamagotchi is ${age} seconds old`;
}


// tamagotchi life factors:::remove
const removeHappiness = () => {
    if(happiness.firstChild){
        happiness.removeChild(happiness.firstChild)
    } else {
        clearInterval(happinesIntervalId)
        happiness.textContent = "Tamagotchi died from unhappiness";
        console.log("Tamagotchi died from unhappiness");
    }
}

const careForTamagotchi = () => {
    if(careOptions.value === "happiness") {
        if(happiness.children.length >= 5) {
            console.log("Maxinum happiness")
        } else {
            let div = document.createElement("div");
            happiness.appendChild(div);
            div.classList.add("isHappy")
            console.log(happiness)
        }
        
    }
}

 drawBtn.addEventListener("click", drawTamagotchi);
 careBtn.addEventListener("click", careForTamagotchi);