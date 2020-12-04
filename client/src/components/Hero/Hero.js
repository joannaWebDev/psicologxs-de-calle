import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

import './hero.css';

const Hero = () => {
    return (
        <Jumbotron fluid className="heroJumbotron">
            <Container>
                <div className="hero-title">
                    <h1 className="fredokaStyle">Psicología de calle para personas sin hogar, por fin.</h1>
                </div>
            </Container>
        </Jumbotron>       
    )
}

export default Hero;

/*

the image is not properly displayed. it gets cut a lot

*/