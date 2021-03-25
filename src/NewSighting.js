import React, { useState, useEffect } from 'react';

let timeOnLoad = new Date().toISOString().split(/[T.]/); // this makes the time in UTC and I can’t figure out how to make it into local time but still retain the ISO format so that the today and now variables can be read by the date and time inputs
let today = timeOnLoad[0];
let now = timeOnLoad[1];

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
  
    const [location, setLocation] = useState("null island");
    useEffect( () => {
      console.log("email changed", {location})
    }, [location] );
  
    const [healthy, setHealth] = useState(true);
    useEffect( () => {
      console.log("healthy changed", {healthy})
    }, [healthy] );
  
    const [email, setEmail] = useState("soylent@gmail.com");
    useEffect( () => {
      console.log("email changed", {email})
    }, [email] );
  
    const [species, setSpecies] = useState("unidentified");
    useEffect( () => {
      console.log("species changed", {species})
    }, [species] );
  
  
    
    let sendSightingObject = () => {
      let timestamp = new Date().toISOString();
      let date_seen = dateSeen + " " + timeSeen;
      let sightingObject = { date_seen, species, nickname, individual_id, location, healthy, email, timestamp };
      console.log("Add Sighting button pressed", sightingObject);
    }

    const onSubmitForm = async (e) => {
      let timestamp = new Date().toISOString();
      let date_seen = dateSeen + " " + timeSeen;
      let sightingObject = { date_seen, species, nickname, individual_id, location, healthy, email, timestamp };
      e.preventDefault(); // prevents refreshing
      try {
        const body = { sightingObject };
        const response = await fetch("http://localhost:9000/sighting", {
          method: "POST", // fetch makes GET request by default
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        })
        console.log(response);
      } catch (error) {
        console.error(error.message);  
      }
    }
  
    return(
      <>
        <h2>{ props.title }</h2>
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

        <div>
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
              // value={ nickname }
              placeholder="an identifying name"
              onChange={ (e) => setNickname(e.target.value) }   
              />
          </label>
          
          <label htmlFor="species">
          species
            <input 
              type="text" 
              name="species" 
              id="species"
              placeholder="scientific binomial"
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
              placeholder="individual id #"
              onChange={ (e) => setID(e.target.value) } 
              />
          </label>
  
          <label htmlFor="location">
            location
            <input 
              type="text" 
              name="location" 
              id="location"
              placeholder="my backyard"
              onChange={ (e) => setLocation(e.target.value) } 
              />    
          </label>
  
          <label htmlFor="healthy">
            healthy
            <input 
              type="checkbox" 
              name="healthy" 
              id="healthy"
              checked= { healthy }
              onChange={ () => setHealth( healthy ? false : true ) } 
              />
          </label>
  
          <label htmlFor="email">
            email
            <input 
              type="text" 
              name="email" 
              id="email"
              placeholder={ email }
              onChange={ (e) => setEmail(e.target.value) } 
              />
          </label>
  
        <button
          // type="submit"
          onClick={ () => sendSightingObject() , onSubmitForm }
          name={ props.title }
          value={ props.title }
          // onSubmit={onSubmitForm}
        > 
        Add { props.title }
        </button>
  
        </div>
      </>
    )
  }


export default NewSighting;
