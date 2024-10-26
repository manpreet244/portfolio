import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About/About';
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-background h-auto w-screen overflow-hidden
    ">
      <Navbar/>
      <Home/>
      <About/>
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
