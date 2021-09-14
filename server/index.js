import express from 'express';
import path from 'path';
import cors from 'cors';

import routerGame from './routes/game.js';

const app = express();
app.use(cors());
app.use(routerGame);



// serve UI 
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, './client')));
app.get('*', (req, res) => {
  // res.sendFile(path.resolve(__dirname, '../index.html'));
  res.sendFile(path.resolve(__dirname, './client', './index.html'));
});


const port = process.env.PORT || 7000; 
app.listen(port, () => console.log(`Running on: http://localhost:${port}`));