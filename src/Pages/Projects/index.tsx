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
import Project8img from '../../assets/project8.png';
import mobileSite8 from '../../assets/mobileSite8.png';
import Project9Img from '../../assets/project9.png';
import mobileSite9 from '../../assets/mobileSite9.png';
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
import HighlightProject from '../../Components/HighlightProject';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Projects = ({setSelectedPage}: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <C.Section
      id='projetos'
    >
      <main>
        <C.Container>
            <C.H1
              onViewportEnter={() => setSelectedPage(SelectedPage.Projetos)}
            >
              Meus Projetos
            </C.H1>
            <HighlightProject/>
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
                API Rest e RestFULL. Tudo isso utilizando as mais novas ferramentas do poderoso Next 13+, como: o novo sistema de rotas,
                autenticação e autorização com NextAuth, sistema de paginação dinâmicas do próprio Next, sistema de SEO para facilitar a indexação,
                posicionamento e ranqueamento da página nos sistemas de buscas. O projeto já contém usuários espalhando suas mensagens. Em breve, novas
                features serão lançadas no projeto!
                '
                descTecnology='
                As tecnologias do projeto utilizadas foram
                HTML5, CSS3, Javascript, React.Js, Next.Js, MongoDB. 
                '
                mobileImg={mobileSite8}
                desktopImage={Project8img}
                linkToProject='https://personalfelipecenteno.com.br/'
                linkToGithub='https://github.com/devmarcoskc/PersonalTrainer-JS'
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
              <ProjectArea
                title='Sociopedia - Sua rede social'
                desc='
                Esté é um dos meus principais projetos que estou mais gostando de desenvolver. Sociopedia é uma rede social
                que você pode compartilhar posts com imagens e textos com seus amigos. Não só, mas também, adicionar amigos e 
                curtir os posts! O projeto é full stack, composto com CRUD completo, autenticação e autorização. Para o banco de dados
                foi optado por MongoDB por ser perfeito em essas ocasiões pela sua escalabilidade. Pois, os dados dos usuários -como exemplo, vão estar
                em constante incrementação. No backend está rodando Node.js e suas ferramentas (JWT, express, mongoose, bcrypt, nodemoon, entre outros...). No frontEnd
                foi optado por React.JS, utilizando redux, redux-toolkit, redux-persist, material-UI, formik, yup, react-dropzone. Como o projeto está no começo, estou desenvolvendo
                novas features, como habilitar a opção de fazer comentários em posts, construir um chat para os usuários... 
                '
                descTecnology='
                As tecnologias do projeto utilizadas foram
                HTML5, CSS3, Javascript, Node.Js, MongoDB, React.Js.
                '
                mobileImg={mobileSite9}
                desktopImage={Project9Img}
                linkToProject='https://sociopedia-fnet.onrender.com/'
                linkToGithub='https://github.com/devmarcoskc/sociopedia-MERN-stack'
                colorToShadow='black'
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
              <ProjectArea
                title='Personal Trainer - Freelancer'
                desc='
                Projeto freelancer foi feito para personal trainer,
                no qual tive que atender as necessidades, espectativas do cliente e passar
                tudo para o design e código.
                Ao longo do desenvolvimento houve mudanças no design e nas funcionalidades,
                com o intuito de chegar o mais próximo possível das necessidades do
                cliente. Atualmente eu faço a administração e manuntenção do site.
                '
                descTecnology='
                As tecnologias do projeto utilizadas foram
                HTML5, CSS3, Javascript e Figma
                '
                mobileImg={mobileSite1}
                desktopImage={Project1Img}
                linkToProject='https://personalfelipecenteno.com.br/'
                linkToGithub='https://github.com/devmarcoskc/PersonalTrainer-JS'
                colorToShadow='black'
              >
                <AiFillHtml5/>
                <SiCss3/>
                <IoLogoJavascript/>
                <FiFigma/>
              </ProjectArea>

              <RightDesignArea/>
           </C.ProjectAndDesignArea>

            <C.ProjectAndDesignArea>
              {isAboveMediumScreens &&
                <LeftSideDesign/>
              }

              <ProjectArea
                title='Site de Vendas e Divulgação- Painéis Solares'
                desc='
                Projeto feito para divulgação de uma possível
                empresa de fabricação de painéis solares. Este projeto contém 
                uma parte, no qual você pode simular o quanto de painéis solares
                você irá precisar na sua casa, baseado na sua região. Para esta parte,
                foi utilizada uma API americana que mostra o índice de incidência solar
                por m², na sua localidade. Após ter esse índice em mãos, utilizei cálculos
                e lógica que um engenheiro eletricista precisaria para mostrar o quanto
                de energia cada painel solar iria produzir. Site também conta um sistema de Login 
                baseado no LocalStorage para imersão de usuário e também um sistema de carrinho, 
                no qual cada usuário tem suas compras salvadas. 
                '
                descTecnology='
                Para este projeto foi utilizado: HTML5, CSS3, React.JS, Typescript, Styled-components, react-hook-form
                '
                mobileImg={mobileSite2}
                desktopImage={Project2Img}
                linkToProject='https://solarpanelscompany.netlify.app/'
                linkToGithub='https://github.com/devmarcoskc/Solar-REACT-TS'
                colorToShadow='blue'
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

            <C.ProjectAndDesignArea>
              <ProjectArea
                title='BMW Model X Page- Um Design Diferente'
                desc='
                Este projeto é uma página dos modelos da linha X da BMW. É muito
                parecida com a original, com ajustes no design feito por mim. Esta
                página conta com um validador de formulário para vendas, assim como
                o site original da BMW. Para o formulário foi usado RegExp para todos os
                campos, ele também contém sistemas de autocomplete
                da região baseado no CEP, via API. Tabmém possui sistema de busca por cidade
                e estado por API. O site também conta com um sistema de login integrado
                ao localStorage, para ter uma imersão de usuário e também um sistema de busca
                de concessionária no Sul do Brasil.
                '
                descTecnology='
                As tecnologias do projeto utilizadas foram
                HTML5, CSS3, React.JS, Typescript, Styled-components,
                react-hook-form, framer-motion
                '
                mobileImg={mobileSite3}
                desktopImage={Project3Img}
                linkToProject='https://bmwmodelx.netlify.app/'
                linkToGithub='https://github.com/devmarcoskc/bmwModelX-REACT-TS'
                colorToShadow='#464242'
              >
                <AiFillHtml5/>
                <SiCss3/>
                <DiReact/>
                <SiTypescript/>
                <SiStyledcomponents/>
                <SiReacthookform/>
                <SiFramer/>
              </ProjectArea>

              <RightDesignArea/>
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

            <C.ProjectAndDesignArea>
              <ProjectArea
                title='Fitness Gym - Landing Page'
                desc='
                Este projeto foi feito para mostrar uma Landing Page
                de uma imaginária franquia de academia. O site conta 
                com um validador de formulário com react-hook-form, usando
                os conhecimentos de RegExp, além do próprio design e animações.
                Novas features para o site estão sendo planejadas e desenvolvidas.
                '
                descTecnology='
                As tecnologias do projeto utilizadas foram
                HTML5, CSS3, React.JS, Typescript, Tailwind,
                react-hook-form, framer-motion
                '
                mobileImg={mobileSite5}
                desktopImage={Project5Img}
                linkToProject='https://fitnesslifestyleforyou.netlify.app/'
                linkToGithub='https://github.com/devmarcoskc/FitnessGym-React-TS'
                colorToShadow='#FFA6A3'
              >
                <AiFillHtml5/>
                <SiCss3/>
                <DiReact/>
                <SiTypescript/>
                <SiTailwindcss/>
                <SiReacthookform/>
                <SiFramer/>
              </ProjectArea>

              {isAboveMediumScreens &&
                <RightDesignArea/>
              }
            </C.ProjectAndDesignArea>

            <C.ProjectAndDesignArea style={{marginBottom:'100px'}}>
              {isAboveMediumScreens &&
                <LeftSideDesign/>
              }

              <ProjectArea
                title='Página de Aluguel de Carros'
                desc='
                Site foi feito para demonstrar uma página de 
                aluguel de carros usando as novas técnologias do Next.Js 13, como:
                App Router, CSR (Client side redering), SSR (server side rendering),
                optimização do sistema de SEO - usando o metadata do próprio Next. Não só isso,
                mas também foi usado no projeto, Tailwind CSS, consumos de APIs externas para buscar os carros
                e seus dados. O site ainda conta com um sistema avançado de filtragem para encontrar o carro
                que se encontra em seus padrões de filtro desejados. O projeto foi feito em inglês para demonstrar meu
                conhecimento em inglês. 
                '
                descTecnology='
                Para este projeto foi utilizado: HTML5, Tailwind CSS, React.JS, Typescript, Next.Js.
                '
                mobileImg={mobileSite6}
                desktopImage={Project6Img}
                linkToProject='https://poluicaoatmosferica.netlify.app/'
                linkToGithub='https://github.com/devmarcoskc/AirPolution'
                colorToShadow='#00308F'
              >
                <AiFillHtml5/>
                <SiTailwindcss/>
                <DiReact/>
                <SiTypescript/>
                <SiNextdotjs/>
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