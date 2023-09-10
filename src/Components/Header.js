import React from 'react';
import { styled } from 'styled-components';

function Header() {
    return(
        <HeaderStyle>
             <div>
                <ul id="brand-name-navbar">
                    <li>
                        <a href="/">Strona Główna</a>
                    </li>
                </ul>
            </div>

            <div>
                <a href='https://eduone.pl/jastrzebiezdroj/'>
                    <button>E-Dziennik</button>
                </a>
            </div>

            <div>
                <ul id="navbar">
                    <li><a href="/więcej">Więcej</a></li>
                    <li><a href="/Kontakt">Kontakt</a></li>
                </ul>
            </div>
        </HeaderStyle>
    )
}

const HeaderStyle = styled.nav`
    display: flex;
    align-items: center;
    padding: 5px 80px;
    justify-content: space-between;
    background: #f65868;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

    .li-gaps {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    li {
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    button {
        border: none;
        outline: none;
        background: none;
        font-size: 20px;
        font-weight: 500;
        cursor: pointer;
        color: #fefefe;
        text-decoration: none;
        text-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease-in-out;
        &:hover {
            color: #5c616e;
            text-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        }
    }

    .brand-name-navbar {
        justify-content: center;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .navbar {
        align-items: center;
        justify-content: center;
        list-style: none;
        margin: 0;
        padding: 0;
        li {
            list-style: none;
            padding: 5 20px;
            position: relative;
        }
    }

    h1 {
        font-size: 30px;
        margin: 0;
        padding: 0;
        font-weight: 700;
        font-family: "Montserrat", sans-serif;
        text-transform: uppercase;
        cursor: default;
        letter-spacing: 2px;
        text-align: center;
        color: red;
        text-decoration: none;
        text-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease-in-out;
    } 

    ul {
        display: flex;
        align-items: center;
        justify-content: center;
        list-style: none;
        gap: 15px;
        margin: 0;
        padding: 0;
    }

    a {
        text-decoration: none;
        color: white;
        text-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease-in-out;
        &:hover {
            color: #5c616e;
            text-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        }
        &:focus {
            outline: none;
        }
    } 
`;

export default Header;