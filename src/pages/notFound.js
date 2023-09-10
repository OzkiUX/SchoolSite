import React from 'react';
import { styled } from "styled-components"
import { useTitle } from '../Context/global';

const NotFound = () => {
    useTitle('Zagubiony?');
    return (
        <NotFoundContainer>
            <img src='https://img.itch.zone/aW1hZ2UvODc3OTEyLzQ5NDA3MTAuZ2lm/original/a4aA6i.gif' alt='🥹'></img>
            <h1>Wygląda na to że się zgubiłeś...</h1>

            <a href='/'>
                <button>Powrót</button>
            </a>
        </NotFoundContainer>
    );
}

const NotFoundContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    
    background-color: #f65868;
    font-size: 20px;
    text-align: center;

    img {
        width: 200px;
        height: 200px;
    }

    button {
        background-color: white;
        border: none;
        border-radius: 5px;
        padding: 10px 20px;
        font-size: 15px;
        cursor: pointer;
        margin-top: 20px;

        transition: all 0.3s ease-in-out;

        &:hover {
            background-color: #5375e2;
            color: white;
        }
    }

    h3 {
        color: white;
        margin: 0;
        padding: 0;
        text-align: center;
        font-size: 20px;
        font-weight: bold;
        text-align: center;
    }
`



export default NotFound;