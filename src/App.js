import logo from './assets/paw.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> <img src={logo} className="App-logo" alt="logo" /> Animal Sighting Tracker </h1>
        <p>track sightings of endangered animals</p>
      </header>
      
      <main>
        <SightingsList title="All Sightings" />
        <NewSighting title="New Sighting"/>

      </main>
      
    </div>
  );
}

const NewSighting = (props) => {
  return(
    <>
      <h2>{props.title}</h2>
      <form>
        <label htmlFor="date seen">date seen
          <input 
            type="date" 
            name="date seen" 
            id="dateSeen"/>
        </label>

        <label htmlFor="time seen">time seen
          <input 
            type="time" 
            name="time seen" 
            id="timeSeen"/>
        </label>

        <label htmlFor="nickname">nickname
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
