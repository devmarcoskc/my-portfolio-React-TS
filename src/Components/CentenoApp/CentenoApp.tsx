import styled from "styled-components";
import centenoone from '../../assets/centenoappone.mp4';
import centenotwo from '../../assets/centenoapptwo.mp4';
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  width: 60%;
  height: auto;
  display: flex;
  flex-direction: column;
  color: #4831d4;

    h1 {
    font-size: 24px;
    color: #4831d4;
  }

  @media(max-width: 768px) {
    width: 100%;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;

  @media(max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftSideVideoArea = styled.div`
  width: 27%;
  height: 315px;
  border-radius: 10px;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media(max-width: 768px) {
    width: 70%;
    marin-top: 5px;
    margin-bottom: 5px;
  }
`;

const TextArea = styled.div`
  flex: 1;
  font-size: 14px;
  color: #3d155f;
  margin-left: 5px;
  margin-right: 5px;
`

const RighSideVideoArea = styled.div`
  width: 27%;
  height: 315px;
  border-radius: 10px;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media(max-width: 768px) {
    width: 70%;
    marin-top: 5px;
    margin-bottom: 5px;
  }
`;

const BottomAreaDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
 
  p {
    font-size: 14px;
    color: #3d155f;
  }

  h2 {           
    font-size: 17px;
    max-width: 95%;
    margin-top: 10px;
  }
`;

const AnchorLinkDivArea = styled.div`
    display: flex;
    gap: 30px;
    margin-top: 15px;
    cursor: pointer;

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

const CentenoApp = () => { 
  return (
    <Container>
      <h1>Plataforma - CentenoPro</h1>
      <ContentContainer>
        <LeftSideVideoArea>
          <video
            src={centenoone}
            autoPlay
            muted
            loop
            playsInline
          />
        </LeftSideVideoArea>
        <TextArea>
          Desenvolvi um aplicativo inovador para um personal trainer, resolvendo problemas que ele tinha com esses alunos de consultoria,
          que eram: que eram: as dúvidas recentes dos alunos sobre como os exercícios deveriam ser feitos, 
          a dificuldade dos mesmos de obter as informações sobre o treino do dia, a demora para planejar os treinos dos alunos que era feita através de uma planilha no Excel. 
          Agora, os alunos conseguem acessar as informações de treino rapidamente, 
          esclarecer dúvidas diretamente e compartilhar seus progressos. Para o personal trainer, 
          criei uma plataforma web que facilita o planejamento e a organização dos treinos, otimizando o tempo e aumentando a eficiência do trabalho. 
        </TextArea>
        <RighSideVideoArea>
          <video
            src={centenotwo}
            autoPlay
            muted
            loop
            playsInline
          />
        </RighSideVideoArea>
        </ContentContainer>
        <BottomAreaDiv>
          <p>
            Estou muito feliz em ver que o aplicativo já está sendo utilizado pelos alunos e que eles estão relatando inúmeros benefícios, 
            como maior clareza na execução dos exercícios, acesso rápido às informações dos treinos e uma comunicação mais eficiente com o personal trainer.
          </p>
          <h2>Tecnologias utilizadas:</h2>
          <p>React Native, React, Styled-components, Node, MongoDB, MongoDB Atlas, Google Play Console, Apple developer, VPS.</p>
          <AnchorLinkDivArea>
            <a href="https://centenopro.netlify.app/" target="_blank">Conheça a Plataforma</a>
          </AnchorLinkDivArea>
        </BottomAreaDiv>
    </Container>
  )
}

export default CentenoApp