import * as C from './styles';
import TextAndDesc from '../../Components/TextAndDesc';
import SquaresDesign from '../../Components/SquaresDesign';
import UnionCircles from '../../assets/Circles.png';
import {AiFillHtml5} from 'react-icons/ai';
import {SiCss3} from 'react-icons/si';
import {IoLogoJavascript} from 'react-icons/io';
import {SiTypescript} from 'react-icons/si';
import {DiGit} from 'react-icons/di';
import {DiReact} from 'react-icons/di';
import {BsFillDatabaseFill} from 'react-icons/bs';
import {SiNextdotjs} from 'react-icons/si';
import {TbBrandReactNative} from 'react-icons/tb';
import {IoLogoNodejs} from 'react-icons/io';
import {FiFigma} from 'react-icons/fi';
import RiscoDesign from '../../assets/riscoBlueIcon.png';
import useMediaQuery from '../../Hooks/useMediaQuery';
import mobileRiscoBlue from '../../assets/softRiscoBlueIcon.png'
import { SelectedPage } from '../../Types/Types';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

function AboutMe({setSelectedPage}: Props) {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <C.Section
      id='meconheça'
    >
      <main>
      <C.FirstContainer>
        <C.LeftSideDesc
          onViewportEnter={() => setSelectedPage(SelectedPage.MeConheça)}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 1}}
          transition={{duration: 1}}
          variants={{
              hidden: {opacity:0, y:50},
              visible: {opacity:1, y:0}
          }}
        >
          <TextAndDesc 
            title='Sobre Mim:' 
            text='
              Olá, tudo bem ? Me chamo Marcos Kommling Centeno. Estou no ramo de desenvolvimento frontend há mais de 1 ano. 
              Antes de decidir entrar na carreira, cursei engenharia ambiental na UFPEL por 2 anos, no qual tive
              o primeiro contato com programação. Desde então, resolvi estudar mais sobre o ramo e
              decidi me tornar um desenvolvedor web. Hoje, eu brinco que programar é como uma terapia:
              as vezes te deixa meio triste, outras horas tudo flui com leveza :), mas depois de cada projeto feito
              você se sente mais realizado.
            '
          />
        </C.LeftSideDesc>
        <C.RightSideDesign>
          <div className='squareDesign'>
            <SquaresDesign/>
          </div>
          <div className='circlesDesign'>
            <img src={UnionCircles} alt="circulos design"/>
          </div>
          {!isAboveMediumScreens &&
            <div className='riscos-design-area'>
              <img src={mobileRiscoBlue} alt='riscos design'/>
            </div>
          }
        </C.RightSideDesign>
      </C.FirstContainer>

        <C.SecondContainer>
          <C.LeftSideDesign>
            <div className='circlesDesignArea'>
              <img src={UnionCircles} alt='circles design'/>
            </div>
            <div className='riscoDesignArea'>
              <img src={RiscoDesign} alt='riscos Design'/>
            </div>
          </C.LeftSideDesign>

          <C.RightSideArea
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 1}}
            transition={{duration: 1}}
            variants={{
                hidden: {opacity:0, y:50},
                visible: {opacity:1, y:0}
            }}  
          >
            <TextAndDesc
              title='Meu Stack:'
              text='Atualmente meus conhecimentos são: HTML5, CSS3, Javascript, Typescript, 
              Git, ReactJS, 
              básico de banco de dados (MySQL, phpMyAdmin) e básico de Figma.'
            />
            <C.StackIconArea>
              <AiFillHtml5/>
              <SiCss3/>
              <IoLogoJavascript/>
              <SiTypescript/>
              <DiGit/>
              <DiReact/>
              <BsFillDatabaseFill/>
              <FiFigma/>
            </C.StackIconArea>
            <h2>Próximos Passos:</h2>
            <p>
              Atualmente estou estudando NextJS, mas no futuro vou 
              expandir meu conhecimento para React Native e NodeJS.
            </p>
            <C.StackIconArea>
              <SiNextdotjs/>
              <TbBrandReactNative/>
              <IoLogoNodejs/>
            </C.StackIconArea>
          </C.RightSideArea>

        </C.SecondContainer>
        </main>
    </C.Section>
  )
}

export default AboutMe