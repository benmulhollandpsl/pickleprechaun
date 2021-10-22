import React from "react";
import TacoFriendsGallery from './data/TacoFriendsGallery.gif'
import pickleprechaunlogobig from './data/pickleprechaunlogobig.png'
import './App.css';


//Nav
function Nav(props) {
  return(
  <section>
  
  <li>Pickleprechaun</li>
  <li>about</li>
  <li>contact</li>
  
  </section>
  )
}

// Header
function Header(props) {
  console.log(props)
  return(
    <section>
    
      <img src ={pickleprechaunlogobig}
      height ={900}
      alt="logo for Pickleprechaun studio"/>
      </section>
  )
}

// Main or body
function Main(props) {
  console.log(props) 
  return( 
  <section>
    <img src = {TacoFriendsGallery}
    height = {600}
    alt="Taco Friends NFT gif"/>
    <p>cards with images here next</p>
  </section>



  )
}


// Footer
function Footer(props) {
  console.log(props)
  return(
    <section>
      <p>Copyright {props.year}</p>
    </section>


  )
}



function App() {
  return (
    <div className="App">
      
      
      <nav className="App-nav">
        <Nav />
        </nav>
    
      <header className="App-header">
        <Header/>
        
       
        <p>scroll down for newest stuff</p>
       
      </header>


      <main className="App-main">
        <Main />
      </main>

      
      <footer className="App-footer">
        <Footer year={new Date().getFullYear()}/>
      </footer>



    </div>
  );
}

export default App;
