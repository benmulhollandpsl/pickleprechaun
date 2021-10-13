import logo from './logo.svg';
import TacoFriendsGallery from './data/TacoFriendsGallery.gif'
import pickleprechaunlogobig from './data/pickleprechaunlogobig.png'
import './App.css';

function Header(props) {
  console.log(props)
  return(
    <section>
      <h1></h1>
      <img src ={pickleprechaunlogobig}
      height ={900}
      alt="logo for Pickleprechaun studio"/>
      </section>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        
        </p>
        <p>Pickleprechaun coming soon</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
