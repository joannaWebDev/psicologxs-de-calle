import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const MainForm = () => {
    return (
        <Form>
            <Form.Group controlId="formName">
                <Form.Label> ¿Cómo te llamas? </Form.Label>
                    <Form.Control type="text" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formEmail">
                <Form.Label> ¿Cómo podemos contactar contigo? </Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formComment">
                <Form.Label> ¿En qué podemos ayudarte?</Form.Label>
                    <Form.Control type="textarea" placeholder="Enter email" />
            </Form.Group>
            <Button variant="primary" type="submit">
            Envía
            </Button>
        </Form>
    )
}
export default MainForm;
