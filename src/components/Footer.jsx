import React from 'react'

export default function Footer() {
    return (
        <div className='footer_Container'>
        <footer>
            <div className='logo'>
                <a href="#header"><img src="/logo.svg" alt="" /></a>
            </div>
            <div className="links">
                <a href="#header">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>
            <div className="contacts">
                <a href="mailto:Youssef.magdy.office@gmail.com"target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-at"></i></a>
                <a href="https://www.linkedin.com/in/youssefmagdyshaban"target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin-in"></i></a>
                <a href="https://wa.me/201286289971"target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-whatsapp"></i></a>
                <a href="https://www.facebook.com/share/1DPzZrbPay/"target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/juo.magdy?igsh=cXBsY3N1cXBpd3Zz"target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram"></i></a>
            </div>
        </footer>
            <p>© 2025 Youssef Magdy. All rights reserved.</p>
        </div>
    )
}
