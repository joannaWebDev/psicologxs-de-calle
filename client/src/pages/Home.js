import React from 'react';
import Form from './../components/Form/Form';
import Hero from './../components/Hero/Hero';
import chart from './../assets/images/chart.png';

import './Home.css';

const Home = () => {
  return(
    <>
      <Hero />  

      <div className="container sectionChart">
        <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12 sectionChartText">
          <h3>¿A quién nos dirigimos?</h3>
          <p>Nuestras labor responde a necesidades que requieren de intervención por parte de psicólogxs para atender a las personas sin hogar que pueden mostrar síntomas de <b>depresión, disminución de habilidades sociales, tener adicciones, enfermedades crónicas, ser víctimas de agresiones, etc.</b></p>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12">
          <img src={chart} alt="Logo" className="img-fluid img-thumbnail"/>
        </div>        
        </div>
      </div>
      <Form/>
    </>
  )
}

export default Home;