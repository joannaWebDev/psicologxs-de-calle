import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


import './MainForm.css';


const MainForm = () => {
    return (
        <Form className = "container centerForm">
            <div className ="formHeader">
                <h1 className="marginTitle">Contáctanos</h1>
                <h4 className="marginTitle">Y forma parte de la solución</h4>
            </div>
            <Form.Group controlId="formName" className="formInput marginInput" >
                <Form.Label > ¿Cómo te llamas? </Form.Label>
                    <Form.Control type="text" placeholder="ej. María" />
            </Form.Group>
            <Form.Group controlId="formEmail" className="formInput marginInput">
                <Form.Label> ¿Cómo podemos contactar contigo? </Form.Label>
                    <Form.Control type="email" placeholder="ej. Maria12@gmail.com" />
            </Form.Group>
            <Form.Group controlId="formComment" className="formInput marginInput">
                <Form.Label> ¿En qué podemos ayudarte?</Form.Label>
                    <Form.Control as="textarea" rows="4" placeholder="Escribe tu mensaje aquí" />
            </Form.Group>
            <Button className="join-us-btn" variant="primary" type="submit" >
            Envía
            </Button>          
        </Form>

    )
}
export default MainForm;
