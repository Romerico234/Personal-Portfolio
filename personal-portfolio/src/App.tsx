import "./App.css";
import Navbar  from "./components/navbar/Navbar"
import Home from "./pages/home/Home";
import AboutMe from "./pages/about-me/AboutMe";
import ExperiencesList from "./pages/experiences/ExperiencesList";
import ProjectsList from "./pages/projects/ProjectsList";
import Skills from "./pages/skills/Skills";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <div>
            <Navbar />
            <Home />
            <AboutMe />
            <ExperiencesList />
            <Skills />
            <ProjectsList />
            <Footer />
        </div>
    );
}

export default App;
