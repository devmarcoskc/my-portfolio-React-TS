import styled from "styled-components";
import { motion } from "framer-motion";

export const H1 = styled.h1`
    font-size: 24px;
    color: #4831d4;
    line-height: 0;
    margin-top: 20px;

    @media(max-width: 768px) {
        line-height: 1.2;
        font-size: 18px;
        margin-bottom: 5px;
    }
`
export const Container = styled(motion.div)`
    width: 100%;
    height: auto;
    display: flex;
    gap: 20px;
    
    @media(max-width: 768px) {
        flex-direction: column;
    }
`;

export const LeftSideImagesArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 45%;

    img {
        width: 100%;
        box-shadow: 0px 0px 10px 5px rgb(255,69,0);
    }

    @media(max-width: 768px) {
        width: 100%;
        gap: 15px;
    }
`;

export const MobileImageArea = styled.div`
    display: flex;
    flex-direction: column;
    width: 14.5%;
    justify-content: space-between;

    img {
        width: 100%;
        box-shadow: 0px 0px 10px 5px rgb(255,69,0);
    }
`;

export const DescriptionArea = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 10px;

    p {
        font-size: 14.5px;
        color: #3d155f;
        text-align: justify;
    
        @media(max-width: 768px) {
            font-size: 14.5px;
        }
    }
`;

export const h2 = styled.h2`
    font-size: 20px;
    color: #4831d4;
`;

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
`;

export const MobileImgAndTechnologys = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    gap: 15px;
`;

export const TechMobileDescArea = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    width: 60%;
`;

export const MobileImgArea = styled.div`
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 100%;
    }
`