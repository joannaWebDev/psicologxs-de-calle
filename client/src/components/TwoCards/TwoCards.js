import React from 'react';
import boyVolunteer from './../../assets/images/boyimageedited.png';
import girlVolunteer from './../../assets/images/girl-volunteer.jpg';
import './TwoCards.css';

import Card from 'react-bootstrap/Card'


const TwoCards = () => {
    return(
        
        
        <div className=" cards row justify-content-around" >
            
            <Card className="eachcards">
            <Card.Img variant="top" src={boyVolunteer} alt="Logo" className=" cardsImage img-fluid" />
                    <Card.Body>
                        
                        <Card.Text>
                        Psicólogxs de Calle es un programa sin ánimo de lucro, que conecta a estudiantes de Psicología en especialización y búsqueda 
                        de prácticas con personas sin hogar que requieren acompañamiento emocional.
                        </Card.Text>
                       
                    </Card.Body>
            </Card>

            <Card className="eachcards">
                <Card.Img variant="top" src={girlVolunteer} alt="Logo" className=" cardsImage img-fluid"   />
                    <Card.Body >
                        
                        <Card.Text>
                        Nuestra visión: Tratar el bienestar emocional de, al menos, el 30% de las personas sin hogar en Barcelona en un plazo de 5 años. Siendo el primer programa que llega a las personas sin hogar, y no al revés.
                        </Card.Text>
                       
                    </Card.Body>
            </Card>
        </div>
        
    )

}

export default TwoCards;