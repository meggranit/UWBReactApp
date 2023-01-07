import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Logs from './pages/Logs';


function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logs" element = {<Logs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
