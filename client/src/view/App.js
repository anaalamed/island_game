import React, { useState, useEffect } from 'react';
import { Route } from "react-router-dom";

import OrientationMessage from './OrientationMessage';
import Game from './Game';
import Start from './Start';

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

  return (
    <div className="App">

      <Route path="/" exact component={Start} />
      <Route path="/game" exact component={Game} />

      {(orientation?.includes("portrait")) ? (<OrientationMessage></OrientationMessage>) : (null) }

    </div>
  );
}

export default App;
