import React from 'react';

import './hero.css'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

const Hero = () => {
    return (

      <Jumbotron fluid>
        <Container>
          <h1>Psicología de calle para personas sin hogar, por fin.</h1>
          <p>
            This is a modified jumbotron that occupies the entire horizontal space of
            its parent.
          </p>
        </Container>
      </Jumbotron>
    )
  }
  
  export default Hero;