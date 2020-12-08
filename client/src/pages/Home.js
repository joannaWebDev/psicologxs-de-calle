import React from 'react';

import Methodology from '../components/Methodology/Methodology';
import MainForm from '../components/Form/MainForm';
import JoinBtn from './../components/JoinBtn/JoinBtn';
import Team from './../components/Team/Team';

import chart from './../assets/images/chart.png';
import volunteerBackpack from './../assets/images/volunteer-backpack.png';

import Container from 'react-bootstrap/Container';

import './Home.css';

const Home = () => {
  return(
    <div className="container-fluid">
      <section fluid className="hero">
            <Container>
                <div className="hero-title">
                    <h1 className="fredokaStyle">Psicología de calle para personas sin hogar, por fin.</h1>
                </div>
            </Container>
        </section>    

        <section className="container-fluid join-us">
            <div className="row text-center">
              <div className="col-lg-9 col-md-9 col-sm-12 py-4">
                <p>Haz tus práctica de Psicología con <strong>Psicólogos de Calle.</strong></p>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12 py-4">
                <JoinBtn />
              </div>
            </div>
        </section>

        <section className="container-fluid porQueJumbotron">
          <div className="row justify-content-center text-center">
            <div className="col-12 mb-5"><h2 className="">¿Por qué existe psicologxs de calle?</h2></div>         
            <div className="col-lg-4 col-md-6 col-sm-6"><p className="porQueJumbotronP"><b>4200</b> personas no tienen hogar en Barcelona</p></div>              
            <div className="col-lg-4 col-md-6 col-sm-6"><p className="porQueJumbotronP">Porque vivir en la calle altera drásticamente </p></div>             
            <div className="col-lg-4 col-md-6 col-sm-12"><p className="porQueJumbotronP">Porque no existen recursos que traten este bienestar emocional en la calle.</p></div> 
          </div>
        </section> 

        <section className="imageAlone"> 
          <div className="container-fluid">
              <img src={volunteerBackpack} alt="Logo" className="img-fluid"/>
          </div>
        </section> 

      <section className="container sectionChart ">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-12 col-sm-12 sectionChartText mr-lg-5 ">
            <h3>¿A quién nos dirigimos?</h3> 
            <p>Nuestras labor responde a necesidades que requieren de intervención por parte de psicólogxs para atender a las personas sin hogar que pueden mostrar síntomas de <b>depresión, disminución de habilidades sociales, tener adicciones, enfermedades crónicas, ser víctimas de agresiones, etc.</b></p>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 ml-lg-5">
            <img src={chart} alt="chart" className="img-fluid img-thumbnail"/>
          </div>        
        </div>
      </section>

      <section className="container-fluid solution">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <h3>Forma parte de la solución</h3>
          </div> 
          <div className="row justify-content-center mt-2">   
            <div className="col-lg-4 col-md-6 col-sm-6">
              <p className="solution-text"> Tú, <strong>estudiante de máster de Psicología</strong> que buscas prácticas, realizarás las sesiones de acompañamiento a personas sin hogar.</p>
            </div>              
            <div className="col-lg-4 col-md-6 col-sm-6">
              <p className="solution-text"> Tú, <strong>asistente social</strong>, identificarás a los usuarios sin hogar y les ofrecerás participar en las sesiones de acompañamiento.</p>
            </div>              
          </div>    
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <p className="solution-text">  Tú, <strong>psicologx con experiencia</strong>, serás el mentor/a de lxs estudiantes y realizarás el seguimiento de estos y de las sesiones.</p>
            </div>              
            <div className="col-lg-4 col-md-6 col-sm-6">
              <p className="solution-text"> Tú, <strong>Universidad</strong>, podrás ofrecer en tu bolsa de prácticas el programa de <strong>Psicologxs de la calle</strong> a tus estudiantes.</p>
            </div>              
          </div>
          <div className="mt-5">
            <JoinBtn />
          </div> 
        </div>
      </section> 
      
      <Methodology/> 
      <MainForm/>
      <Team />

    </div>
  )
}

export default Home;