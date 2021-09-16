import React from 'react';
import $ from 'jquery';

const Pirate = ({ number, setNumber, setStatus, setTimeGame }) => {

    function pirateMove(num) {
        console.log("pirate move", num);
        let lastNum;
        for (let i = 1; i <= num; i++) {
            setTimeout(() => {
                moveStep(i);
            }, 2000 * i);
            lastNum = i;
            setTimeGame(lastNum * 2000);
        }
        setTimeout(() => asyncMoveStep(lastNum), 2000 * lastNum);
    }

    const moveStep = (num) => {
        $('#Pirate').addClass(`pirateAnim${num}`);
        setTimeout(() => {
            $('#Pirate').removeClass(`pirateAnim${num}`);
        }, 5000);
    }

    const asyncMoveStep = async (num) => {
        console.log('async', num);
        try {
            if (num === 1 || num === 2 || num === 3 || num === 4 || num === 5 || num === 6) {
                const response = await fetch('https://anaalamed-island-game.herokuapp.com/api/cell', {
                    // const response = await fetch('http://localhost:7000/api/cell', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ cell: num })
                });
                const data = await response.json();
                console.log(data);
                setTimeout(() => setStatus(data), 2000)
            }
        } catch (error) {
            console.log(error)
        }
    }

    if (number) {
        pirateMove(number);
        // pirateMove(5);
        setNumber(null); // prevent infinite 
    }

    return (
        <>
            <div id="Pirate"><img src="images/Pirate.png" alt="" /></div>
        </>

    )
}

export default Pirate;
