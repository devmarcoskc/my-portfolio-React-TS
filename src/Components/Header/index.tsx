import * as C from './styles';
import Link from '../Links';
import { SelectedPage } from '../../Types/Types';
import useMediaQuery from '../../Hooks/useMediaQuery';
import {AiFillLinkedin} from 'react-icons/ai';
import {AiFillGithub} from 'react-icons/ai';
import {BiMenuAltRight} from 'react-icons/bi';
import {AiOutlineClose} from 'react-icons/ai';
import {useState} from 'react';

type Props = {
    isPageOnTop: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Header = ({selectedPage, setSelectedPage}: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [menuIsToggled, setMenuIsToggled] = useState<boolean>(false);

  return (
    <C.Header>
         {isAboveMediumScreens &&
        <C.NavContainer>
            <Link 
                page="About me"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
            />
            <Link
                page="Carrer and Future"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
            />
            <Link
                page="Personal Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
            />
            <Link
                page="Contact Me"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
            />
            <C.GeneralInfo>
                <a href='https://www.linkedin.com/in/marcos-kommling-centeno-b00926277' target="_blank">
                    <AiFillLinkedin/>
                </a>
                <a href='https://github.com/devmarcoskc?tab=repositories' target="_blank">
                    <AiFillGithub/>
                </a>
            </C.GeneralInfo>
        </C.NavContainer>
         }
        {!isAboveMediumScreens &&
            <>
                <C.MenuMobile 
                    onClick={() => setMenuIsToggled(!menuIsToggled)}
                >
                    <BiMenuAltRight/>
                </C.MenuMobile>
            </>
        }
        {!isAboveMediumScreens &&
        <C.MobMenuArea 
            style={{right:`${menuIsToggled === true ? '0vw' : '-110vw'}`}}
        >
            <C.MobMenuContainer>
            <div className='svg-div'>
                <AiOutlineClose onClick={() => setMenuIsToggled(!menuIsToggled)}/>
            </div>
            
            <C.NavAreaMob>
                <Link 
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                />
                <Link 
                    page="About Me"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                />
                <Link
                    page="Carrer and Future"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                />
                <Link
                    page="Personal Projects"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                />
                <Link
                    page="Contact Me"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                />
            </C.NavAreaMob>

            <C.ContactMobileMenu>
                <h2>MENSAGENS</h2>
                <span>devmarcoscenteno@gmail.com</span>
            </C.ContactMobileMenu>

            <C.IconsToContact>
                <a href='https://www.linkedin.com/in/marcos-kommling-centeno-b00926277' target="_blank">
                    <AiFillLinkedin/>
                </a>
               <a href='https://github.com/devmarcoskc?tab=repositories' target="_blank">
                    <AiFillGithub/>
               </a>
            </C.IconsToContact>
            </C.MobMenuContainer>
        </C.MobMenuArea>
        }
    </C.Header>
  )
}

export default Header