import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Containers/Home'
import GamePage from './Containers/GamePage'
import Navbar from './Components/Navbar'; 
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';

function App() {

  return (
    <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home url={'/'}/>} />
            <Route path="/cart" element={<Home url={'/cart'} />} />
            <Route path="/search/:value" element={<Home url={'/search'} />} />
            <Route path="/game/:id" element={<GamePage />} />
          </Routes>
          <Sidebar />
          <Footer />
    </BrowserRouter>
  )
}

export default App
