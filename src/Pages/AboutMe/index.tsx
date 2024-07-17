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
import {SiNextdotjs} from 'react-icons/si';
import {TbBrandReactNative} from 'react-icons/tb';
import {IoLogoNodejs} from 'react-icons/io';
import {FiFigma} from 'react-icons/fi';
import {SiMongodb} from 'react-icons/si';
import {SiPostgresql} from 'react-icons/si';
import {SiMysql} from 'react-icons/si';
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
              Olá, tudo bem ? Me chamo Marcos Kommling Centeno. Trabalho no ramo de desenvolvimento de software há anos, construindo soluções e plataformas para clientes.
              Atualmente, estou cursando Análise e Desenvolvimento de Sistemas. Hoje, eu brinco que programar é como uma terapia:
              as vezes te deixa meio triste, outras horas tudo flui com leveza :), mas a cada etapa você se sente mais realizado.
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
              Git, ReactJS, React Native, Next.Js, Node.Js,
              banco de dados: SQL (PostgreSQL, MySQL), NoSQL (MongoDB). Em design: Figma.'
            />
            <C.StackIconArea>
              <AiFillHtml5/>
              <SiCss3/>
              <IoLogoJavascript/>
              <SiTypescript/>
              <DiGit/>
              <DiReact/>
              <TbBrandReactNative/>
              <SiNextdotjs/>
              <FiFigma/>
            </C.StackIconArea>

            <C.StackIconArea>
              <IoLogoNodejs/>
              <SiMongodb/>
              <SiPostgresql/>
              <SiMysql/>
            </C.StackIconArea>
            <h2>Conhecimentos extras:</h2>
            <p>
              Tenho experiência em hospedagem de API's em VPS, utilizando Linux e Ubuntu. Experiência em building de aplicativos para Android e IOs, assim como utilizar a plataforma para devs do google play console e apple developers para gerenciar e publicar aplicativos.
            </p>
          </C.RightSideArea>

      </C.SecondContainer>
      </main>
    </C.Section>
  )
}

export default AboutMe