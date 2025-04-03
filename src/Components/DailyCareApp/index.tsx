import styled from "styled-components";
import { motion } from "framer-motion";
import dailyone from "../../assets/dailyone.mp4";
import dailytwo from "../../assets/dailytwo.mp4";

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
      <h1>DailyCare Platform</h1>
      <ContentContainer>
        <LeftSideVideoArea>
          <video
            src={dailyone}
            autoPlay
            muted
            loop
            playsInline
          />
        </LeftSideVideoArea>
        <TextArea>
          DailyCare is a app aimed at improving communication and clinical monitoring between healthcare professionals and their patients. 
          Designed to offer continuous and personalized support, the platform facilitates post-consultation monitoring, 
          enhances the professional-patient relationship, and promotes a more proactive and collaborative approach to healthcare management.
          The platform is already being used by selected healthcare professionals to test the first version. 
          Several benefits have already been recorded from its use, including the following:
          1 - Better monitoring of the patient's health progress;
          2 - Use of the provided data to adjust treatment plans accurately and personalized;
          3 - Empowering the patient: providing them with an active role in managing their health, promoting greater adherence to treatment.
        </TextArea>
        <RighSideVideoArea>
          <video
            src={dailytwo}
            autoPlay
            muted
            loop
            playsInline
          />
        </RighSideVideoArea>
      </ContentContainer>
      <BottomAreaDiv>
        <h2>Technologies used:</h2>
        <p>React Native, React, Styled-components, Node, MongoDB, MongoDB Atlas, Google Play Console, Apple developer, VPS.</p>
        <AnchorLinkDivArea>
          <a href="https://www.linkedin.com/company/dailycareapp/" target="_blank">Know better</a>
        </AnchorLinkDivArea>
      </BottomAreaDiv>
    </Container>
  )
}

export default DailyCareApp