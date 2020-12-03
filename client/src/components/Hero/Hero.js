import React from 'react';
import './hero.css'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'


const Hero = () => {
    return (
        <Jumbotron fluid>
            <Container>
            <h1>Psicología de calle<br/> para personas sin hogar, por fin.</h1>
            </Container>
        </Jumbotron>
    )
  }
  
  export default Hero;