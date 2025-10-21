import React from 'react'

export default function About() {
    return (
        <div className='container'>
        <h1 className='title'>About <span className='text-[var(--white)]'>Me</span></h1>
        <div className="aboutSections">
            <section className='Education'>
                <h2>Education</h2>
                <p>Bachelor’s Degree in Management Information Systems, Faculty of Business Alexandria University – Graduated with Excellent Grade (2025)</p>
            </section>
            <section className='Experience'>
                <h2>Experience</h2>
                <p>Worked as a Web Developer Assistant, contributing to the design and development of a responsive, user-friendly hospital website</p>
            </section>
            <section className='TechnicalSkills'>
                <h2>Technical Skills</h2>
                <p>As a Frontend Web Developer and Web Designer, I specialize in React.js, HTML, CSS, and JavaScript, with strong expertise in creating modern, user-centered interface designs using Figma.</p>
            </section>
        </div>
        </div>
    )
}
