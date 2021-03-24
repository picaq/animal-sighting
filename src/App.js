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
    console.log("Date Changed", {dateSeen})
  }, [dateSeen] );

  const [timeSeen, setTimeSeen] = useState(now);
  useEffect( () => {
    console.log("Time Changed", {timeSeen})
  }, [timeSeen] );


  let sightingObject = {dateSeen, timeSeen};
  let sendSightingObject = () => {
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
            id="nickname"/>
        </label>
        

        <label htmlFor="id">id
          <input 
            type="number" 
            name="id"
            min="1" 
            id="id"/>
        </label>

        <label htmlFor="location">location
          <input 
            type="text" 
            name="location" 
            id="location"/>
        </label>

        <label htmlFor="healthy">healthy
          <input 
            type="checkbox" 
            name="healthy" 
            id="healthy"/>
        </label>

        <label htmlFor="email">email
          <input 
            type="text" 
            name="email" 
            id="email"/>
        </label>

      </form>
    </>
  )
}

const SightingsList = (props) => {
  return(
    <>
      <h2>{props.title}</h2>
      <ul></ul>
    </>
  )
}









export default App;
