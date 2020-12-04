import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

import './hero.css';

const Hero = () => {
    return (
        <Jumbotron fluid className="heroJumbotron">
                <Container>
                <h1 className="fredokaStyle">Psicología de calle<br/> para personas sin hogar, por fin.</h1>
            </Container>
        </Jumbotron>       
    )
}

export default Hero;

/*el br no se puede usar . no es nada responsive. si se quieren 2 lineas, se puede dar al div que contiene el h1 un max-width

the image is not properly displayed. it gets cut a lot

*/