// import logo from './logo.svg';
import './App.css';
import Navbar from './componentes/Navbar/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './componentes/Home/Home';
import About from './componentes/About/About';
import Foote from './componentes/Footer/Footer';
import Footer from './componentes/Footer/Footer';


function App() {
  return (
    <div className="">

      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
      </Routes>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
