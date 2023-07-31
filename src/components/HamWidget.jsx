import React, { useState } from 'react'
import styles from '../stylesheet/sidebar.module.css';
import { Link } from 'react-router-dom';
import styles2 from '../stylesheet/hamWidget.module.css';


const HamWidget = ({handleClick}) => {
    const [filmsSelected,setFilmsSelected]=useState(false)
    const [peopleSelected,setPeopleSelected]=useState(false)
    const [planetsSelected,setPlanetsSelected]=useState(false)
    const [speciesSelected,setSpeciesSelected]=useState(false)
    const [starshipsSelected,setStarshipsSelected]=useState(false)
    const [vehiclesSelected,setVehiclesSelected]=useState(false)

    function setFilms() {
        setFilmsSelected(true);
        setPeopleSelected(false);
        setPlanetsSelected(false);
        setSpeciesSelected(false);
        setStarshipsSelected(false);
        setVehiclesSelected(false);
        handleClick();
    }

    function setPeople() {
        setFilmsSelected(false);
        setPeopleSelected(true);
        setPlanetsSelected(false);
        setSpeciesSelected(false);
        setStarshipsSelected(false);
        setVehiclesSelected(false);
        handleClick();
    }

    function setPlanets() {
        setFilmsSelected(false);
        setPeopleSelected(false);
        setPlanetsSelected(true);
        setSpeciesSelected(false);
        setStarshipsSelected(false);
        setVehiclesSelected(false);
        handleClick();
    }

    function setSpecies() {
        setFilmsSelected(false);
        setPeopleSelected(false);
        setPlanetsSelected(false);
        setSpeciesSelected(true);
        setStarshipsSelected(false);
        setVehiclesSelected(false);
        handleClick();
    }

    function setStarships() {
        setFilmsSelected(false);
        setPeopleSelected(false);
        setPlanetsSelected(false);
        setSpeciesSelected(false);
        setStarshipsSelected(true);
        setVehiclesSelected(false);
        handleClick();
    }

    function setVehicles() {
        setFilmsSelected(false);
        setPeopleSelected(false);
        setPlanetsSelected(false);
        setSpeciesSelected(false);
        setStarshipsSelected(false);
        setVehiclesSelected(true);
        handleClick();
    }
  return (
    
    <div className={`${styles.sidebar} ${styles2.sidebar}`}>
            
            <Link to="films">
            <div className={styles.menuItem} style={filmsSelected?{backgroundColor:'#CB1A80'}:{backgroundColor:'transparent'}} onClick={setFilms}>
                <div>
                    <img src='./folder.png'></img>
                    <span className={styles.title}>Films</span>
                </div>
                <img src='./side.png'></img>
            </div></Link>
            <Link to="people">
            <div className={styles.menuItem} style={peopleSelected?{backgroundColor:'#CB1A80'}:{backgroundColor:'transparent'}} onClick={setPeople}>
                <div>
                    <img src='./folder.png'></img>
                    <span className={styles.title}>People</span>
                </div>

                <img src='./side.png'></img>
            </div></Link>
            <Link to="planets">
            <div className={styles.menuItem} style={planetsSelected?{backgroundColor:'#CB1A80'}:{backgroundColor:'transparent'}} onClick={setPlanets}>
                <div>
                    <img src='./folder.png'></img>
                    <span className={styles.title}>Planets</span>
                </div>

                <img src='./side.png'></img>
            </div>
            </Link>
            <Link to="species">
            <div className={styles.menuItem} style={speciesSelected?{backgroundColor:'#CB1A80'}:{backgroundColor:'transparent'}} onClick={setSpecies}>
                <div>
                    <img src='./folder.png'></img>
                    <span className={styles.title}>Species</span>
                </div>

                <img src='./side.png'></img>
            </div>
            </Link>
            <Link to="starships">
            <div className={styles.menuItem} style={starshipsSelected?{backgroundColor:'#CB1A80'}:{backgroundColor:'transparent'}} onClick={setStarships}>
                <div>
                    <img src='./folder.png'></img>
                    <span className={styles.title}>Starships</span>
                </div>
            
                <img src='./side.png'></img>
            </div>
            </Link>
            <Link to='vehicles'>
            <div className={styles.menuItem} style={vehiclesSelected?{backgroundColor:'#CB1A80'}:{backgroundColor:'transparent'}} onClick={setVehicles}>
                <div>
                    <img src='./folder.png'></img>
                    <span className={styles.title}>Vehicles</span>
                </div>

                <img src='./side.png'></img>
            </div>
            </Link>
        </div>
  )
}

export default HamWidget