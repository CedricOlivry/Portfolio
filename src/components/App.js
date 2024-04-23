import Header from '../components/Header'
import Main from './Main';
import React, { useState } from 'react';
import '../styles/App.scss'

export default function App() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
        const div = document.getElementById('pointerEffect');
        const rect = div.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        setPosition({ x, y });
    };

    return (
        <div onMouseMove={handleMouseMove} className='Webpage'>
            <div id='pointerEffect' className='Webpage__highlight-background' style={{ background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(19, 57, 160, 0.15), transparent 80%)` }}></div>
            <div className='Webpage__content-container'>
                <a href='#content' className='Webpage__content-container__content-acces'>Passer au contenu</a>
                <div className='Webpage__content-container__content'>
                    <Header />
                    <Main />
                </div>
            </div>
        </div>
    );
}