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
        <label htmlFor="time seen">time seen
          <input 
            type="datetime" 
            name="time seen" 
            id="timeSeen"/>
        </label>

        <label htmlFor="nickname">nickname
          <input 
            type="text" 
            name="nickname" 
            id="nickname"/>
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
