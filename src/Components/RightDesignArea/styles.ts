import styled from "styled-components";

export const Container = styled.div`
    width: 40%;
    height: 610px;
    position: relative;
    color: #4831d4;

    .squares-area {
        position: absolute;
        top: 10%;
        right: 15%;
    }
    .circles-area {
        position: absolute;
        top: 10%;
        right: 60%;
    }

    .squares-area2 {
        position: absolute;
        bottom: 20%;
        left: 15%;
    }

    .circles-area2 {
        position: absolute;
        bottom: 20%;
        left: 60%;
    }

    .lines-design {
        position: absolute;
        top: 27%;
        left: 15%;
    }

    @media(max-width: 768px) {
        height: 250px;
        width: 100%;
        margin-top: 30px;

        .squares-area {
            position: absolute;
            top: 10%;
            right: 0%;
        }
        .circles-area {
            position: absolute;
            top: 10%;
            right: 45%;
        }
    
        .squares-area2 {
            position: absolute;
            bottom: 0%;
            left: 0%;
        }
    
        .circles-area2 {
            position: absolute;
            bottom: 0%;
            left: 45%;
        }
    
        .lines-design {
            position: absolute;
            top: 30%;
            left: 0%;
        }

    }
`;