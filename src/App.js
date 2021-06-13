import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './Home/Home/Home';
import NavBar from './Home/NavBar/NavBar';
import AboutMe from './Home/AboutMe/AboutMe';
import Contact from "./Home/Contact/Contact";
import ParticlesBackground from '../src/ParticlesBackground';
import Projects from "./Home/Projects/Projects";
import MyService from "./Home/MyService/MyService";
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from "react";


function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])
  return (
    <Router>
      <NavBar></NavBar>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/aboutMe">
          <AboutMe></AboutMe>
        </Route>
        <Route path="/projects">
          <Projects></Projects>
        </Route>
        <Route path="/myService">
          <MyService></MyService>
        </Route>
        <Route path="/contact">
          <div style={{ position: 'relative', overflow: "hidden" }}>
            <div style={{ position: 'absolute' }}>
              <ParticlesBackground></ParticlesBackground>
            </div>
            <div className="home-header">
              <Contact></Contact>
            </div>
          </div>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
};


export default App;
