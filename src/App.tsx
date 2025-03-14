import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import NotFound from './pages/ErrorPage/NotFound';
import LogementDetail from './pages/LogementDetail/LogementDetail';
import Footer from './components/Footer';
import logements from './data/logements.json';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/logement/:id" element={<LogementDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;