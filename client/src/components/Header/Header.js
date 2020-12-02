import React from 'react';
import Logo from './../Logo/Logo';

import Button from 'react-bootstrap/Button'

import './Header.css'

const Header = () => {
  return (
    <div className="container-fluid my-4">
      <div className="row justify-content-center">
        <div className="col">
          <Logo/>
        </div>
        <div className="col d-sm-none d-md-block d-none d-sm-block justify-content-end text-right">
        <Button className="text-uppercase signInText" variant="link">Área privada</Button> 
        </div>        
      </div>
    </div>
  )
}

export default Header;

/**the button is just for testing. it will have to be changed */