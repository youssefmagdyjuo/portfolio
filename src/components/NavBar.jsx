import React, { useState } from 'react'

export default function NavBar() {
    React.useEffect(() => {
        const handleScroll = () => {
            const el = document.querySelector('.nav_Container');
            if (!el) return;
            if (window.scrollY > 5) el.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
            else el.style.boxShadow = 'none';
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const [ul_active,set_ul_active] = useState(false);
    return (
        <div className='nav_Container'>
        <nav>
            <div className='logo'>Logo</div>
            <ul onClick={()=>{set_ul_active(!ul_active)}} className={ul_active?'ul_active':''}>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <span onClick={()=>{set_ul_active(!ul_active)}}  className='navBar_button'>=</span>
            <button><a href="../youssefMagdyResume.pdf" download>Resume</a></button>
        </nav>
        </div>
    )
}
