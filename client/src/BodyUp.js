import './BodyUp.css'
import { FaHome, FaPhone, FaEnvelope, FaMapMarker, FaSuitcase, FaSearch } from 'react-icons/fa';
import Select from 'react-select';

const villes = [
    { label: "Paris", value: 1 },
    { label: "Strasbourg", value: 2 },
    { label: "Bruxelles", value: 3 },
    { label: "Lille", value: 4 },
    { label: "Metz", value: 5 },
    { label: "Nice", value: 6 },
    { label: "Nantes", value: 7 },
    { label: "Toulouse", value: 8 },
    { label: "Bordeaux", value: 9 },
    { label: "Barcelone", value: 10 },
    { label: "Rome", value: 11 },
];

const temps = [
    { label: "Peu m'importe", value: 1 },
    { label: "Week-end (jusqu'a 5 jours)", value: 2 },
    { label: "1 semaine (6 a 11 jours)", value: 3 },
    { label: "2 semaine (12 a 19 jours)", value: 4 },
    { label: "Sejour long (20 jours et plus)", value: 5 },
]

// const types = [
//     { label: "Sejours tout compris", value: 1 },
//     { label: "Tous types de sejours", value: 2 },
//     { label: "Circuits ou Combines", value: 3 },
//     { label: "Hotels Clubs", value: 4 },
// ]

const BodyUp = () => {
    return (
        <div>
            <div className="bodyContainer">
                <div className="searchCont">
                    <form id="search">
                        {/* <a href="#">Voyage</a>
                        <a href="#">Vol</a>
                        <a href="#">Circuits</a>
                        <a href="#">France</a>
                        <a href="#">Croisiere</a>
                        <a href="#">Hotel</a> */}
                        <FaSearch className="loupe" /><input type="text" name="search" />
                        <Select options={villes} />
                        <input type="date" />
                        <Select options={temps} />
                        <button type="submit">Rechercher</button>
                    </form>
                </div>
            </div>
        </div>
    );
}


export default BodyUp;