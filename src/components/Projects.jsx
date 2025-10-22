import React from 'react'
export default function Projects() {
    const [showDetails, setShowDetails] = React.useState({
        Methaq: false,
        Quizify: false
    });
    const projects = [
        {
            name: "Methaq",
            description: "Full-featured Islamic website using React.js offering multiple religious utilities in one platform:- Prayer Times: Fetched accurate prayer timings using the Aladhan API based on selected country and city, with a live countdown timer for the next prayer. Zakat calculation system.",
            image: "/methaq.png",
            liveDemoLink: "https://methaq.netlify.app"
        },
        {
            name: "Quizify",
            description: "Developed an interactive quiz app using React that allows users to choose category, difficulty, and number of questions. Integrated an external API for dynamic questions, real-time scoring, and quiz history tracking. Managed state with Zustand and implemented custom input validation.",
            image: "/quizify.png",
            liveDemoLink: "https://quizify-peach.vercel.app/"
        }
    ]
    return (
        <>
            <h2 className='title my-12'>Projects</h2>
            <div className='projects_Container'>
                <div className="projectsCardsContainer">
                    {
                        projects.map((project) => (
                            <div className={`project ${project.name.toLowerCase()}`} key={project.name}>
                                {/* eye to show details */}
                                <span
                                onClick={()=>{setShowDetails(prev=>({...prev, [project.name]:true}))}}
                                ><i class="fa-solid fa-eye"></i>
                                </span>
                                <div className={"project_details"} id={showDetails[project.name]?'visible':''}>
                                    <span
                                    onClick={()=>{setShowDetails(prev=>({...prev, [project.name]:false}))}}
                                    ><i class="fa-solid fa-eye-low-vision"></i></span>
                                    <img src={project.image} alt={project.name} />
                                    <a target='_blank' href={project.liveDemoLink}><button>Live Demo</button></a>
                                </div>
                                <h3 className="project_name">{project.name}</h3>
                                <p className='project_desc'>{project.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
