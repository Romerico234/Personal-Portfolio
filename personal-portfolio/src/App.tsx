import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import AboutMe from "./pages/about-me/AboutMe";
import ExperiencesList from "./pages/experiences/ExperiencesList";
import ProjectsList from "./pages/projects/ProjectsList";
import Skills from "./pages/skills/Skills";
import Footer from "./components/footer/Footer";

export default function App() {
    return (
        <div>
            <Navbar />
            <div id="home"><Home /></div>
            <div id="about-me"><AboutMe /></div>
            <div id="work-experiences"><ExperiencesList /></div>
            <div id="skills"><Skills /></div>
            <div id="projects"><ProjectsList /></div>
            <Footer />
        </div>
    );
}
