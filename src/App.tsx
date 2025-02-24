import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import NotFound from './pages/ErrorPage/NotFound';
import Gallery from './components/Gallery';
import logements from './data/accomodations.json';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/gallery" element={<Gallery logements={logements} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;