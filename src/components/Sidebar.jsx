import React, { useEffect, useState } from 'react';
import styles from "../stylesheet/sidebar.module.css";
import { Link } from 'react-router-dom';
import HamWidget from './HamWidget';


const Sidebar = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [hamClicked,setHamClicked] = useState(false);
    function handleHamClick(){
        setHamClicked(prev=>!prev);
    }
  // Update screen width state on window resize
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    }

    function setPeople() {
        setFilmsSelected(false);
        setPeopleSelected(true);
        setPlanetsSelected(false);
        setSpeciesSelected(false);
        setStarshipsSelected(false);
        setVehiclesSelected(false);
    }

    function setPlanets() {
        setFilmsSelected(false);
        setPeopleSelected(false);
        setPlanetsSelected(true);
        setSpeciesSelected(false);
        setStarshipsSelected(false);
        setVehiclesSelected(false);
    }

    function setSpecies() {
        setFilmsSelected(false);
        setPeopleSelected(false);
        setPlanetsSelected(false);
        setSpeciesSelected(true);
        setStarshipsSelected(false);
        setVehiclesSelected(false);
    }

    function setStarships() {
        setFilmsSelected(false);
        setPeopleSelected(false);
        setPlanetsSelected(false);
        setSpeciesSelected(false);
        setStarshipsSelected(true);
        setVehiclesSelected(false);
    }

    function setVehicles() {
        setFilmsSelected(false);
        setPeopleSelected(false);
        setPlanetsSelected(false);
        setSpeciesSelected(false);
        setStarshipsSelected(false);
        setVehiclesSelected(true);
    }

    return (
        <div className={styles.mainSide}>
           <div className={styles.logoCross} style={hamClicked?{ width:"100%"}:{}}><Link to="/"><img src='./logo.png' className={styles.logo}></img></Link> {hamClicked && <img className={styles.close} src='./close.png' onClick={handleHamClick}></img>}</div>
        { screenWidth <= 800 ? ( !hamClicked ? (<img className={styles.ham} src='./ham.png' style={{width:'25px', margin:'0 0 0 auto'}} onClick={()=>setHamClicked(prev=>!prev)}></img>):
        (<HamWidget handleClick={handleHamClick}/>)
        ):
        
        ( <div className={styles.sidebar}>
            
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
        </div>)
    }</div>
    )
}

export default Sidebar