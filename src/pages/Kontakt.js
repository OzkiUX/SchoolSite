import React from 'react';
import { styled } from "styled-components"
import { useTitle } from "../Context/global"


const Kontakt = () => {
    useTitle("Kontakt")

    return (
        <KontktStyles>


            <h1 className='page-name'>Kontakt</h1>
            <hr className='page-separator'></hr>
            <h2 className='full-sql-name'>Zespół szkół Nr 2 im. Wojciecha Korfantego</h2>
            

            <ul>
                <li>
                    <li>
                        <h4 className='Dane-kon-text'>Dane adresowe, sekretariat</h4>

                        <p className='Dane-kon'>
                            123123
                            <br />
                            123123
                            <br />
                            tel./fax 123123
                            <br />
                            e-mail: <a className='email' href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=poczta@malysaoskar@gmail.com">malysaoskar@gmail.com</a>
                        </p>
                    </li>
                    <li>
                        <h4 className='Dane-kon-text'>REGON i NIP</h4>

                        <p className='Dane-kon'>
                            <span>REGON: </span><span>123123</span>
                        </p>
                        <p className='Dane-kon'>
                            <span>NIP: </span><span>123123</span>
                        </p>
                    </li>
                    <li>
                        <h4 className='Dane-kon-text'>Redaktorzy</h4>

                        <p className='Dane-kon'>
                            <span>Oskar Małysa: </span><span>malysaoskar@gmail.com</span>
                        </p>
                    </li>
                </li>
            </ul>
            
                        
            <p className='page-description'>
                Strona stworzona przez ozkisky
            </p>

        </KontktStyles>
    );
}

const KontktStyles = styled.div`
    display: flex;
    margin: 10px;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;


    .Dane-kon-text {
        font-weight: 700;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 1px;
        text-decoration: none;
    }


    li {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100%;
        margin-bottom: 2rem;
        padding: 2rem;
        background-color: white;
        border-radius: 10px;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease-in-out;
        &:hover {
            box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2);
        }

    }

    p span:first-child {
        font-weight: 700;
        text-transform: uppercase;
    }

    .Dane-kon {
        -webkit-user-select: text;
    }

    .email {
        color: #f65868;
        font-weight: 700;
        font-size: 15px;

        &:hover {
            text-decoration: underline;
        }
    }

    .page-description {
        margin-top: 2rem;
    }

    h1 {
        font-size: 4rem;
        font-weight: 700;
    }

    .page-separator {
        width: 75%;
        height: 1px;
        background-color: #7791a1;
        radius: 10px;
        margin-bottom: 2rem;
    }

    .page-name {
        font-size: 4rem;
        font-weight: 700;
        color: #f65868;
        text-transform: uppercase;
        letter-spacing: 3px;
        text-decoration: none;
        text-shadow: 5px 2px 2px rgba(0, 0, 0, 0.2);
    }

    .powrót-button {
        background-color: white;
        color: #f65868;
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

   
`;

export default Kontakt;