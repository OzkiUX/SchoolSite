import React from 'react';
import { styled } from "styled-components"
import { useTitle } from "../Context/global"

const Home = () => {
    useTitle("Strona Główna");
    return (
        <Homestyles>
            <div>
                <h1 className='KorfantyName'>ZS 69 im. Oskara</h1>

                <hr className='page-separator'></hr>

                <li>
                    <h2>Test</h2>
                    <hr className='page-separator-text'></hr>

                    <a href='/asd'>
                        <li className='border'>
                            <h3 className='nagłówek'>Nowa Witryna</h3>
                        </li>
                    </a>

                </li>

                <li>

                    <h2 className='Aktualności'>Aktualności</h2>

                    <hr className='page-separator-text'></hr>

                    <li>
                        <a href="test">
                            <li className='border'>
                                <h3 className='nagłówek'>Nowa Witryna</h3>

                                <li className='post-schema'>
                                    <div className='post-text'>
                                        <p className='opis'>
                                            Dnia 🥹 została dodana zupełnie nowa odsłona strony oskarixona
                                        </p>
                                    </div>
                                    <div className='post-image'>
                                        <a href='https://i.pinimg.com/originals/26/cb/b0/26cbb0a89f4602cddc5255e5d4e8b031.gif'>
                                            <img className='img-source' 
                                                src='https://i.pinimg.com/originals/26/cb/b0/26cbb0a89f4602cddc5255e5d4e8b031.gif'
                                                alt='' 
                                            />
                                        </a>
                                    </div>
                                </li>                           
                            </li>    
                        </a>
                    </li>

                    <li>
                        <a href="test">
                            <li className='border'>
                                <h3 className='nagłówek'>Anime Dziefczynka</h3>

                                <li className='post-schema'>
                                    <div className='post-text'>
                                        <p className='opis'>
                                            Została dodana nowa anime Dziefczynka na strone NOO WAYYY
                                        </p>
                                    </div>
                                    <div className='post-image'>
                                        <a href='https://www.gifcen.com/wp-content/uploads/2022/06/anime-girl-gif-5.gif'>
                                            <img className='img-source' 
                                                src='https://www.gifcen.com/wp-content/uploads/2022/06/anime-girl-gif-5.gif'
                                                alt=''
                                            />
                                        </a>
                                    </div>
                                </li>                           
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
    padding: 10px;
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

    .page-separator-text {
        width: 100%;
        height: 1px;
        background-color: #000;
        margin-top: 5px;
    }

    .post-schema {
        display: flex;
        flex-direction: row;
    }

    .post-text {
        flex: 1;
    }

    .post-image {
        width: 20%;
        height: 100%;
        display: flex;
        justify-content: flex-end;
    }

    .img-source {
        width: 90%;
        height: 100%;
        border-radius: 20px;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);

    }

    .border {
        display: flex;
        flex-direction: column;
        margin-left: 100px;
        margin-top: 20px;

        border-radius: 10px;
        border: 1px solid #000;
        padding: 10px;
        margin: 10px;
        transition: all 0.3s ease-in-out;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
        
        &:hover {
            transform: scale(1.0025);
            cursor: pointer;
            box-shadow: 0 0 10px #000;
        }
    }

    .page-separator {
        width: 100%;
        height: 1px;
        background-color: #000;
        margin-bottom: 5px;
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

    h2 {
        font-size: 4.5vh;
        display: flex;
        flex-direction: column;
        margin-left: 50px;
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