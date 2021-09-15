import React from "react";
import $ from 'jquery';

const Pirate = ({ number, setNumber, isGameOver, setIsGameOver }) => {
    // console.log('pirate', number);
    console.log('isOver', isGameOver);

    // const pirateMove = (num) => {
    function pirateMove(num) {

        console.log("pirate move", num);
        for (let i = 1; i <= num; i++) {
            if (isGameOver !== 1) {
                setTimeout(() => {
                    moveStep(i);
                }, 2000 * i);
            }
        }
    }

    const moveStep = (num) => {
        // console.log('in step', isGameOver);
        // setTimeout(() => {
        console.log('step', num);
        $('#Pirate').addClass(`pirateAnim${num}`);
        asyncMoveStep(num);
        // })
    }

    const asyncMoveStep = async (num) => {
        console.log('async', num);
        try {
            // const response = await fetch('http://localhost:7000/api/cell', {
            const response = await fetch('https://anaalamed-island-game.herokuapp.com/api/cell', {

                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ cell: num })
            });
            const data = await response.json();
            console.log(data);
            setIsGameOver(data.isGameOver);
        } catch (error) {
            console.log(error)
        }
    }

    if (number) {
        // pirateMove(number);
        pirateMove(6);
        setNumber(null);
    }

    return (
        <>
            <div id="Pirate"><img src="images/Pirate.png" alt="" /></div>
        </>

    )
}

export default Pirate;
