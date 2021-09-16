import React, { useState } from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";


const Profile = ({ data }) => {
  const [redirect, setRedirect] = useState(false);

  return (
    <>
      <Box>
        <Name>{data.name}</Name>
        <Detail>Wins: {data.wins}</Detail>
        <Detail>Losings: {data.losings}</Detail>
        <Button onClick={() => setRedirect(true)}>Start Game</Button>

        {redirect ? (<Redirect to="/game" />) : null}
      </Box>

    </>
  )
}

export default Profile;

const Box = styled.div`
  padding: 3rem 5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: midnightblue;
  z-index: 200;
  border-top-right-radius: 10rem;
  border-bottom-right-radius: 15rem;
  border-top-left-radius: 15rem;
  border-bottom-left-radius: 10rem;
  opacity: 95%;

  @media only screen and (max-width: 812px) {
    padding: 2rem 1rem;
    width: 100%;
  }
`;

const Name = styled.h1`
  color: white;
  font-family: cursive;
  font-size: 5rem;
  margin: 0;
  padding: 1rem;

  @media only screen and (max-width: 812px) {
   font-size: 1.8rem;
   padding: 0.3rem;
  }

`;

const Detail = styled.h2`
  color: white;
  font-family: cursive;
  font-size: 3rem;
  margin: 0;

  @media only screen and (max-width: 812px) {
   font-size: 1rem;
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
  padding: 1rem 2rem;

  border-top-right-radius: 10rem;
  border-bottom-right-radius: 15rem;
  border-top-left-radius: 15rem;
  border-bottom-left-radius: 10rem;

  &:hover {
    width: 100%;
    background: coral;
    transition: 2s;
  }

  @media only screen and (max-width: 812px) {
     font-size: 1rem;
     margin: 0;
     padding: 0.3rem 1.5rem;
 }
`;