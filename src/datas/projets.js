import ArgentBank from "../assets/projects/argentbank.webp"
import SportSee from "../assets/projects/sportsee.webp"
import Kasa from "../assets/projects/kasa.webp"
import Billed from "../assets/projects/billed.webp"
import LesPetitsPlats from "../assets/projects/lespetitsplats.webp"
import Groupomania from "../assets/projects/groupomania.webp"
import Piquante from "../assets/projects/piquante.webp"
import Ohmyfood from "../assets/projects/ohmyfood.webp"

const projets = [
    {
        id: 1,
        nom: "ArgentBank",
        nom2: "",
        redirection: "https://github.com/CedricOlivry/Formation-Developpeur-JavaScript-React/tree/Projet13",
        description: "Projet n°13 de la formation Développeur d'applications JavaScript React chez OpenClassrooms. C'est une application de gestion de comptes banquaires reliée à une API. Une authentification ainsi qu'une update du profil est disponible, le tout géré à l'aide de Redux.",
        competences: ["React.js", "Redux", "Fetch", "JavaScript"],
        img: ArgentBank
    },
    {
        id: 2,
        nom: "SportSee",
        nom2: "",
        redirection: "https://github.com/CedricOlivry/Formation-Developpeur-JavaScript-React/tree/Projet12",
        description: "Projet n°12 de la formation Développeur d'applications JavaScript React chez OpenClassrooms. C'est un tableau de bord pour une application sportive reliée à une API. Des Mocks ont été utilisé afin de simuler des données pour tester l'application et des PropTypes ont été utilisés afin de valider les données reçues. Recharts a été utilisé pour son système de Data Visualisation basé sur des composants React réutilisables.",
        competences: ["React.js", "Fetch", "Recharts", "JavaScript", "JSDoc"],
        img: SportSee
    },
    {
        id: 3,
        nom: "Kasa",
        nom2: "",
        redirection: "https://github.com/CedricOlivry/Formation-Developpeur-JavaScript-React/tree/Projet11",
        description: "Projet n°11 de la formation Développeur d'applications JavaScript React chez OpenClassrooms. C'est une plateforme de présentation de logements. Premier projet React de la formation. TypeScript a été choisi pour le découvrir et le maîtriser. Un fichier JSON été utilisé afin de simuler des données pour l'application.",
        competences: ["React.js", "React Router", "TypeScript"],
        img: Kasa
    },
    {
        id: 4,
        nom: "Billed",
        nom2: "",
        redirection: "https://github.com/CedricOlivry/Formation-Developpeur-JavaScript-React/tree/Projet9",
        description: "Projet n°9 de la formation Développeur d'applications JavaScript React chez OpenClassrooms. C'est un Saas pour des RH. Le projet consistait à tester l'application déjà existante à l'aide de tests d'intégration et unitaires Jest et à débugger les quelques tests déjà présents si besoin.",
        competences: ["Jest", "Cypress", "Notion", "JavaScript"],
        img: Billed
    },
    {
        id: 5,
        nom: "Les petits plats",
        nom2: "",
        redirection: "https://github.com/CedricOlivry/Formation-Developpeur-JavaScript-React/tree/Projet7",
        description: "Projet n°7 de la formation Développeur d'applications JavaScript React chez OpenClassrooms. C'est une application web de recettes de cuisine contenant un algorithme de recherche. Le projet consistait à développer deux versions de cet algorithme, les comparer et choisir lequel était le plus adapté.",
        competences: ["HTML5", "CSS3", "JavaScript"],
        img: LesPetitsPlats
    },
    {
        id: 6,
        nom: "Groupomania",
        nom2: "",
        redirection: "https://github.com/CedricOlivry/Formation-Developpeur-Web/tree/Projet7",
        description: "Projet n°7 de la formation Développeur Web chez OpenClassrooms. C'est un réseau social d'entreprise. Le projet était à faire de A à Z, le front ainsi que le back. Nous pouvons créer un compte, le supprimer, s'identifier, publier, commenter et il existe également un système de compte administrateur, ayant les droits sur tout le contenu posté sur l'application.",
        competences: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "Node.js", "Sequelize", "MySQL", "JWT", "Accessibilité"],
        img: Groupomania
    },
    {
        id: 7,
        nom: "Piquante",
        nom2: "",
        redirection: "https://github.com/CedricOlivry/Formation-Developpeur-Web/tree/Projet6",
        description: "Projet n°6 de la formation Développeur Web chez OpenClassrooms. C'est un répertoire de sauces piquantes. Mon rôle était de fournir une API à laquelle le site pourra se connecter. Cette API Rest fonctionne sur le principe du CRUD, il est donc possible d'ajouter, modifier ou supprimer des données en plus de les consulter.",
        competences: ["JavaScript", "Node.js", "Express", "Mongoose", "OWASP"],
        img: Piquante
    },
    {
        id: 8,
        nom: "Ohmyfood",
        nom2: "",
        redirection: "https://github.com/CedricOlivry/Formation-Developpeur-Web/tree/Projet3",
        description: "Projet n°3 de la formation Développeur Web chez OpenClassrooms. C'est un site de menus de restaurants. Le site était à développer et des animations SCSS ont du être ajoutées.",
        competences: ["HTML5", "CSS3", "SCSS", "Sass"],
        img: Ohmyfood
    }
]

export default projets