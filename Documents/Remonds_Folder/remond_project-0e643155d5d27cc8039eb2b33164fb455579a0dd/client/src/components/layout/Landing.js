import React from 'react';
import { Link } from 'react-router-dom';


const Landing = () => {
  return (
    // copy dan paste class landing dari remonds-theme disini, dan rubah classmenjadi className.
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Remonds App</h1>
          <p className="lead">
            Create Web App with React Express MongoDB and Node <br /> Mediocademy
          </p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">Sign Up</Link>
            <Link to="/login" className="btn btn-light">Login</Link>
          </div>
        </div>
      </div>
    </section>  
  )
};

export default Landing;