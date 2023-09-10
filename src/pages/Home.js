import React from 'react';
import { styled } from "styled-components"
import { useTitle } from "../Context/global"

const Home = () => {
    useTitle("Strona Główna");
    return (
        <Homestyles>
            <div>
                <h1 className='KorfantyName'>ZS 69 im. Oskara</h1>

                <li className="LeftSide">
                    <hr className='page-separator'></hr>

                    <h2 className='Aktualności'>Aktualności</h2>

                    <li>
                        <a href="test">
                            <li className='border'>
                                <h3 className='nagłówek'>Nowa Witryna</h3>

                                <p className='opis'>lorem ipsum asdas dsa dasd as dads s das das dasda sa dsa dsad sad sa d sadsa dsad  asd sads adsa dsa dsa sa dsa dsa da sd asddsa.</p>
                            </li>    
                        </a>
                    </li>

                    <li>
                        <a href="test">
                            <li className='border'>
                                <h3 className='nagłówek'>xdsd</h3>
                                <p className='opis'>xsd</p>
                            </li>    
                        </a>
                    </li>
                </li>
            </div>
        </Homestyles>
    );
}

const Homestyles = styled.div`
    display: flex;
    flex-direction: column;

    .rotated-page-separator {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 1px;
        width: 50%;
        background-color: #000;
        transform: rotate(90deg);
    }

    .border {
        display: inline-block;
        flex-direction: column;
        margin-left: 100px;
        margin-top: 20px;

        border-radius: 10px;
        border: 1px solid #000;
        padding: 10px;
        width: 400px;

        transition: all 0.3s ease-in-out;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
        
        &:hover {
            transform: scale(1.05);
            cursor: pointer;
            box-shadow: 0 0 10px #000;
        }
    }

    .page-separator {
        width: 100%;
        height: 1px;
        background-color: #000;
        margin-bottom: 20px;
    }

    .nagłówek {
        color: #000;
        font-size: 20px;
        text-align: center;
    }

    .opis {
        color: #000;
        font-size: 20px;
    }
    
    .KorfantyName {
        color: #000;
        font-size: 50px;
        text-align: center;
        margin-bottom: 0px;
        font-weight: bold;
        letter-spacing: 1px;
    }

    .Aktualności {
        display: flex;
        flex-direction: column;
        margin-left: 100px;
        margin-bottom: -10px;
    }


    h1 {
        font-size: 50px;
        text-align: center;
        margin-bottom: 100px;
        font-weight: bold;
        color: #000;
    }
`;

export default Home;