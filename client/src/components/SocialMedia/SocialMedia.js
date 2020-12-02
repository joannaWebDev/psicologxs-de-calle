import React from 'react';

import './SocialMedia.css';
const SocialMedia = () =>{

    return (
        <div>
            <h4>Síguenos o comparte el proyecto</h4>
            <div>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-facebook-square"></i>
                <i className="fab fa-twitter"></i>
                <i className="fas fa-envelope"></i>
                
            </div>
        </div>
            )

    };

export default SocialMedia;

/**
 * there is a #item in the componeent's css that doesn't belong to anything
 * 
 * 
 * line 7 the div, if that is not going to have a class, we can use just an empty tag <> and close it on the line 16 </>. Just React last version, a recommendation, the code works perfectly both ways.
 * 
 * 
 */