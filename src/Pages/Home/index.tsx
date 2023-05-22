import * as C from './styles';
import SquaresDesign from '../../Components/SquaresDesign';
import MyPhoto from '../../assets/myPhoto.jpg';
import riscosIcon from '../../assets/riscoIcon.png';
import riscoBlueIcon from '../../assets/riscoBlueIcon.png';
import { SelectedPage } from '../../Types/Types';
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({setSelectedPage}: Props) => {

  return (
    <C.Section
      id='início'
    >
        <C.Container>

          <C.LeftSideTexts>
            <C.TitleArea>
              <motion.h1 onViewportEnter={() => setSelectedPage(SelectedPage.Início)}>
                Desenvolvedor
              </motion.h1>
              <h1>Frontend.</h1>
              <p>
                Gosto de desenvolver interfaces bonitas com 
                excelente experiência para o usuário.
              </p>
            </C.TitleArea>
            <C.BasicDescriptionsArea>
              <div className='left-side-text'>
                Gosto de dasafios que abrangem meu conhecimento como desenvolvedor.
              </div>
              <div className='right-side-text'>
                Experiência em lidar com cliente e escutar suas necessidades para o produto.
              </div>
            </C.BasicDescriptionsArea>
          </C.LeftSideTexts>

          <C.RightSideSlogan>
            <div className='squares-area'>
              <SquaresDesign/>
            </div>
            <C.PerfilImg src={MyPhoto} alt='Minha foto de perfil'/>
            <C.RiscosDesign1 src={riscosIcon} alt='riscos-design'/>
            <C.RiscosDesign2 src={riscosIcon} alt='riscos-design'/>
            <C.RiscoDesign3 src={riscoBlueIcon} alt='riscos-design'/>
            <C.ImgBoxBorder>
            </C.ImgBoxBorder>
            <div className='squares-area-2'>
              <SquaresDesign/>
            </div>
          </C.RightSideSlogan>
        </C.Container>
    </C.Section>
  )
}

export default Home