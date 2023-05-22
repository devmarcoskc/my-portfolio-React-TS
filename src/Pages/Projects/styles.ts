import styled from "styled-components";
import { motion } from "framer-motion";

export const Section = styled.section`
    height:auto;
    width: 100%;
    font-family: 'DM Sans', sans-serif;
    overflow: hidden;
`;

export const Container = styled.div`
    height: 100%;
    max-width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media(max-width: 768px) {
        gap: 0px;
    }
`;

export const H1 = styled(motion.h1)`
    font-size: 40px;
    color: #4831d4;
    margin-top: 70px;
    text-align: center;
    font-weight: 300;

    @media(max-width: 768px) {
        font-size: 35px;
    }
`;

export const ProjectAndDesignArea = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    margin-top: 60px;

    @media(max-width: 768px) {
        flex-direction: column;
    }
`;

export const ProjectArea = styled.div`
    height: auto;
    width: 60%;
`;


