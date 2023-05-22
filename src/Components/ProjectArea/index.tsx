import * as C from './styles';
import { motion } from 'framer-motion';
import {useEffect} from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import useMediaQuery from '../../Hooks/useMediaQuery';

type Props = {
    mobileImg: string;
    title: string;
    desktopImage: string;
    descTecnology: string;
    desc: string;
    children: React.ReactNode;
    linkToProject: string;
    linkToGithub: string;
    colorToShadow: string;
}

const ProjectArea = ({
  mobileImg, 
  title, 
  desktopImage, 
  desc, descTecnology, 
  children, 
  linkToProject, 
  linkToGithub,
  colorToShadow
  }: Props
  ) => {
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
    <C.Container
      ref={ref}
      animate={animation}
    >
        <C.LeftSideDescAndImg>
            <motion.h1
            >
              {title}
            </motion.h1>
            <motion.img 
              src={desktopImage} 
              alt='desktop site imagem'
              style={{boxShadow:`0px 0px 10px 5px ${colorToShadow}`}}
            />
            <C.Pdesc>
              {desc}
            </C.Pdesc>
            {isAboveMediumScreens &&
              <>
              <h2>Tecnologias utilizadas:</h2>
                <C.Ptechnology>
                  {descTecnology}
                </C.Ptechnology>
                <C.IconAreas>
                  {children}
                </C.IconAreas>
                <C.AnchorLinkDiv>
                  <a href={linkToProject} target="_blank">Veja o Projeto</a>
                  <a href={linkToGithub} target="_blank">GitHub</a>
                </C.AnchorLinkDiv>
              </>
            }

            {!isAboveMediumScreens &&
              <C.MobileImgAndTechnologys>
                <C.TechMobileDescArea>
                <h2>Tecnologias utilizadas:</h2>
                <C.Ptechnology>
                  {descTecnology}
                </C.Ptechnology>
                <C.IconAreas>
                  {children}
                </C.IconAreas>
                <C.AnchorLinkDiv>
                  <a href={linkToProject} target="_blank">Veja o Projeto</a>
                  <a href={linkToGithub} target="_blank">GitHub</a>
                </C.AnchorLinkDiv>
                </C.TechMobileDescArea>
                <C.MobileImgArea>
                  <img 
                    src={mobileImg} 
                    alt='mobile site imagem'
                    style={{boxShadow:`0px 0px 10px 5px ${colorToShadow}`}}
                  />
                </C.MobileImgArea>
              </C.MobileImgAndTechnologys>
            }
        </C.LeftSideDescAndImg>
        {isAboveMediumScreens &&
          <C.RightSideMobileImg>
              <img 
                src={mobileImg} 
                alt='mobile site imagem'
                style={{boxShadow:`0px 0px 10px 5px ${colorToShadow}`}}
              />
          </C.RightSideMobileImg>
        }
    </C.Container>
  )
}

export default ProjectArea;