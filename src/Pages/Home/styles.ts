import styled from "styled-components";

export const Section = styled.section`
    height: 100vh;
    width: 100%;
    background: linear-gradient(90deg, #4831d4 67%, #ccf381 33%);
    font-family: 'DM Sans', sans-serif;

    @media (max-width: 768px) {
        background: linear-gradient(180deg, #4831d4 55%, #ccf381 33%);
    }
`;

export const Container = styled.div`
    height: 100%;
    max-width: 80%;
    margin:auto;
    display: flex;

    @media (max-width:768px) {
        flex-direction: column;
    }
`;

export const LeftSideTexts = styled.div`
    height: 100%;
    width: 40%;
    display: flex;
    flex-direction: column;

    @media(max-width: 768px) {
        width: 100%;
        height: 55%;
    }

`;

export const TitleArea = styled.div`
    height: 60%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    h1 {
        font-size: 50px;
        color: #ccf381;
    }

    p {
        color: #ccf381;
        font-size: 18px;
    }

    @media(max-width: 768px) {
        height: 100%;
        justify-content: center;

        h1 {
            font-size: 30px;
        }

        p {
            font-size: 16px;
        }
    }
`

export const BasicDescriptionsArea = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;

    .left-side-text, .right-side-text {
        width: 200px;
        height: auto;
        color: #ccf381;
        font-size: 14px;
    }  
    
    @media(max-width: 768px) {
        .left-side-text, .right-side-text {
            width: 150px;
        }
        margin-bottom: 30px;
    }
`;

export const RightSideSlogan = styled.div`
    flex: 1;
    position: relative;

    .squares-area {
        position: absolute;
        top: 20%;
        left: 20%;
        color: white;
    }

    .squares-area-2 {
        position: absolute;
        bottom: 20%;
        right: 20%;
        color: #4831d4;
    }

    @media(max-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: center;

        .squares-area {
            top: 5%;
            left: 5%;
            color: #4831d4;
        }
        .squares-area-2 {
            bottom: 5%;
            right: 5%;
        }
    }
`;

export const PerfilImg = styled.img`
    height: 320px;
    width: 260px;
    position: absolute;
    top: 25%;
    left: 30%;
    z-index: 50;

    @media(max-width: 768px) {
        width: 195px;
        height: 240px;
        position: static;
    }

    @media(max-width: 380px) {
        width: 170px;
        height: 210px;
    }
`;

export const RiscosDesign1 = styled.img`
    height: 10px;
    width: 70px;
    position: absolute;
    top: 50%;
    left: 24%;
    z-index: 10;

    @media(max-width: 768px) {
        display: none;
    }

`;

export const RiscosDesign2 = styled.img`
    height: 10px;
    width: 70px;
    position: absolute;
    top: 65%;
    left: 15%;
    transform: rotate(45deg);

    @media(max-width: 768px) {
        display: none;
    }
`;

export const RiscoDesign3 = styled.img`
    position: absolute;
    top: 40%;
    right: 10%;
    transform: rotate(-45deg);

    @media(max-width: 768px) {
        right: -11%;
        top: 40%;
        scale: 0.85;
    }
`

export const ImgBoxBorder = styled.div`
    height: 320px;
    width: 260px;
    position: absolute;
    top: 30%;
    left: 35%;
    border: 2px solid white;

    @media(max-width: 768px) {
        width: 195px;
        height: 240px;
        top: 27%;
        left: 27%;
    }

    @media(max-width: 380px) {
        width: 170px;
        height: 210px;
        top: 22%;
        left: 29%;
    }
`

