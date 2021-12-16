import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../assets/logo_capgemini.png";

import './Home.css';

function Home() {
  return (
    <>
        <div className="home-container">
          <img src={Logo} id="logo" alt="logo" className="home-logo"/>
            <Link to="/gcs" className="home-button">
              GCS
            </Link>
            <Link to="/logs" className="home-button">
              Log Viewer
            </Link>
        </div>
    </>

  );
}

export default Home;
