import React, { useState } from "react";
import styled from "styled-components";

const Messages = ({ status }) => {
    console.log(status);
    const [visible, setVisible] = useState(false);

    let gameStatus = status?.isGameOver ? 'Game Over...' : "You Win!"

    return (
        // <>
        //     <div id="Shape27"><img src="images/Shape27.png" alt="" /></div>
        //     <div id="OhtoobadYoulandedon3"><img src="images/OhtoobadYoulandedon3.png" alt="" /></div>

        //     <div id="Shape27_0"><img src="images/Shape27_0.png" alt="" /></div>
        //     <div id="GreatYoulandedon4You"><img src="images/GreatYoulandedon4You.png" alt="" /></div>
        // </>

        <Box className="boxMessages" >
            {(status && gameStatus) ? (
                <>
                    <Message>{status.message}</Message>
                    <Status>{gameStatus}</Status>
                    {/* <Button>Try again</Button> */}
                </>
            ) : null}
        </Box>
    )
}

export default Messages;

const Box = styled.div`
    width: 50%;
    height: 50%;
    left: 10%;
    top: 25%;
    background: black;
    border: 1rem solid black ;
    position: fixed;
    opacity: 80%;
    z-index: 200;
`;

const Message = styled.h1`
    color: white;
    text-align: center;
    font-size: 5rem;
    padding: 1rem;
`;

const Status = styled.h1`
    color: white;
    text-align: center;
    font-size: 7rem;
    padding: 1rem;
`;

const Button = styled.button`
    color: white;
    text-align: center;
    font-size: 7rem;
`;