import React from 'react';
import SocialMedia from '../SocialMedia/SocialMedia';

const Footer = ()=>{

  return (
  
          <div className="container my-4">
            <div className="footer bg-info row justify-content-center">
              <div id="firstItem">
            <div className="footer row justify-content-center">
              <div  className="firstItem col-lg-4 col-sm-12 col-md-6">
                  <h2>Psicologxs de calle</h2>
                  <h3>Carrer de la Rieretra, 24, 08001, Barcelona</h3>
                  <h3>conatacto@psicologxsdecalle.com</h3>
                  <h3>+34 000 00 00 00</h3>
  
              </div>

              <div  className="firstItem col-lg-4 col-sm-12 col-md-6">
                <h3>Colaboradores</h3>
               {/* <div className="midcomp" > */}
                <img className="footerImg" src="https://static1.squarespace.com/static/54c15c2ae4b0bad93722c9cb/t/56df438cb654f95102099987/1552503652342/?format=750w" width="60" />
                <img className="footerImg" src="https://lh3.googleusercontent.com/proxy/gyZCnVBUZEVkjzWuUZqe_PrHWguAy406DzXXo42LnVufAsd2YJXfmJX5kz0yIs-5UneZSp8i58vKKg6EZtNtbeDZOI4iC40g6y3aC9tUZenxbt0sl6938MDHDQ5-I4v5bOxhkqxO" width="60"/>

                </div>
                {/* </div> */}
            </div>
            <div  className="firstItem col-lg-4 col-sm-12 col-md-12"></div>
            <SocialMedia/>
                </div>

                </div>


</div> 
  )
}

export default Footer;