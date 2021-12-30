import logo from './logo.svg';
import './App.css';
import Reloaded from './components/Reloaded';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactForm from './components/Contact';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import { useState } from 'react';

function App() {
  const [selectedLink, setSelectedLink] = useState('about');

  return (
    <div className="App">
      <Header selectedLink={selectedLink} setSelectedLink={setSelectedLink} />
      <main className='site-content'>
        {selectedLink === 'about' && <About />}
        {selectedLink === 'portfolio' && <Portfolio />}
        {selectedLink === 'contact' && <ContactForm />}
        {selectedLink === 'resume' && <Resume />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
