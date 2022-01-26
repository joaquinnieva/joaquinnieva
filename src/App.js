import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import BiographyPage from './pages/BiographyPage';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import SkillPage from './pages/SkillPage';

function App() {
  useEffect(() => {
    Aos.init({ duration: 1500, mirror: true });
  }, []);
  return (
    <>
      <Navbar>
        <HomePage />
        <SkillPage />
        <PortfolioPage />
        <BiographyPage />
        <Footer />
      </Navbar>
    </>
  );
}

export default App;
