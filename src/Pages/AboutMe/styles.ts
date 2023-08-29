import styled from "styled-components";
import { motion } from "framer-motion";

export const Section = styled.section`
    min-height: 110vh;
    max-width: 80%;
    margin: auto;
    font-family: 'DM Sans', sans-serif;
    overflow: hidden;

    @media(max-width: 768px) {
        height: auto;
    }
`;

export const FirstContainer = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    margin-top: 60px;

    @media(max-width: 768px) {
        margin-top: 70px;
        flex-direction: column;
        gap: 30px;
    }
`;

export const LeftSideDesc = styled(motion.div)`
    display: flex;
    flex-direction: column;
    width: 45%;
    height: auto;

    @media(max-width: 768px) {
        width: 100%;
    }
`

export const RightSideDesign = styled.div`
    height: auto;
    width: 50%;
    position: relative;
    color: #4831d4;

    .squareDesign {
        position: absolute;
        right: 10%;
        top: 40%;
    }

    .circlesDesign {
        position: absolute;
        left: 40%;
        top: 30%
    }

    @media(max-width: 768px) {
        width: 100%;
        height: 24vh;

        .squareDesign {
            position: absolute;
            right: 15%;
            top: 10%;
        }

        .circlesDesign {
            position: absolute;
            left: 25%;
            top: 10%
        }
        
        .riscos-design-area {
            position: absolute;
            bottom: 40%;
            left: 5%;
        }
    }

    @media(max-width: 380px) {
        .circlesDesign {
            position: absolute;
            left: 23%;
            top: 10%
        }
        .riscos-design-area {
            position: absolute;
            bottom: 25%;
        }
    }

    @media(max-width: 325px) {
        .circlesDesign {
            position: absolute;
            left: 17%;
            top: 10%
        }
    }
    
`;

export const SecondContainer = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    margin-top: 40px;

    @media(max-width: 768px) {
        flex-direction: column;
        margin-bottom: 70px;
        margin-top: 0px;
    }
`;

export const LeftSideDesign = styled.div`
    height: auto;
    width: 50%;
    position: relative;

    .riscoDesignArea {
        position: absolute;
        bottom: 20%;
        right: 0;
        transform: rotate(45deg);
    }

    .circlesDesignArea {
        position: absolute;
        bottom: 50%;
        right: 40%;
    }

    @media(max-width: 768px) {
        display: none;
    }
`;

export const RightSideArea = styled(motion.div)`
    height: auto;
    display: flex;
    flex-direction: column;
    margin-left: 20%;
    margin-bottom: 60px;

    h2 {
        font-size: 20px;
        color: #4831d4;
        margin-top: 15px;
    }

    p {
        font-size: 16.5px;
        color: #3d155f;
        max-width: 90%;
    }

    @media(max-width: 768px) {
        margin-left: 0%;
        margin-top: 0px;
    }
`;

export const StackIconArea = styled.div`
    display: flex;
    margin-top: 15px;
    width: 100%;
    gap: 30px;

    svg {
        height: 22px;
        width: 22px;
        color: #4831d4;
    }

    @media(max-width: 768px) {
        gap: 15px;

        svg {
            height: 22px;
            width: 22px;
        }
    }
`
