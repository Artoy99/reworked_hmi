import React from 'react';
import Sidebar from './sidebar/Sidebar';

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
            <div className="gcs-open-sidebar" onClick={toggleSidebar}>
              button
            </div>
            <div className="">

            </div>
        </div>
    </>
  );
}

export default Gcs;
