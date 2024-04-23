import * as React from "react";
import Exps from "../datas/experiences"

export default function Experiences() {
	return (
        <section id="experiences" className="Experiences" aria-label="Expériences Professionnelles ou Formations">
            <div className="Experiences__Title-container">
                <h2 className="Experiences__Title-container__title">Expériences</h2>
            </div>
            <div>
                <ol className="Exp-container">
                    {Exps.map((experience) =>
                        <li className="Experiences__Exp" key={experience.id}>
                            <div className="Experiences__Exp__Container">
                                <div className="Experiences__Exp__Container__highlight"></div>
                                <header className="Experiences__Exp__Container__header" aria-label={experience.date}>{experience.date}</header>
                                <div className="Experiences__Exp__Container__Content">
                                    <h3 className="Titles">
                                        <div>
                                            <a className="Titles__links" href={experience.redirection} target="_blank" rel="noreferrer" aria-label={experience.poste + " à " + experience.entreprise}>
                                                <span className="Titles__links__span"></span>
                                                <span>
                                                    {experience.poste + " - "}
                                                    <span className="Titles__job-location">
                                                        {experience.entreprise}
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="Titles__job-location__svg" aria-hidden="true">
                                                            <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                                                        </svg>
                                                    </span>
                                                </span>
                                            </a>
                                        </div>
                                        <div>
                                            <div className="Titles__name" aria-hidden='true'>{experience.nom}</div>
                                        </div>
                                    </h3>
                                    <p className="Exp-description">{experience.description}</p>
                                    {experience.liens ? (
                                        <ul className="Exp-Links" aria-label="Liens associés">
                                            {experience.liens.map((lien) => 
                                                <li className="Exp-Links__item mr-4" key={lien.nom}>
                                                    <a href={lien.lien} target="_blank" rel="noreferrer">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                            <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path>
                                                            <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path>
                                                        </svg>
                                                        <span>{lien.nom}</span>
                                                    </a>
                                                </li>
                                            )}
                                        </ul>
                                    ) : (<></>)}
                                    
                                    <ul className="Exp-Skills" aria-label="Compétences acquises">
                                        {experience.competences.map((competence) =>
                                            <li key={competence}>
                                                <div>{competence}</div>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </li>
                    )}
                </ol>
            </div>
        </section>
    )
}