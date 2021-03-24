import logo from './assets/paw.png';
import React, { useState, useEffect } from 'react';
import './App.css';

let timeOnLoad = new Date().toISOString().split(/[T.]/);
let today = timeOnLoad[0];
let now = timeOnLoad[1];

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1> <img src={logo} className="App-logo" alt="logo" /> Animal Sighting Tracker </h1>
        <p>track sightings of endangered animals</p>
      </header>
      
      <main>
        <SightingsList title="All Sightings" name="Individual" />
        <NewSighting title="New Sighting"/>
      </main>
      
    </div>
  );
}

const NewSighting = (props) => {

  const [dateSeen, setDateSeen] = useState(today);
  useEffect( () => {
    console.log("dateSeen changed", {dateSeen})
  }, [dateSeen] );

  const [timeSeen, setTimeSeen] = useState(now);
  useEffect( () => {
    console.log("timeSeen changed", {timeSeen})
  }, [timeSeen] );

  const [nickname, setNickname] = useState("unnamed");
  useEffect( () => {
    console.log("nickname changed", {nickname})
  }, [nickname] );

  const [individual_id, setID] = useState("");
  useEffect( () => {
    console.log("individual_id changed", {individual_id})
  }, [individual_id] );

  const [location, setLocation] = useState("");
  useEffect( () => {
    console.log("email changed", {location})
  }, [location] );

  const [healthy, setHealth] = useState(true);
  useEffect( () => {
    console.log("healthy changed", {healthy})
  }, [healthy] );

  const [email, setEmail] = useState("");
  useEffect( () => {
    console.log("email changed", {email})
  }, [email] );

  const [species, setSpecies] = useState("");
  useEffect( () => {
    console.log("species changed", {species})
  }, [species] );


  
  let sendSightingObject = () => {
    let timeStamp = new Date().toISOString();
    let sightingObject = { dateSeen, timeSeen, species, nickname, individual_id, location, healthy, email, timeStamp };
    console.log("Add Sighting button pressed", sightingObject);
  }

  return(
    <>
      <h2>{ props.title }</h2>
      <div>
        <form>
          <label htmlFor="new">
            <input 
              type="radio" 
              id="new" 
              name="which" 
              value="new" /> 
              New { props.name }
          </label>

          <label htmlFor="existing">
            <input 
              type="radio" 
              id="existing" 
              name="which" 
              value="existing" />
              Existing { props.name }
          </label>
        </form>
        <label htmlFor="date seen">date seen
          <input 
            type="date" 
            name="date seen" 
            id="dateSeen"
            value={ dateSeen }
            max={ today }
            onChange={ (e) => setDateSeen(e.target.value) }  
            />
        </label>

        <label htmlFor="time seen">time seen
          <input 
            type="time" 
            name="time seen" 
            id="timeSeen"
            value={ timeSeen }
            onChange={ (e) => setTimeSeen(e.target.value) } 
          />
        </label>

        <label htmlFor="nickname">
          nickname
          <input 
            type="text" 
            name="nickname" 
            id="nickname"
            value={ nickname }
            onChange={ (e) => setNickname(e.target.value) }   
            />
        </label>
        
        <label htmlFor="species">
        species
          <input 
            type="text" 
            name="species" 
            id="species"
            value={ species }
            onChange={ (e) => setSpecies(e.target.value) }   
            />
        </label>        

        <label htmlFor="id">
          id
          <input 
            type="number" 
            name="id"
            min="0" 
            id="id"
            value={ individual_id }
            onChange={ (e) => setID(e.target.value) } 
            />
        </label>

        <label htmlFor="location">
          location
          <input 
            type="text" 
            name="location" 
            id="location"
            value={ location }
            onChange={ (e) => setLocation(e.target.value) } 
            />    
        </label>

        <label htmlFor="healthy">
          healthy
          <input 
            type="checkbox" 
            name="healthy" 
            id="healthy"
            onChange={ (e) => setHealth(e.target.value) } 
            />
        </label>

        <label htmlFor="email">
          email
          <input 
            type="text" 
            name="email" 
            id="email"
            onChange={ (e) => setEmail(e.target.value) } 
            />
        </label>

      <button
      /* type="submit"  */
        onClick={ () => sendSightingObject() }
        name={ props.title }
        value={ props.title }
      > 
      Add { props.title }
      </button>

      </div>
    </>
  )
}

const SightingsList = (props) => {
  return(
    <>
      <h2>{ props.title }</h2>
      <ul className="list"></ul>
    </>
  )
}









export default App;
