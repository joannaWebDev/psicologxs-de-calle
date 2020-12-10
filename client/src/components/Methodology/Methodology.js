import React from 'react';
import Container from 'react-bootstrap/esm/Container';
/* import LineTo from 'react-lineto'; */
import './Methodology.css';
import homelessWomen from './../../assets/images/homeless-women.jpg';

const Methodology = () => {
    return (
        <Container className="my-5">
            <h3 className="methodHeader text-center">La metodología de Psicólogxs en la Calle</h3>
            
            <div className="methodology">
                <section className="image">
                    <div className="container-fluid">
                        <img src={homelessWomen} className="img-fluid"/>
                    </div>
                </section>
                <section className="upSchema">
                    <article>El asistente social vinculado al programa identifica a las personas sin hogar y les ofrece participar en las sesiones de acompañamiento emocional. Al aceptar, Psicologxs de Calle los  incluye en su base de datos y crea su expediente.</article>
                    <article>El psicólogx en especialización y el mentor llevan a cabo las sesiones en el lugar de permanencia de la persona sin hogar. Una vez adquiera experiencia, el piscólogx las realizará sin supervisión por parte del mentor.</article>
                </section>

                <section className="downSchema">
                    <article>El mentor asigna cada caso a un psicólogx en especialización para que lleve a cabo las sesiones de acompañamiento emocional. Una vez asignado, el asistente social concreta una primera visita entre el usuario y el psicólogx.</article>
                </section>
            </div>
        </Container>
    )
}
export default Methodology;

/*let's find another solution for the lines

{/* <section className="lineWithCircle">
                <article className="circle"></article>
                <LineTo borderColor="black" from="circle" to="circle"/>
                <article className="circle"></article>
                <LineTo from="circle" to="circle" />
                <article className="circle"></article>
            </section> */