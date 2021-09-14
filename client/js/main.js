// import {$} from "jquery";
// import * as $ from 'jquery';
import {} from './map.js'


const browseMap = document.getElementById("Layer8");
const dice = document.getElementById("Layer9");
const rollDice = document.getElementById("Rolldice");

const pirate = document.getElementById("Pirate");
// const pirate = $(img.pirate);


browseMap.addEventListener('click', () => {
    console.log("browse");
})

pirate.addEventListener('click', () => {
    console.log("pirate");
    pirate.classList.add("pirateAnim");

})

rollDice.addEventListener('click', async () => {
    const res = await fetch("http://localhost:7000/api/dice");
    const data = await res.json();
    console.log(data.numberDice);

    dice.classList.add("animation");

    setTimeout( () => {
        switch(data.numberDice) {
            case(1):  dice.innerHTML = `<img src="images/dice-${1}.png">`; break
            case(2):  dice.innerHTML = `<img src="images/dice-${2}.png">`; break
            case(3):  dice.innerHTML = `<img src="images/dice-${3}.png">`; break
            case(4):  dice.innerHTML = `<img src="images/dice-${4}.png">`; break
            case(5):  dice.innerHTML = `<img src="images/dice-${5}.png">`; break
            case(6):  dice.innerHTML = `<img src="images/dice-${6}.png">`; break
        }
    dice.classList.remove("animation");

    pirate.style.animation
    }, 1000);
})

