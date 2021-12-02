import React from 'react'
import Header from './components/Header'
import Info from './components/Info'
import Cards from './components/cards'
import Pics from './components/pics'
import Footer from './components/footer'
import './App.css';

function App() {
  return (
   <div>
     <div className="sections">
        <Header />
        <Info />
        <Cards />
        <Pics />
        <Footer />
     </div>
   </div>
  );
}

export default App;
