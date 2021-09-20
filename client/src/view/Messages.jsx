import React from "react";
import styled from "styled-components";

const Messages = ({ status }) => {
    let gameStatus = status?.isGameOver ? 'Game Over...' : "You Win!"

    return (
        <Box className="boxMessages" >
            {(status && gameStatus) ? (
                <>
                    <Message>{status.message}</Message>
                    <Status>{gameStatus}</Status>
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

    @media only screen and (max-width: 812px) {
        padding: 2rem 2rem;
        width: 10%;
        height: 10%;
        top: 200px;
    }
`;

const Message = styled.h1`
    color: white;
    text-align: center;
    font-size: 5rem;
    padding: 1rem;

    @media only screen and (max-width: 812px) {
        font-size: 1rem;
    }
`;

const Status = styled.h1`
    color: white;
    text-align: center;
    font-size: 7rem;
    padding: 1rem;

    @media only screen and (max-width: 812px) {
        font-size: 2rem;
    }
`;

const Button = styled.button`
    color: white;
    text-align: center;
    font-size: 7rem;
`;