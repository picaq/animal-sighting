import logo from './assets/paw.png';
import React, { useState, useEffect } from 'react';
import NewSighting from './NewSighting';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1> <img src={logo} className="App-logo" alt="logo" /> Animal Sighting Tracker </h1>
        <p>track sightings of endangered animals</p>
      </header>
      
      <main>
        <NewSighting title="New Sighting"/>
        <SightingsList title="All Sightings" name="Individual" />
      </main>
      
    </div>
  );
}

const SightingsList = (props) => {

  const [ sightings, setSightings ] = useState([]);

  const getSightings = async() => {
    try {
      const response = await fetch("http://localhost:9000/sighting");
      const jsonData = await response.json();
      setSightings(jsonData);
      console.log(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect( () => {
    getSightings();
  }, []);

  // console.log(sightings);

  return(
    <>
      <h2>{ props.title }</h2>
      <table>
        <thead>
          <tr>
            <th>sighting id</th>
            <th>time seen</th>
            <th>individual id</th>
            <th>location</th>
            <th>healthy?</th>
            <th>email</th>
            <th>recorded timestamp</th>
          </tr>
        </thead>
        <tbody>
        { sightings.map( sighting => (
          <tr> 
            <td>{sighting.id}</td>
            <td>{sighting.time_seen ? new Date(sighting.time_seen).toLocaleDateString() + " " + new Date(sighting.time_seen).toLocaleTimeString() : null }</td>
            <td>{sighting.individual_id}</td>
            <td>{sighting.location}</td>
            <td>{sighting.healthy ? "yes" : sighting.healthy === false ? "no" : null }</td>
            <td>{sighting.email}</td>
            <td>{sighting.timestamp ? new Date(sighting.timestamp).toLocaleDateString() + " " + new Date(sighting.timestamp).toLocaleTimeString() : null }</td> 
          </tr>
        ))}
        </tbody>
        </table>

    </>
  )
}









export default App;
