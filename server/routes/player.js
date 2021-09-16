import { Router } from 'express';
import Player from '../models/player.js';
import ip from 'ip';
import Activity from '../models/activity.js';

const routerPlayer = Router(); 

routerPlayer.post('/api/users/player', async (req, res) => {
    try {
        const {name, email} = req.body;

        const isEmail =isValidEmail(email);
        if (isEmail === false) throw new Error;

        const newPlayer = await Player.create({name: name, email: email});
        
        await new Activity()
        .withProperties({'IP': ip.address()})
        .use('new player')
        .log(`${name} joined`);

        res.json(newPlayer);
    } catch (error) {
        res.status(500).json({error: "Could not add new player"}); 
    }
})

routerPlayer.get('/api/users/me', async (req, res) => {
    try {
        const email = req.headers.email;
        
        const isEmail =isValidEmail(email);
        if (isEmail === false) throw new Error;
        
        const player = await Player.findOne({email: email});

        await new Activity()
        .withProperties({'IP': ip.address()})
        .use('player enter')
        .log(`${player.name} enter the game`);

        res.json(player);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Could not find the player"}); 
    }
})

routerPlayer.put('/api/users/updateStatus', async (req, res) => {
    try {
        const email = req.headers.email;
        const {isGameOver} = req.body;
        const player = await Player.findOne({email: email});

        switch(isGameOver) {
            case(0) : player.wins++; break;
            case(1): player.losings++; break;
            default: throw new Error();
        }

        await player.save();

        const status = isGameOver ? "lose" : "win";

        await new Activity()
        .withProperties({'IP': ip.address()})
        .use('player status')
        .log(`${player.name} ${status}`);

        res.json(player);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Could not update"}); 
    }
})

export default routerPlayer;

function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
