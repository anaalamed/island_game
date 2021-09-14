import express from 'express';
import path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';

import {connect} from './game-db.js'
import routerGame from './routes/game.js';
// import Game from './models/game.js';

const app = express();
app.use(cors());
app.use(bodyParser.json()); 
app.use(routerGame);

connect(process.env.MONGODB_URI ||  "mongodb+srv://islandGame:qVcGqw3u4HU9pFWi@cluster0.wld4w.mongodb.net/islandGame?retryWrites=true&w=majority");


// serve UI 
const __dirname = path.resolve();
// app.use(express.static(path.join(__dirname, '../client')));

app.use(express.static(path.resolve(__dirname, './client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});


const port = process.env.PORT || 7000; 
app.listen(port, () => console.log(`Running on: http://localhost:${port}`));