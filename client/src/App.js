import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import { Responsive } from './components/Responsive';
import HamburguerMenuPage from './components/HamburguerMenuPage/HamburguerMenuPage';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import ScrollTopArrow from './components/ScrollTopArrow/ScrollTopArrow';
import './App.css';

const App = () => {
  return (
    <Router basename="/psicologxs-de-calle">
      <div className="App">
        <Header />
        <div>
          <Responsive displayIn={["Laptop"]}>
            <Navbar />
          </Responsive>
          <Responsive displayIn={["Tablet"]}>
            <Navbar />
          </Responsive>
          <Responsive displayIn={["Mobile"]}>
            <HamburguerMenuPage />
          </Responsive>
        </div> 
        <Route path="/" exact component={Home} />
        <Footer/>
      </div>
      <ScrollTopArrow/>
    </Router>
  )
}

export default App;
