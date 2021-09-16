import React, { useState, useEffect } from 'react';
import Game from './Game';
import Start from './Start';
import { Route } from "react-router-dom";
import { Provider } from "react-redux";

function useScreenOrientation() {
  const [orientation, setOrientation] = useState(window.screen.orientation.type);

  useEffect(() => {
    const handleOrientationChange= () => setOrientation(window.screen.orientation.type);
    window.addEventListener('orientationchange', handleOrientationChange);
    return () => window.removeEventListener('orientationchange', handleOrientationChange);
  }, []);

  return orientation;
}


function App() {
  const orientation = useScreenOrientation();
  console.log('orientation? ', orientation);

  return (
    <div className="App">

      <Route path="/" exact component={Start} />
      <Route path="/game" exact component={Game} />

    </div>
  );
}

export default App;
