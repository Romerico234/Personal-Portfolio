import skillsData from "../../assets/data/skills.json";
import "./Skills.css";

interface Skill {
    id: string;
    skillName: string;
    image: string;
}

interface SkillsData {
    [category: string]: Skill[];
}

export default function Skills() {
    const skills: SkillsData = skillsData;

    return (
        <div className="container skills-container">
            <h1>My Skills</h1>
            {Object.keys(skills).map((category) => (
                <div key={category} className="skills-category">
                    <h2>{category}</h2>
                    <ul className="skills-list">
                        {skills[category].map((skill) => (
                            <li key={skill.id} className="skills-item">
                                <img src={skill.image} alt={skill.skillName} />
                                <span className="skill-name">
                                    {skill.skillName}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
