import React from 'react';

import Form from './../components/Form/Form';
import JoinBtn from './../components/JoinBtn/JoinBtn';


import chart from './../assets/images/chart.png';
import volunteerBackpack from './../assets/images/volunteer-backpack.png';
import Container from 'react-bootstrap/Container';

import './Home.css';

const Home = () => {
  return(
    <>
       <section fluid className="hero">
            <Container>
                <div className="hero-title">
                    <h1 className="fredokaStyle">Psicología de calle para personas sin hogar, por fin.</h1>
                </div>
            </Container>
            <JoinBtn />
        </section>    

      {<section className="container sectionChart">
        <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12 sectionChartText">
          <h3>¿A quién nos dirigimos?</h3>
          <p>Nuestras labor responde a necesidades que requieren de intervención por parte de psicólogxs para atender a las personas sin hogar que pueden mostrar síntomas de <b>depresión, disminución de habilidades sociales, tener adicciones, enfermedades crónicas, ser víctimas de agresiones, etc.</b></p>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12">
          <img src={chart} alt="chart" className="img-fluid img-thumbnail"/>
        </div>        
        </div>
      </section>}

     { <section className="container-fluid porQueJumbotron">
            <div className="row justify-content-center text-center px-1">
              <div className="col-12 mb-5"><h2 className="">¿Por qué psicologxs de calle?</h2></div>         
              <div className="col-lg-4 col-md-6 col-sm-6"><p className="porQueJumbotronP">4200 personas no tienen hogar en Barcelona</p></div>              
              <div className="col-lg-4 col-md-6 col-sm-6"><p className="porQueJumbotronP">Porque vivir en la calle altera drásticamente </p></div>             
              <div className="col-lg-4 col-md-6 col-sm-12"><p className="porQueJumbotronP">Porque no existen recursos que traten este bienestar emocional en la calle.</p></div> 
            </div>
        </section>   }

{      <div className="container-fluid">
        <img src={volunteerBackpack} alt="Logo" className="img-fluid"/>
      </div>}

      <Form/>
    </>
  )
}

export default Home;