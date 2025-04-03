import * as C from './styles';
import ProjectArea from '../../Components/ProjectArea';
import Project8img from '../../assets/project8.png';
import mobileSite8 from '../../assets/mobileSite8.png';
import LeftSideDesign from '../../Components/LeftDesignArea';
import {AiFillHtml5} from 'react-icons/ai';
import {SiCss3} from 'react-icons/si';
import {IoLogoJavascript} from 'react-icons/io';
import {DiReact} from 'react-icons/di';
import {SiNextdotjs} from 'react-icons/si';
import {SiMongodb} from 'react-icons/si';
import useMediaQuery from '../../Hooks/useMediaQuery';
import { SelectedPage } from '../../Types/Types';
import DailyCareApp from '../../Components/DailyCareApp';
import CentenoApp from '../../Components/CentenoApp/CentenoApp';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Projects = ({setSelectedPage}: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <C.Section
      id='trabalhos'
    >
      <main>
        <C.Container>
            <C.H1
              onViewportEnter={() => setSelectedPage(SelectedPage.Trabalhos)}
            >
              My Main Personal Projects
            </C.H1>
            <C.ProjectAndDesignArea>
              <DailyCareApp/>
              <LeftSideDesign/>
            </C.ProjectAndDesignArea>
            <C.ProjectAndDesignArea>
              <LeftSideDesign/>
              <CentenoApp/>
            </C.ProjectAndDesignArea>
            <C.ProjectAndDesignArea style={{marginBottom: 20}}>
              {isAboveMediumScreens &&
                <LeftSideDesign/>
              }
              <ProjectArea
                title='Cards For You'
                desc='
                Cards for You is a message card sharing website for all users to read! 
                The idea behind the site was created so users can spread their positive messages with the community. 
                This full-stack project includes a complete CRUD system, 
                authentication and authorization, and Rest and RestFul APIs. 
                All of this is built using the latest features of Next 13+, such as API Routes, 
                authentication and authorization with NextAuth, SSR, dynamic pagination system, 
                and SEO integration to enhance indexing, ranking, and visibility in search engines. 
                The project already has users sharing their messages!
                '
                descTecnology='
                HTML5, CSS3, Javascript, React.Js, Next.Js, MongoDB. 
                '
                mobileImg={mobileSite8}
                desktopImage={Project8img}
                linkToProject='https://cards-for-you.vercel.app/'
                linkToGithub='https://github.com/devmarcoskc/CardsNext.Js13-Full-Stack'
                colorToShadow='blue'
              >
                <AiFillHtml5/>
                <SiCss3/>
                <IoLogoJavascript/>
                <DiReact/>
                <SiNextdotjs/>
                <SiMongodb/>
              </ProjectArea>
            </C.ProjectAndDesignArea>
        </C.Container>
        </main>
    </C.Section>
  )
}

export default Projects