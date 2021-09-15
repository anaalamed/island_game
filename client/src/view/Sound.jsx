import React, { UseState } from 'react';
import styled from "styled-components";
import useSound from 'use-sound';

const Demo = ({ status }) => {
    console.log(status);
    let soundUrl = null;

    if (status?.isGameOver === 1) {
        soundUrl = '/sounds/lose.mp3';
    } else if (status?.isGameOver === 0) soundUrl = '/sounds/win.mp3';

    const [play, { stop }] = useSound(
        soundUrl,
        { volume: 0.4 }
    );

    if (status) {
        console.log("play");
        console.log(soundUrl);
        play();
    }

    return (
        <>
        </>
    );
}

export default Demo;


const Button = styled.button`
    left: 500px; 
    top: 500px; 
    width: 100px;
    background: white;
    position: fixed; 
    z-index: 200;
`;

