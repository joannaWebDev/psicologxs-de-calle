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
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                       
                    </Card.Body>
            </Card>

            <Card className="eachcards">
                <Card.Img variant="top" src={girlVolunteer} alt="Logo" className=" cardsImage img-fluid"   />
                    <Card.Body >
                        
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                       
                    </Card.Body>
            </Card>
        </div>
        
    )

}

export default TwoCards;