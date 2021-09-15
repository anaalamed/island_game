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

function App() {
  const [number, setNumber] = useState(null);
  const [isGameOver, setIsGameOver] = useState(null);
  // console.log('isOver', isGameOver);

  return (
    <div className="App">
      <header className="App-header">
        <Map></Map>
        <Menu setNumber={setNumber}></Menu>
        <Pirate number={number} setNumber={setNumber} isGameOver={isGameOver} setIsGameOver={setIsGameOver}></Pirate>

        <Cell1></Cell1>
        <Cell2></Cell2>
        <Cell3></Cell3>
        <Cell4></Cell4>
        <Cell5></Cell5>
        <Cell6></Cell6>

        {/* <Messages isGameOver={isGameOver}></Messages> */}
        {/* <Other></Other> */}

      </header>
    </div>
  );
}

export default App;
