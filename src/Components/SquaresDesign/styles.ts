import styled from "styled-components";

type Props = {

}

export const SquaresArea = styled.div<Props>`
    display: flex;
    flex-direction: column;
    gap: 7px;
    z-index: 1;

    .dots-line {
        display: flex;
        gap: 7px;
        font-size: 5px;
    }

    @media(max-width: 768px) {
        gap: 5px;
        .dots-line {
            gap: 5px;
        }
    }

    @media(max-width: 370px) {
        font-size: 4px;
    }
`