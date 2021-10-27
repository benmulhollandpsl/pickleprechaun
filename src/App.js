import React from "react";
import TacoFriendsGallery from './data/TacoFriendsGallery.gif'

import tacomann from './data/tacomann.png'
import tacofriend1 from './data/tacofriend1.png'



import pickleprechaunlogobig from './data/pickleprechaunlogobig.png'
import './App.css';


//Nav
function Nav(props) {
  return(
  <section>
    {/* <li><a href="#">Pickleprechaun</a>Pickleprechaun</li> */}

  <li>Pickleprechaun</li>
  {/* <li>about</li> */}
  {/* <li>contact</li> */}
  
  </section>
  )
}

// Header
function Header(props) {
  console.log(props)
  return(
    <section>
    
      <img src ={pickleprechaunlogobig}
     
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
    // width = {400}
    alt="Taco Friends NFT gif"/>
    <p></p>
  



  {/* this might be in a different function/file soon */}
    <container>
    <img src = {tacomann}
    height = {300}
    alt="taco mann, first name Taco, last name Mann"/>
    <p>Taco Mann, first name Taco, last name Mann</p>
      {/* need to finalize this container better before going live */}

    <img src = {tacofriend1}
    height = {300}
    alt="taco friend, the cool version"/>
    <p>Taco Friend 1, the <em>cool</em> version</p>
      {/* need to finalize this container better before going live */}
    </container>
  
  
  
  
  
  
  
  
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
