import React, { useState } from "react";
import styled from "styled-components";

const Messages = () => {
    const [visible, setVisible] = useState(false);

    const message = "Rotate your phone!"

    return (
        <Box className="boxMessages" >
            <Message>{message}</Message>
            <Button display={visible} onClick={() => setVisible(false)}>Ok, I understood</Button>
        </Box>
    )
}

export default Messages;

const Box = styled.div`
    display: ${props => (props.display ? "flex" : "none")};
    top: 5%;
    width: 20%;
    background: black;
    border: 1rem solid black ;
    position: fixed;
    opacity: 80%;
    z-index: 200;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem;
    padding: 1rem;
    margin-left: 170px;
`;

const Message = styled.h1`
    color: white;
    text-align: center;
    font-size: 2rem;
    padding: 2rem;
`;

const Button = styled.button`
    padding: 1rem;
    background: #cde44a;
    border-top-right-radius: 10rem;
    border-bottom-right-radius: 15rem;
    border-top-left-radius: 15rem;
    border-bottom-left-radius: 10rem;
    color: midnightblue;
    font-weight: bold;
`;