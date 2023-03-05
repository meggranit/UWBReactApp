import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Logs from './pages/Logs';
import Map from './pages/Map';
import Pusher from 'pusher-js'


function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logs" element = {<Logs />} />
        <Route path="/map" element = {<Map />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
