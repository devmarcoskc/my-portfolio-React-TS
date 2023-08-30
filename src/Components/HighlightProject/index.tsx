import * as C from "./styles";
import Project7IMG from "../../assets/project7-1.png";
import Project72IMG from "../../assets/project7-2.png";
import Project73IMG from "../../assets/project7-3.png";
import MobileImg1 from "../../assets/mobileSite7-1.png";
import MobileImg2 from "../../assets/mobileSite7-2.png";
import {AiFillHtml5} from 'react-icons/ai';
import {SiCss3} from 'react-icons/si';
import {IoLogoJavascript} from 'react-icons/io';
import {DiReact} from 'react-icons/di';
import {FiFigma} from 'react-icons/fi';
import {IoLogoNodejs} from 'react-icons/io';
import {SiMongodb} from 'react-icons/si';
import useMediaQuery from '../../Hooks/useMediaQuery';
import {useEffect} from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

const HighlightProject = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  const {ref, inView} = useInView({
    threshold: 0.3
  });
  const animation = useAnimation();

  useEffect(() => {
    if(inView) {
      animation.start({
        y: 0, opacity: 1,
        transition: {
          type: 'spring', duration: 1
        }
      });
    }
    if(!inView) {
      animation.start({
        y: 50, opacity: 0
      })
    }
  }, [inView]);

  return (
    <>
      <C.H1>Sistema de Gerencimaneto de Resíduos Sólidos</C.H1>
      <C.Container
        ref={ref}
        animate={animation}
      >
          <C.LeftSideImagesArea>
            <img src={Project7IMG}/>
            <img src={Project72IMG}/>
            <img src={Project73IMG}/>
          </C.LeftSideImagesArea>
          <C.DescriptionArea>
            <p>
              EcoAdministração é um sistema de gerenciamento de resíduos sólidos para prefeituras e empresas.
              A idéia para fazer o projeto veio da ausência de algumas prefeituras e empresas não possuírem um sistema de
              gerencimaneto de resíduos sólidos online, fazendo sua administração com base em pranchetas escritas. Pensando nisso,
              construi o projeto que está em fase inicial.
              É um sistema fullstack MERN, composto com CRUD, autenticação, autorização e API REST e RESTful. 
              Cada aspectos mais imporantes das tecnologias foram utilizados para desenvolver o software. A escolha do MongoDB se deu
              pelo seu benefício de leitura de dados extramamente rápida e por sua escalabilidade dos dados. O BackEnd está rodando com Node.js e suas
              ferramentas (JWT, express, mongoose, bcrypt, nodemoon, entre outros...). No FrontEnd, React (redux, redux-toolkit, axios, redux-persist, styled-components, react-hook-form, zod, nivo)
              contendo formulários dinâmicos, sistemas de validação, etc...  
              Pensando nas necessidades dos usuários, o sistema foi criado para fazer o envio das coletas
              de resíduos com apenas alguns cliques, fazendo elas ficarem salvas em um banco de dados. Após isso, dentro do software, 
              o usuário pode obter todas as informações de suas coletas e ainda checar suas estastícas, tais como totais coletados e as médias gerais.
              Para estipular os tipos de categorias de resíduos sólidos que existem, foi-se baseado nas leis da 
              CONAMA(Conselho Nacional do Meio Ambiente), seguindo os critérios para estabelecer suas classificações.
              O sistema ainda tem uma sessão inteira de anotações que podem ser deixadas para os colegas lerem!
            </p>
          
          {isAboveMediumScreens &&
          <>
            <C.h2>As tecnologias utilizadas:</C.h2>
            <p>HTML5, CSS3, Javascript, Node.js, MongoDB, React, Figma</p>
            <C.IconAreas>
              <AiFillHtml5/>
              <SiCss3/>
              <IoLogoJavascript/>
              <IoLogoNodejs/>
              <SiMongodb/>
              <DiReact/>
              <FiFigma/>
            </C.IconAreas>

            <C.AnchorLinkDiv>
              <a href='https://gerenciamento-residuos-solidos.onrender.com/' target="_blank">Veja o Projeto</a>
              <a href='https://github.com/devmarcoskc/Gerenciamento-residuos-MERN-stack' target="_blank">GitHub</a>
            </C.AnchorLinkDiv>
            </>
          }

          {!isAboveMediumScreens &&
            <C.MobileImgAndTechnologys>
              <C.TechMobileDescArea>
                <C.h2>As tecnologias utilizadas:</C.h2>
                <p>HTML5, CSS3, Javascript, Node.js, MongoDB, React, Figma</p>

                <C.IconAreas>
                  <AiFillHtml5/>
                  <SiCss3/>
                  <IoLogoJavascript/>
                  <IoLogoNodejs/>
                  <SiMongodb/>
                  <DiReact/>
                  <FiFigma/>
                </C.IconAreas>

                <C.AnchorLinkDiv>
                  <a href='https://gerenciamento-residuos-solidos.onrender.com/' target="_blank">Veja o Projeto</a>
                  <a href='https://github.com/devmarcoskc/Gerenciamento-residuos-MERN-stack' target="_blank">GitHub</a>
                </C.AnchorLinkDiv>
              </C.TechMobileDescArea>

              <C.MobileImgArea>
                <img src={MobileImg1}/>
              </C.MobileImgArea>
            </C.MobileImgAndTechnologys>
          }

          </C.DescriptionArea>

          {isAboveMediumScreens &&
            <C.MobileImageArea>
              <img src={MobileImg1}/>
              <img src={MobileImg2}/>
            </C.MobileImageArea>
          }
      </C.Container>
    </>
  )
}

export default HighlightProject;