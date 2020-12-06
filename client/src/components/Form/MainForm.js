import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const MainForm = () => {
    return (
        <Form className = "form-group">
            <Form.Group controlId="formName" className="col-sm-6 col-form-label" >
                <Form.Label className="col-form-label-sm-1"> ¿Cómo te llamas? </Form.Label>
                    <Form.Control type="text" placeholder="ej. María" />
            </Form.Group>
            <Form.Group controlId="formEmail" className="col-sm-6 col-form-label">
                <Form.Label> ¿Cómo podemos contactar contigo? </Form.Label>
                    <Form.Control type="email" placeholder="ej. Maria12@gmail.com" />
            </Form.Group>
            <Form.Group controlId="formComment" className="col-sm-6 col-form-label">
                <Form.Label> ¿En qué podemos ayudarte?</Form.Label>
                    <Form.Control type="textarea span6" rows="6" placeholder="Escribe tu mensaje aquí" />
            </Form.Group>
            <Button variant="primary" type="submit">
            Envía
            </Button>            
        </Form>

    )
}
export default MainForm;
