import React from 'react';
import { styled } from "styled-components"
import { useTitle } from '../Context/global';

const Więcej = () => {
    useTitle("Więcej")
    return (
        <Więcejstyles>
            <ul>
                <li className='category-li'>
                    <h2>Dla Ucznia</h2>
                    <hr />
                    <a href='/praktyki-zawodowe'>
                        <button >
                            <h4>Praktyki Zawodowe</h4>
                        </button>
                    </a>
                    <a href='/egzaminy-zawodowe'>
                        <button >
                            <h4>Egzaminy Zawodowe</h4>
                        </button>
                    </a>
                    <a href='/matura'>
                        <button >
                            <h4>Matura</h4>
                        </button>
                    </a>
                    <a href='/branzowa-2-stopnia'>
                        <button >
                            <h4>Branżowa Szkoła 2 Stopnia</h4>
                        </button>
                    </a>
                    <a href='/samorząd'>
                        <button >
                            <h4>Samorząd</h4>
                        </button>
                    </a>
                    <a href='/menu-stołówki'>
                        <button >
                            <h4>Menu Stołówki</h4>
                        </button>
                    </a>
                </li>

                <li className='category-li'>
                    <h2>Dla Rodzica</h2>
                    <hr />
                    <a href='/zebrania'>
                        <button >
                            <h4>Zebrania z Rodzicami</h4>
                        </button>
                    </a>
                    <a href='/konsultacje'>
                        <button >
                            <h4>Konsultacje Dla Rodziców</h4>
                        </button>
                    </a>
                    <a href='/plan-dostępności-nauczycieli'>
                        <button >
                            <h4>Plan Dostępności Nauczycieli</h4>
                        </button>
                    </a>
                </li>

                <li className='category-li'>
                    <h2>O Szkole</h2>
                    <hr />
                    <a href='/historia-szkoły'>
                        <button >
                            <h4>Historia Szkoły</h4>
                        </button>
                    </a>
                    <a href='/osiągnięcia'>
                        <button >
                            <h4>Osiągnięcia</h4>
                        </button>
                    </a>
                    <a href='/rada-rodziców'>
                        <button >
                            <h4>Rada Rodziców</h4>
                        </button>
                    </a>
                    <a href='/media-szkolne'>
                        <button >
                            <h4>Media</h4>
                        </button>
                    </a>
                    <a href='/aktualne-projekty'>
                        <button >
                            <h4>Aktualne Projekty</h4>
                        </button>
                    </a>
                    <a href='/zrealizowane-projekty'>
                        <button >
                            <h4>Zrealizowane Projekty</h4>
                        </button>
                    </a>
                    <a href='/pedagog'>
                        <button >
                            <h4>Pedagog</h4>
                        </button>
                    </a>
                    <a href='/partnerzy'>
                        <button >
                            <h4>Partnerzy Szkoły</h4>
                        </button>
                    </a>
                    <a href='/biblioteka'>
                        <button >
                            <h4>Biblioteka</h4>
                        </button>
                    </a>
                    <a href='/współpraca-z-przedsiębiorcami'>
                        <button >
                            <h4>Współpraca z Pracodawcami</h4>
                        </button>
                    </a>
                </li>

                <li className='category-li'>
                    <h2>Inne</h2>
                    <hr />
                    <a href='/dokumenty'>
                        <button >
                            <h4>Dokumenty</h4>
                        </button>
                    </a>
                    <a href='/rodo'>
                        <button >
                            <h4>Rodo</h4>
                        </button>
                    </a>
                    <a href='/partnerzy'>
                        <button >
                            <h4>Zamówienia Publiczne</h4>
                        </button>
                    </a>
                    <a href='/deklaracja-dostępności'>
                        <button >
                            <h4>Deklaracja Dostępności</h4>
                        </button>
                    </a>
                    <a href='/zadania-realizowane-z-budżetu-państwa'>
                        <button >
                            <h4>Zadania Realizowane z Budżetu Państwa</h4>
                        </button>
                    </a>
                </li>
            </ul>
        </Więcejstyles>
    );
}

const Więcejstyles = styled.div`
    padding: 10px;

    .category-li {
        border: 1px solid #5c616e;
        border-radius: 10px;
        padding: 10px;
        margin: 10px;
    }

    hr {
        display: flex;
        height: 1px;
        margin-bottom: 10px;
    }

    h2 {
        font-size: 2rem;
    }

    h4 {
        margin: 10px;
        font-size: 1.2rem;
    }

    ul {
        list-style: none;
        text-align: center;
        padding: 0;
        display: flex;
        flex-direction: column;
        list-style: none;
        align-items: center;
        justify-content: center;
    }

    button {
        align-items: center;
        justify-content: center;
        display: inline-block;
        list-style: none;
        padding: 10px;    
        margin: 10px;
        background: #fff;
        border: 1px solid #5c616e;
        border-radius: 10px;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
        transition: all 0.3s ease-in-out;
        &:hover {
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
            transform: translateY(-2px);
            color: #fefefe;
            background: #f65868;
            cursor: pointer;
        }
    }
`;

export default Więcej;