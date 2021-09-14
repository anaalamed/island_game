import { Router } from 'express';
import Messages from '../models/funnyMessages.js';
// import Game from '../models/game.js';


const routerGame = Router(); 

routerGame.get('/api/dice', async (req, res) => {
    try {
        const numberDice = Math.round(Math.random() * 5 ) + 1;
        res.json({numberDice});
    } catch (error) {
        console.log(error);
    }
})

routerGame.post('/api/cell', async (req, res) => {
    try {
        const cell = req.body.cell;
        let message = '';
        switch(cell) {
            case(1): {
                message = "You stayed at the same place. Game Over";
                break;
            }
            case(2): {
                const isPoison = Math.round(Math.random());
                isPoison === 0 ? message = "Ahh... Good rum! You win" : message = "The run was poisoned... Game Over"
                break;
            }
            case(3): {
                message = "The dragon ate you... Game Over";
                break;
            }
            case(4): {
                message = "You found treasures! You win!";
                break;
            }
            case(5): {
                const num = Math.round(Math.random()*3)+1;
                const response = await Messages.findOne({num})
                message = response.message;
                break;
            }
            case(6): {
                message = "You came to the island!!! You win!";
                break;
            }
        }
        res.json({message});
    } catch (error) {
        console.log(error);
    }
})

export default routerGame;