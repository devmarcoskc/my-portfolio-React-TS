import styled from "styled-components";
import { motion } from "framer-motion";
import pacienteVideo from "../../assets/paciente.mp4";
import profissionalVideo from "../../assets/profissional.mp4";

const Container = styled(motion.div)`
  height: auto;
  width: 60%;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
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

  @media(max-width: 1024px) {
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
`

const DailyCareApp = () => {

  return (
    <Container>
      <h1>Plataforma DailyCare</h1>
      <ContentContainer>
        <LeftSideVideoArea>
          <video
            src={pacienteVideo}
            autoPlay
            muted
            loop
            playsInline
          />
        </LeftSideVideoArea>
        <TextArea>
          DailyCare é uma plataforma que visa melhorar a comunicação e o acompanhamento clínico entre profissionais de saúde e seus pacientes. 
          Projetada para oferecer suporte contínuo e personalizado, a plataforma facilita o monitoramento pós-consulta, 
          aprimora o relacionamento profissional-paciente e promove uma gestão de saúde mais proativa e colaborativa.
          As principais funcionalidades são as seguintes: 1. Cadastro de usuários: Todos os usuários podem se cadastrar para utilizar a plataforma; 
          1.1 Profissionais de saúde cadastrados poderão iniciar um processo de acompanhamento clínico com seus pacientes cadastrados; 
          2. Relatórios diários de bem-estar: 
        </TextArea>
        <RighSideVideoArea>
          <video
            src={profissionalVideo}
            autoPlay
            muted
            loop
            playsInline
          />
        </RighSideVideoArea>
      </ContentContainer>
      <BottomAreaDiv>
        <p>
          Os pacientes podem fornecer um relatório diário de como está sua saúde clínica em relação ao processo de recuperação vigente, 
          utilizando uma escala de 0 a 10, e informando sintomas positivos e negativos; 2.1 Os profissionais irão receber os relatórios clínicos
          de seus pacientes cadastrados, junto com uma análise breve informando o estado atual da saúde do paciente. Os benefícios da plataforma:
          1 - Monitoramento contínuo, 2 - Comunicação eficiente, 3 - Tomadas de decisões mais informadas sobre o plano de tratamento, 4 - Empoderamento
          do paciente, 5 - Facilidade de acesso às informações;
        </p>
        <h2>Tecnologias utilizadas:</h2>
        <p>React Native, React, Styled-components, Node, MongoDB, MongoDB Atlas, Google Play Console, Apple developer, VPS.</p>
        <AnchorLinkDivArea>
          <a href="https://www.linkedin.com/company/dailycareapp/" target="_blank">Conheça a Plataforma</a>
        </AnchorLinkDivArea>
      </BottomAreaDiv>
    </Container>
  )
}

export default DailyCareApp