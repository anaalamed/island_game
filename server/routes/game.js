import { Router } from 'express';

const routerGame = Router(); 

routerGame.get('/api/dice', async (req, res) => {
    try {
        const numberDice = Math.round(Math.random() * 5 ) + 1;
        res.json({numberDice});
    } catch (error) {
        console.log(error);
    }
})

export default routerGame;