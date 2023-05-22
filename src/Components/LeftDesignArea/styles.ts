import styled from "styled-components";

export const Container = styled.div`
    width: 40%;
    height: 610px;
    position: relative;
    color: #4831d4;

    .squares-area {
        position: absolute;
        top: 20%;
    }
    .circles-area {
        position: absolute;
        top: 20%;
        left: 40%;
    }

    .squares-area2 {
        position: absolute;
        bottom: 10%;
        right: 20%;
    }

    .circles-area2 {
        position: absolute;
        bottom: 10%;
        right: 60%;
    }

    .lines-design {
        position: absolute;
        top: 37%;
        right: 20%;
    }

    @media(max-width: 768px) {
        display: none;
    }
`