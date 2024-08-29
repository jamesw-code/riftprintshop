import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Home from "./components/Home";
import Footer from "./components/Footer";
function App() {
  return (
    <main className="text-gray-400 bg-gray-800 body-font">
      <BrowserRouter>
      {<Navbar />}
       <Routes>
           <Route path="/" element={<Home />} />
           <Route path="about" element={<About />} />
           <Route path="contact" element={<Contact />} />
       </Routes>
       {<Footer />}
     </BrowserRouter>
    </main>
  );
}

export default App;
