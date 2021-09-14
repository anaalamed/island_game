import React from "react";
import $ from 'jquery';

const Menu = ({ setNumber }) => {

    const browseMap = () => {
        console.log("browse");
    }

    const rollDice = async () => {
        const res = await fetch("http://localhost:7000/api/dice");
        const data = await res.json();

        $("#Layer9").addClass("animation");

        setTimeout(() => {
            // console.log(data.numberDice);
            setNumber(data.numberDice);
            switch (data.numberDice) {
                case (1): $("#Layer9").html(`<img src="images/dice-${1}.png">`); break;
                case (2): $("#Layer9").html(`<img src="images/dice-${2}.png">`); break;
                case (3): $("#Layer9").html(`<img src="images/dice-${3}.png">`); break;
                case (4): $("#Layer9").html(`<img src="images/dice-${4}.png">`); break;
                case (5): $("#Layer9").html(`<img src="images/dice-${5}.png">`); break;
                case (6): $("#Layer9").html(`<img src="images/dice-${6}.png">`); break;
            }
            $("#Layer9").removeClass("animation");
        }, 1000);
    }

    return (
        <>
            <div id="Shape24"><img src="images/Shape24.png" alt="" /></div>

            <div id="Browsemap"><img src="images/Browsemap.png" alt="" /></div>
            <div id="Shape26"><img src="images/Shape26.png" alt="" /></div>
            <div id="Layer8"><img src="images/Layer8.png" alt="" onClick={browseMap} /></div>

            <div id="Shape25"><img src="images/Shape25.png" alt="" /></div>
            <div id="Rolldice"><img src="images/Rolldice.png" alt="" onClick={rollDice} /></div>

            <div id="Layer9"><img src="images/dice-3.png" alt="" /></div>
        </>

    )
}

export default Menu;

