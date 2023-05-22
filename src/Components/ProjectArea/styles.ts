import styled from "styled-components";
import { motion } from "framer-motion";


export const Container = styled(motion.div)`
    display: flex;
    width: 60%;
    height: auto;
    gap: 20px;

    h1 {
        font-size: 24px;
        color: #4831d4;
    }

    @media(max-width: 768px) {
        width: 100%;
    }
`;

export const RightSideMobileImg = styled(motion.div)`
    height: 100%;
    width: 25%;
    display: flex;
    align-items: center;

    img {
        width: 100%;
    }
`;

export const LeftSideDescAndImg = styled.div`
    height: auto;
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 5px;

    img {
        scale: 1;
        width: 100%;
    }

    h2 {
        font-size: 20px;
        color: #4831d4;
    }

    @media(max-width: 768px) {
        width: 100%;

        h2 {
            font-size: 17px;
            max-width: 95%;
        }
    }
`;

export const Pdesc = styled(motion.p)`
    margin-top: 10px;
    font-size: 14.5px;
    color: #3d155f;
    text-align: justify;

    @media(max-width: 768px) {
        font-size: 14.5px;
    }
`;

export const MobileImgAndTechnologys = styled.div`
    width: 100%;
    height: auto;
    display: flex;
`;

export const TechMobileDescArea = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    width: 60%;
`;

export const MobileImgArea = styled.div`
    height: auto;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 90%;
    }
`


export const Ptechnology = styled.p`
    font-size: 14.5px;
    color: #3d155f;

    @media(max-width: 768px) {
        font-size: 14.5px;
    }
`

export const IconAreas = styled.div`
    display: flex;
    gap: 30px;
    margin-top: 10px;

    svg {
        height: 30px;
        width: 30px;
        color: #4831d4;
    }

    @media(max-width: 768px) {
        gap: 5px;

        svg {
            height: 22px;
            width: 22px;
        }
    }
`;

export const AnchorLinkDiv = styled.div`
    display: flex;
    gap: 30px;
    margin-top: 15px;

    a::before {
        content: '';
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        position: absolute;
        background-color: #4831d4;
        border-radius: 10px;
        z-index: -1;

        transition: transform 500ms ease-in-out;
        transform: scaleX(0);
        transform-origin: left;
    }

    a:hover::before, a:focus::before {
        transform: scaleX(1);
    }

    a {
        text-decoration: none;
        padding: 15px 15px;
        color: #4831d4;
        border: 2px solid #4831d4;
        border-radius: 10px;
        z-index: 1;
        position: relative;
        font-weight: bold;
        transition: color ease-in-out .5s;

        &:hover, &:focus {
            color: white;
        }
    }

    @media(max-width: 768px) {
        flex-direction: column;
        gap: 15px;

        a {
            max-width: 95%;
            text-align: center;
        }
    }
`