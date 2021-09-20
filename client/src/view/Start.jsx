import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import Registration from './Registration';
import Login from './Login';

const Start = () => {
  const { me } = useSelector(state => state.me);
  const [registration, setRegistration] = useState(false);
  const [login, setLogin] = useState(false);
  const [buttons, setButtons] = useState(true);

  const onClickReg = () => {
    setRegistration(true);
    setButtons(false);
  }

  const onClickLog = () => {
    setLogin(true)
    setButtons(false);
  }

  return (
    <Box>
      <Title>Welcome to the Island Game</Title>

      <Buttons display={buttons}>
        <Button onClick={onClickReg}>Registration</Button>
        <Button onClick={onClickLog}>Log In</Button>
      </Buttons>

      {registration ? (<Registration display={registration}></Registration>) : null}
      {login ? (<Login display={registration}></Login>) : null}
    </Box>
  )
}

export default Start;

const Box = styled.div`
  height: 100%;
  padding: 3rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  @media only screen and (max-width: 812px) {
    padding: 2rem;
  }
`;

const Title = styled.h1`
  z-index: 100;
  font-size: 6rem;
  color: midnightblue;
  font-family: cursive;

  @media only screen and (max-width: 812px) {
    font-size: 2rem;
  }
`;

const Buttons = styled.div`
  z-index: 200;
  display: ${props => (props.display ? "block" : "none")};
  margin-top: 3.5rem;

  @media only screen and (max-width: 1024px) {
    font-size: 1rem;
    padding: 1rem;
    margin-top: 0;
  }
`;

const Button = styled.button`
  z-index: 100;
  font-size: 3rem;
  margin: 1.5rem;
  cursor: pointer;
  font-family: cursive;
  color: midnightblue;
  font-weight: bold;
  background: #cde44a;
  padding: 2rem;

  border-top-right-radius: 10rem;
  border-bottom-right-radius: 15rem;
  border-top-left-radius: 15rem;
  border-bottom-left-radius: 10rem;

  &:hover {
    background: coral;
    transition: 2s;
  }

  @media only screen and (max-width: 812px) {
    font-size: 1rem;
    padding: 1rem;
  }
`;