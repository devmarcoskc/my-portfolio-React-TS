import Home from './Pages/Home';
import Header from './Components/Header';
import { useEffect, useState } from 'react';
import { SelectedPage } from './Types/Types';
import AboutMe from './Pages/AboutMe';
import Projects from './Pages/Projects';
import CarrerAndFuture from './Pages/CarrerAndFuture';
import ContactMe from './Pages/Contact';

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Início);
  const [isPageOnTop, setIsPageOnTop] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY === 0) {
        setIsPageOnTop(true);
        setSelectedPage(SelectedPage.Início);
      } else {
        setIsPageOnTop(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header
        isPageOnTop={isPageOnTop}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage}/>
      <AboutMe setSelectedPage={setSelectedPage}/>
      <CarrerAndFuture setSelectedPage={setSelectedPage}/>
      <Projects setSelectedPage={setSelectedPage}/>
      <ContactMe setSelectedPage={setSelectedPage}/>
    </>
  )
}

export default App
