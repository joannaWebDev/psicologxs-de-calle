import React from 'react';
import './team.css'

import teamMemberOne from './../../assets/images/team-1.png';
import teamMemberTwo from './../../assets/images/team-2.png';
import teamMemberThree from './../../assets/images/team-3.png';

import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';

const Team = ()=>{

    return (
        <section className="container team">
            <div className="row justify-content-center text-center">
            <div className="col-12 mb-5">
                <h3>Equipo</h3>
                <p>Tres profesionales con un mismo objetivo: ayudar.</p>
            </div>         
            <CardDeck>
                <Card>
                <Card.Body>
                    <Card.Img src={teamMemberOne} className="team-img" />
                    <Card.Title>Liliana Bugallo</Card.Title>
                    <Card.Text>
                    Fundadora y acquisition manager
                    </Card.Text>
                </Card.Body>
                </Card>
                <Card>
                <Card.Body>
                    <Card.Img src={teamMemberTwo} className="team-img" />
                    <Card.Title>Álex Pazos</Card.Title>
                    <Card.Text>
                    Fundador y creativo social
                    </Card.Text>
                </Card.Body>
                </Card>
                <Card>
                <Card.Body>
                    <Card.Img src={teamMemberThree} className="team-img" />
                    <Card.Title>Daniela Rojas</Card.Title>
                    <Card.Text>
                    Fundadora y comunicadora
                    </Card.Text>
                </Card.Body>
                </Card>
            </CardDeck>
            </div>
        </section>
    )
};
  
export default Team; 