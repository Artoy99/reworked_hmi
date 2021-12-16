import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

function Home() {
  return (
    <>
        <div className="home-container">
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
