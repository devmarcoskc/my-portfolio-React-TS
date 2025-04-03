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
import { SiFlutter } from 'react-icons/si';
import { SiDart } from 'react-icons/si';
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
            title='About me:' 
            text='
              Hello, my name is Marcos! I have been working in the software development field for years, 
              building solutions and platforms for clients. 
              I have a degree in software engineering. Currently, 
              I work as a front-end software developer. 
              I lead and contribute to the development of new features for web and mobile platforms, 
              with the goal of delivering an optimized and innovative user experience.

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
              title='My Stack:'
              text='Currently, my knowledge includes: HTML5, CSS3, Javascript, Typescript, 
              Git, ReactJS, React Native, Flutter, Dart,
              Next.js, Node.js, Azure, databases: SQL (PostgreSQL, MySQL), 
              NoSQL (MongoDB). In design: Figma.'
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
              <SiFlutter/>
              <SiDart/>
            </C.StackIconArea>

            <C.StackIconArea>
              <IoLogoNodejs/>
              <SiMongodb/>
              <SiPostgresql/>
              <SiMysql/>
            </C.StackIconArea>
            <h2>Additional skills:</h2>
            <p>
            I have experience hosting APIs on VPS, using Linux and Ubuntu. I also have experience in building applications for Android and iOS, as well as using the Google Play Console and Apple Developer platforms to manage and publish apps.
            </p>
          </C.RightSideArea>

      </C.SecondContainer>
      </main>
    </C.Section>
  )
}

export default AboutMe