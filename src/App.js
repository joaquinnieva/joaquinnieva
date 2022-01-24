import Footer from './components/Footer';
import Navbar from './components/Navbar';
import BiographyPage from './pages/BiographyPage';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import SkillPage from './pages/SkillPage';

function App() {
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
