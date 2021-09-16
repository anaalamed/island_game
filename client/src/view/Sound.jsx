import React from 'react';
import useSound from 'use-sound';

const Demo = ({ isGameOver }) => {
    let soundUrl = isGameOver ? '/sounds/lose.mp3' : '/sounds/win.mp3';

    const [play, { stop }] = useSound(
        soundUrl,
        { volume: 0.4 }
    );

    play();

    return (
        <>
            {/* <Button onClick={() => play()}>sound</Button> */}
        </>
    );
}

export default Demo;



