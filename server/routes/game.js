import { Router } from 'express';
import ip from 'ip';
import Messages from '../models/funnyMessages.js';
import Activity from '../models/activity.js';


const routerGame = Router(); 

routerGame.get('/api/dice', async (req, res) => {
    try {
        const numberDice = Math.round(Math.random() * 5 ) + 1;
        await new Activity()
        .withProperties({'IP': ip.address()})
        .use('rolling dice')
        .log(`Player got ${numberDice} on dice`);
        res.json({numberDice});
    } catch (error) {
        console.log(error);
    }
})

routerGame.post('/api/cell', async (req, res) => {
    let isGameOver;
    try {
        const cell = req.body.cell;
        let message = '';
        switch(cell) {
            case(1): {
                message = "You stayed at the same place. Game Over";
                isGameOver = 1;
                await new Activity()
                .withProperties({'IP': ip.address()})
                .use('cell 1')
                .log('Player stayed at the same place. Game Over')
                break;
            }
            case(2): {
                const isPoison = Math.round(Math.random());
                isPoison === 0 ? message = "Ahh... Good rum! You win" : message = "The rum was poisoned... Game Over"
                // isGameOver = isPoison ? 1 : 0;
                isGameOver = 1;

                let log = isPoison ? 'Player was poisoned... Game Over' : 'Played drinked...'
                await new Activity()
                .withProperties({'IP': ip.address()})
                .use('cell 2')
                .log( log);
                break;
            }
            case(3): {
                message = "The dragon ate you... Game Over";
                isGameOver = 1;
                await new Activity()
                .withProperties({'IP': ip.address()})
                .use('cell 3')
                .log('Player was eated by dragon. Game Over')
                break;
            }
            case(4): {
                message = "You found treasures! You win!";
                isGameOver = 0;
                await new Activity()
                .withProperties({'IP': ip.address()})
                .use('cell 4')
                .log('Player found the treasures. Win')
                break;
            }
            case(5): {
                const num = Math.round(Math.random()*3)+1;
                const response = await Messages.findOne({num})
                message = response.message;
                isGameOver = 0;

                await new Activity()
                .withProperties({'IP': ip.address()})
                .use('cell 5')
                .log(`Player got the bottle with nessage: ${message}`)
                break;
            }
            case(6): {
                message = "You came to the island!!! You win!";
                isGameOver = 0;
                await new Activity()
                    .withProperties({'IP': ip.address()})
                    .use('cell 6')
                    .log('Player came to the island. Win')
                break;
            }
        }
        res.json({message, isGameOver});
    } catch (error) {
        console.log(error);
    }
})

export default routerGame;