import styled from "styled-components";
import React from "react";
import { useForm } from 'react-hook-form';
import { useDispatch } from "react-redux";
import { addPlayer } from '../state/slices/player.slice'

const Registration = ({ }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        console.log(data);
        dispatch(addPlayer({ email: data.email, name: data.name }));
    }

    const email_regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const error_messages = {
        name: {
            required: "Name is required",
            minLength: "Name is too short"
        },
        email: {
            required: "Email is required",
            minLength: "Email is too short",
            pattern: "Email address is not valid"
        }
    };

    const get_error_msg = (errors, error_messages, field_name) => {
        const generate = (name) => {
            if (errors[name]) {
                switch (errors[name].type) {
                    case "required":
                        return error_messages[name].required;
                    case "minLength":
                        return error_messages[name].minLength;
                    case "pattern":
                        return error_messages[name].pattern;
                    default:
                        return "";
                }
            }
        };
        return generate(field_name);
    };

    return (
        // <Box>
        <Form onSubmit={handleSubmit(onSubmit)} >
            <Input
                name="name"
                placeholder="Name"
                {...register('name', { required: true, minLength: 2 })}
                error_styled={errors?.name}
            ></Input>
            <Error show={errors?.name}>
                {get_error_msg(errors, error_messages, "name")}
            </Error>

            <Input
                name="email"
                placeholder="Email"
                {...register('email', { required: true, minLength: 8, pattern: email_regex })}
                error_styled={errors?.email}
            ></Input>
            <Error show={errors.email}>
                {get_error_msg(errors, error_messages, "email")}
            </Error>
            <Button>Registration</Button>
        </Form>
        // </Box>
    )
}

export default Registration;

const Box = styled.div`
  height: 100%;
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

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
`;

const Error = styled.div`
  color: red;
  display: ${({ show }) => (show ? "block" : "none")};
  font-size: 1rem;
`;