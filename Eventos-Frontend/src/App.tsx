import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Auth from './pages/Auth/Auth';
import Signup from './pages/Signup/Signup';
import Eventos from './pages/Eventos/Eventos';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Auth" element={<Auth />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Eventos" element={<Eventos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
