import React from 'react';
import './joinBtn.css'

const JoinBtn = () => {
    function sayHello() {
        alert('You clicked me!');
      }
    return (
          <button className="join-us-btn" onClick={sayHello}>¡Únete!</button>  
    )
}

export default JoinBtn;