import './App.css';
import NavBar from './components/NavBar.js';
import HomePage from './components/HomePage.js';
import AboutMe from './components/AboutMe.js';
import ContactFooter from './components/ContactFooter';
import Projects from './components/Projects.js';

export default function App() {
  return (
    <div>
      <NavBar/>
      <HomePage/>
      <AboutMe/>
      <Projects/>
      <ContactFooter/>
    </div>
  );
};
