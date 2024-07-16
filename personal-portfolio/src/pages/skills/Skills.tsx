import skillsData from "../../assets/data/skills.json";

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
        <div className="container mt-5">
            <h1>My Skills</h1>
            {Object.keys(skills).map((category) => (
                <div key={category}>
                    <h2>{category}</h2>
                    <ul>
                        {skills[category].map((skill) => (
                            <li key={skill.id}>
                                <img src={skill.image} alt={skill.skillName} />
                                {skill.skillName}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
