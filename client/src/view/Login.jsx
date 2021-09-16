import styled from "styled-components";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlayer } from '../state/slices/player.slice';
import Profile from './Profile';

const Login = () => {
  const { me } = useSelector(state => state.me);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [profile, setProfile] = useState(false);
  console.log(email);

  const onClick = (e) => {
    e.preventDefault();
    dispatch(getPlayer(email));
    setTimeout(() => setProfile(true), 1000); // not nice! need to change
  }

  return (
    <>
      <Form display={profile} >
        <Input
          name="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        ></Input>

        <Button onClick={onClick}>View Profile</Button>
        <p>test account: test@gmail.com</p>
      </Form>
      {profile ? (<Profile data={me}></Profile>) : null}
    </>
  )
}

export default Login;



const Title = styled.h1`
  z-index: 100;
  font-size: 6rem;
  color: midnightblue;
  font-family: cursive;
`;

const Form = styled.form`
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: midnightblue;
  padding: 5rem 2.5rem;
  box-shadow: 0.2rem 0.2rem 2rem rgba(184, 187, 200, 0.3);
  border-top-right-radius: 10rem;
  border-bottom-right-radius: 15rem;
  border-top-left-radius: 15rem;
  border-bottom-left-radius: 10rem;
  opacity: 90%;
  display: ${props => (props.display ? "none" : "flex")};

  p {
    color: #cde44a;
  }

  @media only screen and (max-width: 812px) {
    padding: 2rem 1rem;
    width: 100%;
  }
`;

const Input = styled.input`
  z-index: 100;
  font-size: 2.5rem;
  margin: 1.5rem;
  padding: 1rem 3rem;
  background: ${({ error_styled }) => (error_styled ? "pink" : "white")};

  border-top-right-radius: 10rem;
  border-bottom-right-radius: 15rem;
  border-top-left-radius: 15rem;
  border-bottom-left-radius: 10rem;

  &:focus {
    outline: none;
 }

 @media only screen and (max-width: 812px) {
     font-size: 1rem;
     margin: 0.3rem;
     padding: 0.3rem 1.5rem;
     width: 60%;
 }
`;

const Button = styled.button`
  z-index: 100;
  font-size: 3rem;
  width: 50%;
  margin: 1.5rem;
  cursor: pointer;
  font-family: cursive;
  color: midnightblue;
  font-weight: bold;
  background: #cde44a;

  border-top-right-radius: 10rem;
  border-bottom-right-radius: 15rem;
  border-top-left-radius: 15rem;
  border-bottom-left-radius: 10rem;

  &:hover {
    width: 60%;
    background: coral;
    transition: 2s;
  }

  @media only screen and (max-width: 812px) {
     font-size: 1rem;
     margin: 0;
     padding: 0.3rem 1.5rem;
 }
`;

const Error = styled.div`
  color: red;
  display: ${({ show }) => (show ? "block" : "none")};
  font-size: 1rem;
`;