import React from 'react';
import $ from 'jquery';

const Pirate = ({ number, setNumber, isGameOver, setIsGameOver, setStatus }) => {
    // console.log('pirate', number);
    // console.log('isOver', isGameOver);



    function pirateMove(num) {

        console.log("pirate move", num);
        for (let i = 1; i <= num; i++) {
            // if (isGameOver !== 1) {
            setTimeout(() => {
                moveStep(i);
            }, 2000 * i);
            // }
        }
    }

    const moveStep = (num) => {
        // console.log('in step', isGameOver);
        // setTimeout(() => {
        // console.log('step', num);
        $('#Pirate').addClass(`pirateAnim${num}`);
        asyncMoveStep(num);
        // })
    }

    const asyncMoveStep = async (num) => {
        console.log('async', num);
        try {
            if (num === 1 || num === 2 || num === 3 || num === 4 || num === 5 || num === 6) {
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
                // setIsGameOver(data.isGameOver);
                setStatus(data);
            }
        } catch (error) {
            console.log(error)
        }
    }

    if (number) {
        // pirateMove(number);
        // setTimeout(moveStep(number), 1000);

        // moveStep(number);
        pirateMove(number);
        setNumber(null); // prevent infinite 
    }

    return (
        <>
            <div id="Pirate"><img src="images/Pirate.png" alt="" /></div>
        </>

    )
}

export default Pirate;
