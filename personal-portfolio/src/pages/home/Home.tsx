import me from "../../assets/images/me.png";
import "./Home.css";
import AboutMe from "../about-me/AboutMe";

export default function Home() {
    return (
        <div className="container mt-5">
            <header className="text-center mb-5">
                <h1 className="display-4">Welcome to My Portfolio!</h1>
            </header>

            <section className="hero-section text-center mb-5">
                <img
                    src={me}
                    alt="Hero"
                    className="img-fluid rounded-circle mb-3 custom-border"
                    style={{ width: "350px" }}
                />
                <h2>Romerico David</h2>
                <p className="lead">Aspiring Software Engineer</p>
            </section>
            <AboutMe />
        </div>
    );
}
