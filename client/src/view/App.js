import React, { useState } from 'react';
import Game from './Game';
import Start from './Start';
import { Route } from "react-router-dom";
import { Provider } from "react-redux";

function App() {


  return (
    <div className="App">

      <Route path="/" exact component={Start} />
      <Route path="/game" exact component={Game} />

    </div>
  );
}

export default App;
