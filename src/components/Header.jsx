import React from 'react'
import EyeFollow from './EyeFollow'
export default function Header() {
    return (
        <div className='header_Container'>
            <div className='name'>I’m Youssef Magdy</div>
            <div className='flex'>
                <div className="Front-end">
                    Front-end
                    <span>
                        <EyeFollow style={{background: "var(--white)"}}/>
                    </span>
                </div>
                <div className="developer">
                    developer
                    <span>
                        <EyeFollow style={{background: "var(--cafee-color)"}}/>
                    </span>
                </div>
            </div>
            <button><a href="../youssefMagdyResume.pdf" download>Downloud resume</a></button>
        </div>
    )
}
