import React from 'react';

import Button from 'react-bootstrap/Button'

const Form = () => {
    return (
        <div>
            <h1>Contáctanos</h1>
            <h4>y forma parte de la solución</h4>
            <form>
                <label> ¿Cómo te llamas?
                    <input type="text" name="nombre"/>
                </label>
                <label> ¿Cómo podemos contactar contigo?
                    <input type="text" name="email"/>
                </label>
                <label> ¿En qué podemos ayudarte?
                    <input type="text" name="comentario"/>
                </label>
                <Button className="text-uppercase signInText" type="submit" value="Submit">Envía</Button> 
            </form> 
        </div>

    )
}
export default Form;
