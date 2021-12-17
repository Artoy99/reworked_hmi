import React from 'react';
import Sidebar from './sidebar/Sidebar';
import OpenBtn from './open-btn/OpenBtn';

import './Gcs.css';

function Gcs() {
  const [isActive, setActive] = React.useState(false);

  const toggleSidebar = () => {
    setActive(!isActive);
  }
  
  return (
    <>
        <div className="gcs-container">
            <Sidebar isActive = {isActive} />
            <div className="open-btn" onClick={toggleSidebar}>
              <OpenBtn open={isActive} />
            </div>
            <div className="">

            </div>
        </div>
    </>
  );
}

export default Gcs;
