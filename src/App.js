import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const greetings = ["Hi, I'm", "Bonjour, je m’appelle", "Привет, меня зовут", "Hallo, ich heiße", "ನಮಸ್ಕಾರ, ನನ್ನ ಹೆಸರು"];
  const info = ["CS + Math @ UIUC", "Software Engineer", "Full Stack Web Developer", "Detail-Oriented Designer", "Quantum Enthusiast"];
  const [heroIndex, setHeroIndex] = useState(0);
  const [heroFade, setHeroFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroFade(false);
      setTimeout(() => {
        setHeroIndex((prev) => (prev + 1) % greetings.length);
        setHeroFade(true);
      }, 200); 
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div id='hero'>
        <div id='hero-text'>
          <p id='hero-greeting' class='hero-sub'>👋 <span class={'hero-sub ' + (heroFade ? 'hero-fade-in' : 'hero-fade-out')}>{greetings[heroIndex]}</span></p>
          <h1 id='hero-title'>Tejas Raghuram</h1>
          <p id='hero-info' class={'hero-sub ' + (heroFade ? 'hero-fade-in' : 'hero-fade-out')}>{info[heroIndex]}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
