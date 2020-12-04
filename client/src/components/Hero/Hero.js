import React from 'react';
import './hero.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

const Hero = () => {
    return (
        <Jumbotron fluid>
            <Container>
                <div className="hero-title">
                    <h1>Psicología de calle para personas sin hogar, por fin.</h1>
                </div>
            </Container>
        </Jumbotron>       
    )
}

export default Hero;

/*

the image is not properly displayed. it gets cut a lot

*/