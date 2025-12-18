import './App.css';
import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero';
import About from './components/about/about';
import Projects from './components/projects/projects';
import Experience from './components/experience/experience';
import Skills from './components/skills/skills';
import Contact from './components/contact/contact';
import Logo from './images/logo.png';

function App() {
  return (
    <div>
      <Navbar items={[
        {content: <img src={Logo}/>, href: '#hero'}, 
        {content: 'About', href: '#about'}, 
        {content: 'Projects', href: '#projects'}, 
        {content: 'Experience', href: '#experience'}, 
        {content: 'Skills', href: '#skills'}, 
        {content: 'Contact', href: '#contact'}
      ]}/>
      <Hero id='hero'/>
      <About id='about'/>
      <Projects id='projects'/>
      <Experience id='experience'/>
      <Skills id='skills'/>
      <Contact id='contact'/>
    </div>
  );
}

export default App;
