import './BodyUp.css'
import { FaHome, FaPhone, FaEnvelope, FaMapMarker, FaSuitcase, FaSearch } from 'react-icons/fa';
import Select from 'react-select';
import React, { useState } from 'react';



// const types = [
//     { label: "Sejours tout compris", value: 1 },
//     { label: "Tous types de sejours", value: 2 },
//     { label: "Circuits ou Combines", value: 3 },
//     { label: "Hotels Clubs", value: 4 },
// ]

const villes = [
    { value: 'Paris', label: 'Paris' },
    { value: 'Strasbourg', label: 'Strasbourg' },
    { value: 'Bruxelles', label: 'Bruxelles' },
    { value: 'Lille', label: 'Lille' },
    { value: 'Metz', label: 'Metz' },
    { value: 'Nice', label: 'Nice' },
    { value: 'Nantes', label: 'Nantes' },
    { value: 'Toulouse', label: 'Toulouse' },
    { value: 'Bordeaux', label: 'Bordeaux' },
    { value: 'Barcelone', label: 'Barcelone' },
    { value: 'Rome', label: 'Rome' },
  ];

  const temps = [
    { value: "Peu m'importe", label: "Peu m'importe" },
    { value: "Week-end (jusqu'a 5 jours)", label: "Week-end" },
    { value: "1 semaine (6 a 11 jours)", label: "1 semaine" },
    { value: "2 semaine (12 a 19 jours)", label: "2 semaine" },
    { value: "Sejour long (20 jours et plus)", label: "Sejour long" },
  ];
  

const BodyUp = () => {

    const [selectedVilles, setSelectedVilles] = useState(villes[1]);
    const [selectedTemps, setSelectedTemps] = useState(temps[0]);



    return (
        <div>
            <div className="bodyContainer">
                <div className="searchCont">
                <div className='searchForm'>
                <div className='searchNav'>
                        <a href="#">Voyage</a>
                        <a href="#">Vol</a>
                        <a href="#">Circuits</a>
                        <a href="#">France</a>
                        <a href="#">Croisiere</a>
                        <a href="#">Hotel</a>
                        </div>
                    <form id="search">
                        <FaSearch className="loupe" /><input type="text" name="search" />
                        <Select
                             defaultValue={selectedVilles}
                             onChange={setSelectedVilles}
                             options={villes}/>
                        <input type="date" />
                        <Select
                             defaultValue={selectedTemps}
                             onChange={setSelectedTemps}
                             options={temps}/>
                        <button type="submit">Rechercher</button>
                    </form>
                </div>
               
                </div>
            </div>
        </div>
    );
}


export default BodyUp;