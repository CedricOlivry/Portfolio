import React, { useState, useEffect } from 'react';

export default function HeaderNavList() {
    const [activeSection, setActiveSection] = useState("apropos");
    const sections = ['apropos', 'experiences', 'projets'];

    useEffect(() => {
        function handleScroll() {
          const scrollY = window.scrollY;
          const offset = 350;
    
          for (let i = 0; i < sections.length; i++) {
            const section = document.getElementById(sections[i]);
    
            if (section) {
              const sectionTop = section.offsetTop;
              const sectionBottom = sectionTop + section.clientHeight;
    
              if (scrollY >= sectionTop - offset && scrollY < sectionBottom - offset) {
                setActiveSection(sections[i]);
              }
            }
          }
        }
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    return (
        <nav className='Header__Nav'aria-label="Menu">
            <ul className="Header__Nav__List">
                <li>
                    <a href="#apropos" className={activeSection === 'apropos' ? 'Header__Nav__List__Link active' : 'Header__Nav__List__Link'}>
                        <span className="Header__Nav__List__Link__indicator"></span>
                        <span className="Header__Nav__List__Link__text">A PROPOS</span>
                    </a>
                </li>
                <li>
                    <a href="#experiences" className={activeSection === 'experiences' ? 'Header__Nav__List__Link active' : 'Header__Nav__List__Link'}>
                        <span className="Header__Nav__List__Link__indicator"></span>
                        <span className="Header__Nav__List__Link__text">EXPERIENCES</span>
                    </a>
                </li>
                <li>
                    <a href="#projets" className={activeSection === 'projets' ? 'Header__Nav__List__Link active' : 'Header__Nav__List__Link'}>
                        <span className="Header__Nav__List__Link__indicator"></span>
                        <span className="Header__Nav__List__Link__text">PROJETS</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}