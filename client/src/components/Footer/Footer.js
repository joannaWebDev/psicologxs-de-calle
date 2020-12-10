  import React from 'react';
  import Container from 'react-bootstrap/Container';
  import Row from 'react-bootstrap/Row';
  import Col from 'react-bootstrap/Col';
  import SocialMedia from '../SocialMedia/SocialMedia';
  import Logo from './../Logo/Logo';

  import logoArrels from './../../assets/images/logo-arrels.png';
  import logoLearning from './../../assets/images/logo-learning.png';

  import './Footer.css';

  const Footer = ()=>{

        return (    
        <Container fluid className="footer ">
                <Row className="justify-content-center footerRow">
                <Col className="adressFooter" xs={{ size: 12, order: 3, span: 12 }}
                        sm={{ size: 12, order: 3,span: 12}} 
                        md={{ size: 4, order: 1, span:4}}                
                        lg={{ size: 4, order: 1,span:4}}
                        xl={{ size: 4, order: 1,span:4}}>
                        <div className="footerLogoDisplay"><Logo/></div>
                        <address>Carrer de la Rieretra, 24 - 08001, Barcelona
                        contacto@psicologxsdecalle.com <br/>
                        +34 000 00 00 00</address>
                </Col>
                <Col xs={{ size: 12, order: 2, span: 12}}
                        sm={{ size: 12, order: 2, span: 12}} 
                        md={{ size: 4, order: 2, offset: 1 }}                
                        lg={{ size: 4, order: 2, offset: 1 }}
                        xl={{ size: 4, order: 2, offset: 1 }}>
                        <p><b>Colaboradores</b></p>
                        <div className="footerImg">
                                <img src={logoArrels} alt="logoArrels"/>
                                <img src={logoLearning} alt="logoLearning" />
                        </div>
                </Col>
                <Col xs={{ size: 12, order: 1, span: 12}}
                        sm={{ size: 12, order: 1, span: 12 }} 
                        md={{ size: 4, order: 3, offset: 1 }}                
                        lg={{ size: 4, order: 3, offset: 1 }}
                        xl={{ size: 4, order: 3, offset: 1 }}><SocialMedia/>
                </Col>
                </Row>
        </Container>
        )
  };

  export default Footer; 