import React from 'react';
import SocialMedia from '../SocialMedia/SocialMedia';

import './Footer.css';

const Footer = ()=>{

return (    
        <div className="container-fluid my-4">
                <div className="footer row justify-content-center">
                <div className="firstItem col-lg-4 col-sm-12 col-md-6">
                <h2>Psicólogxs de calle</h2>
                <h4>Carrer de la Rieretra, 24, 08001, Barcelona</h4>
                <h4>conatacto@psicologxsdecalle.com</h4>
                <h4>+34 000 00 00 00</h4>
          </div>

          <div className="firstItem col-lg-4 col-sm-12 col-md-6">
                  <h4>Colaboradores</h4>
                  <img className="footerImg" src="https://static1.squarespace.com/static/54c15c2ae4b0bad93722c9cb/t/56df438cb654f95102099987/1552503652342/?format=750w" width="60" />
                  <img className="footerImg" src="https://www.clipartmax.com/png/middle/279-2798685_png-logo-maker-online-real-clipart-and-vector-graphics-camera-logo-design.png" width="60"/>
          </div>

          <div className="firstItem col-lg-4 col-sm-12 col-md-12">
                <SocialMedia/>
          </div>

          </div> 
        </div>    
)

};

export default Footer; 

/** --change container to container-fluid so it will occupy the entire viewport
 *the mobile design needs pullishing
  for the order you can check this documentation https://react-bootstrap.github.io/layout/grid/
 * 

--we only have h4 for -Psicólogxs de calle- and -Colaboradores-, everything else is p or even better: remember that html has a tag called adress that would maybe work better for the address  :-)
https://www.w3schools.com/tags/tag_address.asp

--also check for tipos
 * 
 * --change className .firstItem to something that is more explicit of the use of that html element
 * 
 * 
 * --line 9, the my-4 means that you are adding a margin both top and bottom to the footer. But the footer shouldn't have a margin bottom, right? We should only use mt-4.
 * https://getbootstrap.com/docs/4.0/utilities/spacing/
 */