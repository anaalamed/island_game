import {} from './map.js'

// browse map
$("#Layer8").click( function() {
    console.log("browse");
})

// pirate animation
$("#Pirate").click( function() {
    console.log("pirate");
    $(this).addClass("pirateAnim");
})

// roll dice
$("#Rolldice").click( async function() {

    const res = await fetch("http://localhost:7000/api/dice");
    const data = await res.json();
    console.log(data.numberDice);
        
    // dice.classList.add("animation");
    $("#Layer9").addClass("animation");
        
    setTimeout( () => {
    switch(data.numberDice) {
        case(1):  dice.innerHTML = `<img src="images/dice-${1}.png">`; break
        case(2):  dice.innerHTML = `<img src="images/dice-${2}.png">`; break
        case(3):  dice.innerHTML = `<img src="images/dice-${3}.png">`; break
        case(4):  dice.innerHTML = `<img src="images/dice-${4}.png">`; break
        case(5):  dice.innerHTML = `<img src="images/dice-${5}.png">`; break
        case(6):  dice.innerHTML = `<img src="images/dice-${6}.png">`; break
    }
    $("#Layer9").removeClass("animation");
    }, 1000);
})

const move = (num) => {
    for (let i=1; i<=num; i++) {
        setTimeout( () => {
            console.log('step', i)
            moveStep(i);
        }, 2000*i);
    } 
}

const moveStep = (num) => {
    console.log('num', num)
    $('#Pirate').addClass(`pirateAnim${num}`);

    setTimeout(() => {
    // $('#Pirate').removeClass(`pirateAnim${num}`)
    }, 2000);

}

move(6);