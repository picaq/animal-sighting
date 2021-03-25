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
        <SightingsList title="All Sightings" name="Individual" />
        <NewSighting title="New Sighting"/>
      </main>
      
    </div>
  );
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
