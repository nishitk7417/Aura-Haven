import Header from './Components/Header/Header';
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Service from './Components/Service/Service';
import { useState } from 'react';
import Appointment from './Components/Appointment/Appointment';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import ScrollToTop from './Components/Scroll/Scroll';

function App() {
  const [mode, setmode] = useState('light');
  const [btnText, setBtnText] = useState('Enable Dark Mode');

    const toggleMode = ()=>{
        if (mode==='light'){
            setmode('dark');
            setBtnText('Enable Light Mode');
        }
        else{
            setmode('light');
            setBtnText('Enable Dark Mode');
        }
    }

  return (
    <>
      <BrowserRouter>
      <ScrollToTop/>
      <Header title="Aura Haven" mode={mode} toggleMode={toggleMode} btnText={btnText}/>
      <Routes>
        <Route path="/" element={<Home mode={mode} />} />
        <Route path='/appointment' element={<Appointment mode={mode}/>} />
        <Route path="/about" element={<About mode={mode} />} />
        <Route path="/service" element={<Service mode={mode} />} />
        <Route path="/contact" element={<Contact mode={mode} />} />
        
      </Routes>
      <Footer mode={mode}/>
    </BrowserRouter>
    </>
  );
}

export default App;
