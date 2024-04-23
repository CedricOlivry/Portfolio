import * as React from "react";
import ProjetsList from "../datas/projets"

export default function Projects() {
	return (
        <section id="projets" className="Projets" aria-label="Projets effectués">
            <div className="Projets__Title-container">
                <h2 className="Projets__Title-container__title">Projets</h2>
            </div>
            <div>
                <ol className="Projets__container">
                    {ProjetsList.map((projet) =>
                        <li className="Projets__Projet" key={projet.id}>
                            <div className="Projets__Projet__Container">
                                <div className="Projets__Projet__Container__highlight"></div>
                                <div className="Projets__Projet__Container__header">
                                    <h3 className="Titles">
                                        <a className="Titles__links" href={projet.redirection} target="_blank" rel="noreferrer" aria-label={projet.nom}>
                                            <span className="Titles__links__span"></span>
                                            <span>
                                                {projet.nom}
                                                <span className="Titles__second-name">
                                                    {projet.nom2}
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="Titles__second-name__svg" aria-hidden="true">
                                                        <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                                                    </svg>
                                                </span>
                                            </span>
                                        </a>
                                    </h3>
                                    <p className="Projets-description">{projet.description}</p>
                                    <ul className="Projets-skills" aria-label="Compétences utilisées">
                                        {projet.competences.map((competence) =>
                                            <li key={competence}>
                                                <div>{competence}</div>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                                <img src={projet.img} loading="lazy" width={200} height={48} alt={projet.nom + " " + projet.nom2} className="Projets-image"/>
                            </div>
                        </li>
                    )}
                </ol>
            </div>
        </section>
    )
}