import React, { useState } from 'react';
import $ from 'jquery';
import styled from "styled-components";
import { FaExpandAlt } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

const Menu = ({ setNumber, timeGame }) => {
    const [display, setDisplay] = useState(1);
    const [sign, setSign] = useState(AiOutlineClose);

    const browseMap = () => {
        console.log("browse");
    }

    const time = (timeGame > 0) ? (timeGame + 2000) : 5000; // at the first render get 0

    const rollDice = async () => {
        console.log(timeGame);

        $(".roll-dice").addClass("disabledbutton");
        setTimeout(() => $(".roll-dice").removeClass("disabledbutton"), time);

        const res = await fetch("https://anaalamed-island-game.herokuapp.com/api/dice");
        // const res = await fetch("http://localhost:7000/api/dice");

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

    const toogleDisplay = () => {
        if (display === 1) {
            setDisplay(0);
            setSign(FaExpandAlt);
        } else {
            setDisplay(1);
            setSign(AiOutlineClose);
        }
    }

    return (
        <>
            <Button display={display} onClick={toogleDisplay}>{sign}</Button>
            <Box display={display}>
                <div id="Shape24" className="background-image">
                    <div className="browse-map">
                        <div id="Shape26" className="browse-map-btn">
                            <img src="images/Layer8.png" alt="" onClick={browseMap} />
                        </div>
                        <div id="Browsemap"><img src="images/Browsemap.png" alt="" /></div>
                    </div>
                    <div className="roll-dice-background">
                        <div className="roll-dice">
                            <div id="Rolldice" onClick={rollDice}><img src="images/Rolldice.png" alt="" /></div>
                        </div>
                    </div>

                    <div id="Layer9" className="dice"><img src="images/dice-4.png" alt="" /></div>
                </div>
            </Box>
        </>
    )
}

export default Menu;

const Box = styled.div`
    display: ${props => (props.display ? "block" : "none")};
    z-index: 101;
`;

const Button = styled.button`
    right: 50px;
    top: 26px;
	position: fixed; 
    z-index: 101;
    background: ${props => (props.display) ? "red" : "white"};
    width: ${props => (props.display) ? "1.7rem" : "3rem"};
    height: ${props => (props.display) ? "1.7rem" : "3rem"};
    border-radius: 50%;
`;

