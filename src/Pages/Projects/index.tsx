import * as C from './styles';
import Project1Img from '../../assets/Project1.png';
import ProjectArea from '../../Components/ProjectArea';
import mobileSite1 from '../../assets/mobileSite1.png';
import Project2Img from '../../assets/Project2.png';
import mobileSite2 from '../../assets/mobileSite2.png';
import Project3Img from '../../assets/Project3.png';
import mobileSite3 from '../../assets/mobileSite3.png';
import Project4Img from '../../assets/Project4.png';
import mobileSite4 from '../../assets/mobileSite4.png';
import Project5Img from '../../assets/Project5.png';
import mobileSite5 from '../../assets/mobileSite5.png';
import Project6Img from '../../assets/project6.png';
import mobileSite6 from '../../assets/mobileSite6.png';
import Project7Img from '../../assets/project7-1.png';
import mobileSite7 from "../../assets/mobileSite7-1.png";
import Project8img from '../../assets/project8.png';
import mobileSite8 from '../../assets/mobileSite8.png';
import Project9Img from '../../assets/project9.png';
import mobileSite9 from '../../assets/mobileSite9.png';
import Project10Img from '../../assets/project10.png';
import mobileSite10 from '../../assets/mobileSite10.png';
import RightDesignArea from '../../Components/RightDesignArea'; 
import LeftSideDesign from '../../Components/LeftDesignArea';
import {AiFillHtml5} from 'react-icons/ai';
import {SiCss3} from 'react-icons/si';
import {IoLogoJavascript} from 'react-icons/io';
import {SiTypescript} from 'react-icons/si';
import {DiReact} from 'react-icons/di';
import {FiFigma} from 'react-icons/fi';
import {SiStyledcomponents} from 'react-icons/si';
import {SiReacthookform} from 'react-icons/si';
import {SiFramer} from 'react-icons/si';
import {SiTailwindcss} from 'react-icons/si';
import {SiNextdotjs} from 'react-icons/si';
import {SiMongodb} from 'react-icons/si';
import {IoLogoNodejs} from 'react-icons/io';
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
              Meus Principais Trabalhos
            </C.H1>
            <C.ProjectAndDesignArea>
              <DailyCareApp/>
              <LeftSideDesign/>
            </C.ProjectAndDesignArea>
            <C.ProjectAndDesignArea>
              <LeftSideDesign/>
              <CentenoApp/>
            </C.ProjectAndDesignArea>
            <C.ProjectAndDesignArea>
              <ProjectArea
                title='EcoAdministração'
                desc='
                EcoAdministração é um sistema de gerenciamento de resíduos sólidos para prefeituras e empresas.
                 A idéia para criar o sofware começou quando estive envolvido na construção do plano
                de saneamento de básico da cidade de Santa Vitória do Palmar, há alguns anos atrás, e notei que a prefeitura não possuia nenhum sistema para fazer o gerencimanto
                de dados dos resíduos sólidos gerados no município. Então, entrei em contato com a prefeitura e mostrei o meu sistema para resolver o problema.
                 As funcionalidades do sistema foram projetadas para atender às exigências dos órgãos reguladores no gerenciamento de resíduos, tais como: estatísticas dos resíduos gerados, estatísticas por categoria de resíduo, quantificação por bairro e rotas.
                 O Link abaixo é para ver uma demonstração do projeto.
                '
                descTecnology='
                As tecnologias do projeto utilizadas foram
                HTML5, CSS3, Javascript, Node.Js, MongoDB, React.Js.
                '
                mobileImg={mobileSite7}
                desktopImage={Project7Img}
                linkToProject='https://gerenciamento-residuos-solidos.onrender.com/'
                linkToGithub='https://github.com/devmarcoskc/Gerenciamento-residuos-MERN-stack'
                colorToShadow='rgb(255,69,0)'
              >
                <AiFillHtml5/>
                <SiCss3/>
                <IoLogoJavascript/>
                <IoLogoNodejs/>
                <SiMongodb/>
                <DiReact/>
              </ProjectArea>

              <RightDesignArea/>
           </C.ProjectAndDesignArea>

           <C.ProjectAndDesignArea>
              {isAboveMediumScreens &&
                <LeftSideDesign/>
              }
              <ProjectArea
                title='Estoque+'
                desc='
                Desenvolvi uma plataforma de gerenciamento de estoque para pequenas empresas. 
                As funcionalidades do sistema tem como objetivo facilitar o controle, 
                organização e otimização do inventário de uma empresa. Para fazer a plataforma, Node.Js foi utilizado no backend, 
                oferecendo suporte a APIs REST/RESTful, implementação de CRUD e gerenciamento de autenticação e autorização.
                MongoDB para a arquitetura do banco de dados.
                React e Styled-components para criar uma interface atraente e responsiva.
                Context e React Hooks para implementar gerenciamento de estados.
                React-hook-form e zod na criação de formulários dinâmicos.
                TypeScript para fornecer mais segurança e clareza no desenvolvimento de código.
                '
                descTecnology='
                As tecnologias do projeto utilizadas foram
                HTML5, CSS3, Node.Js, React.Js, Typescript, MongoDB. 
                '
                mobileImg={mobileSite10}
                desktopImage={Project10Img}
                linkToProject='https://estoquemais.onrender.com/'
                linkToGithub='https://github.com/devmarcoskc/estoque-frontEnd-ReactTS'
                colorToShadow='blue'
              >
                <AiFillHtml5/>
                <SiCss3/>
                <IoLogoNodejs/>
                <SiTypescript/>
                <DiReact/>
                <SiMongodb/>
              </ProjectArea>
            </C.ProjectAndDesignArea>

            {!isAboveMediumScreens &&
              <RightDesignArea/>
            }
            <C.ProjectAndDesignArea>
              {isAboveMediumScreens &&
                <LeftSideDesign/>
              }
              <ProjectArea
                title='Cards For You'
                desc='
                Cards for you é um site de compartilhamento de cartões de mensagens para todos usuário lerem!
                A idéia do site foi feita para os usuários poderem espalharem suas mensagens positivas com a
                comunidade. O projeto full stack é composto com CRUD completo, sistema de autenticação e autorização,
                APIs Rest e RestFul. Tudo isso utilizando as mais novas ferramentas do Next 13+, como: API Routes,
                autenticação e autorização com NextAuth, SSR, sistema de paginação dinâmicas do próprio Next, sistema de SEO para facilitar a indexação,
                posicionamento e ranqueamento da página nos sistemas de buscas. O projeto já contém usuários espalhando suas mensagens!
                '
                descTecnology='
                As tecnologias do projeto utilizadas foram
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

            <C.ProjectAndDesignArea>
              {isAboveMediumScreens &&
                <LeftSideDesign/>
              }

              <ProjectArea
                title='Poluição Atmosférica em Tempo Real'
                desc='
                Este site foi feito com o propósito de divulgar dados
                da poluição atmosférica de sua localidade em tempo real. Para
                conseguir os dados da poluição foi utilizada uma API americana. 
                Com os dados em mãos montei uma tabela mostrando os resultados e 
                comparando eles com os resultados aceitos. O projeto foi mostrado para
                professores da Engenharia Ambiental na UFPEL e para a comunidade
                em questão. Ele serviu como base para elaborar políticas de incentivo ambiental. 
                '
                descTecnology='
                Para este projeto foi utilizado: HTML5, CSS3, React.JS, Typescript, Styled-components, react-hook-form
                '
                mobileImg={mobileSite4}
                desktopImage={Project4Img}
                linkToProject='https://poluicaoatmosferica.netlify.app/'
                linkToGithub='https://github.com/devmarcoskc/AirPolution'
                colorToShadow='green'
              >
                <AiFillHtml5/>
                <SiCss3/>
                <DiReact/>
                <SiTypescript/>
                <SiStyledcomponents/>
                <SiReacthookform/>
              </ProjectArea>

              {!isAboveMediumScreens &&
                <RightDesignArea/>
              }
            </C.ProjectAndDesignArea>
        </C.Container>
        </main>
    </C.Section>
  )
}

export default Projects