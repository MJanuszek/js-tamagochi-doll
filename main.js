const drawBtn = document.querySelector(".draw-btn");
const tryAgainBtn = document.querySelector(".try-again-btn");
const tamaDoll = document.querySelector(".tama-doll");
let ageDiv = document.querySelector(".age");
// life factor points:
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
let gettingTired;
// 
const drawTamagotchi = () => {
    startAging = setInterval(isGettingOlder, 1000);
    tamagotchiImage = tamagotchi[Math.floor(Math.random() * tamagotchi.length)];
    tamaDoll.style.backgroundImage = tamagotchiImage;
    drawBtn.disabled = true;
    happinesIntervalId = setInterval(removeHappiness, 3000);
    gettingTired = setInterval(addTiredness, 2000)
}

const isGettingOlder = () => {
    if (happiness.firstChild === null){
        clearInterval(startAging);
    }
    age++;
    ageDiv.textContent = `Your tamagotchi is ${age} seconds old`;
}


// tamagotchi life factors:::remove
const removeHappiness = () => {
    toTired()
    if(happiness.firstChild){
        happiness.removeChild(happiness.firstChild)
    } else {
        clearInterval(happinesIntervalId);
        happiness.textContent = "Tamagotchi died from unhappiness";
        ageDiv.textContent = `Your tamagotchi was ${age} seconds old`;
        console.log("Tamagotchi died from unhappiness");
        clearInterval(gettingTired);
    }
}

const addTiredness = () => {
    let sleepDiv = document.createElement("div");
    tiredness.appendChild(sleepDiv);
    sleepDiv.classList.add("isTired");
}
const toTired = () => {
    if(tiredness.children.length>17){
        clearInterval(happinesIntervalId);
        clearInterval(gettingTired);
        clearInterval(startAging);
        tiredness.textContent = "Tamagotchi died from exhaustion";
        ageDiv.textContent = `Your tamagotchi was ${age} seconds old`;
    }
}

const careForTamagotchi = () => {
    // happiness
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

    // tiredness
    if(careOptions.value === "sleep"){
            tamagotchiIsSleeping();
    }
}

const tamagotchiIsSleeping = () => {

    clearInterval(gettingTired);
    clearInterval(happinesIntervalId);
    while(tiredness.children.length > 1){
        tiredness.removeChild(tiredness.firstChild);
    }
    while(happiness.children.length < 5) {
        let div = document.createElement("div");
        happiness.appendChild(div);
        div.classList.add("isHappy");
    }
    happinesIntervalId = setInterval(removeHappiness, 3000);
    gettingTired = setInterval(addTiredness, 2000)

}

const tryAgain = () => {
    document.location.reload();
}

 drawBtn.addEventListener("click", drawTamagotchi);
 tryAgainBtn.addEventListener("click", tryAgain);
 careBtn.addEventListener("click", careForTamagotchi);