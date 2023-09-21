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
              As funcionalidades do software tem como objetivo cumprir as demandas que os órgãos são exigidos para fazer a administração dos resíduos. 
              Dentre algumas: anotações de todas as coletas dos resíduos, quantificação dos tais, nomeação das categorias de resíduos - 
              seguindo os critérios do CONAMA (Conselho Nacional do Meio Ambiente), nomeação de cada rota e bairro em que foram feitas as coletas. 
              Após isso, o usuário tem todas as estatísticas gerais apresentadas, como o acúmulo total de resíduos sólidos coletados, quantidade geral 
              de resíduos por categoria. Não só, mas também, pode-se obter estatísticas por bairro registrado, mês ou ano. A tecnologia ainda conta com 
              uma sessão inteira de comentários que podem ser adicionados e lidos para os usuários. Para desenvolver o software, foi utilizado as tecnlogias:
              Node.Js (CRUD, APIs REST/RESTful, Autenticação/Autorização), MongoDB (Arquitetura de banco de dados), React.js (requisições HTTP, componentização, 
              hooks, redux, react-hook-form, zod, axios), Styled-components, nivo-charts. 
              Todas essas funcionalidades apresentadas podem ser executadas com apenas alguns cliques, fazendo o usuário ter uma excelente UX
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