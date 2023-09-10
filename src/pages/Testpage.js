import React from 'react';
import { styled } from "styled-components"

const Testpage = () => {
    return (
        <Więcejstyles>
            <ul>
                <input type="search"></input>

                <li>
                    <h2>Test</h2>
                    <li className='colums'>
                    <a href='/plan-lekcji'>
                        <button >
                            <h4>Plan Lekcji</h4>
                        </button>
                    </a>
                    <a href='/plan-lekcji'>
                        <button >
                            <h4>Plan Lekcji</h4>
                        </button>
                    </a>
                    </li>
                </li>

            </ul>
        </Więcejstyles>
    );
}

const Więcejstyles = styled.div`
    display: inline-block;
    width: 100%;
    
    padding: 10px;

    li {
        border: 1px solid #5c616e;
        border-radius: 10px;
        padding: 10px;
        margin: 10px;
    }

    .colums {
        columns: 2;
    }

    h2 {
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 2rem;
    }
    
    h4 {
        margin: 10px;
        font-size: 1.2rem;
    }

    ul {
        list-style: none;
        align-items: center;
        text-align: center;
    }

    button {
        list-style: none;
        padding: 10px;
        width: 50%;
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
            background: #5375e2;
            cursor: pointer;
        }
    }
`;

export default Testpage;