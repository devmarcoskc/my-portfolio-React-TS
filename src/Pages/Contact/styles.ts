import styled from "styled-components";
import { motion } from "framer-motion";

export const Section = styled.section`
    height: 100vh;
    width: 100%;
    background-color: #4831d4;
    font-family: 'DM Sans', sans-serif;
`;

export const Container = styled.div`
    height: 100%;
    max-width: 60%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media(max-width: 768px) {
        max-width: 80%;
    }
`

export const H1 = styled(motion.h1)`
    text-align: center;
    color: #ccf381;
    font-size: 40px;
    margin-top: 20px;

    @media(max-width: 768px) {
        font-size: 34px;
        margin-top: 30px
    }

    @media(max-width: 380px) {
        margin-top: 20px;
        font-size: 30px;
    }
`;

export const H2 = styled.h2`
    text-align: center;
    color: #ccf381;
    font-size: 20px;
    font-weight: 300;
    max-width: 60%;

    @media(max-width: 768px) {
        max-width: 100%;
    }

    @media(max-width: 380px) {
        font-size: 16px;
    }
`;

export const Span = styled.span`
    font-size: 18px;
    color: #ccf381;
    text-align: center;
    font-weight: bold;
    margin-top: 5px;

    @media(max-width: 768px) {
        margin-top: 10px;
    }

    @media(max-width: 380px) {
        margin-top: 0px;
        font-size: 16px;
    }

`


export const form = styled.form`
    width: 600px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;

    label {
        font-size: 21px;
        font-weight: bold;
        color: #ccf381;
        margin-top: 30px;
    }

    .div-flex {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    .div-flex-column {
        display: flex;
        flex-direction: column;
        gap: 5px;

        input {
            outline: 0;
            padding:7px 0px;
            font-size: 18px;
            border: none;
            background-color: #4831d4;
            border-bottom: 2px solid #ccf381;
            color: #ccf381;
            width: 280px;
        }

        input::placeholder {
            color: #ccf381;
        }
    }

    textarea {
        margin-top: 10px;
        background-color: #4831d4;
        height: 100px;
        outline: 0;
        border: 1px solid #ccf381;
        font-size: 18px;
        color: #ccf381;
        padding: 5px;
    }

    textarea::placeholder {
        color: #ccf381;
    }

    button::before {
        content: '';
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        position: absolute;
        background-color: #ccf381;
        border-radius: 10px;
        z-index: -1;

        transition: transform 500ms ease-in-out;
        transform: scaleX(0);
        transform-origin: left;
    }

    button:hover::before, a:focus::before {
        transform: scaleX(1);
    }

    button {
        margin-top: 10px;
        width: 120px;
        height: 40px;
        color: #ccf381;
        border: 2px solid #ccf381;
        border-radius: 10px;
        background-color: #4831d4;
        font-size: 18px;
        font-weight: bold;
        z-index: 1;
        position: relative;
        transition: color ease-in-out .5s;
        cursor: pointer;

        &:hover, &:focus {
            color: #4831d4;
        }
    }

    @media(max-width: 768px) {
        width: 100%;
        
        .div-flex {
            flex-direction: column;

            input {
                width: 100%;
            }
        }

        textarea {
            height: 130px;
        }
    }

    @media(max-width: 380px) {
        margin-top: 10px;

        label {
            margin-top: 10px;
            font-size: 18px;
        }

        .div-flex-column {
            gap: 0px;

            input {
                font-size: 15px;
            }
        }

        textarea {
            height: 90px;
            font-size: 15px;
        }

        button {
            height: 35px;
            width:100px;
            font-size:17px;
        }
    }
`;

export const Perrors = styled.p`
    font-size: 15px;
    color: orange;
    font-weight: bold;

    @media(max-width: 380px) {
        font-size: 13px;
    }
`

export const SocialsArea = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;

    h1 {
        font-size: 40px;
        color: #ccf381;
        text-align: center;
    }

    @media(max-width: 768px) {
        margin-top: 15px;

        h1 {
            font-size: 35px;
        }
    }

    @media(max-width: 380px) {
        margin-top: 10px;
        
        h1 {
            font-size: 30px;
        }
    }
`;

export const IconsDiv = styled.div`
    display: flex;
    align-items: center;
    margin: auto;
    gap: 100px;
    width: 100%;
    justify-content: center;

    a {
        text-decoration: none;
    }
    
    svg {
        height: 50px;
        width: 50px;
        cursor: pointer;
        color: #ccf381;
    }

    @media(max-width: 768px) {
        gap: 45px;
        height: 35px;
        width: 35px;
    }

    @media(max-width: 380px) {
        svg {
            height: 35px;
            width: 35px;
        }
    }
`;