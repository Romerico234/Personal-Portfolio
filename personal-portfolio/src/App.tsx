import "./App.css";
import Navbar  from "./components/navbar/Navbar"
import Home from "./pages/home/Home";
import ExperiencesList from "./pages/experiences/ExperiencesList";
import ProjectsList from "./pages/projects/ProjectsList";
import Skills from "./pages/skills/Skills";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <div>
            <Navbar />
            <Home />
            <ExperiencesList />
            <ProjectsList />
            <Skills />
            <Footer />
        </div>
    );
}

export default App;
