import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./state/configure.store";
import App from './view/App';

import './index.css';
import './styles/stylesFromPSD.css';
import './styles/animations.css';
import './styles/stylesGame.css';
import './styles/stylesStart.css';
import './styles/responsive.css';

ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
      <Router>
        <App />
      </Router>
     </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


