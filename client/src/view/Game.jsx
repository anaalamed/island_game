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


function Game() {
    const [number, setNumber] = useState(null);
    const [status, setStatus] = useState(null);
    // console.log(status);
    setTimeout(() => {
        setStatus(null);
    }, 1500);

    return (
        // <div className="App">
        // <header className="App-header">
        <>
            <Map></Map>
            <Menu setNumber={setNumber}></Menu>
            <Pirate number={number} setNumber={setNumber} setStatus={setStatus}></Pirate>

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
            {/* <Start></Start> */}
        </>

    );
}

export default Game;