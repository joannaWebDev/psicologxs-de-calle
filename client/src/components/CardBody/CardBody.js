import React from 'react';
import Card from 'react-bootstrap/esm/Card';
import TwoCards from '../TwoCards/TwoCards';

import './CardBody.css'

const CardBody = () => {
    
    return(
        <div className="clippath">
        <div className="cards-body">
            <h3 className="mb-5 mt-2 text-center">¿Que Hacemos?</h3>
            <TwoCards/>
        </div>
        </div>
    )
}

export default CardBody;