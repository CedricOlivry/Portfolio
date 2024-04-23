export default function About() {
	return ( 
        <section id="apropos" className="About">
            <div className="About__Title-content">
                <h2 className="About__Title-content__title">A propos</h2>
            </div>
            <div>
                <p className="About__resume">
                    Tout commença en 2013, lorsque je découvre un logiciel nommé <a className="About__resume__link" href="https://fr.wikipedia.org/wiki/Petit_computer" target="_blank" rel="noreferrer">
                        Petit Computer
                    </a> sur ma Nintendo 3DS. C'est un logiciel permettant de développer à l'aide d'une variante du langage <a className="About__resume__link" href="https://fr.wikipedia.org/wiki/Basic_(langage)" target="_blank" rel="noreferrer">
                        BASIC
                    </a>. C'est ma première expérience dans l'univers du développement. J'ai voulu en apprendre un peu plus sur la vie en entreprise dans ce domaine alors j'en ai fait mon stage découverte en 3ème ; Ça m'a beaucoup plu.
                    Faisons ensuite un saut jusqu'en 2018, où à la sortie de mon bac, j'ai souhaité faire de cette passion mon métier, je me suis donc lancé dans une première formation.
                </p>
                <p>
                    Aujourd'hui, mon objectif est de créer des solutions web en <a className="About__resume__link" href="https://fr.legacy.reactjs.org" target="_blank" rel="noreferrer">
                        React
                    </a> afin de répondre à un besoin tout en approfondissant mes compétences actuelles, et par la suite, étendre mes compétences vers d'autres horizons.
                </p>
            </div>
        </section>
    )
}