import * as C from './styles';
import FutureDesign from '../../assets/FutureAstroDesign.png';
import { SelectedPage } from '../../Types/Types';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

function CarrerAndFuture({setSelectedPage}: Props) {
  return (
    <C.Section
        id='carreiraefuturo'
    >
        <div className="custom-shape-divider-top-1684243854">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path 
                    d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
                    opacity=".25" 
                    className="shape-fill">
                </path>
                <path 
                    d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
                    opacity=".5" 
                    className="shape-fill">
                </path>
                <path 
                    d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
                    className="shape-fill">
                </path>
            </svg>
        </div>

        <div className='stars'></div>
        <div className='stars2'></div>
        <div className='stars3'></div>
        <C.Container>
            <C.LeftSideText>
            <C.H1 
                onViewportEnter={() => setSelectedPage(SelectedPage.CarreiraEFuturo)}
            >
                Carreira e Futuro:
            </C.H1>
            <C.Article>
                Durante anos trabalhando no ramo, estou convicto que a profissão de desenvolvedor de software
                tem um poder enorme de mudar nossa comunidade e criar soluções para problemas que enfrentamos no dia a dia. 
                Ao longo desse
                tempo, já trabalhei como freelancer, criei sistemas que podem ser usados por empresas e prefeituras, desenvolvi um aplicativo que gerou lucros para o meu o cliente.
                 Tenho projetos
                que contém usuários pelo Brasil compartilhando suas mensagens.
                Então, como decidi me tornar um desenvolvedor de software, faço tudo ao meu
                alcance para me tornar cada vez melhor. No futuro, pretendo me tornar um tech leader e fazer mais projetos
                que tenham impacto em minha comunidade. Então, vou sempre buscar 
                novos desafios e melhorar minhas habilidades para que no meu futuro eu possa me tornar o 
                melhor possível, como desenvolvedor e pessoa.
            </C.Article>
            </C.LeftSideText>

            <C.RightSideDesign>
                <img src={FutureDesign}/>
            </C.RightSideDesign>
        </C.Container>

        <div className="custom-shape-divider-bottom-1684244134">
            <svg 
                data-name="Layer 1" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 1200 120" 
                preserveAspectRatio="none">
                <path 
                    d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
                    opacity=".25" 
                    className="shape-fill"
                >
                </path>
                <path 
                    d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
                    opacity=".5" 
                    className="shape-fill"
                >
                </path>
                <path 
                    d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
                    className="shape-fill"
                >
                    
                </path>
            </svg>
        </div>
    </C.Section>
  )
}

export default CarrerAndFuture