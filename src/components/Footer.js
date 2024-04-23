import React from 'react'

export default function Footer() {
  return (
    <footer className='Footer'>
        <p>
            Codé à l'aide de <a href="https://code.visualstudio.com/" className="Footer__link" target="_blank" rel="noreferrer">
                Visual Studio Code
            </a>. Construit avec <a href="https://fr.legacy.reactjs.org" className="Footer__link" target="_blank" rel="noreferrer">
                React.js
            </a> et <a href="https://sass-lang.com" className="Footer__link" target="_blank" rel="noreferrer">
                Sass 
            </a> avec pour modèle, le design de <a href='https://brittanychiang.com' className="Footer__link" target="_blank" rel="noreferrer">
                Brittany Chiang
            </a>. La police d'écriture du site est <a href="https://rsms.me/inter/" className="Footer__link" target="_blank" rel="noreferrer">
                Inter
            </a>.
        </p>
    </footer>
  )
}
