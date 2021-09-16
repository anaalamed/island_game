import React, { useState } from 'react';

import Menu from './Menu';
import Pirate from './Pirate';
import Messages from './Messages';
import Map from './Map';
import Other from './Other';
import Cell1 from './Cell1.island';
import Cell2 from './Cell2.rum';
import Cell3 from './Cell3.dragon';
import Cell4 from './Cell4.treasure';
import Cell5 from './Cell5.bottle';
import Cell6 from './Cell6.island';
import Sound from './Sound';
import { useDispatch, useSelector } from "react-redux";
import { updateStatus } from '../state/slices/player.slice';


function Game() {
    const dispatch = useDispatch();
    const { me } = useSelector(state => state.me);

    const [numDice, setNumDice] = useState(null);
    const [status, setStatus] = useState(null);
    const [timeGame, setTimeGame] = useState(0);
    // console.log(timeGame);

    setTimeout(() => {
        setStatus(null);
    }, 1500);

    if (status) {
        console.log(status.isGameOver);
        console.log("over");
        dispatch(updateStatus({ isGameOver: status.isGameOver, email: me.email }));
    }

    return (
        <>
            <Map></Map>
            <Menu setNumber={setNumDice} timeGame={timeGame}></Menu>
            <Pirate number={numDice} setNumber={setNumDice} setStatus={setStatus} setTimeGame={setTimeGame}></Pirate>

            <Cell1></Cell1>
            <Cell2></Cell2>
            <Cell3></Cell3>
            <Cell4></Cell4>
            <Cell5></Cell5>
            <Cell6></Cell6>

            {(status) ?
                (<>
                    <Messages status={status}></Messages>
                    <Sound isGameOver={status.isGameOver}></Sound>
                </>) : null
            }

            {/* <Other></Other> */}
        </>

    );
}

export default Game;