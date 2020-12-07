import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './MainForm.css';

const MainForm = () => {
    return (
        <Form className = "container centerForm">
            <Form.Group controlId="formName" className="formInput" >
                <Form.Label > ¿Cómo te llamas? </Form.Label>
                    <Form.Control type="text" placeholder="ej. María" />
            </Form.Group>
            <Form.Group controlId="formEmail" className="formInput">
                <Form.Label> ¿Cómo podemos contactar contigo? </Form.Label>
                    <Form.Control type="email" placeholder="ej. Maria12@gmail.com" />
            </Form.Group>
            <Form.Group controlId="formComment" className="formInput">
                <Form.Label> ¿En qué podemos ayudarte?</Form.Label>
                    <Form.Control as="textarea" rows="4" placeholder="Escribe tu mensaje aquí" />
            </Form.Group>
            <Button variant="primary" type="submit" >
            Envía
            </Button>            
        </Form>

    )
}
export default MainForm;
