import SkillsLoop from "./SkillsLoop";
export default function Skills() {
    const skills1 = [
        {
            name: "HTML",
            url: "/skillsImages/html.svg"
        },
        {
            name: "JavaScript",
            url: "/skillsImages/javascript.svg"
        },
        {
            name: "React",
            url: "/skillsImages/react.svg"
        },
        {
            name: "Tailwind",
            url: "/skillsImages/tailwind.svg"
        },
        {
            name: "CSS",
            url: "/skillsImages/css.svg"
        },
        
    ];
    const skills2 = [
        {
            name: "Python",
            url: "/skillsImages/python.svg"
        },  
        {
            name: "C Programing",
            url: "/skillsImages/c.svg"
        },
        {
            name: "GitHub",
            url: "/skillsImages/github.svg"
        },
        {
            name: "Git",
            url: "/skillsImages/git.svg"
        },
        {
            name: "Figma",
            url: "/skillsImages/figma.svg"
        },
    ]
    return (
        <div id="skills" className="skills-section">
            <h1 className="title">Skills</h1>
            <SkillsLoop skills={skills1} />
            <SkillsLoop skills={skills2} reversed={true} />
        </div>
    );
}
