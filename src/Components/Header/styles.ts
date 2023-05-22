import styled from "styled-components";

export const Header = styled.header`
    height: 15vh;
    width: 100%;
    position: absolute;
    top:0;
    z-index: 100;
    font-family: 'Montserrat', sans-serif;

    @media(max-width: 768x) {
        height: 10vh;
    }
`;

export const NavContainer = styled.div`
    height: 100%;
    max-width: 80%;
    margin: auto;
    display: flex;
    align-items: center;
    gap: 30px;

    svg {
        height: 50px;
        width: 50px;
        color: #4831d4;
        cursor: pointer;
    }

    span {
        font-size: 25px;
        font-weight: bold;
        color: #ccf381;
    }
`;

export const GeneralInfo = styled.div`
    display: flex;
    justify-content: flex-end;
    flex: 1;
    
    align-items: center;
    gap: 30px;

    a {
        text-decoration: none;
        cursor: pointer;

        svg {
            color: #4831d4;
            height: 40px;
            width: 40px;
        }
    }
`;

export const MenuMobile = styled.div`
    position: fixed;
    top: 15px;
    right: 20px;
    z-index: 150;
    
    svg {
        height: 35px;
        width: 35px;
        color: #92D80D;
    }
`;

export const MobMenuArea = styled.div`
    transition: all ease .6s;
    position: fixed;
    top:0;
    width: 100vw;
    height: 100vh;
    background-color: white;
    z-index: 200;

    .svg-div {
        height: auto;
        width: 100%;
        display: flex;
        justify-content: center;

        svg {
            margin-top: 20px;
            height: 35px;
            width: 35px;
            color: #4831d4;
        }
    }
`;

export const MobMenuContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 60px;
`;

export const NavAreaMob = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const ContactMobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    h2 {
        font-size: 20px;
        color: #cbc9e2;
        letter-spacing: 0.25em;
    }

    span {
        font-size:16px;
        color:#4831d4;
    }
`;

export const IconsToContact = styled.div`
    display: flex;
    gap: 20px;
    a {
        text-decoration: none;
    }

    svg {
        height: 35px;
        width: 35px;
        color: #4831d4;
    }
`