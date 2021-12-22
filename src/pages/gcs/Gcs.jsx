import React from 'react';
import Sidebar from './sidebar/Sidebar';
import MenuBtn from './open-btn/MenuBtn';
import Map from './map/Map';

import DATA from './data';

import './Gcs.css';

function Gcs() {
  const [isActive, setActive] = React.useState(true);
  const [jetson, setJetson] = React.useState(DATA[0]);
  const [drone, setDrone] = React.useState(DATA);

  const toggleSidebar = () => {
    setActive(!isActive);
  }
  
  return (
    <>
      <div className="gcs-container">
        <Map /> 
        <Sidebar isActive = {isActive} drone={drone} />
        <div className="gcs-open-btn" onClick={toggleSidebar}>
          <MenuBtn open={isActive} />
        </div>
      </div>
    </>
  );
}

export default Gcs;
